@include('layouts.app')
@extends('layouts.seller')

@section('pageTitle',"Seller Registration")


@section('profileImage')
{{ asset('argon/img/theme/team-1-800x800.jpg') }}
@endsection



@section('header','Registration')

@section('container')

<form>
    <div class="mb-3">
        <label for="formFile" class="form-label">Select Profile Picture</label>
        <input class="form-control" type="file" id="sProfilePic">
    </div>
    <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" id="sName" >
    </div>

    <div class="mb-3">
        <label class="form-label">Address</label>
        <input type="text" class="form-control" id="sAddress" >
    </div>

    <div class="mb-3">
        <label class="form-label">Email Address</label>
        <input type="email" class="form-control" id="sEmail" >
    </div>

    <div class="mb-3">
        <label for="formFile" class="form-label">Photo of NID Card</label>
        <input class="form-control" type="file" id="sNidPic">
    </div>

    <div class="mb-3">
        <label class="form-label">NID Card Number</label>
        <input type="number" class="form-control" id="sNid" >
    </div>


    <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" id="sPassword">
    </div>

    <div class="mb-3">
        <label class="form-label">Re Type Password</label>
        <input type="password" class="form-control" id="sRePassword">
    </div>

    <div class="mb-3">
        <label class="form-label">Phone Number</label>
        <input type="number" class="form-control" id="sPhone" aria-describedby="emailHelp">
        <div id="mobileNoConstrainText" class="form-text">Must be 11 digits</div>
    </div>
    <button type="submit" class="btn btn-primary">Register</button>
    <a href="#"><button class="btn btn-primary">LogIn</button></a>
</form>

@endsection




