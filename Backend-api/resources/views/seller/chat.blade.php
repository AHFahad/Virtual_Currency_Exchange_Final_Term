@extends('layouts.app1')
<!-- @include('layouts.app') -->
@extends('layouts.seller')

@section('pageTitle',"Chat")



@section('header','Chat')

@section('container')
<div>
	@livewire('messages')
</div>

       
    

@endsection