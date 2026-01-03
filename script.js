// Enhanced Mock data storage with professional features
let users = [
    {
        id: 1,
        employeeId: 'EMP001',
        username: 'admin',
        password: 'admin123',
        email: 'admin@hrms.com',
        fullName: 'System Administrator',
        department: 'IT',
        role: 'admin',
        joinDate: '2024-01-01',
        emailVerified: true,
        profilePicture: 'https://via.placeholder.com/150/0d6efd/ffffff?text=AD',
        phone: '+91 9876543210',
        address: '123 Admin Street, Mumbai, Maharashtra 400001',
        dob: '1985-05-15',
        position: 'System Administrator',
        manager: 'CEO',
        employmentType: 'Full-time',
        salary: { basic: 80000, allowances: 25000, deductions: 12000 }
    },
    {
        id: 2,
        employeeId: 'EMP002',
        username: 'emp1',
        password: 'emp123',
        email: 'emp1@hrms.com',
        fullName: 'John Doe',
        department: 'HR',
        role: 'employee',
        joinDate: '2024-02-01',
        emailVerified: true,
        profilePicture: 'https://via.placeholder.com/150/198754/ffffff?text=JD',
        phone: '+91 9876543211',
        address: '456 Employee Lane, Delhi, Delhi 110001',
        dob: '1992-08-20',
        position: 'HR Executive',
        manager: 'HR Manager',
        employmentType: 'Full-time',
        salary: { basic: 50000, allowances: 15000, deductions: 8000 }
    },
    {
        id: 3,
        employeeId: 'EMP003',
        username: 'emp2',
        password: 'emp123',
        email: 'emp2@hrms.com',
        fullName: 'Jane Smith',
        department: 'IT',
        role: 'employee',
        joinDate: '2024-03-01',
        emailVerified: true,
        profilePicture: 'https://via.placeholder.com/150/dc3545/ffffff?text=JS',
        phone: '+91 9876543212',
        address: '789 Tech Park, Bangalore, Karnataka 560001',
        dob: '1990-12-10',
        position: 'Software Developer',
        manager: 'Tech Lead',
        employmentType: 'Full-time',
        salary: { basic: 60000, allowances: 18000, deductions: 10000 }
    },
    {
        id: 4,
        employeeId: 'EMP004',
        username: 'emp3',
        password: 'emp123',
        email: 'emp3@hrms.com',
        fullName: 'Mike Johnson',
        department: 'Finance',
        role: 'employee',
        joinDate: '2024-01-15',
        emailVerified: true,
        profilePicture: 'https://via.placeholder.com/150/ffc107/000000?text=MJ',
        phone: '+91 9876543213',
        address: '321 Finance Street, Chennai, Tamil Nadu 600001',
        dob: '1988-07-25',
        position: 'Financial Analyst',
        manager: 'Finance Manager',
        employmentType: 'Full-time',
        salary: { basic: 55000, allowances: 16000, deductions: 9000 }
    },
    {
        id: 5,
        employeeId: 'EMP005',
        username: 'sarah.wilson',
        password: 'emp123',
        email: 'sarah.wilson@hrms.com',
        fullName: 'Sarah Wilson',
        department: 'Marketing',
        role: 'employee',
        joinDate: '2024-02-15',
        emailVerified: true,
        profilePicture: 'https://via.placeholder.com/150/e91e63/ffffff?text=SW',
        phone: '+91 9876543214',
        address: '567 Marketing Plaza, Pune, Maharashtra 411001',
        dob: '1993-03-12',
        position: 'Marketing Executive',
        manager: 'Marketing Manager',
        employmentType: 'Full-time',
        salary: { basic: 48000, allowances: 14000, deductions: 7500 }
    },
    {
        id: 6,
        employeeId: 'EMP006',
        username: 'david.brown',
        password: 'emp123',
        email: 'david.brown@hrms.com',
        fullName: 'David Brown',
        department: 'IT',
        role: 'employee',
        joinDate: '2024-01-20',
        emailVerified: true,
        profilePicture: 'https://via.placeholder.com/150/9c27b0/ffffff?text=DB',
        phone: '+91 9876543215',
        address: '890 Tech Valley, Hyderabad, Telangana 500001',
        dob: '1991-11-08',
        position: 'Senior Developer',
        manager: 'Tech Lead',
        employmentType: 'Full-time',
        salary: { basic: 70000, allowances: 20000, deductions: 11000 }
    },
    {
        id: 7,
        employeeId: 'EMP007',
        username: 'lisa.garcia',
        password: 'emp123',
        email: 'lisa.garcia@hrms.com',
        fullName: 'Lisa Garcia',
        department: 'HR',
        role: 'employee',
        joinDate: '2024-03-10',
        emailVerified: true,
        profilePicture: 'https://via.placeholder.com/150/ff5722/ffffff?text=LG',
        phone: '+91 9876543216',
        address: '234 HR Complex, Kolkata, West Bengal 700001',
        dob: '1989-06-22',
        position: 'HR Specialist',
        manager: 'HR Manager',
        employmentType: 'Full-time',
        salary: { basic: 52000, allowances: 15000, deductions: 8500 }
    },
    {
        id: 8,
        employeeId: 'EMP008',
        username: 'robert.davis',
        password: 'emp123',
        email: 'robert.davis@hrms.com',
        fullName: 'Robert Davis',
        department: 'Finance',
        role: 'employee',
        joinDate: '2024-02-28',
        emailVerified: true,
        profilePicture: 'https://via.placeholder.com/150/607d8b/ffffff?text=RD',
        phone: '+91 9876543217',
        address: '678 Finance Tower, Ahmedabad, Gujarat 380001',
        dob: '1987-09-14',
        position: 'Senior Accountant',
        manager: 'Finance Manager',
        employmentType: 'Full-time',
        salary: { basic: 58000, allowances: 17000, deductions: 9500 }
    },
    {
        id: 9,
        employeeId: 'EMP009',
        username: 'emily.taylor',
        password: 'emp123',
        email: 'emily.taylor@hrms.com',
        fullName: 'Emily Taylor',
        department: 'Marketing',
        role: 'employee',
        joinDate: '2024-01-08',
        emailVerified: true,
        profilePicture: 'https://via.placeholder.com/150/4caf50/ffffff?text=ET',
        phone: '+91 9876543218',
        address: '345 Creative Hub, Jaipur, Rajasthan 302001',
        dob: '1994-04-18',
        position: 'Digital Marketing Specialist',
        manager: 'Marketing Manager',
        employmentType: 'Full-time',
        salary: { basic: 46000, allowances: 13000, deductions: 7000 }
    },
    {
        id: 10,
        employeeId: 'EMP010',
        username: 'alex.martinez',
        password: 'emp123',
        email: 'alex.martinez@hrms.com',
        fullName: 'Alex Martinez',
        department: 'IT',
        role: 'employee',
        joinDate: '2024-03-05',
        emailVerified: true,
        profilePicture: 'https://via.placeholder.com/150/ff9800/ffffff?text=AM',
        phone: '+91 9876543219',
        address: '456 Innovation Center, Noida, Uttar Pradesh 201301',
        dob: '1992-01-30',
        position: 'DevOps Engineer',
        manager: 'Tech Lead',
        employmentType: 'Full-time',
        salary: { basic: 65000, allowances: 19000, deductions: 10500 }
    }
];

let attendance = [
    // Current week attendance data
    { userId: 2, employeeName: 'John Doe', date: '2024-12-16', checkIn: '09:00', checkOut: '18:00', status: 'present', hoursWorked: 9, totalBreakTime: 3600000, notes: '' },
    { userId: 3, employeeName: 'Jane Smith', date: '2024-12-16', checkIn: '08:45', checkOut: '17:30', status: 'present', hoursWorked: 8.75, totalBreakTime: 2700000, notes: '' },
    { userId: 4, employeeName: 'Mike Johnson', date: '2024-12-16', checkIn: '09:15', checkOut: '17:45', status: 'late', hoursWorked: 8.5, totalBreakTime: 3000000, notes: 'Late arrival' },
    { userId: 5, employeeName: 'Sarah Wilson', date: '2024-12-16', checkIn: '09:00', checkOut: '18:15', status: 'present', hoursWorked: 9.25, totalBreakTime: 3300000, notes: '' },
    { userId: 6, employeeName: 'David Brown', date: '2024-12-16', checkIn: '08:30', checkOut: '17:00', status: 'present', hoursWorked: 8.5, totalBreakTime: 1800000, notes: '' },
    { userId: 7, employeeName: 'Lisa Garcia', date: '2024-12-16', checkIn: '09:30', checkOut: '13:30', status: 'half-day', hoursWorked: 4, totalBreakTime: 0, notes: 'Half day approved' },
    { userId: 8, employeeName: 'Robert Davis', date: '2024-12-16', checkIn: '09:00', checkOut: '18:00', status: 'present', hoursWorked: 9, totalBreakTime: 3600000, notes: '' },
    { userId: 9, employeeName: 'Emily Taylor', date: '2024-12-16', checkIn: '08:45', checkOut: '17:15', status: 'present', hoursWorked: 8.5, totalBreakTime: 1800000, notes: '' },
    { userId: 10, employeeName: 'Alex Martinez', date: '2024-12-16', checkIn: '09:45', checkOut: '18:30', status: 'late', hoursWorked: 8.75, totalBreakTime: 2700000, notes: 'Late arrival' },
    
    // Previous day data
    { userId: 2, employeeName: 'John Doe', date: '2024-12-15', checkIn: '09:15', checkOut: '17:45', status: 'late', hoursWorked: 8.5, totalBreakTime: 1800000, notes: 'Late arrival' },
    { userId: 3, employeeName: 'Jane Smith', date: '2024-12-15', checkIn: '09:00', checkOut: '18:00', status: 'present', hoursWorked: 9, totalBreakTime: 3600000, notes: '' },
    { userId: 4, employeeName: 'Mike Johnson', date: '2024-12-15', checkIn: '09:00', checkOut: '17:30', status: 'present', hoursWorked: 8.5, totalBreakTime: 1800000, notes: '' },
    { userId: 5, employeeName: 'Sarah Wilson', date: '2024-12-15', checkIn: '08:45', checkOut: '17:45', status: 'present', hoursWorked: 9, totalBreakTime: 3600000, notes: '' },
    { userId: 6, employeeName: 'David Brown', date: '2024-12-15', checkIn: '09:00', checkOut: '18:15', status: 'present', hoursWorked: 9.25, totalBreakTime: 2700000, notes: '' },
    { userId: 8, employeeName: 'Robert Davis', date: '2024-12-15', checkIn: '09:30', checkOut: '17:30', status: 'late', hoursWorked: 8, totalBreakTime: 1800000, notes: 'Late arrival' },
    { userId: 9, employeeName: 'Emily Taylor', date: '2024-12-15', checkIn: '09:00', checkOut: '18:00', status: 'present', hoursWorked: 9, totalBreakTime: 3600000, notes: '' },
    { userId: 10, employeeName: 'Alex Martinez', date: '2024-12-15', checkIn: '08:30', checkOut: '17:00', status: 'present', hoursWorked: 8.5, totalBreakTime: 1800000, notes: '' }
];
let leaveRequests = [
    {
        id: 1,
        userId: 2,
        employeeName: 'John Doe',
        employeeId: 'EMP002',
        department: 'HR',
        startDate: '2024-12-20',
        endDate: '2024-12-22',
        type: 'annual',
        reason: 'Family vacation during Christmas holidays',
        status: 'pending',
        appliedDate: '2024-12-15',
        leaveDays: 3,
        approvedBy: null,
        approvedDate: null,
        comments: ''
    },
    {
        id: 2,
        userId: 3,
        employeeName: 'Jane Smith',
        employeeId: 'EMP003',
        department: 'IT',
        startDate: '2024-12-25',
        endDate: '2024-12-26',
        type: 'sick',
        reason: 'Medical checkup and treatment',
        status: 'pending',
        appliedDate: '2024-12-16',
        leaveDays: 2,
        approvedBy: null,
        approvedDate: null,
        comments: ''
    },
    {
        id: 3,
        userId: 5,
        employeeName: 'Sarah Wilson',
        employeeId: 'EMP005',
        department: 'Marketing',
        startDate: '2024-12-30',
        endDate: '2025-01-02',
        type: 'annual',
        reason: 'New Year celebration with family',
        status: 'pending',
        appliedDate: '2024-12-10',
        leaveDays: 4,
        approvedBy: null,
        approvedDate: null,
        comments: ''
    },
    {
        id: 4,
        userId: 6,
        employeeName: 'David Brown',
        employeeId: 'EMP006',
        department: 'IT',
        startDate: '2024-12-23',
        endDate: '2024-12-24',
        type: 'casual',
        reason: 'Personal work and shopping',
        status: 'pending',
        appliedDate: '2024-12-14',
        leaveDays: 2,
        approvedBy: null,
        approvedDate: null,
        comments: ''
    },
    {
        id: 5,
        userId: 8,
        employeeName: 'Robert Davis',
        employeeId: 'EMP008',
        department: 'Finance',
        startDate: '2024-12-27',
        endDate: '2024-12-27',
        type: 'sick',
        reason: 'Fever and cold symptoms',
        status: 'pending',
        appliedDate: '2024-12-18',
        leaveDays: 1,
        approvedBy: null,
        approvedDate: null,
        comments: ''
    },
    {
        id: 6,
        userId: 7,
        employeeName: 'Lisa Garcia',
        employeeId: 'EMP007',
        department: 'HR',
        startDate: '2024-12-28',
        endDate: '2024-12-29',
        type: 'casual',
        reason: 'Wedding function attendance',
        status: 'pending',
        appliedDate: '2024-12-17',
        leaveDays: 2,
        approvedBy: null,
        approvedDate: null,
        comments: ''
    },
    {
        id: 7,
        userId: 9,
        employeeName: 'Emily Taylor',
        employeeId: 'EMP009',
        department: 'Marketing',
        startDate: '2024-12-31',
        endDate: '2024-12-31',
        type: 'annual',
        reason: 'New Year Eve celebration',
        status: 'pending',
        appliedDate: '2024-12-19',
        leaveDays: 1,
        approvedBy: null,
        approvedDate: null,
        comments: ''
    },
    {
        id: 8,
        userId: 10,
        employeeName: 'Alex Martinez',
        employeeId: 'EMP010',
        department: 'IT',
        startDate: '2025-01-03',
        endDate: '2025-01-04',
        type: 'sick',
        reason: 'Doctor appointment and medical tests',
        status: 'pending',
        appliedDate: '2024-12-20',
        leaveDays: 2,
        approvedBy: null,
        approvedDate: null,
        comments: ''
    },
    {
        id: 9,
        userId: 4,
        employeeName: 'Mike Johnson',
        employeeId: 'EMP004',
        department: 'Finance',
        startDate: '2025-01-06',
        endDate: '2025-01-07',
        type: 'casual',
        reason: 'House shifting and relocation work',
        status: 'pending',
        appliedDate: '2024-12-21',
        leaveDays: 2,
        approvedBy: null,
        approvedDate: null,
        comments: ''
    }
];
let payrollData = [];
let pendingVerifications = [];
let attendanceNotes = [];
let currentUser = null;

// Add event listeners for date calculation
document.addEventListener('DOMContentLoaded', function() {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    
    if (startDateInput) {
        startDateInput.addEventListener('change', function() {
            document.getElementById('endDate').min = this.value;
            calculateLeaveDays();
        });
    }
    
    if (endDateInput) {
        endDateInput.addEventListener('change', calculateLeaveDays);
    }
    
    // Initialize dashboard if on dashboard page
    if (window.location.pathname.includes('dashboard.html') || window.location.pathname === '/') {
        if (!currentUser) {
            currentUser = {
                id: 2,
                employeeId: 'EMP002', 
                username: 'emp1',
                fullName: 'John Doe',
                department: 'HR',
                role: 'employee'
            };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
        initDashboard();
    }
    
    // Add missing userName element if not found
    if (!document.getElementById('userName')) {
        const userNameSpan = document.createElement('span');
        userNameSpan.id = 'userName';
        document.body.appendChild(userNameSpan);
    }
});

// Auto-fill credentials function for demo cards
function fillCredentials(username, password) {
    document.getElementById('username').value = username;
    document.getElementById('password').value = password;
    
    // Add visual feedback
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    
    // Add highlight effect
    usernameField.style.borderColor = '#0ea5e9';
    passwordField.style.borderColor = '#0ea5e9';
    
    // Remove highlight after 2 seconds
    setTimeout(() => {
        usernameField.style.borderColor = '';
        passwordField.style.borderColor = '';
    }, 2000);
    
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'alert alert-success mt-2';
    successMsg.style.fontSize = '0.85rem';
    successMsg.innerHTML = '<i class="bi bi-check-circle me-1"></i>Credentials filled! Click Sign In to continue.';
    
    const form = document.getElementById('loginForm');
    const existingMsg = form.querySelector('.alert-success');
    if (existingMsg) existingMsg.remove();
    
    form.appendChild(successMsg);
    
    // Remove success message after 3 seconds
    setTimeout(() => {
        if (successMsg.parentNode) {
            successMsg.remove();
        }
    }, 3000);
}

// Authentication
function showSignup() {
    new bootstrap.Modal(document.getElementById('signupModal')).show();
}

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('loginError');
    
    // Hide previous error
    errorDiv.style.display = 'none';
    
    // Find user by email, username, or employee ID
    const user = users.find(u => 
        (u.username === username || u.employeeId === username || u.email === username) && 
        u.password === password
    );
    
    if (user) {
        if (!user.emailVerified) {
            showError('Please verify your email before logging in.');
            return;
        }
        // Successful login - redirect to dashboard
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
    } else {
        // Check if user exists but wrong password
        const userExists = users.find(u => 
            u.username === username || u.employeeId === username || u.email === username
        );
        
        if (userExists) {
            showError('Incorrect password. Please try again.');
        } else {
            showError('User not found. Please check your credentials or sign up.');
        }
    }
});

function showError(message) {
    const errorDiv = document.getElementById('loginError');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const employeeId = document.getElementById('employeeId').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const role = document.getElementById('userRole').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    // Check terms agreement
    if (!agreeTerms) {
        alert('Please agree to the Terms of Service and Privacy Policy.');
        return;
    }
    
    // Validate password
    if (!validatePassword(password)) {
        alert('Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.');
        return;
    }
    
    // Check password confirmation
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    
    // Check if employee ID or email already exists
    if (users.find(u => u.employeeId === employeeId)) {
        alert('Employee ID already exists.');
        return;
    }
    
    if (users.find(u => u.email === email)) {
        alert('Email already registered.');
        return;
    }
    
    const newUser = {
        id: users.length + 1,
        employeeId: employeeId,
        username: employeeId,
        email: email,
        fullName: document.getElementById('fullName').value,
        department: document.getElementById('department').value,
        password: password,
        role: role === 'hr' ? 'admin' : 'employee',
        joinDate: new Date().toISOString().split('T')[0],
        emailVerified: false,
        phone: '',
        address: '',
        dob: '',
        position: role === 'hr' ? 'HR Officer' : 'Employee',
        manager: 'To be assigned',
        employmentType: 'Full-time',
        salary: {
            basic: role === 'hr' ? 60000 : 40000,
            allowances: role === 'hr' ? 12000 : 8000,
            deductions: role === 'hr' ? 3000 : 2000
        }
    };
    
    // Generate verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    pendingVerifications.push({
        email: email,
        code: verificationCode,
        userData: newUser,
        timestamp: Date.now()
    });
    
    // Store pending user data
    localStorage.setItem('pendingVerification', JSON.stringify({ email, code: verificationCode }));
    
    alert(`Account created successfully! Verification code sent to ${email}: ${verificationCode}`);
    bootstrap.Modal.getInstance(document.getElementById('signupModal')).hide();
    window.location.href = 'verify-email.html';
});

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Dashboard initialization
function initDashboard() {
    // Auto-login as employee for direct access
    if (!currentUser) {
        currentUser = {
            id: 2,
            employeeId: 'EMP002',
            username: 'emp1',
            fullName: 'John Doe',
            department: 'HR',
            role: 'employee'
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    // Check if userName element exists, if not create it
    if (document.getElementById('userName')) {
        document.getElementById('userName').textContent = currentUser.fullName;
    }
    document.getElementById('welcomeUserName').textContent = currentUser.fullName;
    
    // Populate enhanced navigation
    document.getElementById('navUserName').textContent = currentUser.fullName;
    document.getElementById('navUserRole').textContent = currentUser.role === 'admin' ? 'Administrator' : 'Employee';
    
    // Role-based visibility control
    if (currentUser.role === 'admin') {
        // Show admin elements
        document.getElementById('adminMenu').style.display = 'block';
        const adminStats = document.getElementById('adminStats');
        if (adminStats) adminStats.style.display = 'block';
        document.getElementById('adminDashboard').style.display = 'block';
        document.getElementById('employeeDashboard').style.display = 'none';
        
        // Update admin welcome name
        const adminWelcomeName = document.getElementById('adminWelcomeName');
        if (adminWelcomeName) adminWelcomeName.textContent = currentUser.fullName;
    } else {
        // Hide admin elements and show only Employee Directory for employees
        document.getElementById('adminMenu').style.display = 'none';
        const adminStats = document.getElementById('adminStats');
        if (adminStats) adminStats.style.display = 'none';
        document.getElementById('adminDashboard').style.display = 'none';
        document.getElementById('employeeDashboard').style.display = 'none';
        
        // Hide ALL sections for employees
        const allSections = ['approvalsSection', 'employeesSection', 'payrollSection', 'adminAttendanceSection', 'dashboardSection', 'profileSection', 'attendanceSection', 'leaveSection', 'salarySection'];
        allSections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) section.style.display = 'none';
        });
        
        // Show ONLY Employee Directory for employees
        document.getElementById('directorySection').style.display = 'block';
        document.querySelectorAll('.list-group-item').forEach(item => item.classList.remove('active'));
        const directoryMenuItem = document.querySelector('[onclick="showSection(\'directory\')"]');
        if (directoryMenuItem) directoryMenuItem.classList.add('active');
    }
    
    loadProfile();
    loadDashboardStats();
    loadAttendance();
    loadLeaveHistory();
    loadSalaryDetails();
    initLeaveSection();
    loadEmployeeDirectory(); // Load employee directory for all users
    updateCurrentTime();
    updateDashboardTime();
    updateNavTime();
    setInterval(updateCurrentTime, 1000);
    setInterval(updateDashboardTime, 1000);
    setInterval(updateNavTime, 1000);
    
    if (currentUser.role === 'admin') {
        loadPendingApprovals();
        loadEmployees();
        loadPayrollData();
        populateEmployeeSelectors();
    }
    
    // Update quick access card info
    updateQuickAccessInfo();
}

// Update navigation time
function updateNavTime() {
    const now = new Date();
    const timeElement = document.getElementById('navTime');
    const dateElement = document.getElementById('navDate');
    
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString('en-IN', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    }
}

// Enhanced Mobile Navigation Functions
function toggleMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (window.innerWidth <= 576) {
        sidebar.classList.toggle('show');
        overlay.classList.toggle('show');
    }
}

function closeMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
}

// Enhanced Navigation with Mobile Support and Role-based Access Control
function showSection(section) {
    // Check role-based access for admin sections
    const adminSections = ['approvals', 'employees', 'payroll', 'adminAttendance'];
    if (adminSections.includes(section) && currentUser.role !== 'admin') {
        alert('Access denied. This section is only available for Admin/HR users.');
        return;
    }
    
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.list-group-item').forEach(item => item.classList.remove('active'));
    
    document.getElementById(section + 'Section').style.display = 'block';
    event.target.classList.add('active');
    
    // Load employee directory when directory section is shown
    if (section === 'directory') {
        loadEmployeeDirectory();
    }
    
    // Close mobile sidebar when section is selected
    if (window.innerWidth <= 576) {
        closeMobileSidebar();
    }
}

// Profile
function loadProfile() {
    document.getElementById('profileName').textContent = currentUser.fullName;
    document.getElementById('profileDisplayName').textContent = currentUser.fullName;
    document.getElementById('profileEmployeeId').textContent = currentUser.employeeId;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('profileDept').textContent = currentUser.department;
    document.getElementById('profileRole').textContent = currentUser.role === 'admin' ? 'Admin / HR Officer' : 'Employee';
    document.getElementById('profileDisplayRole').textContent = currentUser.position || (currentUser.role === 'admin' ? 'Admin / HR Officer' : 'Employee');
    document.getElementById('profileJoinDate').textContent = currentUser.joinDate;
    document.getElementById('profileSalary').textContent = `₹${(currentUser.salary.basic + currentUser.salary.allowances - currentUser.salary.deductions).toLocaleString('en-IN')}`;
    
    // Load profile picture
    if (currentUser.profilePicture) {
        document.getElementById('profilePicture').src = currentUser.profilePicture;
    }
    
    // Load additional profile data
    if (currentUser.phone) document.getElementById('profilePhone').textContent = currentUser.phone;
    if (currentUser.address) document.getElementById('profileAddress').textContent = currentUser.address;
    if (currentUser.dob) document.getElementById('profileDOB').textContent = formatDate(currentUser.dob);
    if (currentUser.position) document.getElementById('profilePosition').textContent = currentUser.position;
    if (currentUser.manager) document.getElementById('profileManager').textContent = currentUser.manager;
    if (currentUser.employmentType) document.getElementById('profileEmploymentType').textContent = currentUser.employmentType;
    
    // Load salary breakdown
    document.getElementById('salaryBasic').textContent = `₹${currentUser.salary.basic.toLocaleString('en-IN')}`;
    document.getElementById('salaryNet').textContent = `₹${(currentUser.salary.basic + currentUser.salary.allowances - currentUser.salary.deductions).toLocaleString('en-IN')}`;
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
    
    const netSalary = currentUser.salary.basic + currentUser.salary.allowances - currentUser.salary.deductions;
    document.getElementById('monthlySalary').textContent = `₹${netSalary.toLocaleString('en-IN')}`;
    
    if (currentUser.role === 'admin') {
        const pendingApprovals = leaveRequests.filter(lr => lr.status === 'pending').length;
        document.getElementById('pendingApprovals').textContent = pendingApprovals;
    }
}

// Enhanced Attendance Management with Break Time and Auto Status
let attendanceTimer = null;
let breakTimer = null;
let currentBreakStart = null;
let totalBreakTime = 0;

function loadAttendance() {
    updateTodayAttendanceStatus();
    loadWeeklyAttendance();
    updateAttendanceSummary();
    startWorkingTimeTimer();
    
    // Load attendance based on user role
    if (currentUser.role === 'admin') {
        loadAllEmployeesAttendance();
    }
}

function startWorkingTimeTimer() {
    const today = new Date().toISOString().split('T')[0];
    const todayRecord = attendance.find(a => a.userId === currentUser.id && a.date === today);
    
    if (todayRecord && todayRecord.checkIn && !todayRecord.checkOut) {
        attendanceTimer = setInterval(updateWorkingTime, 1000);
    }
}

function updateWorkingTime() {
    const today = new Date().toISOString().split('T')[0];
    const todayRecord = attendance.find(a => a.userId === currentUser.id && a.date === today);
    
    if (todayRecord && todayRecord.checkIn) {
        const now = new Date();
        const checkInTime = new Date(`${today} ${todayRecord.checkIn}`);
        const workingMs = now - checkInTime - (todayRecord.totalBreakTime || 0);
        const workingHours = Math.floor(workingMs / (1000 * 60 * 60));
        const workingMinutes = Math.floor((workingMs % (1000 * 60 * 60)) / (1000 * 60));
        const workingSeconds = Math.floor((workingMs % (1000 * 60)) / 1000);
        
        const workingHoursElement = document.getElementById('workingHours');
        if (workingHoursElement) {
            workingHoursElement.textContent = 
                `${String(workingHours).padStart(2, '0')}:${String(workingMinutes).padStart(2, '0')}:${String(workingSeconds).padStart(2, '0')}`;
        }
    }
}

function startBreak() {
    const today = new Date().toISOString().split('T')[0];
    const now = new Date();
    
    let record = attendance.find(a => a.userId === currentUser.id && a.date === today);
    if (record && record.checkIn && !record.checkOut) {
        record.onBreak = true;
        record.breakStart = now.getTime();
        
        alert('Break started. Don\'t forget to end your break when you return!');
        updateTodayAttendanceStatus();
    }
}

function endBreak() {
    const today = new Date().toISOString().split('T')[0];
    const now = new Date();
    
    let record = attendance.find(a => a.userId === currentUser.id && a.date === today);
    if (record && record.onBreak) {
        const breakDuration = now.getTime() - record.breakStart;
        record.totalBreakTime = (record.totalBreakTime || 0) + breakDuration;
        record.onBreak = false;
        delete record.breakStart;
        
        const breakMinutes = Math.floor(breakDuration / (1000 * 60));
        alert(`Break ended. Break duration: ${breakMinutes} minutes`);
        updateTodayAttendanceStatus();
    }
}

// Admin function to view all employees' attendance
function loadAllEmployeesAttendance() {
    const today = new Date().toISOString().split('T')[0];
    const todayAttendance = attendance.filter(a => a.date === today);
    
    // Update admin dashboard stats with actual numbers
    const totalEmployees = users.filter(u => u.role === 'employee').length;
    const presentToday = todayAttendance.filter(a => a.checkIn).length;
    
    document.getElementById('totalEmployees').textContent = `${totalEmployees} employees`;
    
    // Update pending approvals count with actual data
    const pendingApprovals = leaveRequests.filter(lr => lr.status === 'pending').length;
    document.getElementById('pendingApprovalsCount').textContent = `${pendingApprovals} pending`;
    
    // Update admin stats
    if (currentUser.role === 'admin') {
        document.getElementById('pendingApprovals').textContent = pendingApprovals;
    }
}

function updateCurrentTime() {
    const now = new Date();
    const timeElement = document.getElementById('currentTime');
    const dateElement = document.getElementById('currentDate');
    
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString('en-IN');
    }
    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString('en-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

function updateDashboardTime() {
    const now = new Date();
    const timeElement = document.getElementById('dashboardTime');
    const dateElement = document.getElementById('dashboardDate');
    
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString('en-IN', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    }
}

function updateQuickAccessInfo() {
    // Update attendance status
    const today = new Date().toISOString().split('T')[0];
    const todayAttendance = attendance.find(a => a.userId === currentUser.id && a.date === today);
    const attendanceStatusElement = document.getElementById('attendanceStatus');
    
    if (attendanceStatusElement) {
        if (todayAttendance) {
            if (todayAttendance.checkOut) {
                attendanceStatusElement.textContent = 'Checked out';
                attendanceStatusElement.className = 'text-success';
            } else if (todayAttendance.checkIn) {
                attendanceStatusElement.textContent = 'Checked in';
                attendanceStatusElement.className = 'text-primary';
            } else if (todayAttendance.status === 'half-day') {
                attendanceStatusElement.textContent = 'Half day';
                attendanceStatusElement.className = 'text-warning';
            }
        } else {
            attendanceStatusElement.textContent = 'Not checked in';
            attendanceStatusElement.className = 'text-muted';
        }
    }
    
    // Update leave status
    const pendingLeaves = leaveRequests.filter(lr => lr.userId === currentUser.id && lr.status === 'pending').length;
    const leaveStatusElement = document.getElementById('leaveStatus');
    if (leaveStatusElement) {
        leaveStatusElement.textContent = `${pendingLeaves} pending`;
        leaveStatusElement.className = pendingLeaves > 0 ? 'text-warning' : 'text-muted';
    }
    
    // Update salary info
    const salaryInfoElement = document.getElementById('salaryInfo');
    if (salaryInfoElement) {
        const currentMonth = new Date().toLocaleDateString('en-IN', { month: 'long' });
        salaryInfoElement.textContent = currentMonth;
        salaryInfoElement.className = 'text-muted';
    }
}

function updateTodayAttendanceStatus() {
    const today = new Date().toISOString().split('T')[0];
    const todayRecord = attendance.find(a => a.userId === currentUser.id && a.date === today);
    
    const checkInBtn = document.getElementById('checkInBtn');
    const checkOutBtn = document.getElementById('checkOutBtn');
    const halfDayBtn = document.getElementById('halfDayBtn');
    const statusText = document.getElementById('attendanceStatusText');
    
    if (todayRecord) {
        if (todayRecord.status === 'half-day') {
            statusText.textContent = 'Half Day Marked';
            checkInBtn.disabled = true;
            checkOutBtn.disabled = true;
            halfDayBtn.disabled = true;
        } else if (todayRecord.checkOut) {
            statusText.textContent = 'Checked Out';
            checkInBtn.disabled = true;
            checkOutBtn.disabled = true;
            halfDayBtn.disabled = true;
        } else if (todayRecord.checkIn) {
            statusText.textContent = 'Checked In';
            checkInBtn.disabled = true;
            checkOutBtn.disabled = false;
            halfDayBtn.disabled = false;
        }
    } else {
        statusText.textContent = 'Not Checked In';
        checkInBtn.disabled = false;
        checkOutBtn.disabled = true;
        halfDayBtn.disabled = false;
    }
}

function loadWeeklyAttendance() {
    const table = document.getElementById('weeklyAttendanceTable');
    table.innerHTML = '';
    
    const weekDates = getWeekDates();
    weekDates.forEach(date => {
        const record = attendance.find(a => a.userId === currentUser.id && a.date === date);
        const dateObj = new Date(date);
        const dayName = dateObj.toLocaleDateString('en-IN', { weekday: 'short' });
        
        let status = 'Absent';
        let statusClass = 'status-absent';
        let hours = '-';
        
        if (record) {
            status = record.status || 'Present';
            if (record.checkIn && record.checkOut) {
                hours = calculateHours(record.checkIn, record.checkOut);
                statusClass = 'status-present';
            } else if (record.status === 'half-day') {
                status = 'Half Day';
                statusClass = 'status-halfday';
                hours = '4h 0m';
            } else if (record.status === 'leave') {
                status = 'Leave';
                statusClass = 'status-leave';
            } else if (record.checkIn) {
                statusClass = 'status-partial';
            }
        }
        
        const row = table.insertRow();
        row.innerHTML = `
            <td>${formatDate(date)}</td>
            <td>${dayName}</td>
            <td>${record?.checkIn || '-'}</td>
            <td>${record?.checkOut || '-'}</td>
            <td>${hours}</td>
            <td class="${statusClass}">${status}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="viewDayDetails('${date}')">View</button>
            </td>
        `;
    });
}

function updateAttendanceSummary() {
    const userAttendance = attendance.filter(a => a.userId === currentUser.id);
    
    let present = 0, absent = 0, halfDay = 0, leave = 0;
    
    const weekDates = getWeekDates();
    weekDates.forEach(date => {
        const record = userAttendance.find(a => a.date === date);
        if (record) {
            if (record.status === 'half-day') halfDay++;
            else if (record.status === 'leave') leave++;
            else if (record.checkIn) present++;
        } else {
            absent++;
        }
    });
    
    document.getElementById('presentDays').textContent = present;
    document.getElementById('absentDays').textContent = absent;
    document.getElementById('halfDays').textContent = halfDay;
    document.getElementById('leaveDays').textContent = leave;
}

function checkIn() {
    const today = new Date().toISOString().split('T')[0];
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0].substring(0, 5);
    
    let record = attendance.find(a => a.userId === currentUser.id && a.date === today);
    if (!record) {
        // Check if it's a weekend (optional business rule)
        const dayOfWeek = now.getDay();
        let status = 'present';
        
        // Mark as late if after 9:30 AM
        const checkInTime = now.getHours() * 60 + now.getMinutes();
        const lateThreshold = 9 * 60 + 30; // 9:30 AM
        
        if (checkInTime > lateThreshold) {
            status = 'late';
        }
        
        attendance.push({
            userId: currentUser.id,
            employeeName: currentUser.fullName,
            date: today,
            checkIn: timeString,
            checkOut: null,
            status: status,
            hoursWorked: 0,
            notes: status === 'late' ? 'Late arrival' : ''
        });
        
        const message = status === 'late' ? 
            `Checked in at ${timeString} (Late arrival)` : 
            `Checked in successfully at ${timeString}`;
        
        alert(message);
    } else {
        alert('Already checked in today at ' + record.checkIn);
    }
    
    loadAttendance();
    loadDashboardStats();
    updateQuickAccessInfo();
}

function checkOut() {
    const today = new Date().toISOString().split('T')[0];
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0].substring(0, 5);
    
    let record = attendance.find(a => a.userId === currentUser.id && a.date === today);
    if (record && !record.checkOut) {
        record.checkOut = timeString;
        
        // Calculate hours worked
        const hoursWorked = calculateHoursWorked(record.checkIn, timeString);
        record.hoursWorked = hoursWorked;
        
        // Update status based on hours worked
        if (hoursWorked >= 8) {
            record.status = 'present';
        } else if (hoursWorked >= 4) {
            record.status = 'half-day';
        } else {
            record.status = 'partial';
        }
        
        alert(`Checked out successfully at ${timeString}\nTotal hours worked: ${hoursWorked.toFixed(1)} hours`);
    } else if (record && record.checkOut) {
        alert('Already checked out today at ' + record.checkOut);
    } else {
        alert('No check-in found for today. Please check in first.');
    }
    
    loadAttendance();
    loadDashboardStats();
    updateQuickAccessInfo();
}

// Helper function to calculate hours worked
function calculateHoursWorked(checkIn, checkOut) {
    if (!checkIn || !checkOut) return 0;
    
    const [inHour, inMin] = checkIn.split(':').map(Number);
    const [outHour, outMin] = checkOut.split(':').map(Number);
    
    const inMinutes = inHour * 60 + inMin;
    const outMinutes = outHour * 60 + outMin;
    
    return (outMinutes - inMinutes) / 60;
}

function markHalfDay() {
    const today = new Date().toISOString().split('T')[0];
    const now = new Date().toTimeString().split(' ')[0].substring(0, 5);
    
    let record = attendance.find(a => a.userId === currentUser.id && a.date === today);
    if (!record) {
        attendance.push({
            userId: currentUser.id,
            employeeName: currentUser.fullName,
            date: today,
            checkIn: now,
            checkOut: null,
            status: 'half-day',
            hoursWorked: 4,
            notes: 'Half day marked by employee'
        });
    } else if (!record.checkOut) {
        record.status = 'half-day';
        record.hoursWorked = 4;
        record.notes = 'Half day marked by employee';
        if (!record.checkIn) {
            record.checkIn = now;
        }
    } else {
        alert('Cannot mark half day after checkout.');
        return;
    }
    
    alert('Half day marked successfully (4 hours credited)');
    loadAttendance();
    loadDashboardStats();
    updateQuickAccessInfo();
}

// View Toggle Functions
function showWeeklyView() {
    document.getElementById('weeklyAttendanceView').style.display = 'block';
    document.getElementById('dailyAttendanceView').style.display = 'none';
    
    // Update button states
    document.querySelectorAll('.btn-group .btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function showDailyView() {
    document.getElementById('weeklyAttendanceView').style.display = 'none';
    document.getElementById('dailyAttendanceView').style.display = 'block';
    
    // Set today's date as default
    document.getElementById('dailyDateFilter').value = new Date().toISOString().split('T')[0];
    loadDailyAttendance();
    
    // Update button states
    document.querySelectorAll('.btn-group .btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function loadDailyAttendance() {
    const selectedDate = document.getElementById('dailyDateFilter').value;
    if (!selectedDate) return;
    
    const record = attendance.find(a => a.userId === currentUser.id && a.date === selectedDate);
    
    document.getElementById('dailySelectedDate').textContent = formatDate(selectedDate);
    document.getElementById('dailyCheckIn').textContent = record?.checkIn || '-';
    document.getElementById('dailyCheckOut').textContent = record?.checkOut || '-';
    
    if (record?.checkIn && record?.checkOut) {
        document.getElementById('dailyTotalHours').textContent = calculateHours(record.checkIn, record.checkOut);
    } else {
        document.getElementById('dailyTotalHours').textContent = '-';
    }
    
    const statusBadge = document.getElementById('dailyStatus');
    if (record) {
        const status = record.status || 'Present';
        statusBadge.textContent = status.charAt(0).toUpperCase() + status.slice(1);
        statusBadge.className = `badge bg-${getStatusColor(status)}`;
    } else {
        statusBadge.textContent = 'Absent';
        statusBadge.className = 'badge bg-danger';
    }
}

function getStatusColor(status) {
    switch(status) {
        case 'present': return 'success';
        case 'absent': return 'danger';
        case 'half-day': return 'warning';
        case 'leave': return 'info';
        default: return 'secondary';
    }
}

function viewDayDetails(date) {
    showDailyView();
    document.getElementById('dailyDateFilter').value = date;
    loadDailyAttendance();
}

function editDailyAttendance() {
    alert('Edit attendance functionality - Admin approval required');
}

function addNote() {
    const note = prompt('Add a note for this day:');
    if (note) {
        document.getElementById('attendanceNote').innerHTML = `<small class="text-info">${note}</small>`;
    }
}

// Enhanced Leave Management Functions
function showLeaveForm() {
    const form = document.getElementById('leaveForm');
    form.style.display = 'block';
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('startDate').min = today;
    document.getElementById('endDate').min = today;
    
    // Scroll to form
    form.scrollIntoView({ behavior: 'smooth' });
}

function hideLeaveForm() {
    document.getElementById('leaveForm').style.display = 'none';
    resetLeaveForm();
}

function resetLeaveForm() {
    document.getElementById('leaveApplicationForm').reset();
    document.getElementById('selectedLeaveType').value = '';
    document.querySelectorAll('.leave-type-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.getElementById('leaveDaysDisplay').style.display = 'none';
}

function selectLeaveType(type) {
    // Remove selection from all cards
    document.querySelectorAll('.leave-type-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selection to clicked card
    document.querySelector(`[data-type="${type}"]`).classList.add('selected');
    document.getElementById('selectedLeaveType').value = type;
}

// Calculate leave days automatically
function calculateLeaveDays() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    
    if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        if (end < start) {
            alert('End date cannot be before start date');
            document.getElementById('endDate').value = '';
            return;
        }
        
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        
        // Show calculated days
        document.getElementById('totalDays').textContent = diffDays;
        document.getElementById('leaveDaysDisplay').style.display = 'block';
        
        return diffDays;
    }
    
    document.getElementById('leaveDaysDisplay').style.display = 'none';
    return 0;
}

function viewLeaveCalendar() {
    alert('Leave Calendar View\n\nUpcoming Holidays:\n• Dec 25 - Christmas Day\n• Jan 1 - New Year\'s Day\n• Jan 26 - Republic Day\n\n(Feature would show interactive calendar in production)');
}

function downloadLeaveReport() {
    alert('Leave Report Downloaded!\n\nReport includes:\n• Leave balance summary\n• Usage history\n• Pending requests\n• Annual statistics\n\n(PDF report generated in production)');
}

function filterLeaveHistory() {
    const filter = document.getElementById('statusFilter').value;
    const rows = document.querySelectorAll('#leaveHistory tr');
    
    rows.forEach(row => {
        if (filter === 'all') {
            row.style.display = '';
        } else {
            const statusCell = row.cells[3];
            if (statusCell && statusCell.textContent.toLowerCase().includes(filter)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    });
}

// Enhanced leave history loading
function loadLeaveHistory() {
    const table = document.getElementById('leaveHistory');
    table.innerHTML = '';
    
    const userLeaves = leaveRequests.filter(lr => lr.userId === currentUser.id)
        .sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate));
    
    // Update pending count
    const pendingCount = userLeaves.filter(lr => lr.status === 'pending').length;
    document.getElementById('pendingCount').textContent = pendingCount;
    
    if (userLeaves.length === 0) {
        const row = table.insertRow();
        row.innerHTML = '<td colspan="6" class="text-center text-muted py-4">No leave requests found</td>';
        return;
    }
    
    userLeaves.forEach(leave => {
        const statusBadge = getEnhancedStatusBadge(leave.status);
        const leaveTypeFormatted = formatLeaveType(leave.type);
        const duration = `${formatDate(leave.startDate)} - ${formatDate(leave.endDate)}`;
        
        const row = table.insertRow();
        row.innerHTML = `
            <td>
                <span class="leave-type-badge ${leave.type}">
                    <i class="bi bi-${getLeaveIcon(leave.type)} me-1"></i>
                    ${leaveTypeFormatted}
                </span>
            </td>
            <td><small class="text-muted">${duration}</small></td>
            <td><span class="badge bg-secondary">${leave.leaveDays || 1}</span></td>
            <td>${statusBadge}</td>
            <td><small class="text-muted">${formatDate(leave.appliedDate)}</small></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="showLeaveDetails(${leave.id})" title="View Details">
                    <i class="bi bi-eye"></i>
                </button>
            </td>
        `;
        
        row.style.cursor = 'pointer';
        row.onclick = () => showLeaveDetails(leave.id);
    });
}

function getEnhancedStatusBadge(status) {
    const badges = {
        'pending': '<span class="badge bg-warning"><i class="bi bi-hourglass-split me-1"></i>Pending</span>',
        'approved': '<span class="badge bg-success"><i class="bi bi-check-circle me-1"></i>Approved</span>',
        'rejected': '<span class="badge bg-danger"><i class="bi bi-x-circle me-1"></i>Rejected</span>'
    };
    return badges[status] || '<span class="badge bg-secondary">Unknown</span>';
}

function getLeaveIcon(type) {
    const icons = {
        'annual': 'calendar-heart',
        'sick': 'heart-pulse',
        'casual': 'calendar-event',
        'emergency': 'exclamation-triangle'
    };
    return icons[type] || 'calendar-x';
}

function showLeaveDetails(leaveId) {
    const leave = leaveRequests.find(lr => lr.id === leaveId);
    if (!leave) return;
    
    const details = `
        LEAVE REQUEST DETAILS
        
        Employee: ${leave.employeeName || currentUser.fullName}
        Type: ${formatLeaveType(leave.type)}
        Duration: ${leave.startDate} to ${leave.endDate}
        Days: ${leave.leaveDays || 'N/A'}
        Status: ${leave.status.toUpperCase()}
        Applied: ${formatDate(leave.appliedDate)}
        
        Reason:
        ${leave.reason}
        
        ${leave.approvedBy ? 'Approved by: ' + leave.approvedBy : ''}
        ${leave.comments ? 'Comments: ' + leave.comments : ''}
    `;
    alert(details);
}

// Initialize leave section when dashboard loads
function initLeaveSection() {
    loadLeaveHistory();
}

// Calculate leave days automatically
function calculateLeaveDays() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    
    if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        if (end < start) {
            alert('End date cannot be before start date');
            document.getElementById('endDate').value = '';
            return;
        }
        
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        
        // Show calculated days
        document.getElementById('totalDays').textContent = diffDays;
        document.getElementById('leaveDaysDisplay').style.display = 'block';
        
        return diffDays;
    }
    
    document.getElementById('leaveDaysDisplay').style.display = 'none';
    return 0;
}

// Add event listeners for date calculation
document.addEventListener('DOMContentLoaded', function() {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    
    if (startDateInput) {
        startDateInput.addEventListener('change', function() {
            document.getElementById('endDate').min = this.value;
            calculateLeaveDays();
        });
    }
    
    if (endDateInput) {
        endDateInput.addEventListener('change', calculateLeaveDays);
    }
});

document.getElementById('leaveApplicationForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const leaveType = document.getElementById('selectedLeaveType').value;
    const reason = document.getElementById('leaveReason').value.trim();
    
    // Validation
    if (!startDate || !endDate || !leaveType || !reason) {
        alert('Please fill in all required fields and select a leave type.');
        return;
    }
    
    if (reason.length < 10) {
        alert('Please provide a detailed reason (minimum 10 characters).');
        return;
    }
    
    // Calculate leave days
    const start = new Date(startDate);
    const end = new Date(endDate);
    const leaveDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    
    // Check for overlapping leave requests
    const overlapping = leaveRequests.find(lr => 
        lr.userId === currentUser.id && 
        lr.status !== 'rejected' &&
        ((new Date(lr.startDate) <= end && new Date(lr.endDate) >= start))
    );
    
    if (overlapping) {
        alert('You have an overlapping leave request for this period.');
        return;
    }
    
    const leaveRequest = {
        id: leaveRequests.length + 1,
        userId: currentUser.id,
        employeeName: currentUser.fullName,
        employeeId: currentUser.employeeId,
        department: currentUser.department,
        startDate: startDate,
        endDate: endDate,
        type: leaveType,
        reason: reason,
        status: 'pending',
        appliedDate: new Date().toISOString().split('T')[0],
        leaveDays: leaveDays,
        approvedBy: null,
        approvedDate: null,
        comments: ''
    };
    
    leaveRequests.push(leaveRequest);
    
    // Success message with animation
    const successMsg = `Leave application submitted successfully!\n\nDetails:\n- Type: ${formatLeaveType(leaveType)}\n- Duration: ${leaveDays} day(s)\n- Status: Pending Approval\n\nYou will be notified once your request is reviewed.`;
    alert(successMsg);
    
    // Reset and hide form
    resetLeaveForm();
    hideLeaveForm();
    
    loadLeaveHistory();
    loadDashboardStats();
    updateQuickAccessInfo();
    
    if (currentUser.role === 'admin') {
        loadPendingApprovals();
    }
});

function loadLeaveHistory() {
    const table = document.getElementById('leaveHistory');
    table.innerHTML = '';
    
    // Employees can only view their own leave history
    const userLeaves = leaveRequests.filter(lr => lr.userId === currentUser.id)
        .sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate));
    
    if (userLeaves.length === 0) {
        const row = table.insertRow();
        row.innerHTML = '<td colspan="6" class="text-center text-muted">No leave requests found</td>';
        return;
    }
    
    userLeaves.forEach(leave => {
        const statusBadge = getStatusBadge(leave.status);
        const leaveTypeFormatted = formatLeaveType(leave.type);
        
        const row = table.insertRow();
        row.innerHTML = `
            <td>${formatDate(leave.startDate)}</td>
            <td>${formatDate(leave.endDate)}</td>
            <td><span class="badge bg-secondary">${leaveTypeFormatted}</span></td>
            <td>${statusBadge}</td>
            <td title="${leave.reason}">${truncateText(leave.reason, 50)}</td>
            <td>${formatDate(leave.appliedDate)}</td>
        `;
        
        // Add click event for details
        row.style.cursor = 'pointer';
        row.onclick = () => showLeaveDetails(leave);
    });
}

// Helper functions for leave management
function getStatusBadge(status) {
    const badges = {
        'pending': '<span class="badge bg-warning">Pending</span>',
        'approved': '<span class="badge bg-success">Approved</span>',
        'rejected': '<span class="badge bg-danger">Rejected</span>'
    };
    return badges[status] || '<span class="badge bg-secondary">Unknown</span>';
}

function formatLeaveType(type) {
    const types = {
        'paid': 'Paid Leave',
        'sick': 'Sick Leave',
        'unpaid': 'Unpaid Leave',
        'casual': 'Casual Leave',
        'annual': 'Annual Leave'
    };
    return types[type] || type;
}

function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

function showLeaveDetails(leave) {
    const details = `
        Leave Details:
        
        Employee: ${leave.employeeName || currentUser.fullName}
        Type: ${formatLeaveType(leave.type)}
        Duration: ${leave.startDate} to ${leave.endDate} (${leave.leaveDays || 'N/A'} days)
        Status: ${leave.status.toUpperCase()}
        Applied: ${formatDate(leave.appliedDate)}
        
        Reason:
        ${leave.reason}
        
        ${leave.comments ? 'Comments: ' + leave.comments : ''}
    `;
    alert(details);
}

// Admin Functions
function loadPendingApprovals() {
    if (currentUser.role !== 'admin') {
        alert('Access denied. Only Admin/HR can view leave approvals.');
        return;
    }
    
    const table = document.getElementById('approvalsTable');
    table.innerHTML = '';
    
    const pendingLeaves = leaveRequests.filter(lr => lr.status === 'pending')
        .sort((a, b) => new Date(a.appliedDate) - new Date(b.appliedDate));
    
    if (pendingLeaves.length === 0) {
        const row = table.insertRow();
        row.innerHTML = '<td colspan="8" class="text-center text-muted">No pending leave requests</td>';
        return;
    }
    
    pendingLeaves.forEach(leave => {
        const employee = users.find(u => u.id === leave.userId);
        const leaveTypeFormatted = formatLeaveType(leave.type);
        
        const row = table.insertRow();
        row.innerHTML = `
            <td><input type="checkbox" class="approval-checkbox" value="${leave.id}"></td>
            <td>
                <div class="fw-medium">${employee ? employee.fullName : 'Unknown'}</div>
                <small class="text-muted">${employee ? employee.employeeId : 'N/A'} | ${employee ? employee.department : 'N/A'}</small>
            </td>
            <td>${formatDate(leave.startDate)}</td>
            <td>${formatDate(leave.endDate)}</td>
            <td><span class="badge bg-info">${leaveTypeFormatted}</span></td>
            <td title="${leave.reason}">${truncateText(leave.reason, 40)}</td>
            <td>${formatDate(leave.appliedDate)}</td>
            <td>
                <div class="btn-group" role="group">
                    <button class="btn btn-success btn-sm" onclick="approveLeave(${leave.id}, 'approved')" title="Approve">
                        <i class="bi bi-check-lg"></i>
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="approveLeave(${leave.id}, 'rejected')" title="Reject">
                        <i class="bi bi-x-lg"></i>
                    </button>
                    <button class="btn btn-info btn-sm" onclick="addApprovalComments(${leave.id})" title="Add Comments">
                        <i class="bi bi-chat-text"></i>
                    </button>
                </div>
            </td>
        `;
    });
}

// Enhanced approval functions
function addApprovalComments(leaveId) {
    const leave = leaveRequests.find(lr => lr.id === leaveId);
    if (!leave) return;
    
    const comments = prompt(`Add comments for ${leave.employeeName}'s leave request:`, leave.comments || '');
    if (comments !== null) {
        leave.comments = comments.trim();
        alert('Comments added successfully!');
    }
}

function bulkApprove(action) {
    if (currentUser.role !== 'admin') {
        alert('Access denied. Only Admin/HR can approve leave requests.');
        return;
    }
    
    const checkboxes = document.querySelectorAll('.approval-checkbox:checked');
    if (checkboxes.length === 0) {
        alert('Please select at least one leave request.');
        return;
    }
    
    const actionText = action === 'approved' ? 'approve' : 'reject';
    if (!confirm(`Are you sure you want to ${actionText} ${checkboxes.length} leave request(s)?`)) {
        return;
    }
    
    let processed = 0;
    checkboxes.forEach(checkbox => {
        const leaveId = parseInt(checkbox.value);
        if (approveLeave(leaveId, action, false)) {
            processed++;
        }
    });
    
    alert(`Successfully ${action} ${processed} leave request(s)!`);
    loadPendingApprovals();
    loadDashboardStats();
}

function toggleSelectAll() {
    const selectAllCheckbox = document.getElementById('selectAll');
    const checkboxes = document.querySelectorAll('.approval-checkbox');
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
}

function approveLeave(leaveId, status, showAlert = true) {
    if (currentUser.role !== 'admin') {
        alert('Access denied. Only Admin/HR can approve leave requests.');
        return false;
    }
    
    const leave = leaveRequests.find(lr => lr.id === leaveId);
    if (!leave) {
        if (showAlert) alert('Leave request not found.');
        return false;
    }
    
    if (leave.status !== 'pending') {
        if (showAlert) alert('This leave request has already been processed.');
        return false;
    }
    
    // Update leave status
    leave.status = status;
    leave.approvedBy = currentUser.fullName;
    leave.approvedDate = new Date().toISOString().split('T')[0];
    
    // If approved, mark attendance as leave for those dates
    if (status === 'approved') {
        markLeaveAttendance(leave);
    }
    
    if (showAlert) {
        const employee = users.find(u => u.id === leave.userId);
        alert(`Leave request ${status} successfully for ${employee ? employee.fullName : 'employee'}!`);
        loadPendingApprovals();
        loadDashboardStats();
    }
    
    return true;
}

// Mark attendance as leave for approved leave dates
function markLeaveAttendance(leave) {
    const startDate = new Date(leave.startDate);
    const endDate = new Date(leave.endDate);
    
    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        const dateString = date.toISOString().split('T')[0];
        
        // Skip weekends (optional business rule)
        const dayOfWeek = date.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) continue;
        
        // Check if attendance record already exists
        let attendanceRecord = attendance.find(a => a.userId === leave.userId && a.date === dateString);
        
        if (!attendanceRecord) {
            attendance.push({
                userId: leave.userId,
                employeeName: leave.employeeName,
                date: dateString,
                checkIn: null,
                checkOut: null,
                status: 'leave',
                hoursWorked: 0,
                notes: `${formatLeaveType(leave.type)} - Approved by ${currentUser.fullName}`
            });
        } else if (attendanceRecord.status !== 'leave') {
            // Update existing record to leave status
            attendanceRecord.status = 'leave';
            attendanceRecord.notes = `${formatLeaveType(leave.type)} - Approved by ${currentUser.fullName}`;
        }
    }
}

// Employee Directory Functions (Available to all users)
function loadEmployeeDirectory() {
    console.log('Loading employee directory...');
    const names = [
        "Akash Patel", "Rohit Sharma", "Amit Verma", "Rahul Singh", "Sandeep Kumar",
        "Mohit Jain", "Ankit Gupta", "Piyush Agarwal", "Deepak Yadav", "Kunal Mehta",
        "Neha Sharma", "Pooja Patel", "Priya Singh", "Anjali Verma", "Sneha Gupta"
    ];

    const departments = ["HR", "IT", "Finance", "Sales", "Marketing"];
    const table = document.getElementById("empTable");
    
    if (!table) {
        console.error('Employee table not found!');
        return;
    }
    
    const tbody = table.querySelector('tbody');
    if (!tbody) {
        console.error('Table tbody not found!');
        return;
    }
    
    tbody.innerHTML = ''; // Clear existing data
    console.log('Table found, populating data...');

    names.forEach((name, index) => {
        const salary = Math.floor(Math.random() * 40000) + 20000; // 20k–60k
        const attendance = Math.floor(Math.random() * 30) + 1;   // 1–30 days
        const dept = departments[Math.floor(Math.random() * departments.length)];

        const row = tbody.insertRow();
        row.innerHTML = `
            <td>EMP${String(index + 1).padStart(3, '0')}</td>
            <td>${name}</td>
            <td><span class="badge bg-secondary">${dept}</span></td>
            <td>₹${salary.toLocaleString('en-IN')}</td>
            <td><span class="badge bg-success">${attendance}</span></td>
        `;
    });
    
    console.log('Employee directory loaded successfully!');
}

function filterDirectory() {
    const filter = document.getElementById('directoryFilter').value;
    const table = document.getElementById('empTable');
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        if (filter === 'all') {
            row.style.display = '';
        } else {
            const deptCell = row.cells[2]; // Department column
            if (deptCell && deptCell.textContent.includes(filter)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    });
}

function searchEmployees() {
    const searchTerm = document.getElementById('searchEmployee').value.toLowerCase();
    const table = document.getElementById('empTable');
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const name = row.cells[1].textContent.toLowerCase(); // Name column
        const empId = row.cells[0].textContent.toLowerCase(); // Employee ID column
        
        if (name.includes(searchTerm) || empId.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function loadEmployees() {
    const table = document.getElementById('employeesTable');
    table.innerHTML = '';
    
    const filter = document.getElementById('employeeFilter')?.value || 'all';
    let employees = users.filter(u => u.role === 'employee');
    
    if (filter !== 'all') {
        employees = employees.filter(emp => emp.department === filter);
    }
    
    employees.forEach(emp => {
        const netSalary = emp.salary.basic + emp.salary.allowances - emp.salary.deductions;
        const row = table.insertRow();
        row.innerHTML = `
            <td>${emp.fullName}</td>
            <td>${emp.email}</td>
            <td>${emp.department}</td>
            <td>Employee</td>
            <td>${formatDate(emp.joinDate)}</td>
            <td>₹${netSalary.toLocaleString('en-IN')}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="viewEmployeeDetails(${emp.id})">View</button>
                <button class="btn btn-sm btn-info" onclick="viewEmployeeAttendance(${emp.id})">Attendance</button>
                <button class="btn btn-sm btn-warning" onclick="editEmployee(${emp.id})">Edit</button>
            </td>
        `;
    });
}

function populateEmployeeSelectors() {
    const selectors = ['employeeSelector', 'attendanceEmployeeFilter'];
    const employees = users.filter(u => u.role === 'employee');
    
    selectors.forEach(selectorId => {
        const selector = document.getElementById(selectorId);
        if (selector) {
            selector.innerHTML = selectorId === 'employeeSelector' ? 
                '<option value="">Select Employee to View Details</option>' : 
                '<option value="all">All Employees</option>';
            
            employees.forEach(emp => {
                const option = document.createElement('option');
                option.value = emp.id;
                option.textContent = emp.fullName;
                selector.appendChild(option);
            });
        }
    });
}

function filterEmployees() {
    loadEmployees();
}

function switchEmployee() {
    const employeeId = document.getElementById('employeeSelector').value;
    if (employeeId) {
        viewEmployeeDetails(parseInt(employeeId));
    }
}

function viewEmployeeDetails(employeeId) {
    const employee = users.find(u => u.id === employeeId);
    if (employee) {
        alert(`Employee Details:\nName: ${employee.fullName}\nEmail: ${employee.email}\nDepartment: ${employee.department}\nSalary: ₹${(employee.salary.basic + employee.salary.allowances - employee.salary.deductions).toLocaleString('en-IN')}`);
    }
}

function viewEmployeeAttendance(employeeId) {
    showAdminAttendance();
    document.getElementById('attendanceEmployeeFilter').value = employeeId;
    loadEmployeeAttendance();
}

function showAdminAttendance() {
    // Check admin access
    if (currentUser.role !== 'admin') {
        alert('Access denied. This section is only available for Admin/HR users.');
        return;
    }
    
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.list-group-item').forEach(item => item.classList.remove('active'));
    document.getElementById('adminAttendanceSection').style.display = 'block';
    
    // Set today's date as default
    document.getElementById('attendanceDate').value = new Date().toISOString().split('T')[0];
    loadEmployeeAttendance();
}

function loadEmployeeAttendance() {
    const table = document.getElementById('adminAttendanceTable');
    table.innerHTML = '';
    
    const employeeFilter = document.getElementById('attendanceEmployeeFilter').value;
    const dateFilter = document.getElementById('attendanceDate').value;
    
    let filteredAttendance = attendance;
    
    if (employeeFilter !== 'all') {
        filteredAttendance = filteredAttendance.filter(a => a.userId == employeeFilter);
    }
    
    if (dateFilter) {
        filteredAttendance = filteredAttendance.filter(a => a.date === dateFilter);
    }
    
    filteredAttendance.forEach(record => {
        const employee = users.find(u => u.id === record.userId);
        const hoursWorked = calculateHours(record.checkIn, record.checkOut);
        
        const row = table.insertRow();
        row.innerHTML = `
            <td>${employee ? employee.fullName : 'Unknown'}</td>
            <td>${formatDate(record.date)}</td>
            <td>${record.checkIn || '-'}</td>
            <td>${record.checkOut || '-'}</td>
            <td>${hoursWorked}</td>
            <td class="status-${record.checkOut ? 'present' : 'partial'}">
                ${record.checkOut ? 'Complete' : 'In Progress'}
            </td>
        `;
    });
}

function calculateHours(checkIn, checkOut) {
    if (!checkIn || !checkOut) return '-';
    
    const [inHour, inMin] = checkIn.split(':').map(Number);
    const [outHour, outMin] = checkOut.split(':').map(Number);
    
    const inMinutes = inHour * 60 + inMin;
    const outMinutes = outHour * 60 + outMin;
    
    const diffMinutes = outMinutes - inMinutes;
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;
    
    return `${hours}h ${minutes}m`;
}

function exportAttendance() {
    alert('Attendance report exported successfully!');
}

// Enhanced Profile Management Functions
function changeProfilePicture() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size must be less than 5MB');
                return;
            }
            
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('profilePicture').src = e.target.result;
                currentUser.profilePicture = e.target.result;
                
                // Update user in users array
                const userIndex = users.findIndex(u => u.id === currentUser.id);
                if (userIndex !== -1) {
                    users[userIndex].profilePicture = e.target.result;
                }
                
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                alert('Profile picture updated successfully!');
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

function uploadDocument() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.doc,.docx,.jpg,.jpeg,.png';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            alert(`Document "${file.name}" uploaded successfully!`);
        }
    };
    input.click();
}

// Enhanced Edit Profile Functions with Role-based Access
function editProfile() {
    // Populate employee editable fields (limited access)
    document.getElementById('editPhone').value = currentUser.phone || '';
    document.getElementById('editAddress').value = currentUser.address || '';
    
    // Show admin fields only if user is admin (full access)
    if (currentUser.role === 'admin') {
        document.getElementById('adminEditFields').style.display = 'block';
        document.getElementById('editFullName').value = currentUser.fullName || '';
        document.getElementById('editEmail').value = currentUser.email || '';
        document.getElementById('editDepartment').value = currentUser.department || '';
        document.getElementById('editPosition').value = currentUser.position || '';
        document.getElementById('editManager').value = currentUser.manager || '';
        document.getElementById('editBasicSalary').value = currentUser.salary.basic || '';
    } else {
        // Hide admin fields for employees
        document.getElementById('adminEditFields').style.display = 'none';
    }
    
    // Show modal
    new bootstrap.Modal(document.getElementById('editProfileModal')).show();
}

function saveProfile() {
    // Validate required fields
    const phone = document.getElementById('editPhone').value.trim();
    const address = document.getElementById('editAddress').value.trim();
    
    if (!phone || !address) {
        alert('Phone and Address are required fields.');
        return;
    }
    
    // Validate phone number format
    const phoneRegex = /^[+]?[0-9]{10,15}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        alert('Please enter a valid phone number.');
        return;
    }
    
    // Check if editing another employee (admin function)
    if (window.editingEmployeeId) {
        if (currentUser.role !== 'admin') {
            alert('Access denied. Only admins can edit other employee details.');
            return;
        }
        
        const employee = users.find(u => u.id === window.editingEmployeeId);
        if (employee) {
            // Admin can edit all fields for any employee
            employee.phone = phone;
            employee.address = address;
            employee.fullName = document.getElementById('editFullName').value.trim();
            employee.email = document.getElementById('editEmail').value.trim();
            employee.department = document.getElementById('editDepartment').value;
            employee.position = document.getElementById('editPosition').value.trim();
            employee.manager = document.getElementById('editManager').value.trim();
            
            const newBasicSalary = parseInt(document.getElementById('editBasicSalary').value);
            if (newBasicSalary && newBasicSalary > 0) {
                employee.salary.basic = newBasicSalary;
            }
            
            loadEmployees(); // Refresh employee list
            window.editingEmployeeId = null;
            alert('Employee profile updated successfully!');
        }
    } else {
        // Update current user profile with role-based restrictions
        currentUser.phone = phone;
        currentUser.address = address;
        
        // Only admin can update these fields for themselves
        if (currentUser.role === 'admin') {
            const fullName = document.getElementById('editFullName').value.trim();
            const email = document.getElementById('editEmail').value.trim();
            
            if (fullName) currentUser.fullName = fullName;
            if (email) currentUser.email = email;
            
            currentUser.department = document.getElementById('editDepartment').value;
            currentUser.position = document.getElementById('editPosition').value.trim();
            currentUser.manager = document.getElementById('editManager').value.trim();
            
            const newBasicSalary = parseInt(document.getElementById('editBasicSalary').value);
            if (newBasicSalary && newBasicSalary > 0) {
                currentUser.salary.basic = newBasicSalary;
            }
        }
        
        // Update user in users array
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex] = { ...currentUser };
        }
        
        // Update localStorage
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        // Refresh profile display
        loadProfile();
        loadDashboardStats();
        
        alert('Profile updated successfully!');
    }
    
    // Close modal
    bootstrap.Modal.getInstance(document.getElementById('editProfileModal')).hide();
}

// Admin edit employee function
function editEmployee(employeeId) {
    const employee = users.find(u => u.id === employeeId);
    if (!employee) return;
    
    // Populate all fields for admin editing
    document.getElementById('editPhone').value = employee.phone || '';
    document.getElementById('editAddress').value = employee.address || '';
    document.getElementById('adminEditFields').style.display = 'block';
    document.getElementById('editFullName').value = employee.fullName || '';
    document.getElementById('editEmail').value = employee.email || '';
    document.getElementById('editDepartment').value = employee.department || '';
    document.getElementById('editPosition').value = employee.position || '';
    document.getElementById('editManager').value = employee.manager || '';
    document.getElementById('editBasicSalary').value = employee.salary.basic || '';
    
    // Store employee being edited
    window.editingEmployeeId = employeeId;
    
    // Show modal
    new bootstrap.Modal(document.getElementById('editProfileModal')).show();
}

// Enhanced Salary Management with better UI
function loadSalaryDetails() {
    const salary = currentUser.salary;
    const basicSalary = salary.basic;
    const allowances = salary.allowances;
    const deductions = salary.deductions;
    const netSalary = basicSalary + allowances - deductions;
    const grossSalary = basicSalary + allowances;
    
    // Calculate detailed breakdown
    const hra = Math.round(basicSalary * 0.4);
    const pf = Math.round(basicSalary * 0.12);
    const tax = Math.round(deductions * 0.6);
    const ytdEarnings = netSalary * 12;
    
    // Update overview cards with actual numbers
    document.getElementById('grossSalaryAmount').textContent = `₹${grossSalary.toLocaleString('en-IN')}`;
    document.getElementById('netSalaryAmount').textContent = `₹${netSalary.toLocaleString('en-IN')}`;
    document.getElementById('totalDeductionsAmount').textContent = `₹${deductions.toLocaleString('en-IN')}`;
    document.getElementById('ytdEarnings').textContent = `₹${ytdEarnings.toLocaleString('en-IN')}`;
    
    // Update detailed breakdown
    document.getElementById('basicSalaryDetail').textContent = `₹${basicSalary.toLocaleString('en-IN')}`;
    document.getElementById('hraAmount').textContent = `₹${hra.toLocaleString('en-IN')}`;
    document.getElementById('pfAmount').textContent = `₹${pf.toLocaleString('en-IN')}`;
    document.getElementById('taxAmount').textContent = `₹${tax.toLocaleString('en-IN')}`;
    
    document.getElementById('totalEarnings').textContent = `₹${grossSalary.toLocaleString('en-IN')}`;
    document.getElementById('totalDeductionsDetail').textContent = `₹${deductions.toLocaleString('en-IN')}`;
    
    // Update summary tab
    document.getElementById('summaryGross').textContent = `₹${grossSalary.toLocaleString('en-IN')}`;
    document.getElementById('summaryDeductions').textContent = `₹${deductions.toLocaleString('en-IN')}`;
    document.getElementById('summaryNet').textContent = `₹${netSalary.toLocaleString('en-IN')}`;
    
    // Set current period
    const currentMonth = new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
    document.getElementById('currentSalaryPeriod').textContent = currentMonth;
    
    // Show/hide edit button based on role
    const editBtn = document.getElementById('editSalaryBtn');
    if (editBtn) {
        editBtn.style.display = 'none'; // Hide edit button for all users
    }
}

// Quick action functions
function viewTaxStatement() {
    alert('Tax Statement for FY 2024-25\n\nTotal Taxable Income: ₹8,50,000\nTax Paid: ₹85,000\nTax Savings: ₹1,50,000\n\n(Feature would generate detailed PDF in production)');
}

function salaryProjection() {
    const currentSalary = currentUser.salary.basic + currentUser.salary.allowances - currentUser.salary.deductions;
    const projected = Math.round(currentSalary * 1.1);
    alert(`Salary Projection for Next Year\n\nCurrent Annual: ₹${(currentSalary * 12).toLocaleString('en-IN')}\nProjected (10% hike): ₹${(projected * 12).toLocaleString('en-IN')}\nIncrease: ₹${((projected - currentSalary) * 12).toLocaleString('en-IN')}`);
}

// Enhanced Payroll Management (Admin Only)
function loadPayrollData() {
    if (currentUser.role !== 'admin') {
        alert('Access denied. Only Admin/HR can access payroll management.');
        return;
    }
    
    const table = document.getElementById('payrollTable');
    table.innerHTML = '';
    
    let totalPayroll = 0;
    let processedCount = 0;
    
    // Filter employees based on department filter
    const deptFilter = document.getElementById('payrollDeptFilter')?.value || 'all';
    let filteredUsers = users.filter(u => u.salary && u.salary.basic > 0);
    
    if (deptFilter !== 'all') {
        filteredUsers = filteredUsers.filter(u => u.department === deptFilter);
    }
    
    if (filteredUsers.length === 0) {
        const row = table.insertRow();
        row.innerHTML = '<td colspan="8" class="text-center text-muted">No employees found</td>';
        return;
    }
    
    filteredUsers.forEach(user => {
        const netSalary = user.salary.basic + user.salary.allowances - user.salary.deductions;
        totalPayroll += netSalary;
        processedCount++;
        
        const row = table.insertRow();
        row.innerHTML = `
            <td>
                <div class="fw-medium">${user.fullName}</div>
                <small class="text-muted">${user.employeeId}</small>
            </td>
            <td><span class="badge bg-secondary">${user.department}</span></td>
            <td>₹${user.salary.basic.toLocaleString('en-IN')}</td>
            <td>₹${user.salary.allowances.toLocaleString('en-IN')}</td>
            <td class="text-danger">₹${user.salary.deductions.toLocaleString('en-IN')}</td>
            <td class="fw-bold text-success">₹${netSalary.toLocaleString('en-IN')}</td>
            <td><span class="badge bg-success">Processed</span></td>
            <td>
                <div class="btn-group" role="group">
                    <button class="btn btn-primary btn-sm" onclick="editSalary(${user.id})" title="Edit Salary">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-info btn-sm" onclick="viewPayslip(${user.id})" title="View Payslip">
                        <i class="bi bi-file-text"></i>
                    </button>
                </div>
            </td>
        `;
    });
    
    // Update summary statistics
    document.getElementById('totalPayroll').textContent = `₹${totalPayroll.toLocaleString('en-IN')}`;
    document.getElementById('processedPayroll').textContent = processedCount;
    document.getElementById('pendingPayroll').textContent = '0';
}

// Filter payroll by department
function filterPayroll() {
    loadPayrollData();
}

// Edit salary function (Admin only)
function editSalary(userId) {
    if (currentUser.role !== 'admin') {
        alert('Access denied. Only Admin/HR can edit salary structures.');
        return;
    }
    
    const employee = users.find(u => u.id === userId);
    if (!employee) {
        alert('Employee not found.');
        return;
    }
    
    // Populate edit salary modal
    document.getElementById('editSalaryUserId').value = userId;
    document.getElementById('editSalaryEmployeeName').value = employee.fullName;
    document.getElementById('editSalaryBasic').value = employee.salary.basic;
    document.getElementById('editSalaryAllowances').value = employee.salary.allowances;
    document.getElementById('editSalaryDeductions').value = employee.salary.deductions;
    
    // Calculate and show net salary
    calculateNetSalary();
    
    // Add event listeners for real-time calculation
    ['editSalaryBasic', 'editSalaryAllowances', 'editSalaryDeductions'].forEach(id => {
        document.getElementById(id).addEventListener('input', calculateNetSalary);
    });
    
    // Show modal
    new bootstrap.Modal(document.getElementById('editSalaryModal')).show();
}

// Calculate net salary in real-time
function calculateNetSalary() {
    const basic = parseFloat(document.getElementById('editSalaryBasic').value) || 0;
    const allowances = parseFloat(document.getElementById('editSalaryAllowances').value) || 0;
    const deductions = parseFloat(document.getElementById('editSalaryDeductions').value) || 0;
    
    const netSalary = basic + allowances - deductions;
    document.getElementById('editSalaryNet').value = `₹${netSalary.toLocaleString('en-IN')}`;
}

// Save salary changes
function saveSalaryChanges() {
    if (currentUser.role !== 'admin') {
        alert('Access denied. Only Admin/HR can update salary structures.');
        return;
    }
    
    const userId = parseInt(document.getElementById('editSalaryUserId').value);
    const basic = parseFloat(document.getElementById('editSalaryBasic').value);
    const allowances = parseFloat(document.getElementById('editSalaryAllowances').value);
    const deductions = parseFloat(document.getElementById('editSalaryDeductions').value);
    
    // Validation
    if (!basic || basic <= 0) {
        alert('Basic salary must be greater than 0.');
        return;
    }
    
    if (allowances < 0 || deductions < 0) {
        alert('Allowances and deductions cannot be negative.');
        return;
    }
    
    const employee = users.find(u => u.id === userId);
    if (!employee) {
        alert('Employee not found.');
        return;
    }
    
    // Update salary
    const oldSalary = employee.salary.basic + employee.salary.allowances - employee.salary.deductions;
    employee.salary.basic = basic;
    employee.salary.allowances = allowances;
    employee.salary.deductions = deductions;
    const newSalary = basic + allowances - deductions;
    
    // Update current user if editing own salary
    if (userId === currentUser.id) {
        currentUser.salary = { ...employee.salary };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        loadSalaryDetails(); // Refresh salary display
    }
    
    // Close modal
    bootstrap.Modal.getInstance(document.getElementById('editSalaryModal')).hide();
    
    // Refresh payroll data
    loadPayrollData();
    
    alert(`Salary updated successfully for ${employee.fullName}!\nOld: ₹${oldSalary.toLocaleString('en-IN')}\nNew: ₹${newSalary.toLocaleString('en-IN')}`);
}

// View payslip function
function viewPayslip(userId) {
    const employee = users.find(u => u.id === userId);
    if (!employee) {
        alert('Employee not found.');
        return;
    }
    
    // Only admin or the employee themselves can view payslip
    if (currentUser.role !== 'admin' && currentUser.id !== userId) {
        alert('Access denied. You can only view your own payslip.');
        return;
    }
    
    const netSalary = employee.salary.basic + employee.salary.allowances - employee.salary.deductions;
    const currentMonth = new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
    
    const payslipDetails = `
        PAYSLIP - ${currentMonth}
        
        Employee: ${employee.fullName}
        Employee ID: ${employee.employeeId}
        Department: ${employee.department}
        
        EARNINGS:
        Basic Salary: ₹${employee.salary.basic.toLocaleString('en-IN')}
        Allowances: ₹${employee.salary.allowances.toLocaleString('en-IN')}
        
        DEDUCTIONS:
        Total Deductions: ₹${employee.salary.deductions.toLocaleString('en-IN')}
        
        NET SALARY: ₹${netSalary.toLocaleString('en-IN')}
    `;
    
    alert(payslipDetails);
}

// Export payroll report
function exportPayroll() {
    if (currentUser.role !== 'admin') {
        alert('Access denied. Only Admin/HR can export payroll reports.');
        return;
    }
    
    alert('Payroll report exported successfully! (Feature would generate CSV/PDF in production)');
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

// Password validation
function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
}

// Email verification functions
document.getElementById('verificationForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const enteredCode = document.getElementById('verificationCode').value;
    const pendingData = JSON.parse(localStorage.getItem('pendingVerification') || '{}');
    
    if (enteredCode === pendingData.code) {
        const verification = pendingVerifications.find(v => v.email === pendingData.email);
        if (verification) {
            verification.userData.emailVerified = true;
            users.push(verification.userData);
            
            // Clean up
            pendingVerifications = pendingVerifications.filter(v => v.email !== pendingData.email);
            localStorage.removeItem('pendingVerification');
            
            alert('Email verified successfully! You can now login.');
            window.location.href = 'index.html';
        }
    } else {
        alert('Invalid verification code.');
    }
});

function resendCode() {
    const pendingData = JSON.parse(localStorage.getItem('pendingVerification') || '{}');
    if (pendingData.email) {
        const newCode = Math.floor(100000 + Math.random() * 900000).toString();
        const verification = pendingVerifications.find(v => v.email === pendingData.email);
        if (verification) {
            verification.code = newCode;
            localStorage.setItem('pendingVerification', JSON.stringify({ email: pendingData.email, code: newCode }));
            alert(`New verification code sent: ${newCode}`);
        }
    }
}