
(function (lab, $) {

    var subs = {};

    lab.pubsub = {

        pub: function (topic, data) {

            var topicSubs = (subs[topic] || []);

            $.each(topicSubs, function(i, sub) {
                var fn = sub.fn,
                    ctx = sub.ctx;

                fn.call(ctx, data);
            });
        },

        sub: function(topic, fn, ctx) {
            
            var topicSubs = (subs[topic] || (subs[topic] = []));

            topicSubs.push({
                fn: fn,
                ctx: ctx
            });
        }

    };


})(window.lab = window.lab || {}, window.jQuery);