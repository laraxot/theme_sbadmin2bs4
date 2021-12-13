<?php

declare(strict_types=1);

namespace Themes\SbAdmin2Bs4\Providers;

use Modules\Xot\Providers\XotBaseThemeServiceProvider;

/**
 * Undocumented class.
 */
class SbAdmin2Bs4ServiceProvider extends XotBaseThemeServiceProvider {
    public string $dir = __DIR__;
    public string $name = 'SbAdmin2Bs4';
    public string $ns = 'adm_theme';
}
