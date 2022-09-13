// console.log("hello node js")

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>chapter 4 practice</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Koulen&display=swap" rel="stylesheet">
      <style>
          *{
              margin: 0;
              padding: 0;;
          }
          nav{
              padding: 20px;
              background-color: rgb(40, 74, 74);
              color:aliceblue;
          }
          li{
              display: inline;
              padding: 8px;
          }
          a{
              display: inline;
              text-decoration: none;
              color: white;
          }
  
          h4{
              line-height: 1.4;
          }
          .left{
              padding: 0 5px;
              box-sizing: border-box;
              background-color: antiquewhite;
              color: black;
              display: inline-block;
              width: 50%;
              height: 90vh;
          }
          .right{
              padding: 0 5px;
              box-sizing: border-box;
              display: inline-block;
              color: black;
              width: 50%;
              height: 90vh;
              background-color: rgb(190, 146, 89);
          }
          .center{
              font-family: 'Koulen', cursive;
              text-transform: uppercase;
              text-align: center;
              background-color: black;
              color:cornflowerblue;
          }
  
      </style>
  </head>
  <body>
      <header>
          <nav>
              <ul>
                  <li><a href="#">HOME</a></li>
                  <li><a href></a>ABOUT</a></li>
                  <li><a href="#">CONTACT</a></li>
              </ul>
          </nav>
      </header>
      <main>
          <div class = "left">
              <h3>I am on left</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam doloremque architecto. Quasi eligendi voluptas adipisci fugit veritatis reprehenderit minima!</p>
          </div><div class = "right">
              <h4>I am on right</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum accusantium ipsum maxime accusamus, expedita provident aliquid!</p>
          </div>
      </main>
      <footer>
          <p class = "center" >Copyright &copy; practice set 4 - All rights reserved</p>
      </footer>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});