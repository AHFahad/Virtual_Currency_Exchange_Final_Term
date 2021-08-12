@include('layouts.app')
@extends('layouts.AdminDashboard')

@section('pageTitle', 'admin')




@section('header', 'Edit Profile')

@section('container')

    <form method="POST" action="{{ route('verifyEditProfile',$adminEditProfile->id) }}" enctype="multipart/form-data">
        @csrf
        <div class="form-group mt-5">
            <label for="formFile" class="form-label"><b>Change Profile Picture:</b></label> <br>
            <img src="@if ($adminEditProfile->profile_picture) {{asset($adminEditProfile->profile_picture)}} @else {{ asset('admin/default_pic.png') }} @endif" class="rounded" alt="Cinque Terre" width="304" height="290">
            <br>
            <input class="form-control" type="file" id="formFile" name="profile_picture">
        </div>
        <div class="form-group">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" name="name" value="{{ $adminEditProfile->name }}">
            <label class="errorText" style="color: red"> {{ $errors->first('name')}}</label>
        </div>

        <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-control" name="email" value="{{ $adminEditProfile->email }}">
            <label class="errorText" style="color: red"> {{ $errors->first('email')}}</label>
        </div>

        <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" name="password" value="{{ $adminEditProfile->password }}">
            <label class="errorText" style="color: red"> {{ $errors->first('password')}}</label>
        </div>

        <div class="form-group">
            <label class="form-label">Address</label>
            <input type="text" class="form-control" name="address" value="{{ $adminEditProfile->address }}">
            <label class="errorText" style="color: red"> {{ $errors->first('address')}}</label>
        </div>

        <div class="form-group">
            <label class="form-label">Phone Number</label>
            <input type="number" class="form-control" name="phone" value="{{ $adminEditProfile->phone_number }}">
            <label class="errorText" style="color: red"> {{ $errors->first('phone')}}</label>
        </div><br>

        <button type="submit" class="btn btn-primary">Update</button>
    </form>



@endsection
