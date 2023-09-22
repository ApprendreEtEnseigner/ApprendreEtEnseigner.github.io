//! NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
 const scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;

 if (scrollTop > lastScrollTop){
  navbar.style.top = '-50px';
 }else{
 navbar.style.top = '0';
 }

 lastScrollTop = scrollTop;
});


//! TYPED
var typed = new Typed('.typed', {
    strings: [
      "Je suis intégrateur web capable de réaliser des sites web professionnels. Je maîtrise le HTML, CSS, JavaScript, et Bootstrap. Je suis passionné par le développement web et je me forme en permanence aux nouvelles technologies. Je suis curieux, créatif, rigoureux et autonome. J’ai l’esprit d’équipe, de partage et le sens du service client."
    ],
    typeSpeed: 40,
    // backSpeed: 0
  });

  //* ------------- COMPTEUR LIVE -----------

  let compteur = 0;

  $(window).scroll(function(){
    const top = $('.counter').offset().top - window.innerHeight;

    if ( compteur == 0 && $(window).scrollTop() > top) {
      $('.counter-value').each(function() {
        let $this = $(this), 
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum : countTo
        },
        {
          duration: 10000,
          easing: 'swing',
          step: function(){
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
      });
      compteur = 1;
    }
  });


  // ! -----------AOS----------------------------
  AOS.init();