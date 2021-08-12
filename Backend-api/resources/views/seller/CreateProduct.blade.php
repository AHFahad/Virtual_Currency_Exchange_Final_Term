@include('layouts.app')
@extends('layouts.seller')

@section('pageTitle',"Seller Create Sell Post")


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

@section('header','Create sell post')

@section('container')

<form enctype= "multipart/form-data" method="post" action='{{ route('seller.product.store') }}' >

    @if (session()->has('msg'))
        <br>
        <div class="alert alert-primary" role="alert">
            <strong>{{session('msg')}}</strong>
        </div>
    @endif

    <div class="form-group"  >
        <label for="formFile" class="form-label">Select photo</label>
        <input class="form-control" type="file" name='product_picture' value="{{old('product_picture')}}">
    </div>


    <div class="form-group">
        <label for="exampleInputEmail1" class="form-label">Product Title</label>
        <input type="text" class="form-control" name="name"  value="{{old('name')}}">
        <label class="errorText"> {{ $errors->first('name')}}</label>
    </div>

    <div class="form-group">
        <label for="exampleInputEmail1" class="form-label">ADD price In Taka*</label>
        <input type="number" class="form-control" name="price" value="{{old('price')}}" >
        <label class="errorText"> {{ $errors->first('price')}}</label>
    </div>


    <div class="form-group">
        <label for="exampleInputEmail1" class="form-label">From currency</label>
        <select class="form-control" aria-label="Default select example" name="from_currency">
            <option selected value="0">none</option>
            <option value="1" {{ old('from_currency') == '1' ? 'selected' : '' }} >Bikash</option>
            <option value="2" {{ old('from_currency') == '2' ? 'selected' : '' }}>Nagod</option>
            <option value="3" {{ old('from_currency') == '3' ? 'selected' : '' }}>roket</option>
            <option value="4" {{ old('from_currency') == '4' ? 'selected' : '' }}>Mkash</option>
            <option value="5" {{ old('from_currency') == '5' ? 'selected' : '' }}>Ukash</option>
            <option value="6" {{ old('from_currency') == '6' ? 'selected' : '' }}>Gkash</option>
          </select>
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1" class="form-label">To Currency</label>
        <select class="form-control" aria-label="Default select example" name="To_currency" >
            <option selected value="0">none</option>
            <option value="1" {{ old('To_currency') == '1' ? 'selected' : '' }} >Bikash</option>
            <option value="2" {{ old('To_currency') == '2' ? 'selected' : '' }}>Nagod</option>
            <option value="3" {{ old('To_currency') == '3' ? 'selected' : '' }}>roket</option>
            <option value="4" {{ old('To_currency') == '4' ? 'selected' : '' }}>Mkash</option>
            <option value="5" {{ old('To_currency') == '5' ? 'selected' : '' }}>Ukash</option>
            <option value="6" {{ old('To_currency') == '6' ? 'selected' : '' }}>Gkash</option>
          </select>
    </div>

    <div class="form-group">
        <label for="exampleInputEmail1" class="form-label">Payment recive NO:</label>
        <input type="number" name="Pyament_recive_no" class="form-control" value="{{old('Pyament_recive_no')}}">
        <label class="errorText"> {{ $errors->first('Pyament_recive_no')}}</label>
    </div>

    <div class="form-group">
        <label for="exampleInputEmail1" class="form-label">whatinformation you need from the buyer</label>
        <select class="form-control" aria-label="Default select example" name="number_of_info"  value="{{old('number_of_info')}}">
            <option selected value="transection">Only Transection number</option>
            <option value="phone">Transection number and phone number of money recive</option>
            <option value="game_id">Transection and Game ID</option>
          </select>
    </div>

    <div class="form-floating">
        <label for="floatingTextarea2">Write Product Desciption</label>
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" name="description" value="{{old('description')}}"></textarea>
        <label class="errorText"> {{ $errors->first('description')}}</label>
    </div>

    <div class="form-group">
        <button type="submit" class="btn btn-primary">Post</button>
    </div>
</form>

@endsection




