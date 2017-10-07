(function() {
    // Namespace declaration
	window.Dashboard = window.Dashboard || { };

    /***
     * Object responsible for handling RightSidebar actions
     */
    Dashboard.RightSidebar = {
        /***
         * setupVerticalScrolls - initializes containers which will have a fixed height, with a PrettyScrollbar inside
         */
        setupVerticalScrolls: function(){
            var $verticalScrollContainers = $('.vertical-scroll-container'),
                $rightSidebar = $('.right-sidebar');

            //Updates the height of the Vertical Scroll container
            function updateVerticalScroll($verticalScrollContainer){
                var offset = $verticalScrollContainer.offset();
                var windowScrollTop = $(window).scrollTop();

                //Calculate potential Next elements height without PrettyScrollBars and extra
                var $nextElementsNotAbsolute = $verticalScrollContainer.nextAll().filter(function(){
                    var position = $(this).css('position');
                    return !(position === 'absolute' || position === 'fixed');
                });
                var nextElementsTotalHeight = Dashboard.Helpers.calcElementsHeightSum($nextElementsNotAbsolute);

                //Set the calculated height on the container
                $verticalScrollContainer.css({
                    height: (window.innerHeight - (offset.top - windowScrollTop) - nextElementsTotalHeight) + 'px'
                });
            }

            //Init Vertical Scrolls
            $verticalScrollContainers.each(function(){
                //Assign a mutation observer for each VerticalScroll to monitor parents for class changes
                //for example - tab opened, right sidebar activated etc.
                var $verticalScrollContainer = $(this);
                var $elementsToObserve = $rightSidebar
                   .add($verticalScrollContainer.closest('.tab-pane'))
                   .add($verticalScrollContainer.closest('.right-sidebar-extra-content'));

                Dashboard.Helpers.setAttributeChangeObserver($elementsToObserve, function attributeChangedCallback(){
                    updateVerticalScroll($verticalScrollContainer);
                });

                //Update the vertical scroll size on resize/ready
                $(window).on('resize ready', function updateProxy(){
                    updateVerticalScroll($verticalScrollContainer);

                    $verticalScrollContainer.perfectScrollbar('update');
                });
                //Init Perfect Scrollbar
                $verticalScrollContainer.perfectScrollbar({
                    suppressScrollX: true
                });
            });
        },

        /***
         * setupExtraContent - initializes ExtraContent containers which will cover a specific element
         * marked with [data-target-extra-content] upon activation
         */
        setupExtraContent: function(){
            var $window = $(window),
                $rightSidebar = $('.right-sidebar');

            //Calculate the desire top (based on the "element to cover" top)
            //and appropriate height, so it can reach the bottom of the window
            function updateExtraContentContainer($relativeElement, $extraContent){
                var targetTop = $relativeElement.position().top;
                var rightSidebarTopAdj = $rightSidebar.offset().top - $window.scrollTop();

                $extraContent.css({
                    top: targetTop + 'px',
                    height: (window.innerHeight - targetTop - rightSidebarTopAdj) + 'px'
                });
            }

            $('[data-target-extra-content]').each(function(){
                var $relativeElement = $(this);
                var $extraContent = $('#' + $relativeElement.data('targetExtraContent'));

                //Update container heights on parent attribute mutation
                //For example - panel/sidebar activated
                var $elementsToObserve = $rightSidebar
                    .add($extraContent.closest('.tab-pane'));
                Dashboard.Helpers.setAttributeChangeObserver($elementsToObserve, function attributeChangedCallback(){
                    updateExtraContentContainer($relativeElement, $extraContent);
                });

                //Update container on resize/ready
                $window.on('resize ready', function updateProxy(){
                    updateExtraContentContainer($relativeElement, $extraContent);
                });
            });

            //Setup action handlers
            $('.extra-content-close').on('click', function extraContentCloseHandler(){
                $(this).closest('.right-sidebar-extra-content')
                    .removeClass('active');
            });

            $('.extra-content-open').on('click', function extraContentOpenHandler(){
                var targetId = $(this).closest('[data-target-extra-content]')
                    .data('targetExtraContent');

                if(targetId){
                    $('#' + targetId).addClass('active');
                }
            });
        }
    }
})();
