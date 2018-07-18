(function($) {
    var wh = window.innerHeight;
    var $iphone = $('.iphone');
    var $innerS1 = $('.innerS1');
    var $innerS2 = $('.innerS2');
    var $innerS3 = $('.innerS3');
    var $innerS4 = $('.innerS4');
    var $screenHat = $('.screenHat');
    var $screenA = $('.screenA');
    var $screenB = $('.screenB');
    var $screenC = $('.screenC');

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
// var iphoneIntro = TweenMax.from($iphone, 1, {
//     yPercent: 50,
//     xPercent: 100,
//     ease: Cubic.easeOut
// });

// iPhone intro animation Timeline
var iphoneIntroTl = new TimelineMax();
iphoneIntroTl
    .from($iphone, 1, {yPercent: 50,xPercent: 100, ease: Power4.easeInOut})
    .to($innerS1, 0.5, {opacity: 0, yPercent: -5, scale: 0.98}, '0');

// iPhone back to stylesheet position
new ScrollMagic.Scene({
    duration: '70%'
})
.setTween(iphoneIntroTl)
.triggerElement($('body')[0])
.addTo(ctrl);



})(jQuery);
