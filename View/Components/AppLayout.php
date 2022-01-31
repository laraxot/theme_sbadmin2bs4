<?php

declare(strict_types=1);

namespace Themes\SbAdmin2Bs4\View\Components;

use Illuminate\View\Component;

class AppLayout extends Component {
    /**
     * Get the view / contents that represents the component.
     *
     * @return \Illuminate\View\View
     */
    public function render() {
        return view('layouts.app');
    }
}