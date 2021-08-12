@include('layouts.app')
@extends('layouts.AdminDashboard')

@section('pageTitle',"admin")



@section('header','Transaction History')

@section('container')
<br><br>

<table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Product ID</th>
        <th scope="col">Buyer ID</th>
        <th scope="col">Price On Selling Time</th>
        <th scope="col">Transaction NO of Sender</th>
        <th scope="col">Amount</th>
        <th scope="col">Buyer Reply</th>
        <th scope="col">Seller Reply</th>
        <th scope="col">Review</th>
        <th scope="col">Rating</th>
        <th scope="col">Transaction NO</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Game ID</th>
        <th scope="col">Status</th>
        <th scope="col">CREATED_AT</th>
        <th scope="col">UPDATED_AT</th>
      </tr>
    </thead>
    <tbody>
      @foreach ($adminViewAllTransaction as $orders)
      <tr>
        <td>{{ $orders->id }}</td>
        <td>{{ $orders->product_id }}</td>
        <td>{{ $orders->buyer_id }}</td>
        <td>{{ $orders->price_on_selling_time }}</td>
        <td>{{ $orders->transection_number_of_sender }}</td>
        <td>{{ $orders->amount }}</td>
        <td>{{ $orders->buyer_reply }}</td>
        <td>{{ $orders->seller_reply }}</td>
        <td>{{ $orders->review }}</td>
        <td>{{ $orders->rating }}</td>
        <td>{{ $orders->transection_no }}</td>
        <td>{{ $orders->phone_number }}</td>
        <td>{{ $orders->game_id }}</td>
        <td>{{ $orders->status }}</td>
        <td>{{ $orders->created_at }}</td>
        <td>{{ $orders->updated_at }}</td>
      </tr>
      @endforeach
    </tbody>
  </table>

        

@endsection
