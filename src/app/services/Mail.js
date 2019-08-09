import nodemailer from 'nodemailer';
import exphbs from 'express-handlebars';
import nodemailerhbs from 'nodemailer-express-handlebars';

import { resolve } from 'path';
import mailConfig from '../../config/mail';

const transport = nodemailer.createTransport(mailConfig);
const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails');

transport.use(
  'compile',
  nodemailerhbs({
    viewEngine: exphbs.create({
      // layoutsDir: resolve(viewPath, 'layouts'),
      partialsDir: resolve(viewPath, 'partials'),
      // defaultLayout: 'default',
      // extname: '.hbs',
    }),
    viewPath,
    extName: '.hbs',
  })
);

export default transport;
