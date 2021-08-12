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

<form method="post" action="{{ route('seller.order.update',$order->id) }}">
    @method('PUT')
    <div class="form-group">
        <label for="exampleInputEmail1" class="form-label">Transection NO:</label>
        <input type="text" name="transection_no" class="form-control" value="{{old('transection_no')}}">
        <label class="errorText"> {{ $errors->first('transection_no')}}</label>
    </div>



    <div class="form-floating">
        <label for="floatingTextarea2">Give reply and information like transection no ,code ,if needed.</label>
        <textarea class="form-control" name="seller_reply" style="height: 100px"></textarea>
        <label class="errorText"> {{ $errors->first('seller_reply')}}</label>
    </div>

    <div class="form-group">
        <button type="submit" class="btn btn-primary">Send</button>
        <button type="submit" name='cancel' value='cancelled' onclick="return confirm('make sure you asked for refund number in the reply')" class="btn btn-danger">Cancel</button>
    </div>
</form>

@endsection




