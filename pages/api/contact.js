import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'saqib.browser@gmail.com',
        pass: 'saqib786'
    }
});

// const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
    // console.log(req.body)

    const {name, email, number, subject, text} = req.body;
    console.log(req.body, "req body")
    const mailDetails = {
        // Update your email here
        to: 'saqib.browser@gmail.com',
        from: `${email}`,
        subject: 'Hi there',
        text: text,
        html: `
            <b>Name:</b> ${name} <br /> 
            <b>From/Email:</b> ${email} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        ` 
    };
    try {
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log('Error Occurs');
            } else {
                console.log('Email sent successfully');
            }
        });
        // console.log(response)
        res.status(200).send("Email send successfully")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error proccessing charge");
    }
}