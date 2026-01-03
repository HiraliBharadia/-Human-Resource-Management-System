// Mock data storage
let users = [
    {
        id: 1,
        username: 'admin',
        password: 'admin123',
        email: 'admin@hrms.com',
        fullName: 'System Administrator',
        department: 'IT',
        role: 'admin',
        joinDate: '2024-01-01'
    },
    {
        id: 2,
        username: 'emp1',
        password: 'emp123',
        email: 'emp1@hrms.com',
        fullName: 'John Doe',
        department: 'HR',
        role: 'employee',
        joinDate: '2024-02-01'
    }
];

let attendance = [];
let leaveRequests = [];
let currentUser = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('dashboard.html')) {
        currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            window.location.href = 'index.html';
            return;
        }
        initDashboard();
    }
});

// Authentication
function showSignup() {
    new bootstrap.Modal(document.getElementById('signupModal')).show();
}

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const newUser = {
        id: users.length + 1,
        username: document.getElementById('newUsername').value,
        email: document.getElementById('email').value,
        fullName: document.getElementById('fullName').value,
        department: document.getElementById('department').value,
        password: document.getElementById('newPassword').value,
        role: 'employee',
        joinDate: new Date().toISOString().split('T')[0]
    };
    
    if (users.find(u => u.username === newUser.username)) {
        alert('Username already exists');
        return;
    }
    
    users.push(newUser);
    alert('Registration successful! Please login.');
    bootstrap.Modal.getInstance(document.getElementById('signupModal')).hide();
    document.getElementById('signupForm').reset();
});

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Dashboard initialization
function initDashboard() {
    document.getElementById('userName').textContent = currentUser.fullName;
    
    if (currentUser.role === 'admin') {
        document.getElementById('adminMenu').style.display = 'block';
        document.getElementById('adminStats').style.display = 'block';
    }
    
    loadProfile();
    loadDashboardStats();
    loadAttendance();
    loadLeaveHistory();
    
    if (currentUser.role === 'admin') {
        loadPendingApprovals();
        loadEmployees();
    }
}

// Navigation
function showSection(section) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.list-group-item').forEach(item => item.classList.remove('active'));
    
    document.getElementById(section + 'Section').style.display = 'block';
    event.target.classList.add('active');
}

// Profile
function loadProfile() {
    document.getElementById('profileName').textContent = currentUser.fullName;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('profileDept').textContent = currentUser.department;
    document.getElementById('profileRole').textContent = currentUser.role;
    document.getElementById('profileJoinDate').textContent = currentUser.joinDate;
}

// Dashboard stats
function loadDashboardStats() {
    const today = new Date().toISOString().split('T')[0];
    const todayAttendance = attendance.find(a => a.userId === currentUser.id && a.date === today);
    
    if (todayAttendance) {
        if (todayAttendance.checkOut) {
            document.getElementById('todayStatus').textContent = 'Completed';
        } else {
            document.getElementById('todayStatus').textContent = 'Checked In';
        }
    } else {
        document.getElementById('todayStatus').textContent = 'Not Checked In';
    }
    
    const pendingLeaves = leaveRequests.filter(lr => lr.userId === currentUser.id && lr.status === 'pending').length;
    document.getElementById('pendingLeaves').textContent = pendingLeaves;
    
    if (currentUser.role === 'admin') {
        const pendingApprovals = leaveRequests.filter(lr => lr.status === 'pending').length;
        document.getElementById('pendingApprovals').textContent = pendingApprovals;
    }
}

// Attendance
function loadAttendance() {
    const table = document.getElementById('attendanceTable');
    table.innerHTML = '';
    
    const weekDates = getWeekDates();
    weekDates.forEach(date => {
        const record = attendance.find(a => a.userId === currentUser.id && a.date === date);
        const row = table.insertRow();
        row.innerHTML = `
            <td>${formatDate(date)}</td>
            <td>${record?.checkIn || '-'}</td>
            <td>${record?.checkOut || '-'}</td>
            <td class="status-${record ? 'present' : 'absent'}">${record ? 'Present' : 'Absent'}</td>
        `;
    });
}

function checkIn() {
    const today = new Date().toISOString().split('T')[0];
    const now = new Date().toTimeString().split(' ')[0].substring(0, 5);
    
    let record = attendance.find(a => a.userId === currentUser.id && a.date === today);
    if (!record) {
        attendance.push({
            userId: currentUser.id,
            date: today,
            checkIn: now,
            checkOut: null
        });
        alert('Checked in successfully');
    } else {
        alert('Already checked in today');
    }
    
    loadAttendance();
    loadDashboardStats();
}

function checkOut() {
    const today = new Date().toISOString().split('T')[0];
    const now = new Date().toTimeString().split(' ')[0].substring(0, 5);
    
    let record = attendance.find(a => a.userId === currentUser.id && a.date === today);
    if (record && !record.checkOut) {
        record.checkOut = now;
        alert('Checked out successfully');
    } else {
        alert('No check-in found or already checked out');
    }
    
    loadAttendance();
    loadDashboardStats();
}

// Leave Management
function showLeaveForm() {
    const form = document.getElementById('leaveForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('leaveApplicationForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const leaveRequest = {
        id: leaveRequests.length + 1,
        userId: currentUser.id,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value,
        type: document.getElementById('leaveType').value,
        reason: document.getElementById('leaveReason').value,
        status: 'pending',
        appliedDate: new Date().toISOString().split('T')[0]
    };
    
    leaveRequests.push(leaveRequest);
    alert('Leave application submitted successfully');
    
    this.reset();
    document.getElementById('leaveForm').style.display = 'none';
    loadLeaveHistory();
    loadDashboardStats();
});

function loadLeaveHistory() {
    const table = document.getElementById('leaveHistory');
    table.innerHTML = '';
    
    const userLeaves = leaveRequests.filter(lr => lr.userId === currentUser.id);
    userLeaves.forEach(leave => {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${formatDate(leave.startDate)}</td>
            <td>${formatDate(leave.endDate)}</td>
            <td>${leave.type}</td>
            <td class="status-${leave.status}">${leave.status}</td>
            <td>${leave.reason}</td>
        `;
    });
}

// Admin Functions
function loadPendingApprovals() {
    const table = document.getElementById('approvalsTable');
    table.innerHTML = '';
    
    const pendingLeaves = leaveRequests.filter(lr => lr.status === 'pending');
    pendingLeaves.forEach(leave => {
        const employee = users.find(u => u.id === leave.userId);
        const row = table.insertRow();
        row.innerHTML = `
            <td>${employee.fullName}</td>
            <td>${formatDate(leave.startDate)}</td>
            <td>${formatDate(leave.endDate)}</td>
            <td>${leave.type}</td>
            <td>${leave.reason}</td>
            <td>
                <button class="btn btn-success btn-sm" onclick="approveLeave(${leave.id}, 'approved')">Approve</button>
                <button class="btn btn-danger btn-sm" onclick="approveLeave(${leave.id}, 'rejected')">Reject</button>
            </td>
        `;
    });
}

function approveLeave(leaveId, status) {
    const leave = leaveRequests.find(lr => lr.id === leaveId);
    if (leave) {
        leave.status = status;
        alert(`Leave ${status} successfully`);
        loadPendingApprovals();
        loadDashboardStats();
    }
}

function loadEmployees() {
    const table = document.getElementById('employeesTable');
    table.innerHTML = '';
    
    const employees = users.filter(u => u.role === 'employee');
    employees.forEach(emp => {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${emp.fullName}</td>
            <td>${emp.email}</td>
            <td>${emp.department}</td>
            <td>${emp.role}</td>
            <td>${formatDate(emp.joinDate)}</td>
        `;
    });
}

// Utility functions
function getWeekDates() {
    const today = new Date();
    const currentDay = today.getDay();
    const monday = new Date(today);
    monday.setDate(today.getDate() - currentDay + 1);
    
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(monday);
        date.setDate(monday.getDate() + i);
        dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}