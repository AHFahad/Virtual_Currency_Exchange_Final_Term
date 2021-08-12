<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

        <script src="https://kit.fontawesome.com/d6f10cd10f.js" crossorigin="anonymous"></script>

    <!-- <title>Card</title> -->
</head>

<body>

    {{-- nav bar --}}
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">VCES</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link"  href="{{ route('home.index') }}">Home</a>
                    </li>
                   
                    <li class="nav-item">
                    <a class="nav-link" href="{{ route('home.contact') }}">Contact support</a>
                        
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('home.help') }}">Help</a>
                    </li>

                   
        </div>
    </nav>



<div class="text-center mt-3">
        <h1>Announcements</h1>
        <br>
        <br>
        <br>
        <br>
        
        <!-- <div class="clearfix"> -->
  <!-- <img src="https://image.freepik.com/free-vector/megaphone-with-important-announcement-flat_149152-517.jpg" class="col-md-3 float-md-end  " alt="..."> -->

    <div class="card bg-dark ">
     <img src="https://image.freepik.com/free-vector/megaphone-with-important-announcement-flat_149152-517.jpg" class="rounded mx-auto d-block" alt="...">
        <div class="card-img-overlay">
            <h5 class="card-title">Notice regarding Purchase</h5>
             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. <br> This content is a little bit longer.</p>
             
             <br><br><br><br><br><br><br><br>
            <p class="card-text">Last updated 1 day ago</p>
        </div>
    </div>

    <br>

    <div class="card bg-dark ">
     <img src="https://image.freepik.com/free-vector/megaphone-with-important-announcement-flat_149152-517.jpg" class="rounded mx-auto d-block" alt="...">
        <div class="card-img-overlay">
            <h5 class="card-title">Contact Support Updated</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. <br> This content is a little bit longer.</p>
             
             <br><br><br><br><br><br><br><br>
            <p class="card-text">Last updated 3 day ago</p>
        </div>
    </div>

    <br>

    <div class="card bg-dark ">
     <img src="https://image.freepik.com/free-vector/megaphone-with-important-announcement-flat_149152-517.jpg" class="rounded mx-auto d-block" alt="...">
        <div class="card-img-overlay">
            <h5 class="card-title">New Feature up coming</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. <br> This content is a little bit longer.</p>
             
             <br><br><br><br><br><br><br><br>
            <p class="card-text">Last updated 4 day ago</p>
        </div>
    </div>

    <br>
    
    <div class="card bg-dark ">
     <img src="https://image.freepik.com/free-vector/megaphone-with-important-announcement-flat_149152-517.jpg" class="rounded mx-auto d-block" alt="...">
        <div class="card-img-overlay">
            <h5 class="card-title">Register For Seller</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. <br> This content is a little bit longer.</p>
             
             <br><br><br><br><br><br><br><br>
            <p class="card-text">Last updated 5 days ago</p>
        </div>
    </div>



</div>

    <br>
    
<footer class="bg-dark text-center text-white container-fluid">
        <!-- Grid container -->
        <div class="container-fluid">
          <!-- Section: Social media -->
          <section class="mb-6">
            <!-- Facebook -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-facebook-f"></i
            ></a>

            <!-- Twitter -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-twitter"></i
            ></a>

            <!-- Google -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-google"></i
            ></a>

            <!-- Instagram -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-instagram"></i
            ></a>

            <!-- Linkedin -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-linkedin-in"></i
            ></a>

            <!-- Github -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-github"></i
            ></a>
          </section>
          <!-- Section: Social media -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
           © 2021 Copyright:
    <a class="text-light" href="https://vcesbd.com/">VCESBD.com</a>
        </div>
        <!-- Copyright -->
      </footer>





    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous">
    </script>
</body>

</html>
