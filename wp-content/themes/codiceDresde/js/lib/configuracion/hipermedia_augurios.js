console.log("URL: "+RutaImagesCodices);
console.log("Augurios: "+RutahypermediaAugurios)

 
   var viewer = OpenSeadragon({
        id: "dresdeViewer",
        prefixUrl: "../js/lib/openseadragon/images/",
        tileSources: RutaImagesCodices+"codicecompleto.dzi",
        navigatorId:   "navigatorDiv",
        showNavigator: true,
        defaultZoomLevel: 14,
        minZoomLevel:14,
        maxZoomLevel: 14,
        showZoomControl: false,
        showHomeControl: false,
        showFullPageControl: false,
        showRotationControl:false,
        mouseNavEnabled: false,
        visibilityRatio: 1,
        overlays: [{
            id: 'overlay1',
            px: 267, 
            py: 0, 
            width: 268, 
            height: 155,
            className: 'highlight',
        },{
            id: 'overlay2',
            px: 267, 
            py: 143, 
            width: 268, 
            height: 155,
            className: 'highlight'
        },{
            id: 'overlay3',
            px: 267, 
            py: 289, 
            width: 268, 
            height: 144,
            className: 'highlight'
        },{
            id: 'overlay4',
            px: 267, 
            py: 427, 
            width: 268, 
            height: 148,
            className: 'highlight'
        },{
            id: 'overlay5',
            px: 535, 
            py: 0, 
            width: 268, 
            height: 298,
            className: 'highlight'
        },{
            id: 'overlay6',
            px: 803, 
            py: 0, 
            width: 1773, 
            height: 199,
            className: 'highlight'
        },{
            id: 'overlay7-8',
            px: 803, 
            py: 199, 
            width: 354, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlay9',
            px: 803, 
            py: 386, 
            width: 347, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlay10',
            px: 1157, 
            py: 195, 
            width: 354, 
            height: 191,
            className: 'highlight'
        },{
            id: 'overlay11',
            px: 1150, 
            py: 386, 
            width: 354, 
            height: 191,
            className: 'highlight'
        },{
            id: 'overlay12',
            px: 1511, 
            py: 195, 
            width: 361, 
            height: 191,
            className: 'highlight'
        },{
            id: 'overlay13',
            px: 1504, 
            py: 386, 
            width: 368, 
            height: 191,
            className: 'highlight'
        },{
            id: 'overlay14',
            px: 1872, 
            py: 199, 
            width: 274, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlay15',
            px: 1872, 
            py: 386, 
            width: 274, 
            height: 191,
            className: 'highlight'
        },{
            id: 'overlay16',
            px: 2146, 
            py: 199, 
            width: 266, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlay17',
            px: 2146, 
            py: 386, 
            width: 266, 
            height: 191,
            className: 'highlight'
        },{
            id: 'overlay18',
            px: 2576, 
            py: 0, 
            width: 460, 
            height: 199,
            className: 'highlight'
        },{
            id: 'overlay19',
            px: 2412, 
            py: 199, 
            width: 186, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlay20',
            px: 2598, 
            py: 199, 
            width: 347, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlay21',
            px: 2412, 
            py: 386, 
            width: 533, 
            height: 191,
            className: 'highlight'
        },{
            id: 'overlay22',
            px: 3036, 
            py: 0, 
            width: 181, 
            height: 199,
            className: 'highlight'
        },{
            id: 'overlay23',
            px: 2945, 
            py: 199, 
            width: 272, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlay24',
            px: 2945, 
            py: 386, 
            width: 272, 
            height: 191,
            className: 'highlight'
        },{
            id: 'overlay25',
            px: 3217, 
            py: 0, 
            width: 265, 
            height: 199,
            className: 'highlight'
        },{
            id: 'overlay26',
            px: 3217, 
            py: 199, 
            width: 532, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlay27',
            px: 3217, 
            py: 386, 
            width: 532, 
            height: 191,
            className: 'highlight'
        },{
            id: 'overlay28',
            px: 3482, 
            py: 0, 
            width: 345, 
            height: 199,
            className: 'highlight'
        },{
            id: 'overlay29',
            px: 3827, 
            py: 0, 
            width: 193, 
            height: 199,
            className: 'highlight'
        },{
            id: 'overlay30',
            px: 3749, 
            py: 199, 
            width: 349, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlay31',
            px: 3749, 
            py: 386, 
            width: 271, 
            height: 191,
            className: 'highlight'
        },{
            id: 'overlay32',
            px: 4020, 
            py: 0, 
            width: 171, 
            height: 199,
            className: 'highlight'
        },{
            id: 'overlay33',
            px: 4191, 
            py: 0, 
            width: 93, 
            height: 199,
            className: 'highlight'
        },{
            id: 'overlay34',
            px: 4098, 
            py: 199, 
            width: 271, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlay35',
            px: 4020, 
            py: 386, 
            width: 396, 
            height: 191,
            className: 'highlight'
        },{
            id: 'overlay36',
            px: 4284, 
            py: 0, 
            width: 93, 
            height: 199,
            className: 'highlight'
        },{
            id: 'overlay37',
            px: 4377, 
            py: 0, 
            width: 84, 
            height: 199,
            className: 'highlight'
        },{
            id: 'overlay38',
            px: 4461, 
            py: 0, 
            width: 92, 
            height: 199,
            className: 'highlight'
        },{
            id: 'overlay39',
            px: 4369, 
            py: 199, 
            width: 453, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlay40',
            px: 4416, 
            py: 386, 
            width: 311, 
            height: 191,
            className: 'highlight'
        },{
            id: 'overlay41',
            px: 4553, 
            py: 0, 
            width: 422, 
            height: 209,
            className: 'highlight'
        },{
            id: 'overlay42',
            px: 4727, 
            py: 386, 
            width: 186, 
            height: 191,
            className: 'highlight'
        },{
            id: 'overlay43',
            px: 4822, 
            py: 203, 
            width: 179, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlay44',
            px: 4975, 
            py: 0, 
            width: 461, 
            height: 209,
            className: 'highlight'
        },{
            id: 'overlay45',
            px: 5001, 
            py: 203, 
            width: 179, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlay46',
            px: 4913, 
            py: 386, 
            width: 441, 
            height: 191,
            className: 'highlight'
        },{
            id: 'overlay47',
            px: 5180, 
            py: 203, 
            width: 179, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlay48',
            px: 5436, 
            py: 0, 
            width: 367, 
            height: 209,
            className: 'highlight'
        },{
            id: 'overlay49',
            px: 5359, 
            py: 203, 
            width: 269, 
            height: 183,
            className: 'highlight'
        },{
            id: 'overlay50',
            px: 5354, 
            py: 378, 
            width: 328, 
            height: 199,
            className: 'highlight'
        },{
            id: 'overlay51',
            px: 5628, 
            py: 187, 
            width: 269, 
            height: 199,
            className: 'highlight'
        },{
            id: 'overlay52',
            px: 5682, 
            py: 378, 
            width: 476, 
            height: 199,
            className: 'highlight'
        },{
            id: 'overlay53',
            px: 5803, 
            py: 0, 
            width: 355, 
            height: 195,
            className: 'highlight'
        },{
            id: 'overlay54',
            px: 5896, 
            py: 187, 
            width: 262, 
            height: 199,
            className: 'highlight'
        },{
            id: 'overlay55',
            px: 6158, 
            py: 0, 
            width: 265, 
            height: 577,
            className: 'highlight'
        },{
            id: 'overlay56',
            px: 6423, 
            py: 0, 
            width: 267, 
            height: 265,
            className: 'highlight'
        },{
            id: 'overlay57',
            px: 6423, 
            py: 265, 
            width: 267, 
            height: 162,
            className: 'highlight'
        },{
            id: 'overlay58',
            px: 6423, 
            py: 427, 
            width: 267, 
            height: 150,
            className: 'highlight'
        },{
            id: 'overlay59',
            px: 6690, 
            py: 0, 
            width: 267, 
            height: 416,
            className: 'highlight'
        },{
            id: 'overlay60',
            px: 6690, 
            py: 239, 
            width: 267, 
            height: 338,
            className: 'highlight'
        },{
            id: 'overlay61',
            px: 6811, 
            py: 427, 
            width: 146, 
            height: 150,
            className: 'highlight'
        },{
            id: 'overlay62',
            px: 6957, 
            py: 0, 
            width: 267, 
            height: 427,
            className: 'highlight'
        },{
            id: 'overlay63',
            px: 6957, 
            py: 239, 
            width: 267, 
            height: 338,
            className: 'highlight'
        },{
            id: 'overlay64',
            px: 7077, 
            py: 427, 
            width: 147, 
            height: 150,
            className: 'highlight'
        },{
            id: 'overlay65',
            px: 7224, 
            py: 0, 
            width: 267, 
            height: 408,
            className: 'highlight'
        },{
            id: 'overlay66',
            px: 7222, 
            py: 239, 
            width: 269, 
            height: 338,
            className: 'highlight'
        },{
            id: 'overlay67',
            px: 7356, 
            py: 427, 
            width: 134, 
            height: 150,
            className: 'highlight'
        },{
            id: 'overlay68',
            px: 7491, 
            py: 0, 
            width: 267, 
            height: 408,
            className: 'highlight'
        },{
            id: 'overlay69',
            px: 7491, 
            py: 239, 
            width: 267, 
            height: 338,
            className: 'highlight'
        },{
            id: 'overlay70',
            px: 7613, 
            py: 427, 
            width: 145, 
            height: 150,
            className: 'highlight'
        },{
            id: 'overlay71',
            px: 7758, 
            py: -1, 
            width: 270, 
            height: 294,
            className: 'highlight'
        },{
            id: 'overlay72',
            px: 8028, 
            py: -1, 
            width: 270, 
            height: 294,
            className: 'highlight'
        },{
            id: 'overlay73',
            px: 8298, 
            py: 1, 
            width: 1497, 
            height: 294,
            className: 'highlight'
        },{
            id: 'overlay74',
            px: 7758, 
            py: 292, 
            width: 2037, 
            height: 285,
            className: 'highlight'
        },{
            id: 'overlay75',
            px: 9795, 
            py: -1, 
            width: 108, 
            height: 578,
            className: 'highlight'
        },{
            id: 'overlay76',
            px: 10166, 
            py: -3, 
            width: 271, 
            height: 578,
            className: 'highlight'
        },{
            id: 'overlayr1',
            px: 10705, 
            py: 0, 
            width: 439, 
            height: 578,
            className: 'highlight'
        },{
            id: 'overlayr2',
            px: 11144, 
            py: 0, 
            width: 250, 
            height: 578,
            className: 'highlight'
        },{
            id: 'overlayr3',
            px: 11776, 
            py: -3, 
            width: 1176, 
            height: 320,
            className: 'highlight'
        },{
            id: 'overlayr4',
            px: 11776, 
            py: 317, 
            width: 1176, 
            height: 266,
            className: 'highlight'
        },{
            id: 'overlayr5',
            px: 12952, 
            py: 0, 
            width: 158, 
            height: 583,
            className: 'highlight'
        },{
            id: 'overlayr6',
            px: 13109, 
            py: -1, 
            width: 272, 
            height: 584,
            className: 'highlight'
        },{
            id: 'overlayr7',
            px: 13381, 
            py: 0, 
            width: 803, 
            height: 214,
            className: 'highlight'
        },{
            id: 'overlayr8',
            px: 13381, 
            py: 213, 
            width: 803, 
            height: 370,
            className: 'highlight'
        },{
            id: 'overlayr9',
            px: 14048, 
            py: 0, 
            width: 136, 
            height: 214,
            className: 'highlight'
        },{
            id: 'overlayr10',
            px: 14184, 
            py: 0, 
            width: 271, 
            height: 583,
            className: 'highlight'
        },{
            id: 'overlayr11',
            px: 14454, 
            py: -1, 
            width: 1072, 
            height: 281,
            className: 'highlight'
        },{
            id: 'overlayr12',
            px: 14454, 
            py: 259, 
            width: 1072, 
            height: 139,
            className: 'highlight'
        },{
            id: 'overlayr13',
            px: 14454, 
            py: 392, 
            width: 1072, 
            height: 191,
            className: 'highlight'
        },{
            id: 'overlayr14',
            px: 16318, 
            py: -1, 
            width: 431, 
            height: 200,
            className: 'highlight'
        },{
            id: 'overlayr15',
            px: 16318, 
            py: 199, 
            width: 359, 
            height: 179,
            className: 'highlight'
        },{
            id: 'overlayr16',
            px: 16318, 
            py: 378, 
            width: 359, 
            height: 205,
            className: 'highlight'
        },{
            id: 'overlayr17',
            px: 16677, 
            py: 199, 
            width: 292, 
            height: 179,
            className: 'highlight'
        },{
            id: 'overlayr18',
            px: 16765, 
            py: 378, 
            width: 810, 
            height: 205,
            className: 'highlight'
        },{
            id: 'overlayr19',
            px: 17321, 
            py: -1, 
            width: 1948, 
            height: 200,
            className: 'highlight'
        },{
            id: 'overlayr20',
            px: 19269, 
            py: -1, 
            width: 533, 
            height: 200,
            className: 'highlight'
        },{
            id: 'overlayr21',
            px: 19802, 
            py: -1, 
            width: 809, 
            height: 200,
            className: 'highlight'
        },{
            id: 'overlayr22',
            px: 16969, 
            py: 199, 
            width: 264, 
            height: 179,
            className: 'highlight'
        },{
            id: 'overlayr23',
            px: 17233, 
            py: 199, 
            width: 270, 
            height: 179,
            className: 'highlight'
        },{
            id: 'overlayr24',
            px: 17503, 
            py: 199, 
            width: 271, 
            height: 179,
            className: 'highlight'
        },{
            id: 'overlayr25',
            px: 17774, 
            py: 199, 
            width: 275, 
            height: 179,
            className: 'highlight'
        },{
            id: 'overlayr26',
            px: 18049, 
            py: 199, 
            width: 685, 
            height: 179,
            className: 'highlight'
        },{
            id: 'overlayr27',
            px: 18734, 
            py: 199, 
            width: 978, 
            height: 179,
            className: 'highlight'
        },{
            id: 'overlayr28',
            px: 19712, 
            py: 199, 
            width: 452, 
            height: 179,
            className: 'highlight'
        },{
            id: 'overlayr28_1',
            px: 20164, 
            py: 199, 
            width: 709, 
            height: 179,
            className: 'highlight'
        },{
            id: 'overlayr29',
            px: 17575, 
            py: 378, 
            width: 357, 
            height: 205,
            className: 'highlight'
        },{
            id: 'overlayr30',
            px: 17932, 
            py: 378, 
            width: 444, 
            height: 205,
            className: 'highlight'
        },{
            id: 'overlayr31',
            px: 18376, 
            py: 378, 
            width: 458, 
            height: 205,
            className: 'highlight'
        },{
            id: 'overlayr32',
            px: 18834, 
            py: 378, 
            width: 435, 
            height: 205,
            className: 'highlight'
        },{
            id: 'overlayr33',
            px: 19269, 
            py: 378, 
            width: 533, 
            height: 205,
            className: 'highlight'
        },{
            id: 'overlayr34',
            px: 19802, 
            py: 378, 
            width: 1071, 
            height: 205,
            className: 'highlight'
        }

        ]
    });
    
    var currentPoint;
    var posicionInical = 0.0340;
    function pageForward(){
        //alert('pagina adelante');
        currentPoint = viewer.viewport.getCenter();
        currentPoint.x = currentPoint.x + 0.03;
        posicionInical = currentPoint.x;     
        //alert(currentPoint.x);

        console.log("coordenadas " + currentPoint.x);
        if(currentPoint.x < 0.98)
            viewer.viewport.panTo(currentPoint,true);
    }
    
    function pageBackward(){
        //alert('pagina atras');
        currentPoint = viewer.viewport.getCenter();
        currentPoint.x = currentPoint.x - 0.03;
        

        if(currentPoint.x > 0.03)
            viewer.viewport.panTo(currentPoint,true);

    }
    
    
    var valor_coordenada; 
    viewer.addHandler("open", function(){
        

        currentPoint = viewer.viewport.getCenter();
        currentPoint.x =   0.0340;
        
        viewer.viewport.panTo(currentPoint,true);
        
        // get localStorage
        valor_coordenada = localStorage.getItem('coordenada');

        
        
         
         if (valor_coordenada != "undefined" && valor_coordenada != null ){
            console.log(valor_coordenada);
            goTo(); 
         }
         else{
            console.log("Balot coordenada "+valor_coordenada);
         }
        
      

      $("[id^=overlay]").click(function(event) {
            event.stopPropagation();
            goToHotspot(this);

        });

      if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ){
            // TWEENMAX 
            TweenMax.to(".highlight", 1.5, {opacity:0.1, repeat:-1, yoyo:true});
        return true;
        }
        else {
        
        }




        
        /*$("[id^=overlay]").mouseover(function() {
             console.log(this.id);
        });*/


        
        $("[id^=overlay]").mouseover(function(event) {
             console.log(this.id);
             currentPoint = viewer.viewport.getCenter();
             console.log("Valor C: " + currentPoint.x);
              event.preventDefault();
            event.stopPropagation();
        });

       
    });
        
    //0.36055000000000004,  0.39055000000000006 , 0.6305500000000003
    function goTo(){

            var valor_coordenada_new = parseFloat(valor_coordenada)
            currentPoint = viewer.viewport.getCenter();
            currentPoint.x = valor_coordenada_new;
            viewer.viewport.panTo(currentPoint,true);
            console.log(valor_coordenada_new);
    }



    function goToHotspot(hId){
        var strId = hId.id;
        var link = hId.px;
        var actualId = strId.substring(strId.indexOf("overlay")+7);

         

        
        //alert('Ir a la ficha del hotspot con ID: '+actualId);
        window.location.href = RutahypermediaAugurios+actualId;
    }



    function coor(){
        
    }