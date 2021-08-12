@include('layouts.app')
@extends('layouts.AdminDashboard')

@section('pageTitle', 'admin')


@section('header', 'Prime Approval')

@section('container')
<br><br>


    <table class="table table-striped mt-5">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Seller ID</th>
                <th scope="col">Package</th>
                <th scope="col">Transaction No</th>
                <th scope="col">Payment Method</th>
                <th scope="col">CREATED_AT</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($prime_approval as $prime)
                <tr>
                    <td>{{ $prime->id }}</td>
                    <td>{{ $prime->seller_id }}</td>
                    <td>{{ $prime->package }}</td>
                    <td>{{ $prime->transection_no }}</td>
                    <td>{{ $prime->payment_method }}</td>
                    <td>{{ $prime->created_at }}</td>
                    <td>
                        <a href="{{ route('editPrimeDuration',$prime->id) }}"><button type="button"
                                class="btn btn-primary">Update Prime Duration</button></a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>



@endsection
