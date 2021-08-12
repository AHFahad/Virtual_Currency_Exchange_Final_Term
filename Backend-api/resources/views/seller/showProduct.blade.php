@include('layouts.app')
@extends('layouts.seller')

@section('pageTitle',"Seller product Details")


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
@section('header','Product Details')
@section('visitProfile')
{{ route('seller.profile.index') }}
@endsection

@section('container')

<form>
    @if (session()->has('msg'))
        <br>
        <div class="alert alert-primary" role="alert">
            <strong>{{session('msg')}}</strong>
        </div>
    @endif

    <div class="form-group">
        <label for="formFile" class="form-label">Product Photo:</label><br>
        {{-- <input class="form-control" type="file" id="formFile"> --}}
        <img style="max-height:270px" src="@if ($product->product_picture) {{asset($product->product_picture)}} @else {{asset('seller/image/demo_product.jpg')}} @endif" class="rounded" alt="Cinque Terre" >
    </div>


    <div class="form-group">
        <label for="exampleInputEmail1" class="form-label">Product Title</label>
        <p>{{$product->name }}</p>
    </div>

      <div class="form-group">
        <label for="exampleInputEmail1" class="form-label">price In Taka:</label>
        <p>{{ $product->price }}</p>
    </div>

    <div class="form-group">
        <label for="exampleInputEmail1" class="form-label">Rating:</label>
        <p>{{ $avg_rating }}/5</p>
    </div>

    <div class="form-group">
        <label for="exampleInputEmail1" class="form-label">Payment recive NO:</label>
        <p>{{ $product->Pyament_recive_no }}</p>
    </div>


    <div class="form-group">
        <label for="floatingTextarea2">Product Desciption:</label>
        <p>{{ $product->description }}</p>
    </div>

    <div class="form-group">
        <label for="exampleInputEmail1" class="form-label">From Currency / Payment Method:</label><br>
        <a > {{ $payment_methods[$product->from_currency] }} </a>

    </div>

    <div class="form-group">
        <label for="exampleInputEmail1" class="form-label">To Currency:</label><br>

          <a> {{ $payment_methods[$product->To_currency] }} </a>


    </div>

    <a href="{{ route('seller.product.edit',$product) }}" class="btn btn-primary"> Edit</a>

</form>

<form method="post" action="{{ route('seller.product.destroy',$product) }}">
        @method('DELETE')
        <button href="#delete" type='submit' style="display:inline; margin:5px;" onclick="return confirm('Are you Sure you wanto delete this product?')" class="btn btn-danger">Delete</button>
    </form>
@endsection




