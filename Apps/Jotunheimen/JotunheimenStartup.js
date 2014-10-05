/*global require*/
require({
    baseUrl: '../../Source',
    paths: {
        Jotunheimen: '../Apps/Jotunheimen',
        domReady: '../ThirdParty/requirejs-2.1.9/domReady'
    }
}, [
        'Jotunheimen/Jotunheimen'
    ], function() {
});