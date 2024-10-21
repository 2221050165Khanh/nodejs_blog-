const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');  // Sử dụng đúng cú pháp cho express-handlebars
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname , 'public')));

app.engine('hbs', engine({
  extname : '.hbs'
}));  // Sửa cách sử dụng engine của express-handlebars

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));  // Đường dẫn đến thư mục views

app.get('/', (req, res) => {
  res.render('home');  // Render file home.handlebars trong thư mục views
});
app.get('/news', (req, res) => {
  res.render('news'); 
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);  // Thêm dấu hai chấm trong console log
});
