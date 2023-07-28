import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json());

app.post('/send-email', async (req: Request, res: Response) => {
    try {
        const { email } = req.body;

        const transporter = nodemailer.createTransport({
            host: 'smtp.example.com',
            port: 587,
            secure: false,
            auth: {
                user: 'your-email@example.com',
                pass: 'your-password'
            }
        });

        const mailOptions = {
            from: 'your-email@example.com',
            to: email,
            subject: 'Новое сообщение',
            text: 'Привет! Ваше сообщение было отправлено.'
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email отправлен: ' + info.response);
        res.status(200).send('Письмо успешно отправлено.');
    } catch (error) {
        console.log(error);
        res.status(500).send('Произошла ошибка при отправке письма.');
    }
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
