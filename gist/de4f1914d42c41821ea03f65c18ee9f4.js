//<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML&delayStartupUntil=configured">
//</script>

//<script type="text/javascript" src="js/lib/remarkable.js"></script>

var md = new Remarkable('full');

$(document).ready(function () {
  var markDIVs = $(".markdown");

  for(var i = 0; i < markDIVs.length; i++) {
    var markText = $(markDIVs[i]).html();
    var htmlText = md.render(markText);
    $(markDIVs[i]).html(htmlText);
  }

  MathJax.Hub.Config({
    tex2jax: {
      skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
      inlineMath: [['$','$'], ['\\(','\\)']]
    }
  });
  MathJax.Hub.Configured();

});
