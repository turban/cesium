/*global require*/
require({
    baseUrl: '../../Source',
    paths: {
        Norway: '../Apps/Norway',
        domReady: '../ThirdParty/requirejs-2.1.9/domReady'
    }
}, [
        'Norway/Norway'
    ], function() {
});