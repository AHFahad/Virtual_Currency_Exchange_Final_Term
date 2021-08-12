@include('layouts.app')
@extends('layouts.seller')

@section('pageTitle',"Seller Home")


@section('profileImage')
@if ($user->profile_picture) {{asset($user->profile_picture)}} @else {{asset('seller/image/demo_profile.png')}} @endif
@endsection
@section('profileName')
{{ $user->name }}
@endsection
@section('points')
@if ($user->prime_status=='prime')
    Prime User
@else
You Have : {{ $user->points }} Points
@endif
@endsection
@section('visitProfile')
{{ route('seller.profile.index') }}
@endsection

@section('header','Home')

@section('container')

    @if (\Session::has('success'))
        <div class="alert alert-success">
            <ul>
                <li>{!! \Session::get('success') !!}</li>
            </ul>
        </div>
    @endif
    @if (session()->has('msg'))
        <br>
        <div class="alert alert-primary" role="alert">
            <strong>{{session('msg')}}</strong>
        </div>
    @endif
<form method="post">
    <div class=" row align-items-center ">
        <div class="col">
            <div class="form-group">
                <label>Starting Date</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                    </div>
                    <input class="form-control" type='date' name="start_date" value="" >
                </div>
            </div>
        </div>
        <div class="col">
            <div class="form-group">
                <Label>Ending Date</Label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                    </div>
                    <input class="form-control" type='date' name="end_date" value="">
                </div>
            </div>
        </div>
        <div class="col">
            <div class="form-group">
                <br>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <input type='submit' class="btn btn-primary"value="Get">
                    </div>
                 </div>
            </div>
        </div>
    </div>

</form>



<div class="row mb-5">
    <div class="col-xl-3 col-md-4">
        <div class="card card-stats">
            <!-- Card body -->
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <h5 class="card-title text-uppercase text-muted mb-0">Processing Orders</h5>
                        <span class="h2 font-weight-bold mb-0">{{ $processingOrder }}</span>
                    </div>
                    <div class="col-auto">
                        <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                            <i class="ni ni-delivery-fast"></i>
                        </div>
                    </div>
                </div>
                <p class="mt-3 mb-0 text-sm">
                </p>
            </div>
        </div>
    </div>


        <div class="col-xl-3 col-md-4">
            <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <h5 class="card-title text-uppercase text-muted mb-0">Completed Orders</h5>
                            <span class="h2 font-weight-bold mb-0">{{ $completedOrder }}</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                <i class="ni ni-check-bold"></i>
                            </div>
                        </div>
                    </div>
                    <p class="mt-3 mb-0 text-sm">
                    </p>
                </div>
            </div>
        </div>


            <div class="col-xl-3 col-md-4">
                <div class="card card-stats">
                    <!-- Card body -->
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <h5 class="card-title text-uppercase text-muted mb-0">Cancelled Orders</h5>
                                <span class="h2 font-weight-bold mb-0">{{ $cancelledOrder }}</span>
                            </div>
                            <div class="col-auto">
                                <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                    <i class="ni ni-scissors"></i>
                                </div>
                            </div>
                        </div>
                        <p class="mt-3 mb-0 text-sm">
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-4">
                <div class="card card-stats">
                    <!-- Card body -->
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <h5 class="card-title text-uppercase text-muted mb-0">Total Earning</h5>
                                <span class="h2 font-weight-bold mb-0">{{ $total_earning }}</span>
                            </div>
                            <div class="col-auto">
                                <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                    <i class="ni ni-money-coins"></i>
                                </div>
                            </div>
                        </div>
                        <p class="mt-3 mb-0 text-sm">
                        </p>
                    </div>
                </div>
            </div>
</div>

@endsection




