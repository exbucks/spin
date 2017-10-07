$(function() {
    var Colors = Dashboard.Helpers.Colors;

    function elementClassToColor($element) {
        if($element.hasClass('event-info'))
            return Colors.brandInfo;
        if($element.hasClass('event-success'))
            return Colors.brandSuccess;
        if($element.hasClass('event-warning'))
            return Colors.brandWarning;
        if($element.hasClass('event-danger'))
            return Colors.brandDanger;

        return Colors.brandPrimary;
    };

    // Drag And Drop Elements
    $('#events-list .event').each(function() {
        var $element = $(this);

        $element.data('event', {
            title: $.trim($element.text()),
            stick: true,
            color: elementClassToColor($element)
        });

        $element.draggable({
            zIndex: 999,
            revert: true,
            revertDuration: 0,
            stop: function() {
                $element.removeAttr('style');
            }
        });
    });

    // Init callendar
    $('#full-calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2014-06-12',
        defaultView: 'month',
        droppable: true,
        editable: true,
        events: [
            {
                title: 'All Day Event',
                start: '2014-06-01',
                color: Colors.brandPrimary
            },
            {
                title: 'Long Event',
                start: '2014-06-07',
                end: '2014-06-10',
                color: Colors.brandSuccess
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2014-06-09T16:00:00',
                color: Colors.brandWarning
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2014-06-16T16:00:00',
                color: Colors.brandWarning
            },
            {
                title: 'Meeting',
                start: '2014-06-12T10:30:00',
                end: '2014-06-12T12:30:00',
                color: Colors.brandDanger
            },
            {
                title: 'Lunch',
                start: '2014-06-12T12:00:00',
                color: Colors.brandInfo
            },
            {
                title: 'Birthday Party',
                start: '2014-06-13T07:00:00',
                color: Colors.brandPrimary
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2014-06-28',
                color: Colors.brandDanger
            }
        ]
    });
});
