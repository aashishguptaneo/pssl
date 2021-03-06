(function(algolia) {
  'use strict';

  var enabled = algolia.config.analytics_enabled;
  if (!enabled) return;

  /* eslint-disable */
  !(function(e, a, t, n, s, i, c) {
    (e.AlgoliaAnalyticsObject = s),
      (e.aa =
        e.aa ||
        function() {
          (e.aa.queue = e.aa.queue || []).push(arguments);
        }),
      (i = a.createElement(t)),
      (c = a.getElementsByTagName(t)[0]),
      (i.async = 1),
      (i.src = 'https://cdn.jsdelivr.net/npm/search-insights@0.0.14'),
      c.parentNode.insertBefore(i, c);
  })(window, document, 'script', 0, 'aa');
  /* eslint-enable */

  window.aa('init', {
    applicationID: algolia.config.app_id,
    apiKey: algolia.config.search_api_key,
  });

  algolia.clickTracker = function(e) {
    // Using `currentTarget` to handle event bubbling
    window.aa('click', {
      objectID: e.currentTarget.getAttribute('data-algolia-objectid'),
      position: parseInt(
        e.currentTarget.getAttribute('data-algolia-position'),
        10
      ),
      queryID: e.currentTarget.getAttribute('data-algolia-queryid'),
    });
  };
})(window.algoliaShopify);
