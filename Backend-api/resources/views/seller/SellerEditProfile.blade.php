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
    @if (session()->has('msg'))
        <br>
        <div class="alert alert-primary" role="alert">
            <strong>{{session('msg')}}</strong>
        </div>
    @endif

    <form method="post" action="{{ route('seller.profile.update',$user->id) }}" enctype="multipart/form-data">
        @method('PUT')
        <div class="form-group">
            <label for="formFile" class="form-label">Change Profile Picture:</label> <br>
            <img style="max-height:270px" src="@if ($user->profile_picture) {{asset($user->profile_picture)}} @else {{asset('seller/image/demo_profile.png')}} @endif" class="rounded" alt="Cinque Terre">
            <br>
            <input class="form-control" type="file" name='profile_picture'>
        </div>
        <div class="form-group">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" name='name' value="{{ $user->name }}">
            <label class="errorText"> {{ $errors->first('name')}}</label>
        </div>

        <div class="form-group">
            <label class="form-label">Address</label>
            <input type="text" class="form-control" name="address" value="{{ $user->address }}">
            <label class="errorText"> {{ $errors->first('address')}}</label>
        </div>

        {{-- <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-control" name="email" value="{{ $user->email }}">
        </div> --}}
        <div class="form-group">
            <label class="form-label">Phone Number</label>
            <input type="text" class="form-control" name="phone_number" value="{{ $user->phone_number }}">
            <label class="errorText"> {{ $errors->first('phone_number')}}</label>
        </div>


        <button type="submit" class="btn btn-primary">Save</button>
        <a href="{{ route('seller.profile.index') }}" class="btn btn-danger">back</a>
    </form>


@endsection




