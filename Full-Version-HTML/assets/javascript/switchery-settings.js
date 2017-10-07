/** START JS Init "Switchery" (Colors Variations) from forms-extended.html **/
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
    elems.forEach(function(html) {
      var switchery = new Switchery(html);
    });

    function initSwitchery(selector, settings) {
        var switches = document.querySelectorAll(selector);
        var switchesIter = Array.prototype.slice.call(switches);
        switchesIter.forEach(function(switcher) {
            new Switchery(switcher, settings);
        });
    }

    initSwitchery('.js-switch-primary', { color: '#2D99DC', jackColor: '#fff', secondaryColor: '#2D2D2D', jackSecondaryColor: '#5C5C5C' });
    initSwitchery('.js-switch-info', { color: '#35BDA8', jackColor: '#fff', secondaryColor: '#2D2D2D', jackSecondaryColor: '#5C5C5C' });
    initSwitchery('.js-switch-warning', { color: '#E66C40', jackColor: '#fff', secondaryColor: '#2D2D2D', jackSecondaryColor: '#5C5C5C' });
    initSwitchery('.js-switch-success',  { color: '#86B34D', jackColor: '#fff', secondaryColor: '#2D2D2D', jackSecondaryColor: '#5C5C5C' });
    initSwitchery('.js-switch-danger', { color: '#CB3E4B', jackColor: '#fff', secondaryColor: '#2D2D2D', jackSecondaryColor: '#5C5C5C' });

    initSwitchery('.js-switch-small', { size: 'small' });
    initSwitchery('.js-switch-small-primary', { size: 'small', color: '#2D99DC', jackColor: '#fff', secondaryColor: '#2D2D2D', jackSecondaryColor: '#5C5C5C' });
    initSwitchery('.js-switch-small-info', { size: 'small', color: '#35BDA8', jackColor: '#fff', secondaryColor: '#2D2D2D', jackSecondaryColor: '#5C5C5C' });
    initSwitchery('.js-switch-small-warning', { size: 'small', color: '#E66C40', jackColor: '#fff', secondaryColor: '#2D2D2D', jackSecondaryColor: '#5C5C5C' });
    initSwitchery('.js-switch-small-success', { size: 'small', color: '#86B34D', jackColor: '#fff', secondaryColor: '#2D2D2D', jackSecondaryColor: '#5C5C5C' });
    initSwitchery('.js-switch-small-danger', { size: 'small', color: '#CB3E4B', jackColor: '#fff', secondaryColor: '#2D2D2D', jackSecondaryColor: '#5C5C5C' });

    initSwitchery('.js-switch-large', { size: 'large' });