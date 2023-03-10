<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    <script>
        const swiper = new Swiper('.swiper', {
            autoplay :{
                delay : 5000,
                disableoninteraction: false,
            },

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});
    </script>