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

@section('header','Order List')

@section('container')

    @if (session()->has('msg'))
    <br>
    <div class="alert alert-primary" role="alert">
        <strong>{{session('msg')}}</strong>
    </div>
    @endif
<table  class="table table-striped align-items-center">
    <thead class="thead-light">
      <tr>
        <th scope="col">Order NO</th>
        <th scope="col">Poduct id</th>
        <th scope="col">product title</th>
        <th scope="col">Date</th>
        <th scope="col">Time</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>


            @foreach ( $product as $item )
                <tr>
                    <td>{{ $item->id }}</td>
                    <td>{{ $item->product_id }}</td>
                    <td>{{ $item->name }}</td>
                    <td>{{ $item->created_at->format('Y/m/d ') }}</td>
                    <td>{{ $item->created_at->format('H:i:s') }}</td>
                    <td><a class="btn btn-primary" href="{{ route('seller.order.show',$item->id) }}"> Details</a>

                </tr>
            @endforeach




    </tbody>
</table>
<div class="row">
    <div class="d-flex justify-content-center">
    {{ $product->links() }}
    </div>
</div>


@endsection




