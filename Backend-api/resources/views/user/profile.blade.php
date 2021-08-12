@include('layouts.app')
@extends('layouts.buyer')

@section('pageTitle',"Buyer Profile")


@section('profileImage')
{{ asset('buyer/'.Session::get('photo')) }}
@endsection
@section('profileName')
{{ $user->name }}
@endsection

@section('showProfile','hidden')

@section('header','Profile')

@section('container')

    <form>
        <div class="form-group">
            <img src="https://supporthubstaffcom.lightningbasecdn.com/wp-content/uploads/2019/08/good-pic.png" class="rounded" alt="Cinque Terre" width="304" height="290">
            <br>
            <a href="#" onclick="picChange()">Change Profile picture</a>
            <input class="form-control" type="file" id="picChange" style="display:none">
        </div>
        <div class="form-group">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" id="sName" value="{{ Session::get('name') }}" required>
        </div>

        <div class="form-group">
            <label class="form-label">Address</label>
            <input type="text" class="form-control" id="sAddress" value="{{ $user->address }}" required>
        </div>

        <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-control" id="sEmail" value="{{ Session::get('email') }}" required>
        </div>

        <div class="form-group">
            <label class="form-label">Phone Number</label>
                <div class="input-group" >
            <input type="number" class="form-control" id="uPhone" value="{{ $user->phone_number }}" readonly required>

        </div>
            <a href="#" onclick="phoneChange()" id="pChange">Change Phone Number</a>
        </div>

        <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" id="uPassword" aria-describedby="emailHelp" value="{{ $user->password }}" required>
            <span class="input-group-btn" id="eyeSlash">
                <button class="btn" onclick="visibility()" type="button"><i class="fa fa-eye-slash" style="color: rgb(37, 223, 37)" aria-hidden="true"></i></button>
            </span>
            <span class="input-group-btn" id="eyeShow" style="display: none;">
                <button class="btn"  onclick="visibility()" type="button"><i class="fas fa-eye" style="color: rgb(65, 139, 236)" aria-hidden="true"></i></button>
            </span>
            {{-- <div id="mobileNoConstrainText" class="form-text">Must be 11 digits</div> --}}
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
        <a href="#"><button class="btn btn-danger">Cancel</button></a>
    </form>

    <script>
         function picChange(){
            var text = "Sure about changing Picture?\nAfter changing photo you can't change it before 3 month.";
            if (confirm(text)) {
            var n = document.getElementById('picChange');
            n.style.display = 'block';
            }
        }
        function phoneChange(){
            var text = "Sure about changing Phone Number?\nAfter changing Phone Number please wait for admin approval.";
            if (confirm(text)) {
            var n = document.getElementById('uPhone');
            n.readOnly = false;
            }
        }

    function visibility() {
        var x = document.getElementById('uPassword');
        if (x.type === 'password') {
                x.type = "text";
                $('#eyeShow').show();
                $('#eyeSlash').hide();
        }else{
                x.type = "password";
                $('#eyeShow').hide();
                $('#eyeSlash').show();
            }
        }

   </script>

@endsection




