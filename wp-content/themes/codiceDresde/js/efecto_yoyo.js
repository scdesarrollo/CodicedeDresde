 if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ){
        
        // TWEENMAX 
        TweenMax.to(".hotspot_over", 1.5, {opacity:0.1, repeat:-1, yoyo:true});
        
        }
        
        else {
        
        } 