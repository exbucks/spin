$(function(){
    function pad(num, size) {
        var s = "000000000" + num;
        return s.substr(s.length-size);
    }

    faker.date.day = function(){
        return pad(1 + Math.floor(Math.random() * 31), 2);
    }

    faker.date.monthDigit = function(){
        return pad(1 + Math.floor(Math.random() * 12), 2);
    }

    faker.date.time = function(){
        var hours = pad(1 + Math.floor(Math.random() * 12), 2),
            minutes = pad(1 + Math.floor(Math.random() * 60), 2)
        return (hours + ':' + minutes);
    }

    faker.date.year = function(){
        return (2011 + Math.floor(Math.random() * 6)).toString();
    }

    faker.date.monthShort = function() {
        return faker.date.month().substr(0, 3);
    }

    faker.date.weekdayShort = function() {
        return faker.date.weekday().substr(0, 3);
    }

    faker.random.percentage = function() {
        return Math.ceil(Math.random() * 100) + '%';
    }

    faker.random.percentagePoint = function() {
        var percentage = 1 + Math.random() * 99;
        return percentage.toFixed(1) + '%';
    }

    $('[data-faker]').each(function(){
        var $element = $(this);
        var fakerCommand = $element.data('faker');

        fakerCommand = fakerCommand.replace(/\[\[/g, '{{').replace(/\]\]/g, '}}');

        var data = faker.fake(fakerCommand);

        if($element.prop('tagName') == 'IMG'){
            $element.prop('src', data);
        }else{
            $element.text(data);
        }
    });
});
