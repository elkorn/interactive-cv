"use strict";

describe("Directive: skill", function () {

    // load the directive"s module
    beforeEach(module("interactiveCvApp"));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it("should make hidden element visible", inject(function ($compile) {
        element = angular.element("<skill></skill>");
        element = $compile(element)(scope);
        expect(element.text()).toBe("this is the skill directive");
    }));
});