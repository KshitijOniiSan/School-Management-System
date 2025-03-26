class StudentFunctions {
    constructor() {
        this.initEventListeners();
    }

    initEventListeners() {
        // Options
        this.setupOption('guardianInfo', 'guardianModal');
        this.setupOption('teacherInfo', 'teacherModal');
        this.setupOption('testInfo', 'testModal');
        this.setupOption('feesInfo', 'feesModal');
        this.setupOption('attendanceInfo', 'attendanceModal');
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
document.getElementById("WelcomeMessage").innerHTML="Welcome, "+localStorage.getItem('loggedInUser');
getGuardian(localStorage.getItem('loggedInUser'));
getGuardianRelation(localStorage.getItem('loggedInUser'));
async function getGuardian(username) {
    const response = await fetch(`http://localhost:8080/sms/${username}/guardian`);
    const data = await response.json();
    document.getElementById("guardianName").innerHTML=`<strong>Name:</strong> ${data.Name}`;
    document.getElementById("guardianContact").innerHTML=`<strong>Contact:</strong> ${data.Phone}`;
    document.getElementById("guardianEmail").innerHTML=`<strong>Email:</strong> ${data.Email}`;
    document.getElementById("guardianAddress").innerHTML=`<strong>Address:</strong> ${data.Address}`;
}
async function getGuardianRelation(username){
    const response = await fetch(`http://localhost:8080/sms/${username}/guardian_relation`);
    const data = await response.json();
    console.log(data);
    console.log(data.Relation_type);
    document.getElementById("guardianRelationship").innerHTML=`<strong>Relation:</strong> ${data.Relation_Type}`;
}

window.addEventListener("close", () => {
    localStorage.clear();
  });
document.addEventListener('DOMContentLoaded', () => {
    const studentFunctions = new StudentFunctions();
});