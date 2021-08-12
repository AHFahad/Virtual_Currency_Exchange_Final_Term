@include('layouts.app')
@extends('layouts.AdminDashboard')

@section('pageTitle', 'admin')


@section('header', 'Edit User Info')

@section('container')
    <br>
    <form method="POST" action="{{ route('verifyEditUserInfo',$adminEditUserInfo->id) }}">
        @csrf
        <div class="form-group">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" name="name" value="{{$adminEditUserInfo->name }}">
            <label class="errorText" style="color: red"> {{ $errors->first('name')}}</label>
        </div>

        <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" name="email" value="{{$adminEditUserInfo->email }}">
            <label class="errorText" style="color: red"> {{ $errors->first('email')}}</label>
        </div>

        <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" name="password" value="{{$adminEditUserInfo->password }}">
            <label class="errorText" style="color: red"> {{ $errors->first('password')}}</label>
        </div>

        <div class="form-group">
            <label class="form-label">Address</label>
            <input type="text" class="form-control" name="address" value="{{$adminEditUserInfo->address }}">
            <label class="errorText" style="color: red"> {{ $errors->first('address')}}</label>
        </div>

        <div class="form-group">
            <label class="form-label">Phone Number</label>
            <input type="number" class="form-control" name="phone" value="{{$adminEditUserInfo->phone_number }}">
            <label class="errorText" style="color: red"> {{ $errors->first('phone')}}</label>
        </div>

        <div class="form-group">
            <label for="exampleInputEmail1" class="form-label">Prime Status</label>
            <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
            <select class="form-select" name="prime_status">
                <option {{ ($adminEditUserInfo->prime_status =="normal" ) ? "selected" : "" }} value="normal">normal</option>
                <option {{ ($adminEditUserInfo->prime_status =="prime" ) ? "selected" : "" }} value="prime">prime</option>
            </select>
            <label class="errorText" style="color: red"> {{ $errors->first('prime_status')}}</label>
        </div>

        <div class="form-group">
            <label for="exampleInputEmail1" class="form-label">Status</label>
            <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
            <select class="form-select" name="status">
                <option {{ ($adminEditUserInfo->status =="active" ) ? "selected" : "" }} value="active">active</option>
                <option {{ ($adminEditUserInfo->status =="deactive" ) ? "selected" : "" }} value="deactive">deactive</option>
            </select>
            <label class="errorText" style="color: red"> {{ $errors->first('status')}}</label>
        </div>
        <br>

        <button type="submit" class="btn btn-primary">Update</button>
    </form>



@endsection
