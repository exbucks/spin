(function() {
    // Namespace declaration
	window.Dashboard = window.Dashboard || { };

    var lastBodyClasses = '';
    var lastContentContainerClasses = '';

    Dashboard.LayoutControl = {
        // Internal variables
        $content: $('.content'),
        $footer: $('footer'),
        $navBar: $('.navigation .navbar'),
        $sideBar: $('.navigation .sidebar'),
        $window: $(window),
        /***
         * setContentMinHeight - sets the content height so it will fill the whole window if the content itself is smaller
         * matches the window height or sidebar height according to which is higher
         *
         * @param additionalHeight - adds the provided number to the target sidebar height - used in animating sidebar menu
         */
        setContentMinHeight: function (additionalHeight) {
            additionalHeight = additionalHeight || 0;

            var windowHeight = this.$window.height(),
                sidebarHeight = this.$sideBar.outerHeight(true) + additionalHeight;

            if(windowHeight >= sidebarHeight) {
                var footerHeight = this.$footer.is(':visible') && !Dashboard.Helpers.isFixedFooter()
                    ? this.$footer.height() : 0;
                var navbarHeight = this.$navBar.is(':visible') ? this.$navBar.height() : 0;

                var contentHeightStyle = 'calc(100vh - {navfootHeight}px)'
                    .replace('{navfootHeight}', footerHeight + navbarHeight);

                this.$content.css('minHeight', contentHeightStyle);
            } else {
                this.$content.css('minHeight', sidebarHeight);
            }

            /*
            //Determine to use window height ot sidebar height
            var targetHeight = (windowHeight > sidebarHeight || Dashboard.Helpers.isSidebarDisabled())
                ? windowHeight : $sideBar.offset().top + sidebarHeight;

            //Reset the previous content minHeight
            $content.css('minHeight', '');

            //If content is smaller then the desired target =>
            if ($content.height() < targetHeight) {
                var $footer = $('footer');
                var $navBar = $('.navigation .navbar');

                //Get heights based on elements visibility
                var footerHeight =
                    $footer.is(':visible') && !Dashboard.Helpers.isFixedFooter()
                        ? $footer.height() : 0;
                var navbarHeight = $navBar.is(':visible') ? $navBar.height() : 0;

                //Calculate the height diff and apply it
                var minHeight = targetHeight - footerHeight - navbarHeight;

                $content.css('minHeight', minHeight)
            } */
        },

        /***
         * initLayoutChangeEventEmitter - initializes an event emitter which will emmit layout-changed event on the
         * window object, when control classes on body will be modified
         */
        initLayoutChangeEventEmitter: function(){
            var bodyElement = document.querySelector('body');
            var contentContainer = document.querySelector(
                '.content > .container, .content > .container-fluid');
            //Init mutation observer
            var classObserver = new MutationObserver(function(mutations){
                mutations.forEach(function(mutation){
                    if(mutation.attributeName === 'class'){
                        if(bodyElement.className !== lastBodyClasses ||
                            contentContainer.className !== lastContentContainerClasses)
                        {
                            $(window).trigger('layout-changed');

                            lastBodyClasses = bodyElement.className;
                            lastContentContainerClasses = contentContainer.className;
                        }
                    }
                });
            });
            //Start observing
            classObserver.observe(bodyElement, {
                attributes: true
            });

            classObserver.observe(contentContainer, {
                attributes: true
            });
        },

        /***
         * setFixedSidebarsRelativeToContent - sets the fixed sidebars so that they will be relative to .main-wrap element
         * mainly used when switching to BoxedLayout
         */
        setFixedSidebarsRelativeToContent: function(){
            var isBoxedLayout = Dashboard.Helpers.isBoxedLayout(),
                isRTL = Dashboard.Helpers.isRTL();

            var $sideBar = $('.sidebar'),
                $rightSideBar = $('.right-sidebar');

            if(isBoxedLayout){
                //When boxed - set fixed sidebars to main wrap
                var $container = $('.main-wrap'),
                    isSidebarFixed = Dashboard.Helpers.isFixedSidebar();

                if(isSidebarFixed){
                    Dashboard.Helpers.setFixedRelativeToElement($sideBar, $container, isRTL);
                }else{
                    $sideBar.css({
                        left: '',
                        right: ''
                    });
                }

                Dashboard.Helpers.setFixedRelativeToElement($rightSideBar, $container, !isRTL);
            }else{
                $sideBar.add($rightSideBar).css({
                    left: '',
                    right: ''
                });
            }
        },

        /***
         * setSidebarsStickyness - initializes Bootstrap s sticky affix, so fixed sidebars will stick to the top on scrolling
         */
        setSidebarsStickyness: function(){
            var $sideBars = $('.sidebar, .right-sidebar'),
                $navBar = $('.navbar');

            $sideBars.affix({
                offset: {
                    top: $navBar.outerHeight()
                }
            });
        }
    }

    //Changes the ajax links so they arent making the redirect
    //TODO: Should be revised
    $(function(){
        lastBodyClasses = document.querySelector('body').className;

        $('a[href="#"]').each(function(){
          $(this).prop('href', 'javascript: void(0)');
        });
    });
})();
