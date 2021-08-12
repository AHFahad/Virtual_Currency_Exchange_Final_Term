@include('layouts.app')
@extends('layouts.seller')

@section('pageTitle',"Upgrade to prime seller")



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
@section('header','Upgrade to prime seller')

@section('container')

<form method="post">


    <div class="form-group">
        <label  class="form-label">Select Package</label>
        <select class="form-control" aria-label="Default select example" name="package">
            <option selected value='0'>none</option>
            <option value="1">1 Month   900   Taka</option>
            <option value="2">3 Month   2500  Taka</option>
            <option value="3">6 Month   4700  Taka</option>
            <option value="3">1 Year    9000  Taka</option>
          </select>
          <label class="errorText"> {{ $errors->first('package')}}</label>
    </div>

    <div class="form-group">
        <label  class="form-label">Select Payment method</label>
        <select class="form-control" aria-label="Default select example" name='payment_method'>
            <option selected value='0'>none</option>
            <option value="1">Bikash</option>
            <option value="2">Rocket</option>
            <option value="3">Credit card</option>
          </select>
          <label class="errorText"> {{ $errors->first('payment_method')}}</label>
    </div>


    <div class="form-group">
        <label  class="form-label">Pay money to 010443*****</label><br>
        <label  class="form-label">Input Transection Number</label>
        <input type="text" class="form-control" name='transection_no'>
        <label class="errorText"> {{ $errors->first('transection_no')}}</label>
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-primary">Submit</button>
        <a href="{{ route('seller.ssl.payment') }}" class="btn btn-info">Pay with SSLcommerz!!!</a>
    </div>
</form>

@endsection




