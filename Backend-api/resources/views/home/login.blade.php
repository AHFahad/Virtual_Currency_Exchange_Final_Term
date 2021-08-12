<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <title>Login</title>
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



    <div class="text-center mt-5">
        <h1>Welcome to Login </h1>
    </div>
    <div class="container">
        <form style="max-width:600px;margin:auto;">
            <div class="mb-3 mt-5">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>

            <div class="col-12">
            <label for="exampleInputEmail1" class="form-label">Login As</label>
            <select class="form-select" aria-label="...">
                <option selected>none</option>
                <option value="1">Admin</option>
                <option value="2">Seller</option>
                <option value="3">Buyer</option>
              </select>
        </div>
        <br>

            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Remember me</label>
            </div>

        

            <button type="submit" class="btn btn-primary">Signin</button>
            <button type="submit" class="btn btn-primary">Signup</button>
            <a class="btn btn-primary" href="{{ route('home.index') }}">Back</a>
            
        </form>
    </div>

    
    





    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous">
    </script>
</body>

</html>
