"use strict";

describe("Controller: SkillsCtrl", function () {
    var SKILL_TYPES = {
        DAILY: 1,
        NIGHTLY: 2,
        BOTH: 3
    };

    // load the controller"s module
    beforeEach(module("interactiveCvApp"));

    var SkillsCtrl,
        scope,
        $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET("/api/skills")
            .respond([{
                name: "Foosball",
                level: 100,
                type: SKILL_TYPES.NIGHTLY
            }, {
                name: "JavaScript",
                level: 80,
                type: SKILL_TYPES.BOTH
            }, {
                name: "ASP.NET",
                level: 70,
                type: SKILL_TYPES.DAILY
            }]);
        scope = $rootScope.$new();
        SkillsCtrl = $controller("SkillsCtrl", {
            $scope: scope
        });
    }));

    it("should attach a list of skills to the scope", function () {
        expect(scope.skills).to.equal(undefined);
        $httpBackend.flush();
        expect(scope.skills.length).to.equal(3);
    });

    it("should be able to extract skills by type", function () {
        expect(scope.getSkillsByType).to.be.a("function");
        $httpBackend.flush();

        expect(scope.getSkillsByType(SKILL_TYPES.DAILY).length).to.equal(1);
        expect(scope.getSkillsByType(SKILL_TYPES.NIGHTLY).length).to.equal(1);
        expect(scope.getSkillsByType(SKILL_TYPES.BOTH).length).to.equal(1);
    });

});