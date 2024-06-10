function submit() {
    var fname = document.getElementById('firstName');
    var lname = document.getElementById('lastName');
    var email = document.getElementById('email');
    var level = document.getElementById('educationLevel');
    var topic = document.getElementById('topic');
    var tutor = document.getElementById('tutor');
    var student = document.getElementById('student');
    var date = document.getElementById('date');
    var time = document.getElementById('time');

    placeholder = `
        <p><strong>First Name:</strong> ${fname.value}</p>
        <p><strong>Last Name:</strong> ${lname.value}</p>
        <p><strong>Email:</strong> ${email.value}</p>
        <p><strong>Level:</strong> ${level.value}</p>
        <p><strong>Topic:</strong> ${topic.value}</p>
        <p><strong>Tutor:</strong> ${tutor.value}</p>
        <p><strong>Group Size:</strong> ${student.value}</p>
        <p><strong>Date:</strong> ${date.value}</p>
        <p><strong>Time:</strong> ${time.value}</p>
        <hr>
    `;

    document.getElementById('dialogPlaceholder').innerHTML = placeholder;
    var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}