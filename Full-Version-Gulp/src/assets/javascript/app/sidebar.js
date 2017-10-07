(function() {
    //Namespace declaration=================================
    window.Dashboard = window.Dashboard || {};

    var mobileDetect = new MobileDetect();

    Dashboard.Settings = Dashboard.Settings || { };

    Dashboard.Settings.SidebarMenuAnimationDuration = 300;      //Sidebar menu animation duration
    Dashboard.Settings.SidebarMenuAnimationEasing = '';         //Sidebar menu animation easing function
    /***
     * Object responsible for Sidebar logic*
     */
    Dashboard.Sidebar = {
        //TODO: Needs some tweaking
        /***
         * setSideSubmenusMinHeight - sets appropriate height of the side submenus when Big Icons Sidebar is active
         * so it can be stretched vertically on full window height. Should be assigned to "window.resize"
         */
        setSideSubmenusMinHeight: function(){
            /*var $sideMenu = $('.side-menu');
            var $subMenus = $sideMenu.find('li.primary-submenu > ul');

            if(Dashboard.Helpers.isSidebarBigIcons()){
                $subMenus.css({
                    height: ($(window).height() - $sideMenu.offset().top) + 'px'
                });
            }else{
                $subMenus.css('height', '');
            }*/
        },

        /***
        * saveSidebarStartupClasses - saves the classes defining the state of the sidebar
        */
        saveSidebarStartupClasses: function(){
            var classesToSave = '',
                $body = $('body'),
                sizeClassesWhiteList = [
                    'sidebar-slim',
                    'sidebar-big-icons',
                    'sidebar-overlay',
                    'sidebar-disabled'
                ];

            bodyClassList = $body.prop('class').split(' ');

            bodyClassList.forEach(function(className){
                if(sizeClassesWhiteList.indexOf(className) >= 0){
                    classesToSave += (className + ' ');
                }
            });
            $body.data('start-sidebar-classes', classesToSave);
        },

        /***
         * setSidebarState - changes the sidebar based on the resolution of the device via Media Queries
         */
        setSidebarState: function(){
            var $body = $('body');

            var startSidebarClasses = $body.data('start-sidebar-classes');

            //Dont modify when the sidebar is disabled
            if(startSidebarClasses.indexOf('sidebar-disabled') >= 0){
                return;
            }

            //If extra-small - make sidebar overlay
            if(window.matchMedia(Dashboard.Helpers.DeviceMediaQueries.SCREEN_XS).matches){
                $body.removeClass('sidebar-slim ' + startSidebarClasses);
                $body.addClass('sidebar-overlay');
            }
            //If small and no big icons - make sidebar slim
            if(window.matchMedia(Dashboard.Helpers.DeviceMediaQueries.SCREEN_SM).matches){
                $body.removeClass('sidebar-overlay ' + startSidebarClasses);
                $body.addClass('sidebar-slim');
            }
            //If medium or larger - disable the above
            if(window.matchMedia(Dashboard.Helpers.DeviceMediaQueries.SCREEN_MD).matches){
                $body.removeClass('sidebar-overlay');
                $body.removeClass('sidebar-slim');
                $body.addClass(startSidebarClasses);
            }
        },

        /***
         * setupMenu - analyses the menu structure and attaches appropriate classes, mainly classes determining
         * the depth of nested submenus and adding submenu titles
         *
         * @param $sidebarMenu - jQuery object containing the menu to analyze
         */
        setupMenu: function($sidebarMenu){
            //Find all the menu items
            var $menuElements = $sidebarMenu.find('li');

            //Calculates the depth of nested menu items
            function calcSubLevelDepth(subMenuElement){
                var level = 0;
                var currentItemElement = subMenuElement.parentElement;

                while(currentItemElement.nodeName === 'LI' || currentItemElement.nodeName === 'UL'){
                    if(currentItemElement.nodeName === 'UL')
                        level++
                    currentItemElement = currentItemElement.parentElement;
                }

                return level;
            }

            $menuElements.each(function(){
                var $menuElement = $(this);

                //Find the potential submenu and the link from the current iterated menu element
                var $subMenu = $menuElement.find('>ul');
                var $link = $menuElement.find('>a');

                if($subMenu.length > 0){
                    //if parent of the current submenu is the main menu
                    //mark the item with a primary-submenu class and add submenu title to attributes
                    if($menuElement.parent()[0] === $sidebarMenu[0]){
                        $menuElement.addClass('primary-submenu');

                        //Add submenu title based on sibling item nav-label (used with Big Icons Sidebar)
                        var $navLabel = $link.children('.nav-label');
                        if($navLabel){
                            $subMenu.attr('data-submenu-title', $navLabel.text().trim());
                        }
                    }
                    //Mark the item with has-submenu and the submenu with appropriate level class
                    $menuElement.addClass('has-submenu');
                    $subMenu.addClass('submenu-level-' + calcSubLevelDepth($subMenu[0]));
                }
            });
        },

        openOverlay: function() {
            var $sidebar = $('.sidebar');
            var $body = $('body');

            if(!$body.hasClass('sidebar-overlay__open')) {
                $body.addClass('sidebar-overlay__open');

                $sidebar.velocity({
                    left: [0, -$sidebar.width()]
                }, {
                    duration: 200,
                    easing: 'ease-out'
                });
            }
        },

        closeOverlay: function() {
            var $sidebar = $('.sidebar');
            var $body = $('body');

            if($body.hasClass('sidebar-overlay__open')) {
                $sidebar.velocity({
                    left: [-$sidebar.width(), 0]
                }, {
                    duration: 200,
                    easing: 'ease-in',
                    complete: function() {
                        $('body').removeClass('sidebar-overlay__open');
                        $sidebar.css('left', 'auto');
                    }
                });
            }
        },

        /***
         * expandMenuToCurrentLink - expands all the submenus to reach the potential active Menu Element
         * using the .expanded class(not Slim) and the .nested-active class which is used for highlighting
         */
        expandMenuToCurrentLink: function(){
            var isDefaultSideBar = Dashboard.Helpers.isDefaultSidebar();
            var isSidebarSlim = Dashboard.Helpers.isSidebarSlim();

            //Reset previous expanded classes
            $('.sidebar .expanded').removeClass('expanded');

            var $activeItem = $('.sidebar .side-menu li.active');

            var $currentItem = $activeItem;
            while($currentItem.prop('tagName') == 'LI' || $currentItem.prop('tagName') == 'UL'){
                if($currentItem.prop('tagName') == 'LI'){
                    if((isDefaultSideBar && !$currentItem.hasClass('side-menu'))
                        ||(!isDefaultSideBar && !isSidebarSlim && !$currentItem.hasClass('primary-submenu'))){
                        $currentItem.addClass('expanded');
                    }
                    $currentItem.addClass('nested-active');
                }
                $currentItem = $currentItem.parent();
            }
        },

        /***
         * setMenuTooltips - initializes Bootstrap tooltips when the sidebar becomes slim, or resets in other cases
         *
         * @param $sidebarMenu - jQuery object containing the for tooltips
         */
        setMenuTooltips: function($sidebarMenu){
            //If not sidebar slim - remove tooltips
            if(!Dashboard.Helpers.isSidebarSlim()){
                $sidebarMenu.find('> li:not(.has-submenu) a').tooltip('destroy');
            }else{
            //If sidebar slim - add tooltips
                $sidebarMenu.find('> li:not(.has-submenu) a').tooltip({
                    placement: 'right',
                    container: 'body',
                    trigger: 'hover'
                });
            }
        },

        /***
         * setMenuHandler - initializes the menu logic: expand/close with Velocity animations
         *
         * @param $sidebarMenu - Target menu to assign the event handlers
         */
        setMenuHandler: function($sidebarMenu){
            //Find all the SubMenu expanders
            var $linkElements = $sidebarMenu.find('li.has-submenu > a');
            var _this = this;

            //Checks if the menu should be expanded on click (mobile) or hover - desktop
            function isHoverable(){
                if(!mobileDetect.mobile()){
                    var isDefaultSidebar =  Dashboard.Helpers.isDefaultSidebar();

                    return !isDefaultSidebar;
                }
                return false;
            }

            $linkElements.on('click', function clickHandler(){
                //Prevent expanding Side SUbmenus used with sidebar slim
                if(Dashboard.Helpers.isSidebarSlim())
                    return false;

                var $linkElement = $(this);
                var $parentElement = $linkElement.closest('li');
                var isAnimating = !!($sidebarMenu.find('.velocity-animating').length);

                //Prevent expands when other submenus are currently being animated
                //and makes sure to not to expand when clicked on desktop - only on touch devices
                if(($parentElement.hasClass('primary-submenu') && isHoverable()) || isAnimating){
                    return false;
                }

                var $currentMenu = $parentElement.closest('ul');
                var $subMenusInCurrentMenu = $currentMenu.find('> li > ul');
                var $currentSubMenu = $parentElement.find('> ul');
                var $otherSubMenus = $subMenusInCurrentMenu.filter(function reduceByCurrentSubmenu(){
                   return this !== $currentSubMenu[0];
                });

                //If not already expanded =>
                if(!$parentElement.hasClass('expanded')){
                    //Make the submenu visible, so we can get the height of it
                    $currentSubMenu.css('display', 'block');

                    //Get Submenu target height
                    var currentSubMenuScrollHeight
                        = parseInt($currentSubMenu.prop('scrollHeight'));

                    //Open the clicked target menu using animate: from 0 to target height
                    $currentSubMenu.velocity({
                        height: [currentSubMenuScrollHeight, 0]
                    }, {
                        display: '',
                        duration: Dashboard.Settings.SidebarMenuAnimationDuration,
                        easing: Dashboard.Settings.SidebarMenuAnimationEasing,
                        complete: function menuOpenCompleteCallback() {
                            $currentSubMenu.css('height', '');
                            $parentElement.addClass('expanded');
                        }
                    });

                    //Close other submenus on the same level if there are opened
                    var $subMenusToClose = $otherSubMenus.filter(function reduceNotExpnadedMenus(){
                        return $(this).closest('li').hasClass('expanded');
                    });
                    var subMenusToCloseTotalHeight = Dashboard.Helpers.calcElementsHeightSum($subMenusToClose);

                    //Animate closing on all the other submenus
                    $subMenusToClose.each(function(){
                        var $subMenuToClose = $(this);
                        $subMenuToClose.velocity({
                            height: [0, $subMenuToClose.prop('scrollHeight')]
                        }, {
                            duration: Dashboard.Settings.SidebarMenuAnimationDuration,
                            easing: Dashboard.Settings.SidebarMenuAnimationEasing,
                            complete: function menuCloseCompleteCallback() {
                                $subMenuToClose.closest('li').removeClass('expanded');
                                $subMenuToClose.css('height', '');
                            }
                        });
                    });

                    //Set the content height to window height or sidebar height (Only on Default Sidebar)
                    var additionalHeight = Dashboard.Helpers.isSidebarBigIcons() ? 0 :currentSubMenuScrollHeight - subMenusToCloseTotalHeight;
                    Dashboard.LayoutControl.setContentMinHeight(additionalHeight);
                }else{
                    //If the menu is already expanded => close it
                    var currentSubMenuScrollHeight
                        = parseInt($currentSubMenu.prop('scrollHeight'));

                    $currentSubMenu.velocity({
                        height: [0, currentSubMenuScrollHeight]
                    }, {
                        duration: Dashboard.Settings.SidebarMenuAnimationDuration,
                        easing: Dashboard.Settings.SidebarMenuAnimationEasing,
                        complete: function menuCLoseCOmpleteCallback(){
                            $currentSubMenu.closest('li').removeClass('expanded');
                            $currentSubMenu.css('height', '');

                            Dashboard.LayoutControl.setContentMinHeight();
                        }
                    });
                }
            });
        }
    }

    Dashboard.InnerNavigator = {
        init: function(queryElement, parentSidebarItem) {
            // Expand the appropriate Main Sidebar node
            var $sidebarElement = $(parentSidebarItem);
            if($sidebarElement.length > 0) {
                $sidebarElement.addClass('active');
                Dashboard.Sidebar.expandMenuToCurrentLink();
            }

            var $element = $(queryElement);
            var $rootNodes = $element.find('> li');
            var $activeItem = $element.find('.active');

            $rootNodes.find('ul').show().each(function() {
                $(this).data('startHeight', this.scrollHeight)
                        .css('overflow', 'hidden');
            });

            // Mark active nodes
            $activeItem.parents('li').addClass('active expanded');

            // Hide not active submenus
            $rootNodes.filter(':not(.expanded)').find('ul').hide();

            $rootNodes.on('click', function innerNavigatorClick() {
                var $this = $(this);

                if($this.hasClass('expanded')) return;

                var $subMenu = $this.find('ul');

                // Close other nodes
                $rootNodes.find('ul').not($subMenu).each(function() {
                    var $nodeToClose = $(this);
                    $nodeToClose.velocity({
                        height: [0]
                    }, {
                        duration: Dashboard.Settings.SidebarMenuAnimationDuration,
                        easing: Dashboard.Settings.SidebarMenuAnimationEasing,
                        complete: function() {
                            $nodeToClose.closest('li').removeClass('expanded');
                            $nodeToClose.css('display', 'none');
                        }
                    });
                });
                // Expand selected node
                $subMenu.css('display', 'block');
                $subMenu.velocity({
                    height: [$subMenu.data('startHeight'), 0]
                }, {
                    duration: Dashboard.Settings.SidebarMenuAnimationDuration,
                    easing: Dashboard.Settings.SidebarMenuAnimationEasing,
                    complete: function() {
                        $this.addClass('expanded');
                    }
                });
            });
        }
    };
})();
