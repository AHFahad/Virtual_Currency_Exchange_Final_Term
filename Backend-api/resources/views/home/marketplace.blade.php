<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <script src="https://kit.fontawesome.com/d6f10cd10f.js" crossorigin="anonymous"></script>

    <title>MarketPlace</title>
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
                    <a class="nav-link" href="{{ route('home.announcement') }}">Announcement</a>
                        
                    </li>
                    
                    <li class="nav-item">
                    <a class="nav-link" href="{{ route('home.contact') }}">Contact support</a>
                        
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('home.help') }}">Help</a>
                    </li>

                

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            MarketPlace
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="{{ route('home.marketplace') }}">Bkash to Rocket</a></li>
                            <li><a class="dropdown-item" href="{{ route('home.marketplace') }}">Bkash to Nagad</a></li>
                            <li><a class="dropdown-item" href="{{ route('home.marketplace') }}">Nagad to Bkash</a></li>
                            <li><a class="dropdown-item" href="{{ route('home.marketplace') }}">Nagad to Rocket</a></li>
                            <li><a class="dropdown-item" href="{{ route('home.marketplace') }}">Paypal to Bkash</a></li>
                            <li><a class="dropdown-item" href="{{ route('home.marketplace') }}">Paypal to Nagad</a></li>
                            <li><a class="dropdown-item" href="{{ route('home.marketplace') }}">Rocket to Paypal</a></li>
                            <li><a class="dropdown-item" href="{{ route('home.marketplace') }}">Steam Wallet</a></li>
                          
                          <!-- 
                          
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <!-- <li><a class="dropdown-item" href="#">Announcement</a></li> 
                            
                            -->

                            
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('home.chatbox') }}">Chat</a>
                    </li>


                </ul>

                <!--Navbar-->
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <!--/.Navbar-->



            </div>





        </div>
    </nav>


    {{-- cards --}}

    <div class="text-center mt-5">
        <h1>MarketPlace</h1>

        ​

    </div>

    <br>
    
    <div class="container ">

        {{-- row 1 --}}
        <div class="row ">

            <div class="col-sm-4">
                <div class="card" style="max-width: 18rem;">
                    <picture>
                        <source srcset="https://i.gifer.com/CDMk.gif" type="image/svg+xml">
                        <img src="..." class="img-fluid img-thumbnail" alt="...">
                    </picture>
                    <!-- <img src="..." class="img-thumbnail" alt="..."> -->
                    <div class="card-body">



                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price : 760</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">Ratting : 4.3/5</li>
                    </ul>
                    <div class="card-body">
                    <center>
                        <!-- <a class="nav-link" href="{{ route('home.help') }}">Help</a> -->
                        <a href="{{ route('home.postCard') }}" class="btn btn-primary">Go to post</a>
                    </center>
                        <!-- <a href="#" class="btn btn-info">go to shop</a> -->
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="card" style="max-width: 18rem;">
                    <picture>
                        <source srcset="https://i.gifer.com/CDMk.gif" type="image/svg+xml">
                        <img src="..." class="img-fluid img-thumbnail" alt="...">
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price : 400</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">Ratting : 4.6/5</li>
                    </ul>
                    <div class="card-body">
                    <center>
                        <a href="{{ route('home.postCard') }}" class="btn btn-primary">Go to post</a>
                    </center>
                        <!-- <a href="#" class="btn btn-info">go to shop</a> -->
                    </div>
                </div>
            </div>


            <div class="col-sm-4">
                <div class="card" style="max-width: 18rem;">
                    <picture>
                        <source srcset="https://i.gifer.com/CDMk.gif" type="image/svg+xml">
                        <img src="..." class="img-fluid img-thumbnail" alt="...">
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price : 400</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">Ratting : 3.3/5</li>
                    </ul>
                    <div class="card-body">
                    <center>
                        <a href="{{ route('home.postCard') }}" class="btn btn-primary">Go to post</a>
                    </center>
                        <!-- <a href="#" class="btn btn-info">go to shop</a> -->
                    </div>
                </div>

            </div>
        </div>

    <br>

        {{-- row 2 --}}
        <div class="row ">

            <div class="col-sm-4">
                <div class="card" style="max-width: 18rem;">
                    <picture>
                        <source srcset="https://i.gifer.com/CDMk.gif" type="image/svg+xml">
                        <img src="..." class="img-fluid img-thumbnail" alt="...">
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price : 760</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">Ratting : 4.3/5</li>
                    </ul>
                    <div class="card-body">
                    <center>
                    <a href="{{ route('home.postCard') }}" class="btn btn-primary">Go to post</a>
                    </center>
                        <!-- <a href="#" class="btn btn-info">go to shop</a> -->
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="card" style="max-width: 18rem;">
                    <picture>
                        <source srcset="https://i.gifer.com/CDMk.gif" type="image/svg+xml">
                        <img src="..." class="img-fluid img-thumbnail" alt="...">
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price : 400</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">Ratting : 4.6/5</li>
                    </ul>
                    <div class="card-body">
                    <center>
                        <a href="{{ route('home.postCard') }}" class="btn btn-primary">Go to post</a>
                    </center>
                        <!-- <a href="#" class="btn btn-info">go to shop</a> -->
                    </div>
                </div>
            </div>


            <div class="col-sm-4">
                <div class="card" style="max-width: 18rem;">
                    <picture>
                        <source srcset="https://i.gifer.com/CDMk.gif" type="image/svg+xml">
                        <img src="..." class="img-fluid img-thumbnail" alt="...">
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price : 400</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">Ratting : 3.3/5</li>
                    </ul>
                    <div class="card-body">
                    <center>
                       <a href="{{ route('home.postCard') }}" class="btn btn-primary">Go to post</a>
                    </center>
                        <!-- <a href="#" class="btn btn-info">go to shop</a> -->
                    </div>
                </div>

            </div>
        </div>


        <br>

        {{-- row 3 --}}
        <div class="row ">

            <div class="col-sm-4">
                <div class="card" style="max-width: 18rem;">
                    <picture>
                        <source srcset="https://i.gifer.com/CDMk.gif" type="image/svg+xml">
                        <img src="..." class="img-fluid img-thumbnail" alt="...">
                    </picture>
                    <!-- <img src="..." class="img-thumbnail" alt="..."> -->
                    <div class="card-body">



                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price : 760</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">Ratting : 4.3/5</li>
                    </ul>
                    <div class="card-body">
                    <center>
                        <!-- <a class="nav-link" href="{{ route('home.help') }}">Help</a> -->
                        <a href="{{ route('home.postCard') }}" class="btn btn-primary">Go to post</a>
                    </center>
                        <!-- <a href="#" class="btn btn-info">go to shop</a> -->
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="card" style="max-width: 18rem;">
                    <picture>
                        <source srcset="https://i.gifer.com/CDMk.gif" type="image/svg+xml">
                        <img src="..." class="img-fluid img-thumbnail" alt="...">
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price : 400</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">Ratting : 4.6/5</li>
                    </ul>
                    <div class="card-body">
                    <center>
                        <a href="{{ route('home.postCard') }}" class="btn btn-primary">Go to post</a>
                    </center>
                        <!-- <a href="#" class="btn btn-info">go to shop</a> -->
                    </div>
                </div>
            </div>


            <div class="col-sm-4">
                <div class="card" style="max-width: 18rem;">
                    <picture>
                        <source srcset="https://i.gifer.com/CDMk.gif" type="image/svg+xml">
                        <img src="..." class="img-fluid img-thumbnail" alt="...">
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price : 400</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">Ratting : 3.3/5</li>
                    </ul>
                    <div class="card-body">
                    <center>
                        <a href="{{ route('home.postCard') }}" class="btn btn-primary">Go to post</a>
                    </center>
                        <!-- <a href="#" class="btn btn-info">go to shop</a> -->
                    </div>
                </div>

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
