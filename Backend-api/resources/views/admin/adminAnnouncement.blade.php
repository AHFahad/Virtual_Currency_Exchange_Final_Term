@include('layouts.app')
@extends('layouts.AdminDashboard')

@section('pageTitle', 'admin')


@section('header', 'Announcement')

@section('container')

    <center>
        <div class="mr-auto mt-5 mb-5">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                data-bs-whatever="@mdo">Send Announcement</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">New Announcement</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form method="POST" action="{{ route('sendAnnouncement') }}">
                                @csrf
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Message:</label>
                                    <textarea class="form-control" name="desc"></textarea>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Send</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <center>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Announcement ID</th>
                        <th scope="col">Admin ID</th>
                        <th scope="col">Description</th>
                        <th scope="col">CREATED_AT</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($adminAnnouncement as $announcements)
                        <tr>
                            <td>{{ $announcements->ann_id }}</td>
                            <td>{{ $announcements->admin_id }}</td>
                            <td>{{ $announcements->description }}</td>
                            <td>{{ $announcements->created_at }}</td>
                            <td>
                                <a href="{{ route('deleteAnnouncement',$announcements->ann_id) }}"><button type="button"
                                        class="btn btn-danger">Delete</button></a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>

        @endsection
