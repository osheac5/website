var GA_TRACKING_ID = 'UA-169281328-1'

function sendGaEvent(category, action, label, nonInteraction = false) {
    if ("ga" in window) {
        var tracker;
        ga.getAll().forEach(function(t) {
            if (t.get('trackingId') === GA_TRACKING_ID) {
                tracker = t;
            }
        });
        if (tracker) {
            tracker.send('event', category, action, label, { nonInteraction: nonInteraction });
        }
    }
}