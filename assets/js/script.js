document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
      duration: 200, 
      dist: -5,  
      shift: 5,   
      padding: 0,   
      numVisible: 1, 
      indicators: true, 
      fullWidth: false, 
    });
  });