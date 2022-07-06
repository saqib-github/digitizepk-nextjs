export default async (req, res) => {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(
    "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"
  );
  const { name, email, number, subject, text } = req.body;
  const msg = {
    to: "stickableshop@gmail.com", // Change to your recipient
    from: "info@digitizepk.com", // Change to your verified sender
    subject: `${subject}`,
    text: `Name: ${name}, Message: ${text}`,
    html: `<strong>Name: ${name}, Email: ${email}, Number: ${number}, Message: ${text} </strong>`
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.status(200).send("Email send successfully");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error proccessing charge");
    });
};
