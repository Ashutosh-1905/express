// const express = require("express");
// const app = express();
// const expressSession = require("express-session");

// app.use(function(req, res, next){
//     console.log("middile ware");
//     next();
// });

// app.use(expressSession({
//     secret:"random stuff",
//     resave:false,
//     saveUninitialized:false
// }))
// app.get("/", function(req, res, next){
//     res.send("Jai Shree Mahakal");
//     next();
// });

// app.get("/create", function(req, res, next){
//     req.session.polo = true;
//     res.send("done");
//     next();
// });

// app.get("/check", function(req, res, next){
//    console.log(req.session.polo);
//    next();
// });

// app.get("*", function(rea,res,next){
//     res.send("Bhai esa Kuch Nahi Hota hai");
//     next();
// });

// app.listen(3000, function(){
//     console.log("Chal Gaya");
// })


// # Connect Flash Middileware

const express = require("express");
const app = express();
const expressSession = require("express-session");
const flash = require("connect-flash");

app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:"anything you like"
}));
app.use(flash());

app.get("/",function(req, res, next){
    req.flash("error", "Invalid Crededntials");
    res.redirect("/error");
    next();
})

app.get("/error", function(req, res, next){
    let message = res.flash("error");
    res.send(message);
    next();
});

app.listen(3000);