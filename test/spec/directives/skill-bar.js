"use strict";

describe("Directive: skillBar", function () {

    // load the directive"s module
    beforeEach(module("interactiveCvApp"));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it("should make hidden element visible", inject(function ($compile) {
        element = angular.element("<skill-bar></skill-bar>");
        element = $compile(element)(scope);
        expect(element.text()).toBe("this is the skillBar directive");
    }));
});