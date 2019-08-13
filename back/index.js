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
  const Nombre = req.body.Nombre;
  const Email = req.body.Email;

  const addUsers = `INSERT INTO portefolioUsers ( Nom, Prenom, Email, Poste, Societe) VALUES (${mySql.escape(lastName)}, ${mySql.escape(firstName)}, ${mySql.escape(Email)}, ${mySql.escape(job)}, ${mySql.escape(company)})`
  config.query(addUsers, (err, resultAddUsers) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log('resultAddUsers', resultAddUsers);
    }
  })

  const nodemailer = require("nodemailer");
  const { google } = require("googleapis");
  const OAuth2 = google.auth.OAuth2;
  const oauth2Client = new OAuth2(
    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  });
  const accessToken = oauth2Client.getAccessToken()

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "jeannywcs@gmail.com",
      clientId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      clientSecret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      refreshToken: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      accessToken: accessToken
    }
  });
  let mailOptions = {
    from: `${Email}`,
    to: '"JeanVernus"<jeannywcs@gmail.com>',
    subject: "Portefolio",
    text: "",
    html: `${firstName}"..."${lastName}<br />${job}"..."${company}<br />${Text}<br />${Nombre}`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err.message);
      return process.exit(1)
    }
    else {
      console.log(info);
      return res.status(200).json({string:'badMail'})
    }
  })
})

App.get('/*', function (req, res) {
  res.sendFile(Path.join(__dirname, '../jeanvernus.fr/index.html'))
})

App.listen(Port, () => {
  console.log(`server started on ${Port}`);
})