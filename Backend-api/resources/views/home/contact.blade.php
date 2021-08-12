<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <title>Contact</title>
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
                        <a class="nav-link" href="{{ route('home.help') }}">Help</a>
                        
                    </li>

                
        </div>
    </nav>



    <div class="text-center mt-5">
        <h1>Contact support</h1>
        <br>

        <h4>1.Md. Abu Zehad Foysal (xyz@gmail.com)</h4>
        <h4>2.Fahad Mollah (xyaz@gmail.com)</h4>
        <h4>3.Talha Mahbub (xyfz@gmail.com)Contact Support</h4>
        <h4>4.Md. Mehedi (xygz@gmail.com)</h4>
        
        <br>



<center>
      <div class="modal-body" style="max-width: 940px;">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-6">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a class="btn btn-primary" href="{{ route('home.index') }}">Back</a>
        <a class="btn btn-primary" href="{{ route('login') }}">Send message</a>
        <!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Send message</button> -->




<!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" >Send message</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
    <center>
        <h5 class="modal-title" >SENT!</h5>
    </center>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> -->

<!-- 
      <div class="modal-body" style="max-width: 940px;">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-6">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div> -->
      <!-- <div class="modal-footer">
    <center>
        <a class="btn btn-primary" href="{{ route('home.contact') }}">Close</a>
    </center>
      </div>
</center> -->





    </div>
    

 
    
    





    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous">
    </script>
</body>

</html>
