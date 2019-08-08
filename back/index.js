const Express = require('express');
const Cors = require('cors');
const BodyParser = require('body-parser');
const mySql = require("mysql");
const config = require("./ConfigMySql.js");
const Path = require("path");

const Port = 5000;

const App = Express();
App.use(Cors());
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({ extended: true }));
App.use(Express.static(Path.join(__dirname, '../jeanvernus.fr')));
App.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


App.post('/sendForm', (req, res) => {
  console.log('req.body', req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const job = req.body.job;
  const company = req.body.company;
  const Text = req.body.Text;
  const Email = req.body.Email;

  const addUsers = `INSERT INTO portefolioUsers ( Nom, Prenom, Email, Poste, Societe) VALUES (${mySql.escape(lastName)}, ${mySql.escape(firstName)}, ${mySql.escape(Email)}, ${mySql.escape(job)}, ${mySql.escape(company)})`
  config.query(addUsers, (err, resultAddUsers) => {
    if (err) {
      res.status(200).json('error')
      console.log(err);
    }
    else {
      res.status(200).json('register ok')
      console.log('resultAddUsers', resultAddUsers);
    }
  })

  const nodemailer = require("nodemailer");
  const { google } = require("googleapis");
  const OAuth2 = google.auth.OAuth2;
  const oauth2Client = new OAuth2(
    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  });
  const accessToken = oauth2Client.getAccessToken()

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      clientId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      clientSecret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      refreshToken: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      accessToken: accessToken
    }
  });
  let mailOptions = {
    from: `${Email}`,
    to: '"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    subject: "Portefolio",
    text: "",
    html: `${firstName}"..."${lastName}<br />${job}"..."${company}<br />${Text}`,
  };
  transporter.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
  });
})

App.get('/*', function (req, res) {
  res.sendFile(Path.join(__dirname, '../jeanvernus.fr/index.html'))
})

App.listen(Port, () => {
  console.log(`server started on ${Port}`);
})