 
console.log("URL: "+RutaImagesCodices);
console.log("Deidades: "+RutahypermediaDeidades)

 
   var viewer = OpenSeadragon({
        id: "dresdeViewer",
        prefixUrl: "../js/lib/openseadragon/images/",
        tileSources: RutaImagesCodices+"codicecompleto.dzi",
        navigatorId:   "navigatorDiv",
        showNavigator: true,
        defaultZoomLevel: 14,
        minZoomLevel: 14,
        maxZoomLevel: 14,
        showZoomControl: false,
        showHomeControl: false,
        showFullPageControl: false,
        showRotationControl:false,
        mouseNavEnabled: false,
        visibilityRatio: 1,


        overlays: [{
            id: 'overlayd1a',
            px: 0, 
            py: 0, 
            width: 268, 
            height: 583,
            className: 'highlight'
        },{
            id: 'overlayd2a',
            px: 297, 
            py: 63, 
            width: 148, 
            height: 97,
            className: 'highlight'
        },{
            id: 'overlayd3b',
            px: 318, 
            py: 195, 
            width: 116, 
            height: 97,
            className: 'highlight'
        },{
            id: 'overlayd4b',
            px: 434, 
            py: 195, 
            width: 100, 
            height: 97,
            className: 'highlight'
        },{
            id: 'overlayd5c',
            px: 320, 
            py: 327, 
            width: 174, 
            height: 104,
            className: 'highlight'
        },{
            id: 'overlayd6d',
            px: 310, 
            py: 479, 
            width: 209, 
            height: 104,
            className: 'highlight'
        },{
            id: 'overlayd7a',
            px: 610, 
            py: 56, 
            width: 110, 
            height: 236,
            className: 'highlight'
        },{
            id: 'overlayd8a',
            px: 534, 
            py: 205, 
            width: 76, 
            height: 87,
            className: 'highlight'
        },{
            id: 'overlayd9a',
            px: 720, 
            py: 70, 
            width: 76, 
            height: 73,
            className: 'highlight'
        },{
            id: 'overlayd10a',
            px: 720, 
            py: 207, 
            width: 76, 
            height: 85,
            className: 'highlight'
        },{
            id: 'overlayd11a',
            px: 841, 
            py: 93, 
            width: 78, 
            height: 110,
            className: 'highlight'
        },{
            id: 'overlayd12a',
            px: 919, 
            py: 93, 
            width: 78, 
            height: 110,
            className: 'highlight'
        },{
            id: 'overlayd13a',
            px: 997, 
            py: 93, 
            width: 74, 
            height: 110,
            className: 'highlight'
        },{
            id: 'overlayd14b',
            px: 841, 
            py: 224, 
            width: 314, 
            height: 159,
            className: 'highlight'
        },{
            id: 'overlayd15c',
            px: 845, 
            py: 437, 
            width: 302, 
            height: 136,
            className: 'highlight'
        },{
            id: 'overlayd16a',
            px: 1076, 
            py: 93, 
            width: 82, 
            height: 110,
            className: 'highlight'
        },{
            id: 'overlayd17a',
            px: 1158, 
            py: 93, 
            width: 82, 
            height: 110,
            className: 'highlight'
        },{
            id: 'overlayd18a',
            px: 1240, 
            py: 93, 
            width: 82, 
            height: 110,
            className: 'highlight'
        },{
            id: 'overlayd19b',
            px: 1174, 
            py: 257, 
            width: 79, 
            height: 126,
            className: 'highlight'
        },{
            id: 'overlayd20b',
            px: 1253, 
            py: 257, 
            width: 79, 
            height: 126,
            className: 'highlight'
        },{
            id: 'overlayd22c',
            px: 1174, 
            py: 437, 
            width: 66, 
            height: 136,
            className: 'highlight'
        },{
            id: 'overlayd23c',
            px: 1240, 
            py: 445, 
            width: 86, 
            height: 128,
            className: 'highlight'
        },{
            id: 'overlayd24a',
            px: 1352, 
            py: 93, 
            width: 78, 
            height: 107,
            className: 'highlight'
        },{
            id: 'overlayd24a1',
            px: 1430, 
            py: 93, 
            width: 92, 
            height: 107,
            className: 'highlight'
        },{
            id: 'overlayd25a',
            px: 1522, 
            py: 93, 
            width: 85, 
            height: 107,
            className: 'highlight'
        },{
            id: 'overlayd26b',
            px: 1351, 
            py: 257, 
            width: 85, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd27b',
            px: 1436, 
            py: 249, 
            width: 75, 
            height: 130,
            className: 'highlight'
        },{
            id: 'overlayd28b',
            px: 1528, 
            py: 257, 
            width: 75, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd29c',
            px: 1352, 
            py: 436, 
            width: 78, 
            height: 132,
            className: 'highlight'
        },{
            id: 'overlayd29c1',
            px: 1430, 
            py: 436, 
            width: 75, 
            height: 132,
            className: 'highlight'
        },{
            id: 'overlayd30c',
            px: 1532, 
            py: 436, 
            width: 78, 
            height: 132,
            className: 'highlight'
        },{
            id: 'overlayd31a',
            px: 1611, 
            py: 93, 
            width: 87, 
            height: 107,
            className: 'highlight'
        },{
            id: 'overlayd31a1',
            px: 1696, 
            py: 93, 
            width: 86, 
            height: 107,
            className: 'highlight'
        },{
            id: 'overlayd32a',
            px: 1780, 
            py: 93, 
            width: 86, 
            height: 107,
            className: 'highlight'
        },{
            id: 'overlayd33b',
            px: 1611, 
            py: 251, 
            width: 86, 
            height: 132,
            className: 'highlight'
        },{
            id: 'overlayd34b',
            px: 1697, 
            py: 251, 
            width: 83, 
            height: 132,
            className: 'highlight'
        },{
            id: 'overlayd35b',
            px: 1780, 
            py: 251, 
            width: 86, 
            height: 132,
            className: 'highlight'
        },{
            id: 'overlayd36c',
            px: 1616, 
            py: 435, 
            width: 82, 
            height: 132,
            className: 'highlight'
        },{
            id: 'overlayd36c1',
            px: 1698, 
            py: 434, 
            width: 82, 
            height: 132,
            className: 'highlight'
        },{
            id: 'overlayd37c',
            px: 1780, 
            py: 434, 
            width: 82, 
            height: 132,
            className: 'highlight'
        },{
            id: 'overlayd38a',
            px: 1887, 
            py: 93, 
            width: 86, 
            height: 110,
            className: 'highlight'
        },{
            id: 'overlayd38a1',
            px: 1973, 
            py: 93, 
            width: 86, 
            height: 110,
            className: 'highlight'
        },{
            id: 'overlayd38a2',
            px: 2059, 
            py: 93, 
            width: 86, 
            height: 110,
            className: 'highlight'
        },{
            id: 'overlayd39b',
            px: 1911, 
            py: 257, 
            width: 170, 
            height: 126,
            className: 'highlight'
        },{
            id: 'overlayd40c',
            px: 1944, 
            py: 431, 
            width: 92, 
            height: 135,
            className: 'highlight'
        },{
            id: 'overlayd41c',
            px: 2059, 
            py: 431, 
            width: 86, 
            height: 135,
            className: 'highlight'
        },{
            id: 'overlayd42a',
            px: 2149, 
            py: 85, 
            width: 86, 
            height: 113,
            className: 'highlight'
        },{
            id: 'overlayd43a',
            px: 2235, 
            py: 85, 
            width: 79, 
            height: 113,
            className: 'highlight'
        },{
            id: 'overlayd44a',
            px: 2314, 
            py: 85, 
            width: 84, 
            height: 113,
            className: 'highlight'
        },{
            id: 'overlayd44b',
            px: 2173, 
            py: 257, 
            width: 170, 
            height: 126,
            className: 'highlight'
        },{
            id: 'overlayd45c',
            px: 2221, 
            py: 431, 
            width: 72, 
            height: 135,
            className: 'highlight'
        },{
            id: 'overlayd46c',
            px: 2320, 
            py: 431, 
            width: 78, 
            height: 135,
            className: 'highlight'
        },{
            id: 'overlayd46a',
            px: 2406, 
            py: 92, 
            width: 84, 
            height: 105,
            className: 'highlight'
        },{
            id: 'overlayd47a',
            px: 2490, 
            py: 93, 
            width: 84, 
            height: 105,
            className: 'highlight'
        },{
            id: 'overlayd47a1',
            px: 2591, 
            py: 93, 
            width: 84, 
            height: 105,
            className: 'highlight'
        },{
            id: 'overlayd48b',
            px: 2446, 
            py: 263, 
            width: 76, 
            height: 120,
            className: 'highlight'
        },{
            id: 'overlayd49b',
            px: 2522, 
            py: 263, 
            width: 76, 
            height: 120,
            className: 'highlight'
        },{
            id: 'overlayd50a',
            px: 2688, 
            py: 78, 
            width: 80, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd50c',
            px: 2466, 
            py: 445, 
            width: 72, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd50c1',
            px: 2538, 
            py: 444, 
            width: 72, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd50c2',
            px: 2609, 
            py: 445, 
            width: 72, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd51a',
            px: 2768, 
            py: 78, 
            width: 80, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd52a',
            px: 2848, 
            py: 78, 
            width: 80, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd53b',
            px: 2681, 
            py: 257, 
            width: 175, 
            height: 128,
            className: 'highlight'
        },{
            id: 'overlayd54c',
            px: 2681, 
            py: 445, 
            width: 255, 
            height: 128,
            className: 'highlight'
        },{
            id: 'overlayd55a',
            px: 2957, 
            py: 78, 
            width: 83, 
            height: 120,
            className: 'highlight'
        },{
            id: 'overlayd56a',
            px: 3082, 
            py: 75, 
            width: 86, 
            height: 120,
            className: 'highlight'
        },{
            id: 'overlayd57b',
            px: 2977, 
            py: 244, 
            width: 231, 
            height: 140,
            className: 'highlight'
        },{
            id: 'overlayd58c',
            px: 2978, 
            py: 445, 
            width: 81, 
            height: 127,
            className: 'highlight'
        },{
            id: 'overlayd59c',
            px: 3059, 
            py: 445, 
            width: 66, 
            height: 127,
            className: 'highlight'
        },{
            id: 'overlayd60c',
            px: 3125, 
            py: 445, 
            width: 75, 
            height: 127,
            className: 'highlight'
        },{
            id: 'overlayd61a',
            px: 3250, 
            py: 78, 
            width: 219, 
            height: 117,
            className: 'highlight'
        },{
            id: 'overlayd62b',
            px: 3242, 
            py: 256, 
            width: 227, 
            height: 128,
            className: 'highlight'
        },{
            id: 'overlayd63c',
            px: 3266, 
            py: 444, 
            width: 203, 
            height: 123,
            className: 'highlight'
        },{
            id: 'overlayd64a',
            px: 3519, 
            py: 83, 
            width: 219, 
            height: 117,
            className: 'highlight'
        },{
            id: 'overlayd65b',
            px: 3494, 
            py: 256, 
            width: 244, 
            height: 128,
            className: 'highlight'
        },{
            id: 'overlayd66c',
            px: 3492, 
            py: 444, 
            width: 124, 
            height: 123,
            className: 'highlight'
        },{
            id: 'overlayd67c',
            px: 3622, 
            py: 444, 
            width: 124, 
            height: 123,
            className: 'highlight'
        },{
            id: 'overlayd68a',
            px: 3759, 
            py: 85, 
            width: 71, 
            height: 118,
            className: 'highlight'
        },{
            id: 'overlayd69a',
            px: 3851, 
            py: 85, 
            width: 154, 
            height: 118,
            className: 'highlight'
        },{
            id: 'overlayd70b',
            px: 3774, 
            py: 257, 
            width: 148, 
            height: 136,
            className: 'highlight'
        },{
            id: 'overlayd71b',
            px: 3922, 
            py: 257, 
            width: 83, 
            height: 136,
            className: 'highlight'
        },{
            id: 'overlayd72c',
            px: 3806, 
            py: 454, 
            width: 199, 
            height: 114,
            className: 'highlight'
        },{
            id: 'overlayd73a',
            px: 4047, 
            py: 88, 
            width: 78, 
            height: 114,
            className: 'highlight'
        },{
            id: 'overlayd74a',
            px: 4125, 
            py: 88, 
            width: 70, 
            height: 114,
            className: 'highlight'
        },{
            id: 'overlayd75a',
            px: 4210, 
            py: 88, 
            width: 70, 
            height: 114,
            className: 'highlight'
        },{
            id: 'overlayd77b',
            px: 4119, 
            py: 272, 
            width: 161, 
            height: 114,
            className: 'highlight'
        },{
            id: 'overlayd76b',
            px: 4030, 
            py: 273, 
            width: 70, 
            height: 114,
            className: 'highlight'
        },{
            id: 'overlayd78c',
            px: 4051, 
            py: 445, 
            width: 229, 
            height: 117,
            className: 'highlight'
        },{
            id: 'overlayd79a',
            px: 4310, 
            py: 83, 
            width: 65, 
            height: 117,
            className: 'highlight'
        },{
            id: 'overlayd80a',
            px: 4396, 
            py: 78, 
            width: 65, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd81a',
            px: 4476, 
            py: 78, 
            width: 68, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd82b',
            px: 4388, 
            py: 257, 
            width: 73, 
            height: 128,
            className: 'highlight'
        },{
            id: 'overlayd83c',
            px: 4437, 
            py: 454, 
            width: 97, 
            height: 112,
            className: 'highlight'
        },{
            id: 'overlayd84a',
            px: 4580, 
            py: 85, 
            width: 88, 
            height: 127,
            className: 'highlight'
        },{
            id: 'overlayd85a',
            px: 4668, 
            py: 85, 
            width: 74, 
            height: 127,
            className: 'highlight'
        },{
            id: 'overlayd86a',
            px: 4742, 
            py: 85, 
            width: 74, 
            height: 127,
            className: 'highlight'
        },{
            id: 'overlayd87b',
            px: 4561, 
            py: 272, 
            width: 255, 
            height: 117,
            className: 'highlight'
        },{
            id: 'overlayd88c',
            px: 4560, 
            py: 453, 
            width: 255, 
            height: 117,
            className: 'highlight'
        },{
            id: 'overlayd89a',
            px: 4821, 
            py: 90, 
            width: 88, 
            height: 117,
            className: 'highlight'
        },{
            id: 'overlayd90a',
            px: 4909, 
            py: 90, 
            width: 168, 
            height: 117,
            className: 'highlight'
        },{
            id: 'overlayd91b',
            px: 4841, 
            py: 273, 
            width: 81, 
            height: 116,
            className: 'highlight'
        },{
            id: 'overlayd92b',
            px: 4922, 
            py: 273, 
            width: 81, 
            height: 116,
            className: 'highlight'
        },{
            id: 'overlayd93c',
            px: 4828, 
            py: 442, 
            width: 81, 
            height: 120,
            className: 'highlight'
        },{
            id: 'overlayd94c',
            px: 4932, 
            py: 444, 
            width: 145, 
            height: 120,
            className: 'highlight'
        },{
            id: 'overlayd95a',
            px: 5092, 
            py: 87, 
            width: 92, 
            height: 120,
            className: 'highlight'
        },{
            id: 'overlayd96a',
            px: 5184, 
            py: 87, 
            width: 83, 
            height: 120,
            className: 'highlight'
        },{
            id: 'overlayd97a',
            px: 5268, 
            py: 87, 
            width: 87, 
            height: 120,
            className: 'highlight'
        },{
            id: 'overlayd98b',
            px: 5097, 
            py: 263, 
            width: 81, 
            height: 113,
            className: 'highlight'
        },{
            id: 'overlayd99b',
            px: 5197, 
            py: 263, 
            width: 81, 
            height: 113,
            className: 'highlight'
        },{
            id: 'overlayd100c',
            px: 5097, 
            py: 437, 
            width: 258, 
            height: 126,
            className: 'highlight'
        },{
            id: 'overlayd101a',
            px: 5360, 
            py: 93, 
            width: 209, 
            height: 118,
            className: 'highlight'
        },{
            id: 'overlayd102b',
            px: 5437, 
            py: 263, 
            width: 98, 
            height: 118,
            className: 'highlight'
        },{
            id: 'overlayd103c',
            px: 5382, 
            py: 437, 
            width: 229, 
            height: 125,
            className: 'highlight'
        },{
            id: 'overlayd104b',
            px: 5656, 
            py: 254, 
            width: 198, 
            height: 125,
            className: 'highlight'
        },{
            id: 'overlayd105c',
            px: 5704, 
            py: 440, 
            width: 142, 
            height: 127,
            className: 'highlight'
        },{
            id: 'overlayd106a',
            px: 5893, 
            py: 75, 
            width: 80, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd107b',
            px: 5914, 
            py: 272, 
            width: 75, 
            height: 105,
            className: 'highlight'
        },{
            id: 'overlayd108c',
            px: 5895, 
            py: 444, 
            width: 94, 
            height: 115,
            className: 'highlight'
        },{
            id: 'overlayd109c',
            px: 5989, 
            py: 444, 
            width: 82, 
            height: 115,
            className: 'highlight'
        },{
            id: 'overlayd110c',
            px: 6071, 
            py: 444, 
            width: 82, 
            height: 115,
            className: 'highlight'
        },{
            id: 'overlayd111a',
            px: 6552, 
            py: 81, 
            width: 135, 
            height: 157,
            className: 'highlight'
        },{
            id: 'overlayd112b',
            px: 6552, 
            py: 300, 
            width: 135, 
            height: 131,
            className: 'highlight'
        },{
            id: 'overlayd113c',
            px: 6552, 
            py: 465, 
            width: 135, 
            height: 97,
            className: 'highlight'
        },{
            id: 'overlayd114a',
            px: 6828, 
            py: 87, 
            width: 126, 
            height: 151,
            className: 'highlight'
        },{
            id: 'overlayd115b',
            px: 6815, 
            py: 292, 
            width: 139, 
            height: 140,
            className: 'highlight'
        },{
            id: 'overlayd116c',
            px: 6815, 
            py: 474, 
            width: 134, 
            height: 94,
            className: 'highlight'
        },{
            id: 'overlayd117a',
            px: 7089, 
            py: 93, 
            width: 126, 
            height: 148,
            className: 'highlight'
        },{
            id: 'overlayd118b',
            px: 7080, 
            py: 300, 
            width: 135, 
            height: 132,
            className: 'highlight'
        },{
            id: 'overlayd119c',
            px: 7080, 
            py: 479, 
            width: 135, 
            height: 89,
            className: 'highlight'
        },{
            id: 'overlayd120a',
            px: 7351, 
            py: 100, 
            width: 135, 
            height: 148,
            className: 'highlight'
        },{
            id: 'overlayd121b',
            px: 7351, 
            py: 304, 
            width: 135, 
            height: 133,
            className: 'highlight'
        },{
            id: 'overlayd122c',
            px: 7358, 
            py: 479, 
            width: 128, 
            height: 87,
            className: 'highlight'
        },{
            id: 'overlayd123a',
            px: 7621, 
            py: 102, 
            width: 135, 
            height: 138,
            className: 'highlight'
        },{
            id: 'overlayd124b',
            px: 7617, 
            py: 314, 
            width: 135, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd125c',
            px: 7616, 
            py: 479, 
            width: 135, 
            height: 86,
            className: 'highlight'
        },{
            id: 'overlayd125b',
            px: 8038, 
            py: 404, 
            width: 104, 
            height: 159,
            className: 'highlight'
        },{
            id: 'overlayd126a',
            px: 8382, 
            py: 141, 
             width: 89, 
            height: 151,
            className: 'highlight'
        },{
            id: 'overlayd127b',
            px: 8370, 
            py: 408, 
            width: 89, 
            height: 151,
            className: 'highlight'
        },{
            id: 'overlayd127b1',
            px: 8690, 
            py: 402, 
            width: 104, 
            height: 159,
            className: 'highlight'
        },{
            id: 'overlayd128a',
            px: 8837, 
            py: 141, 
            width: 94, 
            height: 148,
            className: 'highlight'
        },{
            id: 'overlayd129a',
            px: 9141, 
            py: 143, 
            width: 104, 
            height: 140,
            className: 'highlight'
        },{
            id: 'overlayd130b',
            px: 9102, 
            py: 414, 
            width: 104, 
            height: 159,
            className: 'highlight'
        },{
            id: 'overlayd131a',
            px: 9520, 
            py: 144, 
            width: 104, 
            height: 152,
            className: 'highlight'
        },{
            id: 'overlayd132b',
            px: 9480, 
            py: 398, 
            width: 82, 
            height: 172,
            className: 'highlight'
        },{
            id: 'overlayd133b',
            px: 9693, 
            py: 428, 
            width: 92, 
            height: 145,
            className: 'highlight'
        },{
            id: 'overlayd134a',
            px: 10169, 
            py: 107, 
            width: 268, 
            height: 189,
            className: 'highlight'
        },{
            id: 'overlayd135b',
            px: 10169, 
            py: 387, 
            width: 268, 
            height: 189,
            className: 'highlight'
        },{
            id: 'overlayd136a',
            px: 11786, 
            py: 141, 
            width: 87, 
            height: 173,
            className: 'highlight'
        },{
            id: 'overlayd137a',
            px: 11878, 
            py: 141, 
            width: 83, 
            height: 173,
            className: 'highlight'
        },{
            id: 'overlayd138a',
            px: 11956, 
            py: 141, 
            width: 83, 
            height: 173,
            className: 'highlight'
        },{
            id: 'overlayd139b',
            px: 11786, 
            py: 408, 
            width: 87, 
            height: 168,
            className: 'highlight'
        },{
            id: 'overlayd140b',
            px: 11873, 
            py: 408, 
            width: 83, 
            height: 168,
            className: 'highlight'
        },{
            id: 'overlayd141b',
            px: 11956, 
            py: 408, 
            width: 83, 
            height: 168,
            className: 'highlight'
        },{
            id: 'overlayd142a',
            px: 12055, 
            py: 129, 
            width: 83, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlayd143a',
            px: 12138, 
            py: 129, 
            width: 79, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlayd144a',
            px: 12217, 
            py: 129, 
            width: 79, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlayd145b',
            px: 12055, 
            py: 410, 
            width: 83, 
            height: 168,
            className: 'highlight'
        },{
            id: 'overlayd146b',
            px: 12138, 
            py: 410, 
            width: 79, 
            height: 168,
            className: 'highlight'
        },{
            id: 'overlayd147b',
            px: 12217, 
            py: 410, 
            width: 79, 
            height: 168,
            className: 'highlight'
        },{
            id: 'overlayd148a',
            px: 12312, 
            py: 126, 
            width: 93, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlayd149a',
            px: 12405, 
            py: 126, 
            width: 93, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlayd150a',
            px: 12498, 
            py: 126, 
            width: 76, 
            height: 187,
            className: 'highlight'
        },{
            id: 'overlayd151b',
            px: 12319, 
            py: 414, 
            width: 86, 
            height: 159,
            className: 'highlight'
        },{
            id: 'overlayd152b',
            px: 12405, 
            py: 415, 
            width: 86, 
            height: 159,
            className: 'highlight'
        },{
            id: 'overlayd153b',
            px: 12491, 
            py: 415, 
            width: 83, 
            height: 159,
            className: 'highlight'
        },{
            id: 'overlayd154a',
            px: 12578, 
            py: 118, 
            width: 89, 
            height: 195,
            className: 'highlight'
        },{
            id: 'overlayd155a',
            px: 12667, 
            py: 118, 
            width: 82, 
            height: 195,
            className: 'highlight'
        },{
            id: 'overlayd156a',
            px: 12749, 
            py: 118, 
            width: 82, 
            height: 195,
            className: 'highlight'
        },{
            id: 'overlayd157b',
            px: 12584, 
            py: 410, 
            width: 83, 
            height: 164,
            className: 'highlight'
        },{
            id: 'overlayd158b',
            px: 12667, 
            py: 410, 
            width: 83, 
            height: 164,
            className: 'highlight'
        },{
            id: 'overlayd159b',
            px: 12750, 
            py: 410, 
            width: 83, 
            height: 164,
            className: 'highlight'
        },{
            id: 'overlayd160a',
            px: 12852, 
            py: 117, 
            width: 97, 
            height: 195,
            className: 'highlight'
        },{
            id: 'overlayd161b',
            px: 12852, 
            py: 419, 
            width: 97, 
            height: 146,
            className: 'highlight'
        },{
            id: 'overlayd162b',
            px: 13009, 
            py: 135, 
            width: 97, 
            height: 377,
            className: 'highlight'
        },{
            id: 'overlayd163a',
            px: 14184, 
            py: 111, 
            width: 268, 
            height: 472,
            className: 'highlight'
        },{
            id: 'overlayd164a',
            px: 14501, 
            py: 117, 
            width: 219, 
            height: 140,
            className: 'highlight'
        },{
            id: 'overlayd165b',
            px: 14501, 
            py: 279, 
            width: 219, 
            height: 119,
            className: 'highlight'
        },{
            id: 'overlayd166c',
            px: 14501, 
            py: 422, 
            width: 219, 
            height: 152,
            className: 'highlight'
        },{
            id: 'overlayd167a',
            px: 14763, 
            py: 123, 
            width: 225, 
            height: 140,
            className: 'highlight'
        },{
            id: 'overlayd168b',
            px: 14763, 
            py: 282, 
            width: 225, 
            height: 116,
            className: 'highlight'
        },{
            id: 'overlayd169c',
            px: 14762, 
            py: 424, 
            width: 225, 
            height: 149,
            className: 'highlight'
        },{
            id: 'overlayd170a',
            px: 15033, 
            py: 123, 
            width: 225, 
            height: 149,
            className: 'highlight'
        },{
            id: 'overlayd171b',
            px: 15033, 
            py: 292, 
            width: 225, 
            height: 110,
            className: 'highlight'
        },{
            id: 'overlayd172c',
            px: 15033, 
            py: 419, 
            width: 225, 
            height: 157,
            className: 'highlight'
        },{
            id: 'overlayd173a',
            px: 15294, 
            py: 124, 
            width: 225, 
            height: 149,
            className: 'highlight'
        },{
            id: 'overlayd174b',
            px: 15294, 
            py: 296, 
            width: 225, 
            height: 108,
            className: 'highlight'
        },{
            id: 'overlayd175c',
            px: 15294, 
            py: 424, 
            width: 225, 
            height: 150,
            className: 'highlight'
        },{
            id: 'overlayd176a',
            px: 16600, 
            py: 78, 
            width: 75, 
            height: 114,
            className: 'highlight'
        },{
            id: 'overlayd177a',
            px: 16675, 
            py: 78, 
            width: 66, 
            height: 115,
            className: 'highlight'
        },{
            id: 'overlayd178a',
            px: 16741, 
            py: 39, 
            width: 112, 
            height: 154,
            className: 'highlight'
        },{
            id: 'overlayd179b',
            px: 16600, 
            py: 264, 
            width: 75, 
            height: 115,
            className: 'highlight'
        },{
            id: 'overlayd180c',
            px: 16597, 
            py: 448, 
            width: 75, 
            height: 115,
            className: 'highlight'
        },{
            id: 'overlayd180c1',
            px: 16771, 
            py: 448, 
            width: 75, 
            height: 115,
            className: 'highlight'
        },{
            id: 'overlayd181a',
            px: 16861, 
            py: 20, 
            width: 117, 
            height: 172,
            className: 'highlight'
        },{
            id: 'overlayd182b',
            px: 17012, 
            py: 238, 
            width: 107, 
            height: 141,
            className: 'highlight'
        },{
            id: 'overlayd183c',
            px: 16861, 
            py: 442, 
            width: 258, 
            height: 132,
            className: 'highlight'
        },{
            id: 'overlayd184a',
            px: 17316, 
            py: 70, 
            width: 73, 
            height: 123,
            className: 'highlight'
        },{
            id: 'overlayd185b',
            px: 17135, 
            py: 241, 
            width: 95, 
            height: 140,
            className: 'highlight'
        },{
            id: 'overlayd186b',
            px: 17290, 
            py: 242, 
            width: 95, 
            height: 140,
            className: 'highlight'
        },{
            id: 'overlayd187c',
            px: 17132, 
            py: 442, 
            width: 90, 
            height: 129,
            className: 'highlight'
        },{
            id: 'overlayd188c',
            px: 17222, 
            py: 442, 
            width: 76, 
            height: 129,
            className: 'highlight'
        },{
            id: 'overlayd189c',
            px: 17298, 
            py: 442, 
            width: 87, 
            height: 129,
            className: 'highlight'
        },{
            id: 'overlayd190a',
            px: 17492, 
            py: 56, 
            width: 160, 
            height: 137,
            className: 'highlight'
        },{
            id: 'overlayd191b',
            px: 17406, 
            py: 244, 
            width: 96, 
            height: 137,
            className: 'highlight'
        },{
            id: 'overlayd192b',
            px: 17562, 
            py: 246, 
            width: 96, 
            height: 137,
            className: 'highlight'
        },{
            id: 'overlayd193c',
            px: 17405, 
            py: 448, 
            width: 87, 
            height: 123,
            className: 'highlight'
        },{
            id: 'overlayd194c',
            px: 17492, 
            py: 448, 
            width: 80, 
            height: 123,
            className: 'highlight'
        },{
            id: 'overlayd195c',
            px: 17572, 
            py: 448, 
            width: 80, 
            height: 123,
            className: 'highlight'
        },{
            id: 'overlayd196a',
            px: 17673, 
            py: 55, 
            width: 252, 
            height: 137,
            className: 'highlight'
        },{
            id: 'overlayd197b',
            px: 17677, 
            py: 241, 
            width: 97, 
            height: 146,
            className: 'highlight'
        },{
            id: 'overlayd198b',
            px: 17828, 
            py: 243, 
            width: 97, 
            height: 146,
            className: 'highlight'
        },{
            id: 'overlayd199c',
            px: 17676, 
            py: 448, 
            width: 63, 
            height: 117,
            className: 'highlight'
        },{
            id: 'overlayd199c1',
            px: 17738, 
            py: 447, 
            width: 63, 
            height: 117,
            className: 'highlight'
        },{
            id: 'overlayd200c',
            px: 17799, 
            py: 448, 
            width: 63, 
            height: 117,
            className: 'highlight'
        },{
            id: 'overlayd201c',
            px: 17862, 
            py: 448, 
            width: 63, 
            height: 117,
            className: 'highlight'
        },{
            id: 'overlayd202a',
            px: 17940, 
            py: 70, 
            width: 90, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd203a',
            px: 18030, 
            py: 63, 
            width: 155, 
            height: 129,
            className: 'highlight'
        },{
            id: 'overlayd204b',
            px: 17940, 
            py: 237, 
            width: 108, 
            height: 152,
            className: 'highlight'
        },{
            id: 'overlayd205b',
            px: 18082, 
            py: 257, 
            width: 108, 
            height: 130,
            className: 'highlight'
        },{
            id: 'overlayd206c',
            px: 17938, 
            py: 448, 
            width: 84, 
            height: 117,
            className: 'highlight'
        },{
            id: 'overlayd207c',
            px: 18022, 
            py:448, 
            width: 84, 
            height: 117,
            className: 'highlight'
        },{
            id: 'overlayd208c',
            px: 18106, 
            py: 448, 
            width: 84, 
            height: 117,
            className: 'highlight'
        },{
            id: 'overlayd209a',
            px: 18209, 
            py: 75, 
            width: 88, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd210a',
            px: 18297, 
            py: 75, 
            width: 79, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd211a',
            px: 18376, 
            py: 75, 
            width: 79, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd212b',
            px: 18209, 
            py: 257, 
            width: 88, 
            height: 128,
            className: 'highlight'
        },{
            id: 'overlayd213b',
            px: 18297, 
            py: 257, 
            width: 82, 
            height: 128,
            className: 'highlight'
        },{
            id: 'overlayd214b',
            px: 18379, 
            py: 257, 
            width: 82, 
            height: 128,
            className: 'highlight'
        },{
            id: 'overlayd214c',
            px: 18211, 
            py: 440, 
            width: 82, 
            height: 128,
            className: 'highlight'
        },{
            id: 'overlayd215c',
            px: 18293, 
            py: 440, 
            width: 82, 
            height: 130,
            className: 'highlight'
        },{
            id: 'overlayd216c',
            px: 18375, 
            py: 440, 
            width: 82, 
            height: 130,
            className: 'highlight'
        },{
            id: 'overlayd217a',
            px: 18476, 
            py: 69, 
            width: 82, 
            height: 130,
            className: 'highlight'
        },{
            id: 'overlayd218a',
            px: 18558, 
            py: 69, 
            width: 82, 
            height: 130,
            className: 'highlight'
        },{
            id: 'overlayd219a',
            px: 18638, 
            py: 69, 
            width: 89, 
            height: 130,
            className: 'highlight'
        },{
            id: 'overlayd220b',
            px: 18472, 
            py: 257, 
            width: 89, 
            height: 125,
            className: 'highlight'
        },{
            id: 'overlayd221b',
            px: 18561, 
            py: 257, 
            width: 79, 
            height: 125,
            className: 'highlight'
        },{
            id: 'overlayd222b',
            px: 18640, 
            py: 257, 
            width: 87, 
            height: 125,
            className: 'highlight'
        },{
            id: 'overlayd223c',
            px: 18476, 
            py: 448, 
            width: 82, 
            height: 123,
            className: 'highlight'
        },{
            id: 'overlayd224c',
            px: 18558, 
            py: 448, 
            width: 86, 
            height: 123,
            className: 'highlight'
        },{
            id: 'overlayd225c',
            px: 18644, 
            py: 448, 
            width: 86, 
            height: 123,
            className: 'highlight'
        },{
            id: 'overlayd226a',
            px: 18742, 
            py: 74, 
            width: 90, 
            height: 123,
            className: 'highlight'
        },{
            id: 'overlayd227a',
            px: 18832, 
            py: 74, 
            width: 81, 
            height: 123,
            className: 'highlight'
        },{
            id: 'overlayd228a',
            px: 18913, 
            py: 74, 
            width: 81, 
            height: 123,
            className: 'highlight'
        },{
            id: 'overlayd229b',
            px: 18770, 
            py: 260, 
            width: 77, 
            height: 121,
            className: 'highlight'
        },{
            id: 'overlayd230b',
            px: 18847, 
            py: 260, 
            width: 77, 
            height: 121,
            className: 'highlight'
        },{
            id: 'overlayd231b',
            px: 18924, 
            py: 260, 
            width: 66, 
            height: 121,
            className: 'highlight'
        },{
            id: 'overlayd232c',
            px: 18746, 
            py: 445, 
            width: 83, 
            height: 121,
            className: 'highlight'
        },{
            id: 'overlayd233c',
            px: 18829, 
            py: 445, 
            width: 77, 
            height: 121,
            className: 'highlight'
        },{
            id: 'overlayd234c',
            px: 18906, 
            py: 445, 
            width: 84, 
            height: 121,
            className: 'highlight'
        },{
            id: 'overlayd235a',
            px: 19012, 
            py: 77, 
            width: 82, 
            height: 121,
            className: 'highlight'
        },{
            id: 'overlayd236a',
            px: 19094, 
            py: 77, 
            width: 72, 
            height: 121,
            className: 'highlight'
        },{
            id: 'overlayd237a',
            px: 19190, 
            py: 77, 
            width: 72, 
            height: 121,
            className: 'highlight'
        },{
            id: 'overlayd238b',
            px: 19012, 
            py: 256, 
            width: 85, 
            height: 126,
            className: 'highlight'
        },{
            id: 'overlayd239b',
            px: 19097, 
            py: 256, 
            width: 85, 
            height: 126,
            className: 'highlight'
        },{
            id: 'overlayd240b',
            px: 19182, 
            py: 256, 
            width: 80, 
            height: 126,
            className: 'highlight'
        },{
            id: 'overlayd241c',
            px: 19014, 
            py: 444, 
            width: 86, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd242c',
            px: 19100, 
            py: 444, 
            width: 79, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd243c',
            px: 19179, 
            py: 444, 
            width: 79, 
            height: 122,
            className: 'highlight'
        },{
            id: 'overlayd244a',
            px: 19326, 
            py: 74, 
            width: 72, 
            height: 128,
            className: 'highlight'
        },{
            id: 'overlayd245a',
            px: 19398, 
            py: 74, 
            width: 70, 
            height: 128,
            className: 'highlight'
        },{
            id: 'overlayd246a',
            px: 19468, 
            py: 74, 
            width: 64, 
            height: 128,
            className: 'highlight'
        },{
            id: 'overlayd247b',
            px: 19281, 
            py: 263, 
            width: 77, 
            height: 121,
            className: 'highlight'
        },{
            id: 'overlayd248b',
            px: 19358, 
            py: 263, 
            width: 81, 
            height: 121,
            className: 'highlight'
        },{
            id: 'overlayd249b',
            px: 19439, 
            py: 263, 
            width: 88, 
            height: 121,
            className: 'highlight'
        },{
            id: 'overlayd250c',
            px: 19306, 
            py: 447, 
            width: 79, 
            height: 121,
            className: 'highlight'
        },{
            id: 'overlayd251c',
            px: 19385, 
            py: 447, 
            width: 74, 
            height: 121,
            className: 'highlight'
        },{
            id: 'overlayd252c',
            px: 19459, 
            py: 447, 
            width: 74, 
            height: 121,
            className: 'highlight'
        },{
            id: 'overlayd253a',
            px: 19550, 
            py: 74, 
            width: 82, 
            height: 128,
            className: 'highlight'
        },{
            id: 'overlayd254a',
            px: 19632, 
            py: 74, 
            width: 82, 
            height: 128,
            className: 'highlight'
        },{
            id: 'overlayd255a',
            px: 19714, 
            py: 74, 
            width: 82, 
            height: 128,
            className: 'highlight'
        },{
            id: 'overlayd256b',
            px: 19548, 
            py: 263, 
            width: 82, 
            height: 123,
            className: 'highlight'
        },{
            id: 'overlayd257b',
            px: 19630, 
            py: 263, 
            width: 82, 
            height: 123,
            className: 'highlight'
        },{
            id: 'overlayd258b',
            px: 19712, 
            py: 292, 
            width: 82, 
            height: 94,
            className: 'highlight'
        },{
            id: 'overlayd259c',
            px: 19549, 
            py: 439, 
            width: 87, 
            height: 131,
            className: 'highlight'
        },{
            id: 'overlayd260c',
            px: 19639, 
            py: 439, 
            width: 76, 
            height: 131,
            className: 'highlight'
        },{
            id: 'overlayd261c',
            px: 19712, 
            py: 439, 
            width: 82, 
            height: 131,
            className: 'highlight'
        },{
            id: 'overlayd262a',
            px: 19878, 
            py: 78, 
            width: 95, 
            height: 120,
            className: 'highlight'
        },{
            id: 'overlayd263a',
            px: 19973, 
            py: 78, 
            width: 95, 
            height: 120,
            className: 'highlight'
        },{
            id: 'overlayd264b',
            px: 19813, 
            py: 264, 
            width: 85, 
            height: 112,
            className: 'highlight'
        },{
            id: 'overlayd265b',
            px: 19898, 
            py: 264, 
            width: 81, 
            height: 112,
            className: 'highlight'
        },{
            id: 'overlayd266b',
            px: 19979, 
            py: 264, 
            width: 81, 
            height: 112,
            className: 'highlight'
        },{
            id: 'overlayd267c',
            px: 19850, 
            py: 415, 
            width: 188, 
            height: 156,
            className: 'highlight'
        },{
            id: 'overlayd268a',
            px: 20083, 
            py: 88, 
            width: 82, 
            height: 111,
            className: 'highlight'
        },{
            id: 'overlayd269a',
            px: 20165, 
            py: 88, 
            width: 82, 
            height: 111,
            className: 'highlight'
        },{
            id: 'overlayd270a',
            px: 20247, 
            py: 88, 
            width: 82, 
            height: 111,
            className: 'highlight'
        },{
            id: 'overlayd271b',
            px: 20077, 
            py: 267, 
            width: 82, 
            height: 111,
            className: 'highlight'
        },{
            id: 'overlayd272c',
            px: 20115, 
            py: 413, 
            width: 210, 
            height: 150,
            className: 'highlight'
        },{
            id: 'overlayd273a',
            px: 20347, 
            py: 81, 
            width: 88, 
            height: 118,
            className: 'highlight'
        },{
            id: 'overlayd274a',
            px: 20435, 
            py: 81, 
            width: 84, 
            height: 118,
            className: 'highlight'
        },{
            id: 'overlayd275a',
            px: 20519, 
            py: 81, 
            width: 84, 
            height: 118,
            className: 'highlight'
        },{
            id: 'overlayd276b',
            px: 20519, 
            py: 259, 
            width: 84, 
            height: 96,
            className: 'highlight'
        },{
            id: 'overlayd277c',
            px: 20392, 
            py: 415, 
            width: 211, 
            height: 155,
            className: 'highlight'
        },{
            id: 'overlayd278b',
            px: 20624, 
            py: 256, 
            width: 240, 
            height: 106,
            className: 'highlight'
        },{
            id: 'overlayd279c',
            px: 20659, 
            py: 415, 
            width: 214, 
            height: 159,
            className: 'highlight'
        },{
            id: 'overlayd280a',
            px: 10803, 
            py: 113, 
            width: 83, 
            height: 389,
            className: 'highlight'
        },{
            id: 'overlayd281a',
            px: 10886, 
            py: 113, 
            width: 83, 
            height: 389,
            className: 'highlight'
        },{
            id: 'overlayd282a',
            px: 10977, 
            py: 113, 
            width: 92, 
            height: 389,
            className: 'highlight'
        },{
            id: 'overlayd283a',
            px: 11069, 
            py: 113, 
            width: 79, 
            height: 389,
            className: 'highlight'
        },{
            id: 'overlayd284a',
            px: 16352, 
            py: 75, 
            width: 79, 
            height: 124,
            className: 'highlight'
        },{
            id: 'overlayd285a',
            px: 16431, 
            py: 75, 
            width: 79, 
            height: 124,
            className: 'highlight'
        },{
            id: 'overlayd286a',
            px: 16506, 
            py: 75, 
            width: 75, 
            height: 124,
            className: 'highlight'
        },{
            id: 'overlayd287b',
            px: 16354, 
            py: 267, 
            width: 75, 
            height: 112,
            className: 'highlight'
        },{
            id: 'overlayd288b',
            px: 16429, 
            py: 267, 
            width: 75, 
            height: 112,
            className: 'highlight'
        },{
            id: 'overlayd289b',
            px: 16504, 
            py: 267, 
            width: 75, 
            height: 112,
            className: 'highlight'
        },{
            id: 'overlayd290c',
            px: 16354, 
            py: 442, 
            width: 75, 
            height: 124,
            className: 'highlight'
        },{
            id: 'overlayd291c',
            px: 16429, 
            py: 442, 
            width: 75, 
            height: 124,
            className: 'highlight'
        },{
            id: 'overlayd292c',
            px: 16504, 
            py: 442, 
            width: 75, 
            height: 124,
            className: 'highlight'
        },{
            id: 'overlayd293a',
            px: 17402, 
            py: 56, 
            width: 90, 
            height: 138,
            className: 'highlight'
        }

        ]
    });
    
    function pageForward(){
        //alert('pagina adelante');
        var currentPoint = viewer.viewport.getCenter();
        currentPoint.x = currentPoint.x + 0.0334;
        //alert(currentPoint.x);
        console.log("coordenadas " + currentPoint.x);
        if(currentPoint.x < 0.994){
            viewer.viewport.panTo(currentPoint,true);
        }
    }
    
    function pageBackward(){
        //alert('pagina atras');
        var currentPoint = viewer.viewport.getCenter();
        currentPoint.x = currentPoint.x - 0.0334;

        if(currentPoint.x > 0.03){
            viewer.viewport.panTo(currentPoint,true);
        }
    }
    

     var valor_coordenada_deidad; 
     var currentPoint;
    viewer.addHandler("open", function(){

        currentPoint = viewer.viewport.getCenter();
        currentPoint.x = 0.0334;

        

        viewer.viewport.panTo(currentPoint,true);
        viewer.gestureSettingsMouse.clickToZoom = false;

        // get localStorage
        valor_coordenada_deidad = localStorage.getItem('coordenada_deidades');

        if (valor_coordenada_deidad != "undefined" && valor_coordenada_deidad != null ){
            console.log(valor_coordenada_deidad);
            goTo(); 
         }
         else{
            console.log("Balot coordenada "+valor_coordenada_deidad);
         }




        $("[id^=overlay]").click(function(event) {
            event.stopPropagation();
            goToHotspot(this);
        });


        $("[id^=overlay]").mouseover(function(event) {
             console.log(this.id);
             currentPoint = viewer.viewport.getCenter();
             console.log("Valor C: " + currentPoint.x);
              event.preventDefault();
            event.stopPropagation();
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
        return true;
        } 




        
        

        
    

      

 


        


    });


        

    //0.36055000000000004,  0.39055000000000006 , 0.6305500000000003
    function goTo(){
            var valor_coordenada_deidad_new = parseFloat(valor_coordenada_deidad)
            currentPoint = viewer.viewport.getCenter();
            currentPoint.x = valor_coordenada_deidad_new;
            viewer.viewport.panTo(currentPoint,true);
            console.log(valor_coordenada_deidad_new);
    }

    function goToHotspot(hId){
        
        var strId = hId.id;
        var actualId = strId.substring(strId.indexOf("overlay")+7);
        //alert('Ir a la ficha del hotspot con ID: '+actualId);
        
        window.location.href = RutahypermediaDeidades+actualId;
        
    }