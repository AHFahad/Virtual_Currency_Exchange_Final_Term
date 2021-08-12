@include('layouts.app')
@extends('layouts.AdminDashboard')

@section('pageTitle', 'admin')



@section('header', 'User Report')

@section('container')
<br><br>

    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Report ID</th>
                <th scope="col">Buyer ID</th>
                <th scope="col">Seller ID</th>
                <th scope="col">Report Description</th>
                <th scope="col">CREATED_AT</th>\
                <th scope="col">UPDATED_AT</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($adminUserReports as $reports)
                <tr>
                    <td>{{ $reports->rep_id }}</td>
                    <td>{{ $reports->buyer_id }}</td>
                    <td>{{ $reports->seller_id }}</td>
                    <td>{{ $reports->rep_description }}</td>
                    <td>{{ $reports->created_at }}</td>
                    <td>{{ $reports->updated_at }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>


@endsection
