var span = $('span');
span.css('color', 'blue');
span.each(function(ind, elem) {
    if (ind % 2 === 0) {
        $(elem).css('color', 'grey');
    }
});

var p = $('p');
p.each(function(ind, elem) {
    var btn = '<button class="btn" data-tmp="' + ind + '"> klik klik </button>';
    $(elem).append(btn);
});


$('button').click(function() {
    alert($(this).attr('data-tmp'));
});
