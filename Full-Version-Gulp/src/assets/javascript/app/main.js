(function(){
    window.Dashboard = window.Dashboard || { };

    // Priority initialization
    Dashboard.LayoutControl.setContentMinHeight();
    Dashboard.Sidebar.expandMenuToCurrentLink();

    //Main dashboard entry point
    $(function(){
        //Variables============================================
        var $sidebarMenu = $('.sidebar .side-menu');

        var highChartsInstances = [];

        //Initialization=======================================
        Dashboard.Sidebar.saveSidebarStartupClasses();
        Dashboard.Sidebar.setupMenu($sidebarMenu);
        //Dashboard.Sidebar.expandMenuToCurrentLink();
        Dashboard.Sidebar.setSidebarState(); //TODO: Needs Layout Options to be finished
        Dashboard.Sidebar.setMenuHandler($sidebarMenu);
        Dashboard.Sidebar.setMenuTooltips($sidebarMenu);
        Dashboard.Sidebar.setSideSubmenusMinHeight();
        //Dashboard.Sidebar.initPrettyScroll();

        Dashboard.LayoutControl.setContentMinHeight();

        Dashboard.RightSidebar.setupVerticalScrolls();
        Dashboard.RightSidebar.setupExtraContent();

        Dashboard.LayoutControl.initLayoutChangeEventEmitter();

        Dashboard.LayoutControl.setSidebarsStickyness();
        //Dashboard.LayoutControl.setFixedSidebarsRelativeToContent();
        //Event handlers=========================================
        $(window).on('layout-changed', function layoutChangeEventHandler(){
            Dashboard.Sidebar.setMenuTooltips($sidebarMenu);
            Dashboard.Sidebar.setSideSubmenusMinHeight();

            Dashboard.Sidebar.expandMenuToCurrentLink();

            Dashboard.LayoutControl.setContentMinHeight();

            //Dashboard.LayoutControl.setFixedSidebarsRelativeToContent();
            // Reflow Highcharts
            if(!highChartsInstances.length) {
                $('.highcharts-container').each(function() {
                    var instance = $(this).parent().highcharts();
                    if(instance) {
                        highChartsInstances.push(instance);
                    }
                });
            }
            highChartsInstances.forEach(function(highchart) {
                highchart.reflow();
            });
        });

        $(window).on('resize', function windowResizeEventHandler(){
            Dashboard.Sidebar.setSidebarState();

            Dashboard.LayoutControl.setContentMinHeight();

            //Dashboard.LayoutControl.setFixedSidebarsRelativeToContent();
        });

        $(window).on('layout-options-changed', function layoutOptionsChangeHandler() {
            Dashboard.Sidebar.saveSidebarStartupClasses();
        });

        $('body').imagesLoaded(function(){
            Dashboard.LayoutControl.setContentMinHeight();
        });

        //Other Elements=========================================
        //Toggle RightSidebar
        $('.action-right-sidebar-toggle').on('click', function(){
            //Toggle active class on all the triggers and the RightSidebar itself
            $('.right-sidebar,.action-right-sidebar-toggle').toggleClass('active');
        });

        $('body').on('click touchstart', function(event) {
            var $target = $(event.target);
            var $body = $('body');

            if($target.closest('.action-right-sidebar-toggle').length) {
                return;
            }

            if($body.hasClass('sidebar-overlay') && !$target.closest('.right-sidebar').length) {
                $('.right-sidebar,.action-right-sidebar-toggle').removeClass('active');
            }
        });

        //Toggle Sidebar Slim
        $('.action-toggle-sidebar-slim').on('click', function(){
            var $body = $('body');

            if(Dashboard.Helpers.isSidebarSlim()){
               var primarySidebarStyle = $body.data('primarySidebarStyle') || '';
               $body.removeClass('sidebar-slim')
                   .addClass(primarySidebarStyle);
            } else {
                var primarySidebarStyle = $body.hasClass('sidebar-big-icons') ? 'sidebar-big-icons': '';

                $body.data('primarySidebarStyle', primarySidebarStyle)
                    .removeClass(primarySidebarStyle)
                    .addClass('sidebar-slim');
            }
        });

        //Toggle overlay sidebar
        $('.action-sidebar-open').on('click', function() {
            Dashboard.Sidebar.openOverlay();
        });
        $('.action-sidebar-close').on('click', function(){
            Dashboard.Sidebar.closeOverlay();
        });
        $('body').on('click touchstart', function(event) {
            var $target = $(event.target);
            var $body = $('body');

            if($target.closest('.action-sidebar-open').length) {
                return;
            }

            if($body.hasClass('sidebar-overlay__open') && !$target.closest('.sidebar').length) {
                Dashboard.Sidebar.closeOverlay();
            }
        });

        // Close user menu when clicked outside
        $('body').on('click touchstart', function(event) {
            var $target = $(event.target);
            var $body = $('body');

            if($target.closest('.navbar-toggle[data-target=#navbar]').length) {
                return;
            }

            if($body.hasClass('sidebar-overlay') && !$target.closest('#navbar').length) {
                $('#navbar').collapse('hide');
            }
        });

        //Show / Hide Layout Options
        $('.action-toggle-layout-options').on('click', function(){
            if(!$('body').hasClass('layout-options-disabled'))
                $('.layout-options').toggleClass('active');
        });

        //Show / Hide Search bar
        $('html').click(function(e){
            $('.spin-search-box').removeClass('active');
        });

        $('.spin-search-box').on('click', function(e){
            e.stopPropagation();
        });

        $('.spin-search-box > a').on('click', function(){
            $(this).closest('.spin-search-box').toggleClass('active');

            return false;
        });

        //Init InnerNavigators
        Dashboard.Helpers.elementExists('#highstock-right-sidebar', function() {
            Dashboard.InnerNavigator.init(this, '#sidebar-link-highstock');
        });

        //Setup global Tooltips
        $('.action-toggle-sidebar-slim, .action-right-sidebar-toggle, .action-toggle-layout-options.disabled').tooltip({
            container: 'body',
            trigger: 'hover'
        });

        $('.action-toggle-layout-options:not(.disabled)').tooltip({
            trigger: 'hover'
        });

        //Init Radio Tabs Switching
        $('[data-radio-toggle=tab]').on('change', function() {
            var tabId = $(this).data('tabId');
            var $targetTab = $('.tab-pane' + tabId);

            if(!$targetTab.hasClass('active')) {
                $targetTab.siblings().removeClass('active');
                $targetTab.addClass('active');

                if($targetTab.hasClass('fade')) {
                    requestAnimationFrame(function() {
                        $targetTab.siblings().removeClass('in');
                        $targetTab.addClass('in');
                    });
                }
            }
        }).filter(':checked').trigger('change');

        //Add HolderJS themes
        (function() {
            if(typeof Holder === 'undefined') {
                return;
            }

            Holder.addTheme('folder', {
                bg: '#444444',
                fg: '#5a5a5a',
                font: 'FontAwesome',
                size: 36,
                fontweight: 'bold',
                text: String.fromCharCode(0xf114)
            });

            Holder.addTheme('video', {
                bg: '#444444',
                fg: '#2d2d2d',
                font: 'FontAwesome',
                size: 36,
                fontweight: 'normal',
                text: String.fromCharCode(0xf144)
            });

            Holder.addTheme('call', {
                bg: '#444444',
                fg: '#2d2d2d',
                font: 'FontAwesome',
                size: 36,
                fontweight: 'normal',
                text: String.fromCharCode(0xf03d)
            });

            Holder.addTheme('facebook', {
                bg: '#3A5C96',
                fg: '#FFFFFF',
                font: 'FontAwesome',
                size: 36,
                fontweight: 'normal',
                text: String.fromCharCode(0xf09a)
            });

            Holder.addTheme('image', {
                bg: '#444444',
                fg: '#2d2d2d',
                font: 'FontAwesome',
                size: 36,
                fontweight: 'normal',
                text: String.fromCharCode(0xf03e)
            });

            Holder.addTheme('video', {
                bg: '#444444',
                fg: '#2d2d2d',
                font: 'FontAwesome',
                size: 26,
                fontweight: 'normal',
                text: String.fromCharCode(0xf03d)
            });

            Holder.addTheme('text', {
                bg: '#444444',
                fg: '#ffffff'
            });
        })();


        // Perfect scroll init
        (function() {
            var md = new MobileDetect(window.navigator.userAgent);

            //Don't init on mobile nor Mac
            if(md.mobile() || navigator.platform === 'MacIntel') {
                return;
            }
            $('.custom-scrollbar').perfectScrollbar();
        })();

        // Perfect Scroll in Fixed Sidebar
        (function() {
            var inited = false;
            var $sidebar = $('.sidebar');

            function update() {
                if(!inited) {
                    $sidebar.perfectScrollbar({
                        suppressScrollX: true
                    });

                    inited = true;
                } else {
                    $sidebar.perfectScrollbar('update');
                }
            };

            function destroy() {
                if(inited) {
                    $sidebar.perfectScrollbar('destroy');
                    //$sidebar.removeClass('ps-container ps-theme-default');
                    //$sidebar.removeAttr('data-ps-id');

                    inited = false;
                }
            }

            $(window).on('layout-changed', function() {
                if(Dashboard.Helpers.isDefaultSidebar()) {
                    update();
                } else {
                    destroy();
                }
            });

            if(Dashboard.Helpers.isDefaultSidebar()){
                update();
            }
        })();

        //Init Bootstrap Tooltips and Popovers
        (function initBootstrapAddons() {
            Dashboard.Helpers.elementExists('[data-toggle="tooltip"]', function() {
                $('[data-toggle="tooltip"]').tooltip();
            });

            Dashboard.Helpers.elementExists('[data-toggle="popover"]', function() {
                $('[data-toggle="popover"]').popover();
            });
        })();

        // Init Back Buttons
        $('.action-navigate-back').on('click', function() {
            window.history.back();

            return false;
        });

        // Init Collapsible Panels
        (function() {
            $('.action-panel-collapse').on('click', function panelCollapseToggler() {
                var $panel = $(this).closest('.collapsible-panel');
                $panel.toggleClass('collapsed');
            });

            $('.action-panel-close').on('click', function panelCloseHandler() {
                var $panel = $(this).closest('.collapsible-panel');
                $panel.remove();
            });
        })();

        // Init Loaded Avatars
        $('.avatar-image').imagesLoaded().done(function(instance){
            instance.elements.forEach(function(element) {
                $(element).addClass('loaded');
            });
        });
    });
})();
