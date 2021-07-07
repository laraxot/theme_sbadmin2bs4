@extends('adm_theme::layouts.plane')
@section('body')
    <!-- Page Wrapper -->
    <div id="wrapper">
        @include('adm_theme::layouts.partials.sidebar')

        <div id="content-wrapper" class="d-flex flex-column">


            <div id="content">
                @include('adm_theme::layouts.partials.headernav')
                <!-- Begin Page Content -->
                <div class="container-fluid" id="app">
                    <!-- Page Heading -->
                    @if (isset($_panel))
                        {!! Theme::include('inner_page',[],get_defined_vars() ) !!}
                        @include('adm_theme::layouts.partials.breadcrumb',['_panel'=>$_panel])
                        @include('adm_theme::layouts.partials.tabs',['tabs'=>$_panel->getTabs()])
                        {{--
                            {!! Theme::include('topbar', [], get_defined_vars()) !!}
                        --}}
                    @endif
                    @yield('section')
                    @yield('content')
                    @if (isset($_panel))
                        {!! Theme::include('bottombar', [], get_defined_vars()) !!}
                    @endif

                </div>
                <!-- /.container-fluid -->
            </div>
            <!-- End of Main Content -->
            @include('adm_theme::layouts.partials.footer')


        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
    @php
    // \xdebug_print_function_stack( '['.__LINE__.']['.__FILE__.']' );
    @endphp

@endsection
