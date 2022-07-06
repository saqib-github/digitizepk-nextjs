

export default async (req, res) => {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(
    "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"
  );
  // console.log(req.body)

  const {
    service,
    email,
    pTeam1,
    pTeam2,
    pTeam3,
    bModel,
    tPeriod,
    issue1,
    issue2,
    issue3,
    nTeam,
    cDetail,
  } = req.body;
  console.log(req.body, "req body");
  const mailDetails = {
    // Update your email here
    to: "stickableshop@gmail.com", // Change to your recipient
    from: "info@digitizepk.com",
    subject: "Hi there",
    text: cDetail,
    html: `
            <b>Service:</b> ${service} <br /> 
            <b>Business Model:</b> ${bModel} <br /> 
            <b>Issue No. 1:</b> ${issue1} <br /> 
            <b>Issue No. 2:</b> ${issue2} <br /> 
            <b>Issue No. 3:</b> ${issue3} <br /> 
            <b>Number of Team:</b> ${nTeam} <br /> 
            <b>Number of Time of Period:</b> ${tPeriod} <br /> 
            <b>purpose 1:</b> ${pTeam1} <br /> 
            <b>purpose 2:</b> ${pTeam2} <br /> 
            <b>purpose 3:</b> ${pTeam3} <br /> 
            <b>Contact Details:</b> ${cDetail} 
            <b>Email:</b> ${email} 
        `,
  };
  sgMail
  .send(mailDetails)
  .then(() => {
    console.log("Email sent");
    res.status(200).send("Email send successfully");
  })
  .catch((error) => {
    console.error(error);
    res.status(500).send("Error proccessing charge");
  });
};
