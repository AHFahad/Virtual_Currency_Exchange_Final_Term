@include('layouts.app')
@extends('layouts.seller')

@section('pageTitle',"Seller order Details")


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
@section('header','Order Details')

@section('container')

    @if (session()->has('msg'))
    <br>
    <div class="alert alert-primary" role="alert">
        <strong>{{session('msg')}}</strong>
    </div>
    @endif
<form method="POST">
    <div class="form-floating">
        <label for="floatingTextarea2">write your report.</label>
        <textarea class="form-control" name="report" style="height: 100px"></textarea>
        <label class="errorText"> {{ $errors->first('report')}}</label>
    </div>

    <div class="form-group">
        <button type="submit" class="btn btn-primary">Send</button>
    </div>
</form>

@endsection




