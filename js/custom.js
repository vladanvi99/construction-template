$(document).ready(function(){
  $('#main-header.fixed .navbar-light .navbar-nav a.nav-link[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop':  parseInt($target.offset().top,10)
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 300) {
      $("#main-header").addClass("fixed");
  } else {
      $("#main-header").removeClass("fixed");
  }
});
jQuery('.bannerslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnDotsHover:false,
    autoplaySpeed:3000,
    dots: true,
    arrows: false,
    infinite: true,
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a class="dot">0'+(i+1)+'</a>';
    },
});


jQuery('.testimonial-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnDotsHover:false,
    autoplaySpeed:3000,
    dots: false,
    arrows: true,
    infinite: true,
    responsive: [
        
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});
if(document.querySelector('#service-details')){
  let questionsDivs = [...document.querySelectorAll('#service-details .question')]
  function questionFunction(){
    if(this.querySelector('img').classList.contains('plusImg') ){
      this.nextElementSibling.style.display = 'block'
      this.querySelector('img').classList.remove('plusImg')
      this.querySelector('img').classList.add('minusImg')
      this.querySelector('img').src = 'images/Blog/minus-sign.png'
    }else{
      this.nextElementSibling.style.display = 'none'
      this.querySelector('img').classList.add('plusImg')
      this.querySelector('img').classList.remove('minusImg')
      this.querySelector('img').src = 'images/Blog/plus.png'
    }
  }
  questionsDivs.forEach(question => question.addEventListener('click',questionFunction))
}
if(document.querySelector('#work-details')){
  let questionsDivs = [...document.querySelectorAll('#work-details .question')]
  function questionFunction(){
    if(this.querySelector('img').classList.contains('plusImg') ){
      this.nextElementSibling.style.display = 'block'
      this.querySelector('img').classList.remove('plusImg')
      this.querySelector('img').classList.add('minusImg')
      this.querySelector('img').src = 'images/Blog/minus-sign.png'
    }else{
      this.nextElementSibling.style.display = 'none'
      this.querySelector('img').classList.add('plusImg')
      this.querySelector('img').classList.remove('minusImg')
      this.querySelector('img').src = 'images/Blog/plus.png'
    }
  }
  questionsDivs.forEach(question => question.addEventListener('click',questionFunction))
}
if(document.querySelector('#blog-details')){
  let questionsDivs = [...document.querySelectorAll('#blog-details .question')]
  function questionFunction(){
    if(this.querySelector('img').classList.contains('plusImg') ){
      this.nextElementSibling.style.display = 'block'
      this.querySelector('img').classList.remove('plusImg')
      this.querySelector('img').classList.add('minusImg')
      this.querySelector('img').src = 'images/Blog/minus-sign.png'
    }else{
      this.nextElementSibling.style.display = 'none'
      this.querySelector('img').classList.add('plusImg')
      this.querySelector('img').classList.remove('minusImg')
      this.querySelector('img').src = 'images/Blog/plus.png'
    }
  }
  questionsDivs.forEach(question => question.addEventListener('click',questionFunction))
}