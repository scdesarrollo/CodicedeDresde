 var viewer = OpenSeadragon({
        id: "dresdeViewer",
        prefixUrl: "../js/lib/openseadragon/images/",
        tileSources: "http://localhost:8888/CodiceDressdeWeb/wp-content/themes/codiceDresde/images/facsimilarA.dzi",
        navigatorId:   "navigatorDiv",
        showNavigator: true,
        defaultZoomLevel: 7.5,
        minZoomLevel:4,
        maxZoomLevel: 20,
        visibilityRatio: 1,
        showZoomControl: false,
        showHomeControl: false,
        showFullPageControl: false,
        showRotationControl:false
        
    });


 viewer.addHandler("open", function(){
        var currentPoint = viewer.viewport.getCenter();
        currentPoint.x = 0.06655;
        viewer.viewport.panTo(currentPoint,true);
         
    });