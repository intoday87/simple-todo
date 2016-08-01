define([
  'sample.mobile/main',
  'sample.pc/main'
], function (sampleMobile, samplePc) {
  return {
    sampleMobile: sampleMobile,
    samplePc    : samplePc
  }
});
