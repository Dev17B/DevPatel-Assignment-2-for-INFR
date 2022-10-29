// IIFE --> Immediately invoked function expression
(function(){
    function Start()
    {
        console.log("App Started");
    }
    window.addEventListener("load", Start);
    var scrollLink = $(function(e) 
      {
        e.preventDefau1t();
        $('body,html').animate({
          scrollTop: $(this.hash).offset().top
        },);
      });
    
})();