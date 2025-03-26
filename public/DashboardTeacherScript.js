class TeacherFunctions {
    constructor() {
        this.initEventListeners();
    }

    initEventListeners() {
        // Options
        this.setupOption('classInfo', 'classModal');
        this.setupOption('updateTestInfo', 'updateTestModal');
        this.setupOption('salaryInfo', 'salaryModal');
        this.setupOption('updateAttendanceInfo', 'updateAttendanceModal');
    }

    setupOption(cardId, modalId) {
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
}
window.addEventListener("close", () => {
    localStorage.clear();
  });
document.addEventListener('DOMContentLoaded', () => {
    const teacherFunctions = new TeacherFunctions();
});