jQuery(function($){

    // SCROLL TO TOP
    $(window).on('scroll',function(){
        var showAfter = 100;
        if($(this).scrollTop() > showAfter) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').on('click', function(e){
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });



    // GLIGHTBOX INIT
    const lightbox = GLightbox({
        'href': 'https://www.youtube.com/watch?v=Ga6RYejo6Hk',
        'type': 'video',
        'source': 'youtube', //vimeo, youtube or local
        'width': 900,
        'autoPlayVideos': 'true',
    });


    // COURSE GRID & LINE TOGGLE

    // Popular Course Toggle
    $('#popular-course-section .btn-list').on('click', function() {
        $('#popular-course-section .courses').addClass('horizontal-list');
    });

    $('#popular-course-section .btn-grid').on('click', function() {
        $('#popular-course-section .courses').removeClass('horizontal-list');
    });

    // Recent Course Toggle
    $('#recent-course-section .btn-list').on('click', function() {
        $('#recent-course-section .courses').addClass('horizontal-list');
    });

    $('#recent-course-section .btn-grid').on('click', function() {
        $('#recent-course-section .courses').removeClass('horizontal-list');
    });

    // Courses page course toggle
    $('#btn-course-grid-view').on('click', function(){
        $('#course-section .courses').removeClass('horizontal-list');
    });

    $('#btn-course-list-view').on('click', function(){
        $('#course-section .courses').addClass('horizontal-list');
    });


    


    // OWL CAROUSEL
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        dotsData: true,
        dotsContainer: '.owl-dots',
        margin: 20,
        navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            1200:{
                items:2,
                nav:true,
            },

        },
    });

    $('#dots .item').on('click', function() {
        $('#dots .item').trigger('to.owl.carousel', [$(this).index(), 1000]);
    });


    // Popover
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });



    // Copy to clipboard
    $(document).on('click', '.copyClipBoardBtn', function(e){
        e.preventDefault();
        var copyText = $(this).attr('href');

        navigator.clipboard.writeText(copyText).then(function () {
            alert('"'+copyText+'"'+' Copied!');
        }, function () {
            alert('Failed to copy. Check permissions for clipboard');
        });
    });


    $("#reviewRating").rating({
        "stars": 5,
        "value": 0,
        "half" : false,
        "color" : "#ffc107",
        "emptyStar": "far fa-star",
        "halfStar": "fas fa-star-half-stroke",
        "filledStar": "fa-solid fa-star",
        "click":function (e) {
            console.log(e);
            $("#reviewRatingInput").val(e.stars);
        }
            
    });




    

    

});



// PLAYER
const player = new Plyr('#player');






// S