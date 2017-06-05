
                var tl_inicial  = new TimelineLite();

               


                tl_inicial.to(".imagen_1", 9, {scale:1.2})
                    .to(".imagen_1", 1, {opacity:0, tint:0x000000,  ease:Power1.easeInOut })
                    
                    .to(".imagen_2", 9, {scale:1.2})
                    .to(".imagen_2", 1, {opacity:0 , ease:Power1.easeInOut})
                
                    .to(".imagen_3", 9, {scale:1.2})
                    .to(".imagen_3", 1, {opacity:0 , ease:Power1.easeInOut })

                    .to(".imagen_4", 9, {scale:1.2})
                    .to(".imagen_4", 1, {opacity:0 , ease:Power1.easeInOut })

                    .to(".imagen_5", 9, {scale:1.2})
                    .to(".imagen_5", 1, {opacity:0 , ease:Power1.easeInOut })

                    .to(".imagen_6", 9, {scale:1.2})
                    .to(".imagen_6", 1, {opacity:0 , ease:Power1.easeInOut })


                
     
                    .to(".imagen_7", 9, {scale:1.2})
                    .to(".imagen_7", 1, {opacity:0 , ease:Power1.easeInOut, onComplete:reiniciar })
                
                
                function reiniciar(){
                  tl_inicial.restart();
                } 

                //TweenMax.to(".tituloA", 2, {y: 200 });
                //TweenMax.to(".tituloB", 2, {y: -100 });


