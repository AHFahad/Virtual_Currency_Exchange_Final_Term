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


<div class="form-group">
    <label for="formFile" class="form-label">Product Photo:</label><br>
    {{-- <input class="form-control" type="file" id="formFile"> --}}
    <img style="max-height:270px" src="@if ($product->product_picture) {{asset($product->product_picture)}} @else {{asset('seller/image/demo_product.jpg')}} @endif" class="rounded" alt="Cinque Terre">
</div>


<div class="form-group">
    <label for="exampleInputEmail1" class="form-label"><b>Order No:</b> </label>
    <a>{{ $order->id }}</a>
</div>
<div class="form-group">
    <label for="exampleInputEmail1" class="form-label"><b>Product Title:</b> </label>
    <a>{{ $product->name }}</a>
</div>

  <div class="form-group">
    <label for="exampleInputEmail1" class="form-label"><b>price In Taka:</b></label>
    <a>{{ $order->price_on_selling_time }}</a>
</div>
<div class="form-group">
    <label for="exampleInputEmail1" class="form-label"><b>Amount/Quantity:</b></label>
    <a>{{ $order->amount }}</a>
</div>
<div class="form-group">
    <label for="exampleInputEmail1" class="form-label"><b>Total price In Taka:</b></label>
    <a>{{ $order->price_on_selling_time*$order->amount }}</a>
</div>

<div class="form-group">
    <label for="exampleInputEmail1" class="form-label"><b>Payment method:</b></label>
    <h6>Bikash</h6>
</div>

<div class="form-group">
    <label for="exampleInputEmail1" class="form-label"><b>Payment recive NO:</b></label>
    <a>{{ $product->Pyament_recive_no }}</a>
</div>


<div class="form-group">
    <label for="floatingTextarea2">Product Desciption:</label>
    <p>{{ $product->description }}</p>
</div>
<div class="form-group">
    <label for="floatingTextarea2">Transaction NO:</label>
    <a>{{ $order->transection_number_of_sender}}</a>
</div>
<div class="form-group">
    <label for="floatingTextarea2">Buyer Reply:</label>
    <p>{{ $order->buyer_reply }} </p>
</div>
@if ($order->phone_number)
    <div class="form-group">
        <label for="floatingTextarea2">phone Number/recive number:</label>
        <p>{{ $order->phone_number }} </p>
    </div>
@endif

@if ($order->game_id)
    <div class="form-group">
        <label for="floatingTextarea2">Game id:</label>
        <p>{{$order->game_id }} </p>
    </div>
@endif


<div class="form-group">
    <label for="exampleInputEmail1" class="form-label"><b>Transection NO:</b></label>
    <p>{{ $order->transection_no }}</p>
</div>



<div class="form-floating">
    <label for="floatingTextarea2"><b>Seller Reply</b></label>
    <p>{{ $order->seller_reply }}</p>
</div>
<div class="form-floating">
    <label for="floatingTextarea2"><b>Buyer Reply</b></label>
    @if ($order->buyer_reply)
        <p>{{ $order->buyer_reply }}</p>
    @else
        <a>No reply given</a>
    @endif

</div>

<div class="form-floating">
    <label for="floatingTextarea2"><b>review:</b></label>
    @if ($order->review)
        <a>{{ $order->review }}</a>
    @else
        <a>No review</a>
    @endif

</div>
<div class="form-floating">
    <label for="floatingTextarea2"><b>rating:</b></label>
    @if ($order->rating)
        <a>{{ $order->rating }}</a>
    @else
        <a>No rating</a>
    @endif

</div>
<br>
    <div class="form-group">
        <a class="btn btn-danger" href="{{ route('seller.statement.index') }}">back</a>
    </div>

@endsection




