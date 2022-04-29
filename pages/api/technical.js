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

    const {email, service, type, bModel, issue1, issue2, issue3, nTeam, cDetail } = req.body;
    console.log(req.body, "req body")
    const mailDetails = {
        // Update your email here
        to: 'saqib.browser@gmail.com',
        from: `${email}`,
        subject: 'Hi there',
        text: cDetail,
        html: `
            <b>Service:</b> ${service} <br /> 
            <b>Type:</b> ${type} <br /> 
            <b>Business Model:</b> ${bModel} <br /> 
            <b>Issue No. 1:</b> ${issue1} <br /> 
            <b>Issue No. 2:</b> ${issue2} <br /> 
            <b>Issue No. 3:</b> ${issue3} <br /> 
            <b>Number of Team:</b> ${nTeam} <br /> 
            <b>Contact Details:</b> ${cDetail} 
            <b>Email:</b> ${email} 
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