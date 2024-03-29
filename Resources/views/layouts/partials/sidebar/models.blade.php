@php

if (!isset($params['module'])) {
    return;
}
$models = getModuleModels($params['module']);
//dddx(['module' => $params['module'], 'models' => $models]);
//if (!isset($containers)) {
//    return;
//}
//$container0 = Arr::first($containers);
@endphp
<li class="nav-item active {{-- $el->active?'active':'' --}}">
    <a class="nav-link {{-- collapsed --}} vis{{-- $el->visibility --}}" href="#collapseM{{-- $el->id --}}"
        data-toggle="collapse" data-target="#collapseM{{-- $el->id --}}" aria-expanded="true"
        aria-controls="collapseM{{-- $el->id --}}">
        {{-- <i class="fas fa-fw fa-cog"></i> --}}
        <span>Models</span>
    </a>
    <div id="collapseM{{-- $el->id --}}" class="collapse show" aria-labelledby="heading{{-- $el->id --}}"
        data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            {{-- <h6 class="collapse-header">Custom Components:</h6> --}}
            {{-- @if (isset($menus[$el->id]))
                @foreach ($menus[$el->id] as $sub_el)
                    <a class="collapse-item" href="{{ $sub_el->url }}">{{ $sub_el->nome }}</a>
                @endforeach
            @endif --}}
            @foreach ($models as $k => $v)
                @php
                    /*
                    $parz = $params;
                    if (!isset($parz['lang'])) {
                        $parz['lang'] = \App::getLocale();
                    }
                    $parz['container0'] = $k;
                    $route = route('admin.containers.index', $parz);
                    */
                    $parz=[
                        'module'=>$params['module'],
                        'container0'=>Str::plural($k)
                    ];
                    $route = route('admin.containers.index', $parz);
                @endphp
                <a class="collapse-item {{ isset($container0) && $k == $container0 ? 'active' : '' }}"
                    href="{{ $route }}">{{ $k }}</a>
            @endforeach
        </div>
    </div>
</li>
