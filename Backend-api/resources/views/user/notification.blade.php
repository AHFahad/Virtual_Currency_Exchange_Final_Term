@include('layouts.app')
@extends('layouts.buyer')

@section('pageTitle',"Notification")

@section('profileImage')
{{ asset('buyer/'.Session::get('photo')) }}
@endsection
@section('profileName')
{{ Session::get('name') }}
@endsection


@section('header','Notification')
@section('showNotification','hidden')

@section('container')

    <table>
        <tbody class="table">
            <tr style="background-color:rgb(76, 161, 231)">
                <td>
                    <a href="{{ route('user.profile') }}">
                        <h3 style="color:whitesmoke"> A new post</h3>
                        </a>
                    </td>
                </tr>
            <tr style="background-color:rgb(76, 161, 231)">
                <td>
                    <a href="{{ route('user.profile') }}">
                        <h3 style="color:whitesmoke"> A new post</h3>
                    </a>
                </td>
            </tr>
            <tr style="background-color:rgb(76, 161, 231)">
                <td>
                    <a href="{{ route('user.profile') }}">
                        <h3 style="color:whitesmoke"> A new post</h3>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>

@endsection




