const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Псевдо-база даних
let appointments = [];

app.use(bodyParser.json());
app.use(express.static('public')); // Для HTML/CSS/JS файлів

// Отримати всі записи
app.get('/appointments', (req, res) => {
    res.json(appointments);
});

// Додати новий запис
app.post('/appointments', (req, res) => {
    const { name, date, time } = req.body;
    if (name && date && time) {
        const appointment = { name, date, time };
        appointments.push(appointment);
        res.status(201).json(appointment);
    } else {
        res.status(400).json({ error: 'Всі поля обов’язкові!' });
    }
});

app.listen(3000, () => console.log('Сервер запущено на порту 3000'));
