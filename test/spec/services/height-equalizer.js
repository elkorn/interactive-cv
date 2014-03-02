'use strict';

describe('Service: HeightEqualizer', function () {

  // load the service's module
  beforeEach(module('interactiveCvApp'));

  // instantiate service
  var HeightEqualizer;
  beforeEach(inject(function (_HeightEqualizer_) {
    HeightEqualizer = _HeightEqualizer_;
  }));

  it('should do something', function () {
    expect(!!HeightEqualizer).toBe(true);
  });

});
