@include('layouts.app')
@extends('layouts.AdminDashboard')

@section('pageTitle', 'admin')




@section('header', 'Create Admin')

@section('container')
<br>

    <form method="POST" action="{{ route('verifyAddAdmin') }}">
        @csrf
        <div class="form-group">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" name="name" value="">
            <label class="errorText" style="color: red"> {{ $errors->first('name')}}</label>
        </div>

        <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" name="email" value="">
            <label class="errorText" style="color: red"> {{ $errors->first('email')}}</label>
        </div>

        <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" name="password" value="">
            <label class="errorText" style="color: red"> {{ $errors->first('password')}}</label>
        </div>

        <div class="form-group">
            <label class="form-label">Address</label>
            <input type="text" class="form-control" name="address" value="">
            <label class="errorText" style="color: red"> {{ $errors->first('address')}}</label>
        </div>

        <div class="form-group">
            <label class="form-label">Phone Number</label>
            <input type="number" class="form-control" name="phone" value="">
            <label class="errorText" style="color: red"> {{ $errors->first('phone')}}</label>
        </div>
        
        <div class="form-group">
            <label class="form-label">NID Number</label>
            <input type="text" class="form-control" name="nid_number" value="">
        </div>
        <br>

        <button type="submit" class="btn btn-primary">Create</button>
    </form>



@endsection
