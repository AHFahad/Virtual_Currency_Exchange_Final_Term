<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('pageTitle')</title>
</head>

<body class="clickup-chrome-ext_installed">
    <form id="logout-form" action="{{ route('logout') }}" method="GET" style="display: none;">
        @csrf
    </form>
        <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
<div class="container-fluid">
    <!-- Toggler -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Brand -->
    <a class="navbar-brand pt-0" href="{{ route('home.index') }}">
        {{-- <img  src="{{ asset('argon') }}/img/brand/blue.png" class="navbar-brand-img" align="left-center"  margin-left="100" border-left-width: 30px; alt="..."> --}}
        <h1><b>VCES</b></h1>
    </a>
    <!-- User -->
    <ul class="nav align-items-center d-md-none">
        <li class="nav-item dropdown">
            <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="media align-items-center">
                    <span class="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" src="@yield('profileImage')">
                    </span>
                </div>
            </a>
            <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                <div class=" dropdown-header noti-title">
                    <h6 class="text-overflow m-0">Welcome!</h6>
                </div>
                <a href="@yield('visitProfile')" class="dropdown-item">
                    <i class="ni ni-single-02"></i>
                    <span>My profile</span>
                </a>
                <a href="{{ route('seller.report') }}" class="dropdown-item">
                    <i class="ni ni-support-16"></i>
                    <span>Report Problems</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="{{ route('logout') }}" class="dropdown-item" onclick="event.preventDefault();
                document.getElementById('logout-form').submit();">
                    <i class="ni ni-user-run"></i>
                    <span>Logout</span>
                </a>
            </div>
        </li>
    </ul>
    <!-- Collapse -->
    <div class="collapse navbar-collapse" id="sidenav-collapse-main">
        <!-- Collapse header -->
        <div class="navbar-collapse-header d-md-none">
            <div class="row">
                <div class="col-6 collapse-brand">

                        <img src="{{ asset('argon') }}/img/brand/blue.png">

                </div>
                <div class="col-6 collapse-close">
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
        <!-- Form search -->

        <!-- Navigation -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="{{ route('seller.dashboard') }}">
                    <i class="ni ni-tv-2  text-primary"></i> Dashboard
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('seller.prime') }}">
                    <i class="ni ni-spaceship  text-primary"></i> Upgrade to Prime Seller!
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('seller.product.create') }}">
                    <i class="ni ni-bag-17  text-primary"></i> Create Sell Post
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('seller.order.index') }}">
                    <i class="ni ni-archive-2  text-primary"></i> Order List
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('seller.statement.index') }}">
                    <i class="ni ni-single-copy-04  text-primary"></i> Statements
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('seller.edit.profile') }}">
                    <i class="ni ni-ruler-pencil  text-primary"></i> Edit Profile
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('seller.product.index') }}">
                    <i class="ni ni-ungroup  text-primary"></i> My products
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('seller.chat') }}">
                    <i class="ni ni-ungroup  text-primary"></i> Chat
                </a>
            </li>






        </ul>



    </div>
</div>
</nav>
    <div class="main-content">
        <!-- Top navbar -->
<nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
<div class="container-fluid">
    <!-- Brand -->
    <p class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="/home">@yield('header')</p>
    <!-- Form search-->
    <!-- User -->
    <ul class="navbar-nav align-items-center d-none d-md-flex">
        <div class="media-body ml-2 d-none d-lg-block">
            <p class="mb-0 text-sm  font-weight-bold" style=' color: white;'> @yield('points') </p>
        </div>
        <li class="nav-item dropdown">
            <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="media align-items-center">
                    <span class="avatar avatar-sm rounded-circle">
                        <img alt="Image placeholder" src="@yield('profileImage')">
                    </span>
                    <div class="media-body ml-2 d-none d-lg-block">
                        <span class="mb-0 text-sm  font-weight-bold">@yield('profileName')</span>
                    </div>
                </div>
            </a>
            <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                <div class=" dropdown-header noti-title">
                    <h6 class="text-overflow m-0">Welcome!</h6>
                </div>
                <a href="@yield('visitProfile')" class="dropdown-item">
                    <i class="ni ni-single-02"></i>
                    <span>My profile</span>
                </a>
                <a href="{{ route('seller.report') }}" class="dropdown-item">
                    <i class="ni ni-support-16"></i>
                    <span>Report Problems</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="{{ route('logout') }}" class="dropdown-item" onclick="event.preventDefault();
                document.getElementById('logout-form').submit();">
                    <i class="ni ni-user-run"></i>
                    <span>Logout</span>
                </a>
            </div>
        </li>
    </ul>
</div>
</nav>
<div class="bg-blue pb-8 pt-5 pt-md-3 header-in">




</div>

<div class="container">
    @yield('container')
</div>

{{-- Footer code --}}

<footer class="footer fixed-bottom" style='position:relative;bottom:0;'>
    <div class="row align-items-center justify-content-xl-between">
        <div class="col-xl-6">
            <div class="copyright text-center text-xl-left text-muted">
                 © 2021 <a href="https://github.com/AzfFoysal/Virtual_Currency_Exchange" class="font-weight-bold ml-1" target="_blank">VCES</a>

            </div>
        </div>
        <div class="col-xl-6">
                <ul class="nav nav-footer justify-content-center justify-content-xl-end">
                    <li class="nav-item">
                        <a href="https://github.com/AzfFoysal" class="nav-link" target="_blank">AzfFoysal</a>
                    </li>
                    <li class="nav-item">
                        <a href="https://github.com/AHFahad" class="nav-link" target="_blank">AHFahad</a>
                    </li>
                    <li class="nav-item">
                        <a href="https://github.com/talha-51" class="nav-link" target="_blank">MD. MAHBUBUR RAHMAN</a>
                    </li>
                    <li class="nav-item">
                        <a href="https://github.com/Mahbubur-Rahman-Mehedi" class="nav-link" target="_blank">Mahbubur Rahman</a>
                    </li>

                    <li class="nav-item">

                    </li>
                </ul>
        </div>
    </div>
</footer>
</div>
</div>





    <script src="{{ asset('argon') }}/vendor/jquery/dist/jquery.min.js"></script>
    <script src="{{ asset('argon') }}/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Argon JS -->
    <script src="{{ asset('argon') }}/js/argon.js?v=1.0.0"></script>
</body>
</html>
