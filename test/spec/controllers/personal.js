/* global moment */
"use strict";

describe("Controller: PersonalCtrl", function () {

    // load the controller"s module
    beforeEach(module("interactiveCvApp"));

    var PersonalCtrl,
        scope,
        $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET("/api/workingSince")
          .respond(moment("Jul 4, 2010"));
        scope = $rootScope.$new();
        PersonalCtrl = $controller("PersonalCtrl", {
            $scope: scope
        });
    }));

    it("should attach a workingSince date to the scope", function () {
        expect(scope.workingSince).to.equal(undefined);
        $httpBackend.flush();
        expect(scope.workingSince.toString()).to.equal("Sun Jul 04 2010 00:00:00 GMT+0200");
    });
});