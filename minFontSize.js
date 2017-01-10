// default values: small = 10pt, large = 18pt
const DEFAULT_SMALL = 10;
const DEFAULT_LARGE = 18;

function toggleSize(currentSize, smallSize, largeSize) {
    // use smallSize as a default value
    var newSize = currentSize <= smallSize ? largeSize : smallSize;
    chrome.fontSettings.setMinimumFontSize({ 'pixelSize': newSize });
}

// retrieve small and large minimum font sizes
function getSizes(callback) {
    chrome.storage.sync.get({
        smallMinimumFontSize: DEFAULT_SMALL,
        largeMinimumFontSize: DEFAULT_LARGE
    }, callback);
}

// toggle minimum font size on click
chrome.browserAction.onClicked.addListener(function () {
    chrome.fontSettings.getMinimumFontSize(function (details) {
        getSizes(function (results) {
            toggleSize(
                details.pixelSize,
                parseFloat(results.smallMinimumFontSize),
                parseFloat(results.largeMinimumFontSize)
            );
        });
    });
});

