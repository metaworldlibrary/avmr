<?php
if(session_id() == ''){
  session_start();
}
//var_dump($_SESSION);
?>
<!doctype html>
<html lang="en">
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Amazing view</title>

  <!-- Icons-->
  <link rel="icon" href="img/logo2.ico">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">
  <!-- Custom CSS-->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/core.css">
  <link rel="stylesheet" href="css/admin.css">
</head>

<body class="site">
  <?php include "views/navbar.html";?>

  <!--Content-->
  <div class="site-content container-fluid row-column">
    <?php
      include "views/home.html";
      include "views/room-rates.html";
      include "views/sign-up.html";
      include "views/book-confirmation.html";
      include "views/activities.html";
      include "views/gallery.html";
      include "views/about.html";
      include "views/contactus.html";
      include "views/sign-in.html";
      include "views/dashboard.html";
    ?>
  </div>
  <!--Content-->

  <?php include "views/footer.html";?>

  <!-- JQuery, needed for bootstrap and animations-->
  <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
  <!-- Popper, needed for bootstrap features-->
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <!-- Bootstrap core-->
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  <!-- Custom JS/JQuery Script-->
  <script src="https://unpkg.com/feather-icons/dist/feather.min.js"></script>
  <script>
  feather.replace()
  </script>
  <script src="js/main.js"></script>
  <script src="js/site-lib.js"></script>
</body>
</html>
