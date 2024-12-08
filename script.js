document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');
    const appointmentList = document.getElementById('appointmentList');

    // Завантажити записи з Local Storage
    const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    savedAppointments.forEach(addAppointmentToList);

    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        if (name && date && time) {
            const appointment = { name, date, time };

            // Додати запис до Local Storage
            savedAppointments.push(appointment);
            localStorage.setItem('appointments', JSON.stringify(savedAppointments));

            // Відобразити запис у списку
            addAppointmentToList(appointment);

            // Очистити форму
            bookingForm.reset();
        }
    });

    function addAppointmentToList(appointment) {
        const listItem = document.createElement('li');
        listItem.textContent = `${appointment.name} - ${appointment.date} о ${appointment.time}`;
        appointmentList.appendChild(listItem);
    }
});
