@include('layouts.app')
@extends('layouts.seller')

@section('pageTitle',"seller Posts")


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

@section('header','MY posts')

@section('container')

<br>

    <form  Action="{{ route('seller.product.search',"id") }}" method='GET'>
        <div class='row'>
            <div class="col-sm-11">
            <div class="form-outline">
            <input type="search" id="form1" name='search' class="form-control" />
            <label class="form-label" for="form1" >Search</label>
            </div>

            </div>
            <div class="col-sm-1">
                <button type="submit" style='padding: 15px;'class="btn btn-primary">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
    </form>



    @if (session()->has('msg'))
        <br>
        <div class="alert alert-primary" role="alert">
            <strong>{{session('msg')}}</strong>
        </div>
    @endif

    @if(isset($product))
        <div class="row" align="left">
            @foreach ( $product as $key => $item )

                @if (($item->delete_status!='deleted'))
                    <div class="col-sm  pt-4 px-2">
                        <div class="card" style="max-width: 16rem; min-width: 14rem;">
                            <img class="card-img-top" style="max-height:270px" src="@if ($item->product_picture) {{asset($item->product_picture)}} @else {{asset('seller/image/demo_product.jpg')}} @endif"
                            alt="Card image cap">
                            <div class="card-body">
                            <h5 class="card-title">{{ $item->name }}</h5>
                            <p class="card-text">{{ $item->description }}</p>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Price : {{ $item->price }}</li>
                            </ul>
                                <div class="card-body">
                                    <a href="{{ route('seller.product.show',$item) }}" class="btn btn-primary btn-sm">Details</a>
                                    @if ($item->delete_status=='active')
                                        <button   class="btn btn-danger btn-sm" id="status{{ $key }}" value='active' onclick="statusUpdate('{{  $item->id}}','{{ $key }}')">Deactive</button>
                                    @else
                                        <button  class="btn btn-success btn-sm"id="status{{ $key }}" value='deactive' onclick="statusUpdate('{{  $item->id}}','{{ $key }}')">Active</button>
                                    @endif

                                </div>
                            </div>
                        </div>
                    </div>
                @endif
            @endforeach

        </div>

        <div class="d-flex justify-content-center">
            {{ $product->links() }}
        </div>
    @endif



@endsection


<script>
    function statusUpdate(kid, item) {
        var status = "";
        if ($("#status" + item).val() == "active") {
            status = "deactive";
            $("#status" + item).val("deactive");
            $("#status" + item).html("active").removeClass('btn btn-danger btn-sm').addClass('btn btn-success btn-sm');;
        } else {
            status = "active";
            $("#status" + item).val("active")
            $("#status" + item).html("Deactive").removeClass('btn btn-success btn-sm').addClass('btn btn-danger btn-sm');
        }


        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: "{{ url('/seller/product/updatestatus') }}",
            type: "POST",
            data: {
                id: kid,
                status: status
            },
            success: function(result) {
                if (!result.error) {
                    // alert(result.success)
                } else {
                    alert(result.success)
                }
            }
        });
    }


</script>



