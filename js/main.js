(function($) {
    var wh = window.innerHeight,
        $iphone = $('.iphone'),
        $innerS1 = $('.innerS1'),
        $innerS2 = $('.innerS2'),
        $innerS3 = $('.innerS3'),
        $innerS4 = $('.innerS4'),
        $screenHat = $('.screenHat'),
        $screenA = $('.screenA'),
        $screenB = $('.screenB'),
        $screenC = $('.screenC');

        // init
var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});

// Create scene
$("section").each(function() {

    new ScrollMagic.Scene({
        triggerElement: this,
        duration: '50%'
    })
    .setPin(this)
    .addTo(ctrl);
});

// iPhone intro animation Tween
var iphoneIntro = TweenMax.from($iphone, 1, {
    yPercent: 50,
    xPercent: 100,
    ease: Cubic.easeOut
});

// iPhone back to stylesheet position
new ScrollMagic.Scene({
    duration: '70%'
})
.setTween(iphoneIntro)
.triggerElement($('body')[0])
.addTo(ctrl);

})(jQuery);
