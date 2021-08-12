@include('layouts.app')
@extends('layouts.buyer')

@section('pageTitle',"History")

@section('profileImage')
{{ asset('buyer/'.Session::get('photo')) }}
@endsection
@section('profileName')
{{ Session::get('name') }}
@endsection


@section('header','History')
@section('showHistory','hidden')

@section('container')

    <table  class="table table-striped align-items-center table-dark">
        <thead class="thead-dark">
        <tr>
            <th scope="col">Order NO</th>
            <th scope="col">Date</th>
            <th scope="col">Title</th>
            <th scope="col">Seller</th>
            <th scope="col">status</th>
            <th scope="col">View</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            @foreach ($orders as $order)

            <tr>
                <td> {{ $order->id }} </td>
                <td> {{ $order->created_at->format('Y-m-d') }} </td>
                <td> {{ $order->productName }} </td>
                <td> {{ $order->sellerName }} </td>
                <td> {{ $order->status }} </td>
                <td><a href="{{ route('user.details',$order->id) }}" class="btn btn-primary">Details</a></td>
            </tr>

        @endforeach
        {{-- <tr>
            <td>0123</td>
            <td>2/05/2020</td>
            <td>xyz</td>
            <td>Completed</td>
            <td><a href="{{ route('user.details',Session::get('id')) }}" class="btn btn-primary">Details</a></td>
            <td><a href="#"><button class="btn btn-danger">Delete</button></a></td>
        </tr>
        <tr>
        <td>1123</td>
        <td>3/06/2020</td>
        <td>yst</td>
        <td>Cancel</td>
        <td><a href="{{ route('user.details',Session::get('id')) }}" class="btn btn-primary">Details</a></td>
        <td><a href="#"><button class="btn btn-danger">Delete</button></a></td>
        </tr> --}}

        </tbody>
    </table>


@endsection




