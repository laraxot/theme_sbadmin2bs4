{{-- Footer --}}
<footer class="sticky-footer bg-white">
    <div class="container my-auto">
        <div class="copyright text-center my-auto">
            <span>
                <x-info.server />
            </span>
        </div>
    </div>
</footer>
{{-- End of Footer --}}

@php
/*
xdebug_set_filter(
    XDEBUG_FILTER_TRACING,
    XDEBUG_PATH_EXCLUDE,
    [ __DIR__ . "/vendor/" ]
);
xdebug_print_function_stack();
//*/
@endphp
