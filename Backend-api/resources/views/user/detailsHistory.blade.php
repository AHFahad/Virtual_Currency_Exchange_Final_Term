@include('layouts.app')
@extends('layouts.buyer')

@section('pageTitle',"Seller Home")


@section('profileImage')
{{ asset('buyer/'.Session::get('photo')) }}
@endsection
@section('profileName')
{{ Session::get('name') }}
@endsection

@section('showSearch','hidden')

@section('header','History')

@section('container')

    <table  class="table table-striped align-items-center table-dark">
        <tbody>
            <tr>
              <td>Order No</td>
              <td> {{ $order_list->id }} </td>
            </tr>
            <tr>
              <td>date</td>
              <td>{{ $order_list->created_at->format('Y-m-d') }}</td>
            </tr>
            <tr>
            <tr>
              <td>Product Name</td>
              <td>{{ $product_list->name }}</td>
            </tr>
            <tr>
              <td>Seller Name</td>
              <td>{{ $seller_list->name }}</td>
            </tr>
            <tr>
              <td>Seller phone</td>
              <td>{{ $seller_list->phone_number }}</td>
            </tr>
            <tr>
              <td>Transaction Method</td>
              <td>
                @if ( $product_list->from_currency == 1 )
                    Bkash
                @elseif ( $product_list->from_currency == 2)
                    Nagad
                @elseif ( $product_list->from_currency == 3)
                    Rocket
                @elseif ( $product_list->from_currency == 4)
                    Mkash
                @endif
                </td>
            </tr>
            <tr>
              <td>Details</td>
              <td>{{ $product_list->description }}</td>
            </tr>

          </tbody>
        </table>
    <form method="post" action="/user/details/{{ $order_list->id }}">
        <div class="form-group">
            <label for="exampleInputEmail1" class="form-label">Give a review</label>
            <input type="text" name="review" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="{{ $order_list->review }}">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1" class="form-label">Give a rating</label>
            <input type="number" name="rating" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="{{ $order_list->rating }}">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-success">Ok</button>
        </div>
    </form>
        <a href="{{ route('user.history') }}"><button class="btn btn-danger">Back</button></a>
        </tbody>
    </table>


@endsection




