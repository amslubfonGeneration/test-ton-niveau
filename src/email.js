import nodemailer from 'nodemailer'
import { email_pass, email_to, email_user } from './conf.js';


const transporte = nodemailer.createTransport({
  service: 'gmail',
  host:'smtp.gmail.com',
  port: 587,
  secure:false,
  auth: {
    user: email_user,
    pass: email_pass,
  },
})


export const traitementMailPost = async (req, res) => {
    const { contact,message } = req.body
    try {
    // Envoyer un e-mail avec Nodemailer
    await transporte.sendMail({
        from: `"Formulaire de contact" <${email_user}>`,
        to: email_to,
        subject: 'Contact support test-ton-level', // Sujet de l'e-mail
            text: `Contact/Email: ${contact}\nMessage: ${message}`, // Contenu en texte brut
            html: `<p><strong>Contact/Email:</strong> ${contact}</p>
                    <p><strong>Message:</strong> ${message}</p>`
    });

    return res.view('template/email.ejs', {
        message: `votre message a été envoyé avec succes.Merci.`
    })
    }catch (error) {
        console.error(error);
        return res.view('template/email.ejs',{
            mailerror: "Une erreur s'est produite lors de l'envoie de votre message.Vérifier votre connexion"
        })
    }
}