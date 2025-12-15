const app = require("express")();
app.use(require("express").static("public"))
    .set('view engine', 'ejs')
    .set('views', __dirname + '/views');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));



const renderPage = (page, options = {}) => (req, res) => {
 // const user = req.session?.user || undefined;
  res.render(page, {
    ...options,
 //   user // pass user to template
  });
};
/*
app.get('/',(req,res)=>{
    res.end('working page');
});

//*/
app.get('/',renderPage('int'));
app.get('/login',renderPage('log'));

app.use((req,res,next)=>{
    res.end(`
    <html>
    <hr>
    <center>because of updation some routes are under mentinance..... "use this for Home <a onclick='window.location.href="/"'>Go To Home</a>" </center>
    </hr>
    `);
})

//module.exports = app;

  app.listen(
  { port: process.env.PORT, host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      //console.error(err);
      process.exit(1);
    }
   // console.log(`Your app is listening on ${address}`);
  }
);







