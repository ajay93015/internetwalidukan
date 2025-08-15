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

app.get('/',renderPage('int'));
app.get('/login',renderPage('log'));

app.listen(80);