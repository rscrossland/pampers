var intro = new TimelineMax({ delay:2.0 });
intro
    .to("#logo1", 0.6, { opacity: 0.0 })
    .to("#transition", 1.5, { height: "0px", ease: Expo.easeOut})
    .to("#transition", 0.0, { opacity: 0.0, display: "none" })
    



var home = new TimelineMax({ delay:3.58 });
home
    .from("#hello", 1.0, { opacity: 0.0 } ,0)
    .from("#discover", 1.0, { opacity: 0.0 } ,0.3)




var block1 = new TimelineMax({ delay:4.0 });
block1
    .from("#block1", 1.0, { opacity: 0.0, x:-30 })


var block2 = new TimelineMax({ delay:4.3 });
block2
    .from("#block2", 1.0, { opacity: 0.0, x:-30 })


var block3 = new TimelineMax({ delay:4.6 });
block3
    .from("#block3", 1.0, { opacity: 0.0, x:-30 })





var ctascale = new TimelineMax({ delay:9.0, repeat:-1 });
ctascale
    .to("#cta", 1.0, { scale: 1.05 })
    .to("#cta", 1.0, { scale: 1.0 })