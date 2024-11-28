import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Эндпоинт для отправки письма
app.post('/api/sendMail', async (req, res) => {
    const { name, email, phone } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: 'Новая заявка с формы обратной связи',
        text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Message sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to send message');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
