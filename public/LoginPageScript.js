class SchoolManagementSystem {
    constructor() {
        this.initEventListeners();
    }

    initEventListeners() {
        // Login Cards
        this.setupLoginCard('studentLogin', 'studentLoginModal');
        this.setupLoginCard('teacherLogin', 'teacherLoginModal');
        this.setupLoginCard('adminLogin', 'adminLoginModal');

        // Login Forms
        this.setupLoginForm('studentLoginForm', this.studentLogin,0);
        this.setupLoginForm('teacherLoginForm', this.teacherLogin,1);
        this.setupLoginForm('adminLoginForm', this.adminLogin,2);
    }

    setupLoginCard(cardId, modalId) {
        const card = document.getElementById(cardId);
        const modal = document.getElementById(modalId);
        const closeBtn = modal.querySelector('.close');

        card.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    setupLoginForm(formId, loginHandler,num) {
        const form = document.getElementById(formId);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const credentials = document.getElementsByName("username")[num].value;
            loginHandler.call(this, credentials);
        });      
    }
    studentLogin(credentials) {
        localStorage.setItem('studentUsername',`${credentials}`);
        window.location.href = 'DashboardStudent.html';
    }

    teacherLogin(credentials) {
        console.log('Teacher Login:', credentials);
        window.location.href = 'DashboardTeacher.html';
    }

    adminLogin(credentials) {
        console.log('Admin Login:', credentials);
        window.location.href = 'DashboardAdmin.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const schoolManagementSystem = new SchoolManagementSystem();
});
