var nodemailer = require("nodemailer");

console.log("Words, and, stuff")

// let transporter = nodemailer.createTransport(transport,[defaults]);

$("#submit").click(function(){
    var name = $('input[name="name"]').val();
    console.log("Name: ", name);

var message = {
    from: "from",
    to: 'jeffreyfleer@gmail.com',
    subject: 'Message title',
    text: 'Plaintext version of the message',
    html: '<p>HTML version of the message</p>'
};

// transporter.sendMail(message,[ err])
})
