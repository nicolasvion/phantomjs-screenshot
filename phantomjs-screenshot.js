/**
 * Create page object
 */

var system = require('system');
var page = require('webpage').create();
var url = system.args[ 1 ];
var img = system.args[ 2 ];
//wait to load kibana in ms
var waitTime = 10 * 1000;

/**
 * Check for required parameters
 */
if ( system.args.length < 3 ) {
    console.log( 'Usage: phantomjs phantomjs-screenshot.js <some URL> <output path/filename>' );
    phantom.exit();
}

/*
 * Size of virtual browser window
 */
page.viewportSize = { width: 1920, height: 1080 };

/**
 * Grab the page and output it to specified target
 */
page.open(url, function (status) {
    /**
     * Output the result
     */
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
    }
    else {
        window.setTimeout(function() {
            page.render(img);
            phantom.exit();
        }, waitTime);
    }
});
