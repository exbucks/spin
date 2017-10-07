(function() {
    var bodyElement = document.querySelector('body');
    bodyElement.classList.add('loading');

    document.addEventListener('readystatechange', function() {
        if(document.readyState === 'complete') {
            var bodyElement = document.querySelector('body');
            var loaderElement = document.querySelector('#initial-loader');

            bodyElement.classList.add('loaded');
            setTimeout(function() {
                bodyElement.removeChild(loaderElement);
                bodyElement.classList.remove('loading', 'loaded');
            }, 200);
        }
    });
})();
