/*global define*/
define([
        'Widgets/Viewer/Viewer',
        'Core/Rectangle',
        'Core/CesiumTerrainProvider',
        'Core/Color',
        'Scene/ImageryLayer',
        'Scene/SingleTileImageryProvider',
        'Scene/WebMercatorImageryProvider'
    ], function(
        Viewer,
        Rectangle,
        CesiumTerrainProvider,
        Color,
        ImageryLayer,
        SingleTileImageryProvider,
        WebMercatorImageryProvider) {
    "use strict";

    var jotunheimen = new Rectangle.fromDegrees(7.2, 60.9, 9.0, 61.7);

    var terrainProvider = new CesiumTerrainProvider({
        url: '//cesiumjs.org/stk-terrain/tilesets/world/tiles',
        credit: 'Terrain data courtesy Analytical Graphics, Inc.',
        rectangle: jotunheimen
    });

    var imageryProvider = new WebMercatorImageryProvider({
        url: '//tiles.dev/jotunheimen/nib/{z}/{x}/{y}.jpeg',
        credit: 'Norge i bilder',
        rectangle: jotunheimen,
        minimumLevel: 7,
        maximumLevel: 16
    });

    var viewer = new Viewer('cesiumContainer', {
        animation: false,
        baseLayerPicker: false,
        geocoder: false,
        fullscreenButton: false,
        homeButton: false,
        infoBox: false,
        sceneModePicker: false,
        selectionIndicator: false,
        timeline: false,
        navigationHelpButton: false,
        fullscreenElement: false,
        terrainProvider: terrainProvider,
        imageryProvider: new SingleTileImageryProvider({
            url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII='
        })
    });

    loadingIndicator.style.display = 'none';

    var scene = viewer.scene,
        globe = scene.globe,
        camera = scene.camera;

    camera.viewRectangle(jotunheimen);
    scene.globe.baseColor = Color.BLACK;
    scene.imageryLayers.add(new ImageryLayer(imageryProvider));

});
