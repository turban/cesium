/*global define*/
define([
        'Widgets/Viewer/Viewer',
        'Core/CesiumTerrainProvider',
        'Scene/WebMercatorImageryProvider'
    ], function(
        Viewer,
        CesiumTerrainProvider,
        WebMercatorImageryProvider) {
    "use strict";

    var terrainProvider = new CesiumTerrainProvider({
        url: '//cesiumjs.org/stk-terrain/tilesets/world/tiles',
        credit: 'Terrain data courtesy Analytical Graphics, Inc.'
    });

    var imageryProvider = new WebMercatorImageryProvider({
        url: 'http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norges_grunnkart&zoom={z}&x={x}&y={y}',
        credit: '© Kartverket'
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
        imageryProvider: imageryProvider
    });

    loadingIndicator.style.display = 'none';
});
