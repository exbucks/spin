//Init Peity in Sidebar Avatar
$(function() {
    $("#sidebar-avatar-chart").peity("bar");
});

//Init DataTables
Dashboard.Helpers.elementExists('#datatables-example', function() {
    $(this).DataTable();

    $(this)
        .removeClass( 'display' )
        .addClass('table table-striped table-bordered');
});

//Init Peity charts
$(".data-attributes span").peity("donut");

// Init select2
(function() {
    if ($('.select2-input').length === 0) {
        return;
    }

    $('.select2-input').on( "select2:open", function() {
        if ( $( this ).parents( "[class*='has-']" ).length ) {
            var classNames = $( this ).parents( "[class*='has-']" )[ 0 ].className.split( /\s+/ );

            for ( var i = 0; i < classNames.length; ++i ) {
                if ( classNames[ i ].match( "has-" ) ) {
                    $( "body > .select2-container" ).addClass( classNames[ i ] );
                }
            }
        }
    }).select2({
        theme: "bootstrap"
    });
})();
