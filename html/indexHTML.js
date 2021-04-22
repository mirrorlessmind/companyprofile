function indexHTML(data) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>My Team</title>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.5.0/cerulean/bootstrap.css" rel="stylesheet" crossorigin="anonymous">
          <link rel="stylesheet" href="style.css">
          <script src="https://kit.fontawesome.com/fc7567fd01.js" crossorigin="anonymous"></script>
          <style>
              .jumbotron {
                  background-color: navy;
              }
              body {
                  background-color: white;
              }
              h1 {
                  color: white;
              }
              .card-header, .card-body {
                  background-color: white;
              }
          </style>
      </head>
      
      <body>
          <div class="container-fluid">
              <div class="row">
                  <div class="col-12 jumbotron mb-3 team-heading">
                      <h1 class="text-center">Check Out My Awesome Team</h1>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row">
                  <div class="team-area col-12 d-flex justify-content-center">
                      ${data}
                  </div>
              </div>
          </div>
      </body>
      
      </html>
  `;
  }
  // This to export to thema in export
  module.exports = indexHTML;
