(function() {
	//Namespace declaration
	window.Dashboard = window.Dashboard || { };
	Dashboard.Helpers = Dashboard.Helpers || {};

	Dashboard.Helpers.isDefaultSidebar = function(){
		var bodyElement = document.querySelector('body');
		var isDefault =
			!(bodyElement.classList.contains('sidebar-big-icons') ||
			  bodyElement.classList.contains('sidebar-slim'));

		return isDefault;
	}

	Dashboard.Helpers.isSidebarBigIcons= function(){
	    var bodyElement = document.querySelector('body');
	    return bodyElement.classList.contains('sidebar-big-icons');
	}

	Dashboard.Helpers.isFixedFooter = function(){
	    var bodyElement = document.querySelector('body');
	    return bodyElement.classList.contains('footer-fixed');
	}

	Dashboard.Helpers.isFixedSidebar = function(){
		var bodyElement = document.querySelector('body');
		return bodyElement.classList.contains('sidebar-fixed');
	}

	Dashboard.Helpers.isFixedNavbar = function(){
		var bodyElement = document.querySelector('body');
		return bodyElement.classList.contains('navbar-fixed');
	}

	Dashboard.Helpers.isBoxedLayout = function(){
		var bodyElement = document.querySelector('body');
		return bodyElement.classList.contains('boxed-layout');
	}

	Dashboard.Helpers.isRTL = function(){
		var bodyElement = document.querySelector('body');
		return bodyElement.classList.contains('rtl');
	}

	Dashboard.Helpers.isFullHeightSidebar = function(){
		var bodyElement = document.querySelector('body');
		return bodyElement.classList.contains('sidebar-full-height');
	}

	Dashboard.Helpers.isSidebarSlim = function(){
		var bodyElement = document.querySelector('body');
		return bodyElement.classList.contains('sidebar-slim');
	}

	Dashboard.Helpers.isSidebarDisabled= function(){
	    var bodyElement = document.querySelector('body');
	    return bodyElement.classList.contains('sidebar-disabled');
	}

	Dashboard.Helpers.calcElementsHeightSum = function($elements){
		var height = 0;

		$elements.each(function(){
			height += $(this).outerHeight(true);
		});

		return height;
	}

	Dashboard.Helpers.setAttributeChangeObserver = function($elements, callback){
		var mutationObserver = new MutationObserver(function(mutations){
			mutations.forEach(function(mutation){
				if(mutation.attributeName === 'class'){
					callback();
				}
			});
		});

		var observerConfig = {
			attributes: true
		};

		$elements.each(function(){
			mutationObserver.observe(this, observerConfig);
		});
	}

	Dashboard.Helpers.setFixedRelativeToElement = function ($fixedElement, $relativeElement, toRight) {
		$fixedElement = $fixedElement || $();
		$relativeElement = $relativeElement || $();

		var contentRect = $relativeElement[0].getBoundingClientRect();
		var cssText;

		if (!toRight) {
			cssText = 'left: {left}px; right: auto'
				.replace('{left}', contentRect.left.toString());
			$fixedElement.css('cssText', cssText);
		} else {
			var right = $(window).width() - contentRect.right;
			$fixedElement.css({
	            'left': 'auto',
	            'right': right + 'px'
	        });
		}
	}

	Dashboard.Helpers.elementExists = function(elementQuery, callback) {
		var element = document.querySelector(elementQuery);
		if(!!element) {
	        callback.call(element);
	    }
	}

	Dashboard.Helpers.DeviceMediaQueries = {
		'SCREEN_XS': '(max-width: 767px)',
		'SCREEN_SM': '(min-width: 768px)',
		'SCREEN_MD': '(min-width: 992px)',
		'SCREEN_LG': '(min-width: 1200px)'
	}

	Dashboard.Helpers.Colors = {
	    grayBase:                                '#000',
	    grayDarker:                              '#262626',
	    grayDark:                                '#2d2d2d',
	    gray:                                    '#383838',
	    grayLight:                               '#444444',
	    grayLighter:                             '#5c5c5c',

	    brandWhite:                              'white',

	    brandPrimary:                            '#2c97de',
	    brandSuccess:                            '#84b547',
	    brandInfo:                               '#2dbda8',
	    brandWarning:                            '#e76d3b',
	    brandDanger:                             '#cc3e4a',

	    brandCerulean:                           '#00A3E3',
	    brandCuriousBlue:                        '#2986c7',
	    brandEndaveour:                          '#0055a3',
	    brandMinsk:                              '#362d88',
	    brandEminence:                           '#742787',
	    brandVioletEggplant:                     '#aa1985',
	    brandMintGreen:                          '#72ff96',
	    brandAquamarine:                         '#62ffe0',
	    brandMalibu:                             '#6abfff',
	    brandDodgerBlue:                         '#5e6cff',
	    brandHeliotrope:                         '#a26bff',
	    brandPerfume:                            '#f57ffe'
	};
})();
