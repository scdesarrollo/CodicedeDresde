console.log("URL: "+RutaImagesCodices);

var viewer1 = OpenSeadragon({
        id: "dresdeViewer",
        prefixUrl: "../js/lib/openseadragon/images/",
        tileSources: RutaImagesCodices+"facsimilarB.dzi",
        navigatorId:   "navigatorDiv",
        showNavigator: true,
        defaultZoomLevel: 16.8,
        minZoomLevel:16.8,
        maxZoomLevel: 30,
        visibilityRatio: 1,
        showZoomControl: false,
        showHomeControl: false,
        showFullPageControl: false,
        showRotationControl:false,
        
    });
    
    var viewer2 = OpenSeadragon({
        id: "dresdeViewe2",
        prefixUrl: "../js/lib/openseadragon/images/",
        tileSources: RutaImagesCodices+"originalB.dzi",
        defaultZoomLevel: 16.8,
        minZoomLevel:16.8,
        maxZoomLevel: 30,
        visibilityRatio: 1,
        showZoomControl: false,
        showHomeControl: false,
        showFullPageControl: false,
        showRotationControl:false,
        
    });

      viewer1.addHandler("open", function(){
        var currentPoint = viewer1.viewport.getCenter();
        currentPoint.x = 0.06655;
        viewer1.viewport.panTo(currentPoint,true);
         
    });

       viewer2.addHandler("open", function(){
        var currentPoint = viewer2.viewport.getCenter();
        currentPoint.x = 0.06655;
        viewer2.viewport.panTo(currentPoint,true);
         
    });


            var viewer1Leading = false;
            var viewer2Leading = false;

            var viewer1Handler = function() {
              if (viewer2Leading) {
                return;
              }

              viewer1Leading = true;
              viewer2.viewport.zoomTo(viewer1.viewport.getZoom());
              viewer2.viewport.panTo(viewer1.viewport.getCenter());
              viewer1Leading = false;
            };

            var viewer2Handler = function() {
              if (viewer1Leading) {
                return;
              }

              viewer2Leading = true;
              viewer1.viewport.zoomTo(viewer2.viewport.getZoom());
              viewer1.viewport.panTo(viewer2.viewport.getCenter());
              viewer2Leading = false;
            };

            viewer1.addHandler('zoom', viewer1Handler);
            viewer2.addHandler('zoom', viewer2Handler);
            viewer1.addHandler('pan', viewer1Handler);
            viewer2.addHandler('pan', viewer2Handler);