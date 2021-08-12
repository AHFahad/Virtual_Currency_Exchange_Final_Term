@include('layouts.app')
@extends('layouts.buyer')

@section('pageTitle',"Seller Home")

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
            <th scope="col">Products</th>
            <th scope="col">View</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            @foreach ($orders as $order)

                <tr>
                    <td> {{ $order->id }} </td>
                    <td> {{ $order->created_at->format('Y-m-d') }} </td>
                    <td> {{ $order->name }} </td>
                    <td><a href="{{ route('user.details',$order->id) }}" class="btn btn-primary">Details</a></td>
                </tr>

            @endforeach
        {{-- <tr>
            <td>0123</td>
            <td>2/05/2020</td>
            <td>xyz</td>
            <td><a href="{{ route('user.details') }}" class="btn btn-primary">Details</a></td>
        </tr>
        <tr>
        <td>1123</td>
        <td>3/06/2020</td>
        <td>yst</td>
        <td><a href="{{ route('user.details') }}" class="btn btn-primary">Details</a></td>
        </tr> --}}

        </tbody>
    </table>


@endsection




