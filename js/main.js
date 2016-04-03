var $svg = $('svg');
var $lines = $('.lines');
var $btn = $('.btn');
var $engage = $('.engage');

$btn.on('click', function () {
  $btn.toggleClass('btn-2');
  $lines.toggleClass('linify');
  $lines.toggleClass('lines');
  $engage.toggleClass('is-engaged');
});
