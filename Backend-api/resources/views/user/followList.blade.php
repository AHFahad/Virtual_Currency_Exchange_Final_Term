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
                <th scope="col">Seller Name</th>
                <th scope="col">Phone Number</th>

              </tr>
            </thead>
            <tbody>
                @foreach ($follows as $follow)

                <tr>
                    <td> {{ $follow->userName }} </td>
                    <td> {{ $follow->phone_number }} </td>
                </tr>

            @endforeach
        </tbody>
    </table>


@endsection




