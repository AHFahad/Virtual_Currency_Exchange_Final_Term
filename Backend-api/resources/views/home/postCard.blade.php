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
<br>

<center> 

<div class="card mb-3" style="max-width: 640px;">
  <div class="col">
    <div class="card">
      <img src="{{asset('seller/image/product/BtoR.png')}}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">Bkash to Rocket</h5>
                        <p class="card-text">Bkash to Rocket exchange available minimum 1000 taka</p>
      </div>
    </div>
  </div>

</center>
    <br>
    
    <center>
          <a class="btn btn-primary" href="{{ route('login') }}">Buy</a>    
          <!-- <button type="submit" class="btn btn-primary btn-lg" href="{{ route('home.chatbox') }}">Chat</button> -->
          <a class="btn btn-primary" href="{{ route('login') }}">Write A Message</a>



          
    </center>




    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous">
    </script>
</body>

</html>
