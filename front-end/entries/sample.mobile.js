define([
  'sample.mobile/main',
  'store.mobile'
], function (sample,
             store) {
  return {
    store : store,
    sample: sample
  }
});
