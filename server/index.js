import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(express.json({ type: "*/*" }));
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "https://jayveer-kumar.onrender.com", // Vite frontend default port
  credentials: true
}));

const port = 8080;
app.post("/send-mail", async (req, res) => {
    console.log("Request aai thi :  ");
    const { name, email, subject, message } = req.body;
    //  Validation check
    if (!name || !email ||  !message) {
        return res.status(400).json({
            message: "All fields (name, email, subject, message) are required",
        });
    }
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // from .env
                pass: process.env.EMAIL_PASS, // from .env
            },
        });
        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: "Jayveerk394@gmail.com",
            subject: subject,
            text: `From: ${name}\nEmail: ${email}\n\n${message}`,
        };
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: "Mail sent successfully!" });
    } catch (error) {
        console.error("Error sending mail:", error);
        return res.status(500).json({ message: "Failed to send mail" });
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// Password - > zblo cgly dkqv eqdm