const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');  // Sử dụng đúng cú pháp cho express-handlebars
const app = express();
const port = 3000;
const route = require('./routes')

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname , 'public')));
app.use(express.urlencoded(
  {
    extended: true
  }
));
app.use(express.json());

app.engine('hbs', engine({
  extname : '.hbs'
}));  // Sửa cách sử dụng engine của express-handlebars

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));  // Đường dẫn đến thư mục views

// ROUTER
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);  // Thêm dấu hai chấm trong console log
});
