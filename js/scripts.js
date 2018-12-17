$(document).ready(function() {
  $("button#cheating").click(function() {
    $("ul.user").prepend("<li>My other is Cheating.</li>");
    $("ul.webpage").prepend("<li>Put their head on a stick and parade it around town, let society know you will not be scorned!</li>");
  });
  $('li').click(function() {
    alert('hi');
  });

  $("button#lifesux").click(function() {
    $("ul.user").prepend("<li>Life is crap.</li>");
    $("ul.webpage").prepend("<li>It's because you are crap.</li>");
  });

  $("button#doodie").click(function() {
    $("ul.user").prepend("<li>You are a doodie head!</li>");
    $("ul.webpage").prepend("<li><strong>REEEEEEEEEEEEEEE!!!</strong> PARITY ERROR</li>");
  });
});
