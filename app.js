const nodemailer = require(`nodemailer`);
const express = require("express");
const bp = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3030;
const enviarMail = require('./sendMail');

//seteamos la view engine a EJS
app.set('view engine', 'ejs');

//seteamos la carpera public
app.use(express.static('public'));
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


//pagina de inicio, renderiso el index
app.get("/", (req, res) => {
    res.render("index");
})

// enviar correo
app.post("/send", async (req,res) =>{
    console.log(req.body);
    enviarMail(req.body.txt, req.body.subj, req.body.guy);
    res.redirect("/")
})


// puerto
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});

