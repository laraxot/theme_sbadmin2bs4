<?php

declare(strict_types=1);

namespace Themes\SbAdmin2Bs4\View\Components;

use Illuminate\View\Component;

class GuestLayout extends Component {
    /**
     * Get the view / contents that represents the component.
     *
     
     */
    public function render():\Illuminate\Contracts\Support\Renderable {
        return view('layouts.guest');
    }
}