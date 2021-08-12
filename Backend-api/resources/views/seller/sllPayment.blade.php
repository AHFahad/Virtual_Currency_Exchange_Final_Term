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
<div style="height: 1000px;">



    <form action="{{ url('/pay') }}" method="POST" class="needs-validation">
        <input type="hidden" value="{{ csrf_token() }}" name="_token" />

        <div class="form-group" method='post' novalidate>
            <label  class="form-label">Select Package</label>
            <select class="form-control" id='total_amount' name="total_amount">
                <option value="900" selected>1 Month   900   Taka</option>
                <option value="2500">3 Month   2500  Taka</option>
                <option value="4700">6 Month   4700  Taka</option>
                <option value="9000">1 Year    9000  Taka</option>
            </select>


            <br>

        <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout (Hosted)</button>
    </form>



</div>



<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>

@endsection

