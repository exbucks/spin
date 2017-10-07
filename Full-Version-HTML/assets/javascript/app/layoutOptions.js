$(function(){
	var SIDEBAR_STYLE_LOGO_MAP = {
		'dark': {
			'slim': 'logo-slim-{brand}@2X.png',
			'big': 'logo-big-{brand}-white@2X.png',
			'overlay': 'logo-{brand}-white@2X.png'
		},
		'light': {
			'slim': 'logo-slim-{brand}@2X.png',
			'big': 'logo-big-{brand}-black@2X.png',
			'overlay': 'logo-{brand}-black@2X.png'
		},
		'color': {
			'slim': 'logo-slim-{brand}@2X.png',
			'big': 'logo-big-{brand}-black@2X.png',
			'overlay': 'logo-{brand}-white@2X.png'
		}
	};

	var NAVBAR_STYLE_LOGO_MAP = {
		'dark': 'logo-{brand}-white@2X.png',
		'default': 'logo-{brand}-black@2X.png',
		'color': 'logo-{brand}-white@2X.png'
	};

	function getSidebarLogos(sidebarStyle, brand) {
		var fillObjectWithBrand = function(styleObject, brand) {
			var filledStyle = {};
			Object.getOwnPropertyNames(styleObject).forEach(function(key) {
				filledStyle[key] = styleObject[key].replace(/{brand}/g, brand);
			});
			return filledStyle;
		};

		var targetStyle = SIDEBAR_STYLE_LOGO_MAP[sidebarStyle];
		if(!targetStyle) {
			return fillObjectWithBrand(SIDEBAR_STYLE_LOGO_MAP['dark']);
		}

		return fillObjectWithBrand(targetStyle, brand);
	}

	function getNavbarLogo(navbarStyle, brand) {
		var targetUrl = NAVBAR_STYLE_LOGO_MAP[navbarStyle]
			|| NAVBAR_STYLE_LOGO_MAP['dark'];
		return targetUrl.replace(/{brand}/g, brand);
	}

	window.Dashboard = window.Dashboard || { };

    var $parentElement = $('.layout-options');
    var $body = $('body');
    var $checkboxes = $parentElement.find('input[type="checkbox"]');
    var startupBodyClasses = getCurrentBodyClassList();
	var startupBodyClassesString = startupBodyClasses.join(' ');
    var startupContentContainer = $('.main-wrap > .content > *:not(.sub-navbar)').hasClass('container-fluid') ?
        'container-fluid' : 'container';
    var startupHeaderContainer = $('.main-wrap > .sub-navbar > *').hasClass('container-fluid') ?
        'container-fluid' : 'container';
	var startupNavbarContainer = $('.main-wrap > .navigation > .navbar > *').hasClass('container-fluid') ?
        'container-fluid' : 'container';

	var startupNavbarClasses = $('.main-wrap .navigation > .navbar').attr('class') || '';
    // ============= Functions

    /**
    * getCurrentBodyClassList
    * description: returns the class list which is present at the body element at this moment
    */
    function getCurrentBodyClassList() {
        var classList = $body.attr('class') ? $body.attr('class').split(' ') : [];
		return classList.map(function(className) {
			if(className === 'loading')
				return '';
			return className;
		});
    }

    /**
    * disableDependantSwitches
    * description: disables the child switches when a .group-switch is being disabled
    */
    function disableDependantSwitches($inputGroup, disable) {
        disable = typeof disable === 'undefined' ? true : disable;

        $inputGroup.find('input:not(.group-switch), select').prop('disabled', disable);
    }

    /**
    * executeCheckboxChange
    * description: adds the appropriate body class defined by the provided $checkbox
    */
    function executeCheckboxChange($checkbox, isEnabled) {
        var targetBodyClass = $checkbox.data('targetBodyClass'),
            targetDirection = $checkbox.data('direction') || 'enabled';

        if(targetBodyClass) {
            if(targetDirection == 'enabled') {
                isEnabled ? $body.addClass(targetBodyClass) : $body.removeClass(targetBodyClass);
            }
            if(targetDirection == 'disabled') {
                isEnabled ? $body.removeClass(targetBodyClass) : $body.addClass(targetBodyClass);
            }
        }
    }

    /**
    * setInputsBasedOnStartupClasses
    * description: sets the inputs initial state by triggering load-handler event on each input
    *   and sets the state of checkboxes based on body classes and checkbox data- configurations
    *   (data-target-body-class, data-direction)
    */
    function setInputsBasedOnStartupClasses() {
        $parentElement.find('input, select').each(function inputsIterator() {
            var $input = $(this);

            var targetBodyClass = $input.data('targetBodyClass'),
                direction = $input.data('direction');

            if(targetBodyClass) {
                if(direction == 'enabled') {
                    $input.prop('checked', startupBodyClasses.indexOf(targetBodyClass) >= 0).trigger('change', true);
                }
                if(direction == 'disabled') {
                    $input.prop('checked', startupBodyClasses.indexOf(targetBodyClass) < 0).trigger('change', true);
                }
            }
            $input.trigger('load-handler');
        });
    }

    function emitLayoutOptionsChangeEvent() {
        $(window).trigger('layout-options-changed');
    }

    /**
    * registerObserverForDisableAttribute
    * description: attaches a MutationObserver to inputs which triggers disabled-state-changed event
    *   on inputs which the disabled attribute has changed
    */
    function registerObserverForDisableAttribute() {
        var disabledAttributeObserver = new MutationObserver(function disabledMutationHandler(mutations) {
            mutations.forEach(function(mutation) {
                $(mutation.target).trigger('disabled-state-changed');
            });
        });
        $parentElement.find('input:not(.group-switch), select').each(function(){
            disabledAttributeObserver.observe(this, {
                attributes: true,
                attributeFilter: ['disabled']
            });
        });
    }

    // ============== Default Event Handlers

    /**
    * EVENT: checkboxes - change
    *   description: handles the basic checkboxes mechanism
    */
    $checkboxes.on('change', function() {
        var $this = $(this);
        //Determines if the switch should enable/disable the other inputs in the group
        var isMainSwitchInput = $this.hasClass('group-switch');

        var isEnabled = $this.is(':checked');

        if (isMainSwitchInput) {
            var $inputGroup = $this.closest('.input-group');
            disableDependantSwitches($inputGroup, !isEnabled);
        }

        executeCheckboxChange($this, isEnabled);
        emitLayoutOptionsChangeEvent();
    });

    /**
    * EVENT: checkboxes - disabled-state-changed
    *   description: datermines what should happen with a checkbox when it is being disbled / enabled
    */
    $checkboxes.on('disabled-state-changed', function() {
        var $this = $(this);

        if($this.is(':disabled')) {
            executeCheckboxChange($this, false);
        } else {
            executeCheckboxChange($this, $this.is(':checked'));
        }
    });

    /**
    * EVENT: resetButton - click
    *   description: resets the body / container classes to their starting state
    */
    $parentElement.find('.action-reset-layout-options').on('click', function() {
        $body.prop('class', '')
            .addClass(startupBodyClassesString);

        $('.main-wrap > .content > *:not(.sub-navbar)')
            .removeClass('container container-fluid')
            .addClass(startupContentContainer);

        $('.main-wrap > .content > .sub-navbar > *')
            .removeClass('container container-fluid')
            .addClass(startupHeaderContainer);

		$('.main-wrap > .navigation > .navbar > *')
			.removeClass('container container-fluid')
			.addClass(startupNavbarContainer);

		$('.main-wrap > .navigation .navbar')
			.removeClass('navbar-default navbar-inverse navbar-primary navbar-success navbar-info navbar-warning navbar-danger')
			.addClass(startupNavbarClasses);

		setInputsBasedOnStartupClasses();
        emitLayoutOptionsChangeEvent();
    });

    // ================= Custom Event Handlers (for more sophisticated actions)

    /***
    * Navbar slim switch event handler
    * description: Updates the selected Sidebar Type when switched with Sidebar Slim switch in navbar
    */
    $('.navbar #sidebar-switch').on('click', function sidebarSwitchHandler() {
        $parentElement.find('#layout-sidebar-style').trigger('load-handler');
    });

    /***
    * Sidebar disabled event handler
    * description: Updates the #layout-content-view input so it chains down and updates the containers:
    *   when sidebar disabled - footer and navbar containers are only fluid;
    */
    $parentElement.find('#layout-sidebar-enabled').on('change', function(event, isSynthetic){
        if(!isSynthetic)
            $parentElement.find('#layout-content-view').trigger('change');
    });

    // Sidebar type change event handler
    $parentElement.find('#layout-sidebar-style')
        /**
        * EVENT: sidebarStyleSelect - load-handler
        *   description: sets the appropriate aption based on current sidebar type set in body class
        */
        .on('load-handler', function sidebarStyleLoadHandler() {
            var targetValue = '';
            var bodyClasses = getCurrentBodyClassList();
            $(this).find('option').each(function() {
                var values = this.value.split(' ');
                var matches = 0;
                values.forEach(function(value) {
                    if(bodyClasses.indexOf(value) >= 0) {
                        matches++;
                    }
                });
                if(values && matches === values.length) {
                    targetValue = this.value;
                }
            });
            $(this).val(targetValue);
        })
        /**
        * EVENT: sidebarStyleSelect - change
        *   description: sets the appropriate sidebar body class based on the selected option
        */
        .on('change', function sidebarStyleChangedHandler() {
            //clear previous classes
            $(this).find('option').each(function() {
                $body.removeClass(this.value);
            });
            //Add the selected class
            $body.addClass(this.value);

            emitLayoutOptionsChangeEvent()
        })
        /**
        * EVENT: sidebarStyleSelect - disabled-state-changed
        *   description: handles what happens when the select item is being enabled / disabled
        */
        .on('disabled-state-changed', function sidebarStyleDisabledHandler() {
            if($(this).is(':disabled')) {
                //Remove the possible classes if disabled
                $(this).find('option').each(function() {
                    $body.removeClass(this.value);
                });
            } else {
                //Apply the selected item using the change event handler
                $(this).trigger('change');
            }
        });

    // Sidebar Content View change event handler
    $parentElement.find('#layout-content-view')
        /**
        * EVENT: layoutContentSelect - load-handler
        *   description: sets the appropriate aption based on current containers
        */
        .on('load-handler', function contentViewLoadHandler() {
            if(Dashboard.Helpers.isBoxedLayout()){
                $(this).val('boxed-layout');
            } else {
                $('.main-wrap > .content > *:not(.sub-navbar)').hasClass('container') ?
                    $(this).val('container') : $(this).val('container-fluid');
            }
        })
        /**
        * EVENT: layoutContentSelect - change
        *   description: sets the appropriare conetent classes based on the selected option,
        *   works differently when sidebar is disabled or enabled
        */
        .on('change', function contentViewChangeHandler() {
            if(this.value === 'boxed-layout') {
                $body.addClass('boxed-layout');

                $('.main-wrap > footer > *, .navbar > *, .main-wrap > .content > *:not(.sub-navbar)')
                    .removeClass('container container-fluid')
                    .addClass('container-fluid');
            }else {
                $body.removeClass('boxed-layout');

                if(Dashboard.Helpers.isSidebarDisabled()) {
                    // Update container in footer and navbar
                    $('.main-wrap > footer > *, .navbar > *')
                        .removeClass('container container-fluid')
                        .addClass(this.value);
                } else {
                    $('.main-wrap > footer > *, .navbar > *')
                        .removeClass('container container-fluid')
                        .addClass('container-fluid');
                }

                $('.main-wrap > .content > *:not(.sub-navbar), .main-wrap > .content > .sub-navbar > *')
                    .removeClass('container container-fluid')
                    .addClass(this.value);
            }

            emitLayoutOptionsChangeEvent();
        });

    $parentElement.find('#layout-subnavbar-style')
		/**
		* EVENT: layoutSubnavbarStyle - load-handler
		*   description: sets the appropriate select option based on header found on the page
		*/
        .on('load-handler', function subNavbarStyleLoadHandler() {
            var $subNavbarStyle = $(this);
            var $childOptions = $subNavbarStyle.children('option');
            $childOptions.each(function childOptionsIterator() {
                var childValue = $(this).prop('value');
                if($body.hasClass(childValue)) {
                    $subNavbarStyle.val(childValue);
                }
            });
        })
		/**
		* EVENT: layoutSubnavbarStyle - change
		*   description: sets the appropriate sub navbar
		*/
        .on('change', function subNavbarStyleChangeHandler() {
            var selectedStyleClass = $(this).val();
            $body.removeClass('sub-navbar-header-only');
            $body.addClass(selectedStyleClass);

            //Header only cannot be fluid
            $('#layout-subnavbar-fluid').prop('disabled',
                (selectedStyleClass === 'sub-navbar-header-only'));

            emitLayoutOptionsChangeEvent();
        });


	var sidebarPossibleClasses =
		'sidebar-dark-primary sidebar-dark-info sidebar-dark-success sidebar-dark-warning sidebar-dark-danger ' +
		'sidebar-light-primary sidebar-light-info sidebar-light-success sidebar-light-warning sidebar-light-danger ' +
		'sidebar-primary sidebar-info sidebar-success sidebar-warning sidebar-danger';

	var navbarPossibleClasses =
		'navbar-inverse navbar-default navbar-primary navbar-success navbar-info navbar-warning navbar-danger';

	var setAppropriateLogos = function(sidebarStyle, navbarStyle, targetBrand) {
		// Assign logos
		var imagesPath = ASSET_PATH_BASE + '/assets/images/';
		$('.navigation > .navbar .navbar-brand img')
			.prop('src', imagesPath + getNavbarLogo(navbarStyle, targetBrand));

		var sidebarLogos = getSidebarLogos(sidebarStyle, targetBrand);
		$('.navigation .sidebar-logo > .logo-slim')
			.prop('src', imagesPath + sidebarLogos.slim);
		$('.navigation .sidebar-logo > .logo-default')
			.prop('src', imagesPath + sidebarLogos.big);
		$('.navigation .sidebar-overlay-head > img')
			.prop('src', imagesPath + sidebarLogos.overlay);
	}

	/**
	* EVENT: dashboardColors - change-handler
	*   description: sets appropriate color classes within the dashboard
	*/
	$parentElement.find('[name=mainColor],[name=navbarStyle],[name=sidebarStyle]')
		.on('change', function() {
			var targetBrand = $('[name=mainColor]:checked').val(),
				navbarStyle = $('[name=navbarStyle]:checked').val(),
				sidebarStyle = $('[name=sidebarStyle]:checked').val();

			var sidebarStyleClass = 'sidebar' + (sidebarStyle === 'color'? '-' + targetBrand :  '-' + sidebarStyle + '-' + targetBrand);
			var navbarStyleClass = 'navbar' + (navbarStyle === 'color' ? '-' + targetBrand : '-' + navbarStyle);

			// Assign classes
			$body.removeClass(sidebarPossibleClasses)
				 .addClass(sidebarStyleClass);

			$('.navigation > .navbar').removeClass(navbarPossibleClasses)
									  .addClass(navbarStyleClass);

			// Assign logos
			setAppropriateLogos(sidebarStyle, navbarStyle, targetBrand);
		})
		.on('load-handler', function() {
			// Add sidebar-dark-primary if there is no default class on startup
			var bodyClasses = (function() {
				var needsDefault = (function() {
					var result = true;

					startupBodyClasses.forEach(function(className) {
						if(result && sidebarPossibleClasses.indexOf(className) > 0) {
							result = false;
						}
					});

					return result;
				})();

				return needsDefault ? startupBodyClasses.concat(['sidebar-dark-primary'])
					: startupBodyClasses;
			})();

			bodyClasses.forEach(function(className) {
				// Detect Sidebar settings
				if(className && sidebarPossibleClasses.indexOf(className) >= 0) {
					var classParts = className.split('-');
					var sidebarColor = classParts[classParts.length - 1];
					var sidebarStyle = ['dark', 'light'].indexOf(classParts[1]) >= 0 ? classParts[1] : 'color';

					$parentElement.find('[name=sidebarStyle][value=' + sidebarStyle + ']').prop('checked', true);
					$parentElement.find('[name=mainColor][value=' + sidebarColor + ']').prop('checked', true);
				}
			});

			$('.navigation .navbar').attr('class').split(' ').forEach(function(className) {
				// Detect Navbrar settings
				if(className && className !== 'navbar' && navbarPossibleClasses.indexOf(className) >= 0) {
					// Set Style
					var targetStyle = 'color';
					if(['navbar-inverse', 'navbar-default'].indexOf(className) >= 0) {
						var classParts = className.split('-');
						targetStyle = classParts[1];
					}
					$parentElement.find('[name=navbarStyle][value=' + targetStyle + ']').prop('checked', true);
				}
			});

			setAppropriateLogos(
				$('[name=sidebarStyle]:checked').val(),
				$('[name=navbarStyle]:checked').val(),
				$('[name=mainColor]:checked').val()
			);
		});

    // ============ Init
    registerObserverForDisableAttribute();
    setInputsBasedOnStartupClasses();
});
