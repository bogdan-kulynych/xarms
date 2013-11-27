'use strict';
(function($, google) {

    var $window = $(window);

    // Smooth scroll
    $('a[href^=#]').click(function(e) {
        e.preventDefault();
        var target = $($(e.currentTarget).attr('href'));
        $('html,body').animate({
            'scrollTop': target.offset().top
        }, 1000);
        return false;
    });

    // Share buttons
    (function(doc, script) {
        var js,
            fjs = doc.getElementsByTagName(script)[0],
            frag = doc.createDocumentFragment(),
            add = function(url, id) {
                if (doc.getElementById(id)) {
                    return;
                }
                js = doc.createElement(script);
                js.src = url;
                id && (js.id = id);
                frag.appendChild( js );
            };

        // Google+ button
        add('http://apis.google.com/js/plusone.js');
        // Facebook SDK
        add('//connect.facebook.net/en_US/all.js#xfbml=1&appId=200103733347528', 'facebook-jssdk');
        // Twitter SDK
        add('//platform.twitter.com/widgets.js');
        fjs.parentNode.insertBefore(frag, fjs);
    }(document, 'script'));

    // Maps
    (function initializeMaps() {
        var myLatlng = new google.maps.LatLng(50.454319,30.521057),
            title = 'Книжкова крамниця «Хармс»',
            address = 'вул. Михайлівська 21-б, Київ',
            telephone1 = '+38 (068) 308 88 93',
            telephone2 = '+38 (093) 847 47 45';

        var myOptions = {
            zoom: 16,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('map'),
            myOptions);

        var contentString = '<div id="content">';
        contentString += '<div style="font-size: 1.5em;">' + title + '</div>';
        contentString += '<div><p>' + address + '</p><p>' +
            telephone1 + '<br />' + telephone2 + '</p></div></div>';

        var infowindow = new google.maps.InfoWindow({
            'content': contentString
        });

        var marker = new google.maps.Marker({
            'position': myLatlng,
            'map': map,
            'title': title
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    })();

    var PARALLAX = false,
        STICKY_NAVBAR = false;

    // Parallax
    if (PARALLAX === true) {
        $window.scroll(function() {
            var parallax = $('.slide');
            parallax.css({
                'background-position': '0px ' + -window.scrollY/50 + 'px'
            });
        });
    }

    // Sticky navbar
    if (STICKY_NAVBAR) {
        $window.bind('scroll resize load', function() {
            if ($window.scrollTop() > 0) {
                $('.navbar').removeClass('initial');
            } else if ($window.scrollTop() === 0) {
                $('.navbar').addClass('initial');
            }
        });
    }

})(jQuery, google);
