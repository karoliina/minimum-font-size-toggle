// Saves options to chrome.storage
function saveOptions() {
    var smallSize = document.getElementById('smallSize').value;
    var largeSize = document.getElementById('largeSize').value;

    chrome.storage.sync.set({
        smallMinimumFontSize: smallSize,
        largeMinimumFontSize: largeSize
    }, function () {
        // Update status to let user know options were saved
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 2000);
    });
}

// Restores options from chrome.storage
function restoreOptions() {
    getSizes(function (items) {
        document.getElementById('smallSize').value = items.smallMinimumFontSize;
        document.getElementById('largeSize').value = items.largeMinimumFontSize;
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);

document.getElementById('save').addEventListener('click', saveOptions);
