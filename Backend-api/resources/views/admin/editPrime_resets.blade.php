@include('layouts.app')
@extends('layouts.AdminDashboard')

@section('pageTitle', 'admin')




@section('header', 'Edit Prime Duration')

@section('container')
<br><br>

    <form method="POST" action="{{ route('updatePrimeDuration',$prime_resets->seller_id) }}">
        @csrf
        <div class="form-group">
            <label class="form-label">ID</label><br>
            <label class="form-label"><b>{{ $prime_resets->id }}</b></label>
        </div>

        <div class="form-group">
            <label class="form-label">Seller ID</label><br>
            <label class="form-label"><b>{{ $prime_resets->seller_id }}</b></label>
        </div>

        <div class="form-group">
            <label class="form-label">Expire Date</label><br>
            <label class="form-label"><b>{{ $prime_resets->expire_date }}</b></label>
        </div>

        <div class="form-group">
            <label class="form-label">Prime Expire Date: <b>{{ $prime_resets->prime_expire_date }} (Current)</b></label><br>
            <label class="form-label"><b>UPDATE</b></label>
            <input type="date" class="form-control" name="prime_expire_date" value="">
        </div>

        <div class="form-group">
            <label class="form-label">CREATED_AT</label><br>
            <label class="form-label"><b>{{ $prime_resets->created_at }}</b></label>
        </div>
        
        <div class="form-group">
            <label class="form-label">UPDATED_AT</label><br>
            <label class="form-label"><b>{{ $prime_resets->updated_at }}</b></label>
        </div><br>

        <button type="submit" class="btn btn-primary">Update</button>
    </form>



@endsection
