exports.wfjq = (cb, options) => {
    options = options || {};
    let numWaitTries = options.hasOwnProperty('numTries') ? options.numTries : 10;
    
    if (options.hasOwnProperty('keepTrying') && options.keepTrying) numWaitTries = -1;

    let waitForjQuery = () => {
        if (window.jQuery) {
            ($ => {
                $(document).ready(() => {
                    cb();
                });
            })(jQuery);
        } else {
            numWaitTries--;
            if (numWaitTries !== 0) {
                setTimeout(waitForjQuery, 50);
            } else {
                if (options.hasOwnProperty('onFail')) options.onFail();
            }
        }
    };

    waitForjQuery();
};