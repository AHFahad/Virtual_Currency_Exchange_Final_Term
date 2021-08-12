@include('layouts.app')
@extends('layouts.seller')

@section('pageTitle',"change password")


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


@section('header','Change Password')

@section('container')
<form method="post" action='{{ route('seller.profile.update.password') }}' >

    @if (session()->has('msg'))
        <br>
        <div class="alert alert-primary" role="alert">
            <strong>{{session('msg')}}</strong>
        </div>
    @endif




    <div class="form-group">
        <label  class="form-label">Old password:</label>
        <input type="password" name="old_password" class="form-control" >
        <label class="errorText"> {{ $errors->first('old_password')}}</label>
    </div>

    <div class="form-group">
        <label " class="form-label">new password:</label>
        <input type="password" name="new_password" class="form-control" >
        <label class="errorText"> {{ $errors->first('new_password')}}</label>
    </div>

    <div class="form-group">
        <label  class="form-label">confrim new password:</label>
        <input type="password" name="new_password_confirmation" class="form-control" >
        <label class="errorText"> {{ $errors->first('confirm_new_password')}}</label>
    </div>



    <div class="form-group">
        <button type="submit" class="btn btn-primary">save</button>
    </div>
</form>
@endsection




