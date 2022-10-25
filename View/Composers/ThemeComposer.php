<?php

declare(strict_types=1);

namespace Themes\SbAdmin2Bs4\View\Composers;

use Illuminate\Contracts\Container\Container;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Str;
use Illuminate\View\View;
use Modules\Tenant\Services\TenantService;
use Modules\Xot\Services\PanelService;
use Modules\Xot\View\Composers\XotBaseComposer;
use Nwidart\Modules\Facades\Module;
use Themes\AdminLTE\Helpers\SidebarItemHelper;
use Themes\AdminLTE\Menu\Builder;

class ThemeComposer extends XotBaseComposer {
    /**
     * The array of menu items.
     *
     * @var array
     */
    protected $menu;

    /**
     * The array of menu filters. These filters will apply on each one of the
     * menu items in order to transforms they in some way.
     *
     * @var array
     */
    protected $filters;

    /**
     * The events dispatcher.
     *
     * @var Dispatcher
     */
    protected $events;

    /**
     * The application service container.
     *
     * @var Container
     */
    protected $container;

    /**
     * Map between a valid menu filter token and his respective filter method.
     * These filters are intended to get a specific set of menu items.
     *
     * @var array
     */
    protected $menuFilterMap;

    /**
     * Constructor.
     * Unresolvable dependency resolving [Parameter #0 [ <required> array $filters ]] in class Themes\AdminLTE\Services\AdminLTE.
     */
    public function __construct(/* array $filters, */ Dispatcher $events, Container $container) {
        /**
         * @var array
         */
        $filters = config('adm_theme::adminlte.filters');
        $this->filters = $filters;
        $this->events = $events;
        $this->container = $container;

        // Fill the map of filters methods.

        $this->menuFilterMap = [
            'sidebar' => [$this, 'sidebarFilter'],
            'navbar-left' => [$this, 'navbarLeftFilter'],
            'navbar-right' => [$this, 'navbarRightFilter'],
            'navbar-user' => [$this, 'navbarUserMenuFilter'],
        ];
    }

    /**
     * Bind data to the view.
     *
     * @return void
     */
    public function compose(View $view) {
        $view->with('_theme', $this);
    }

    /**
     * Get all the menu items, or a specific set of these.
     *
     * @param string $filterToken Token representing a subset of the menu items
     *
     * @return array A set of menu items
     */
    public function menu($filterToken = null) {
        if (empty($this->menu)) {
            $this->menu = $this->buildMenu();
        }

        // Check for filter token.
        if (isset($this->menuFilterMap[$filterToken])) {
            return array_filter(
                $this->menu,
                $this->menuFilterMap[$filterToken]
            );
        }
        // No filter token provided, return the complete menu.
        return $this->menu;
    }

    /**
     * Build the menu.
     *
     * @return array The set of menu items
     */
    protected function buildMenu() {
        // Create the menu builder instance.

        $builder = new Builder($this->buildFilters());

        // Dispatch the BuildingMenu event. Listeners of this event will fill
        // the menu.

        // $this->events->dispatch(new BuildingMenu($builder));
        $menu = config('adm_theme::adminlte.menu');

        // $builder->add(...$menu);

        $model_menu = $this->setMenu();

        // Cannot unpack array with string keys
        // dddx(['menu' => $menu, 'modelmenu' => $modelmenu]);

        $builder->add(...$model_menu);
        // dddx($builder->menu);

        // Return the set of menu items.

        return $builder->menu;
    }

    protected function setMenu(): array {
        /**
         * @var \Illuminate\Routing\Route
         */
        $route = \Route::current();
        // $parameters = optional(\Route::current())->parameters();
        $parameters = $route->parameters();

        if (isset($parameters['module'])) {
            $model_menu = getModuleModelsMenu($parameters['module'])->map(function ($item) {
                // dddx($item);
                $out = get_object_vars((object) $item);
                // dddx([$item, $out]);
                $out['text'] = $item->title;

                return $out;
            })
            ->values()
            ->all();

            $model_menu = [
                [
                    'url' => '/admin/'.$parameters['module'],
                    'text' => Str::upper($parameters['module']),
                    'icon' => 'fab fa-buromobelexperte',
                ],
                [
                    'text' => 'MODELS',
                    'icon' => 'fas fa-database',
                    'submenu' => $model_menu,
                ],
                /*
            [
                'text' => 'Dashboard',
                'icon' => 'fas fa-fw fa-share',
                'submenu' => $model_menu,
            ],
            [
                'text' => 'Catalog',
                'icon' => 'fas fa-fw fa-share',
                'submenu' => $model_menu,
            ],
            [
                'text' => 'Brands',
                'icon' => 'fas fa-fw fa-share',
                'submenu' => $model_menu,
            ],
            [
                'text' => 'Categories',
                'icon' => 'fas fa-fw fa-share',
                'submenu' => $model_menu,
            ],
            [
                'text' => 'Collections',
                'icon' => 'fas fa-fw fa-share',
                'submenu' => $model_menu,
            ],
            [
                'text' => 'Custumers',
                'icon' => 'fas fa-fw fa-share',
                'submenu' => $model_menu,
            ],
            [
                'text' => 'Reviews',
                'icon' => 'fas fa-fw fa-share',
                'submenu' => $model_menu,
            ],
            [
                'text' => 'Discounts',
                'icon' => 'fas fa-fw fa-share',
                'submenu' => $model_menu,
            ],
            */
            ];
        } else {
            $modules = array_keys(Module::all());
            $panel = PanelService::make()->get(\Auth::user());
            $model_menu = $panel->areas()
                ->filter(
                    function ($item) use ($modules) {
                        return \in_array($item->area_define_name, $modules, true);
                    }
                )
                ->map(
                    function ($item) {
                        $out = get_object_vars($item);
                        $out['text'] = $item->area_define_name;
                        $out['url'] = $item->url;
                        $out['active'] = $item->active;
                        $out['title'] = $item->area_define_name;

                        return $out;
                    }
                )
            ->values()
            ->all();

            $model_menu = [
                [
                    'text' => 'AREAS',
                    'icon' => 'fas fa-fw fa-share',
                    'submenu' => $model_menu,
                ],
            ];
        }

        /*
        $model_menu = getModuleModelsMenu('lu')->map(function ($item) {
                $out = get_object_vars($item);
                $out['text'] = $item->title;

                return $out;
            })
            ->values()
            ->all();
        */

        return $model_menu;
    }

    /**
     * Build the menu filters.
     *
     * @return array The set of filters that will apply on each menu item
     */
    protected function buildFilters() {
        return array_map([$this->container, 'make'], $this->filters);
    }

    /**
     * Filter method used to get the sidebar menu items.
     *
     * @param mixed $item A menu item
     *
     * @return bool
     */
    private function sidebarFilter($item) {
        return SidebarItemHelper::isValidItem($item);
    }

    public function getAdminDashboardBlade(): string {
        $xra = TenantService::config('xra');
        $main_module = Str::lower($xra['main_module']);
        $view = $main_module.'::admin.dashboard.item';

        return $view;
    }
}
