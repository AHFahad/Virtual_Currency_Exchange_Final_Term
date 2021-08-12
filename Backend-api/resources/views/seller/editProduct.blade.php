@include('layouts.app')
@extends('layouts.seller')

@section('pageTitle',"Seller Edit Post")


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

@section('header','Edit Post')

@section('container')

    @if (session()->has('msg'))
        <br>
        <div class="alert alert-primary" role="alert">
            <strong>{{session('msg')}}</strong>
        </div>
    @endif

    <form action="{{ route("seller.product.update",$product->id) }}" method="post" enctype="multipart/form-data" >
        @method('PUT')

        {{-- <div class="form-group"> --}}
            <div class="form-group">
                <label for="formFile" class="form-label">Change Product photo:</label><br>
                <img style="max-height:270px" src="@if ($product->product_picture) {{asset($product->product_picture)}} @else {{asset('seller/image/demo_product.jpg')}} @endif" class="rounded" alt="Cinque Terre" >
                <br>
                <br>
                <input class="form-control" type="file" id="formFile" name="product_picture">
            </div>


            <div class="form-group">
                <label for="exampleInputEmail1" class="form-label">Product Title</label>
                <input type="text" class="form-control" name='name'  value="{{$product->name }}">
                <label class="errorText"> {{ $errors->first('name')}}</label>
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1" class="form-label">ADD price In Taka*</label>
                <input type="number" class="form-control" name='price' value="{{ $product->price }}">
                <label class="errorText"> {{ $errors->first('price')}}</label>
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1" class="form-label">Payment recive NO:</label>
                <input type="text" class="form-control" name='Pyament_recive_no'  value="{{ $product->Pyament_recive_no }}">
                <label class="errorText"> {{ $errors->first('Pyament_recive_no')}}</label>
            </div>

            <div class="form-group">
                <label  class="form-label">From Currency:</label>
            <select name="from_currency" class="form-control" >
                @foreach($payment_methods as $payment_method)
                  <option value="{{ $counter }}" {{ ($counter == $product->from_currency) ? "selected" : "" }}>{{ $payment_method}}</option>
                {{ $counter=$counter+1 }}
                  @endforeach
              </select>
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1" class="form-label">To currency:</label>
              <select name="To_currency" class="form-control" >
                @foreach($payment_methods as $payment_method)

                  <option value="{{ $counter2 }}" {{ ($counter2 == $product->To_currency) ? "selected" : "" }}>{{ $payment_method}}</option>
                  {{ $counter2=$counter2+1 }}
                @endforeach
              </select>
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1" class="form-label">whatinformation you need from the buyer</label>
                <select class="form-control" aria-label="Default select example" name="number_of_info">
                    <option {{ ($product->number_of_info =="transection" ) ? "selected" : "" }} value="transection">Only Transection number</option>
                    <option {{ ($product->number_of_info =="phone" ) ? "selected" : "" }} value="phone">Transection number and phone number of money recive</option>
                    <option {{ ($product->number_of_info =="game_id" ) ? "selected" : "" }} value="game_id">Transection and Game ID</option>
                  </select>
            </div>


            <div class="form-group">
                <textarea class="form-control" placeholder="Leave a comment here" name='description' style="height: 100px">{{ $product->description }}</textarea>
                <label class="errorText"> {{ $errors->first('description')}}</label>
                {{-- <label for="floatingTextarea2">Write Product Desciption</label> --}}
            </div>


                <button type="submit" class="btn btn-primary" style="display:inlinex; margin:5px;">Save</button>





        {{-- </div> --}}
    </form>
    <form method="post" action="{{ route('seller.product.destroy',$product) }}">
        @method('DELETE')
        <button href="#delete" type='submit' style="display:inline; margin:5px;" onclick="return confirm('Are you Sure you wanto delete this product?')" class="btn btn-danger">Delete</button>
    </form>

@endsection
