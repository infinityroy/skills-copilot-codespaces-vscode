function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/member.html',
        scope: {
            member: '=',
            memberSkills: '='
        },
        controller: function ($scope, $element, $attrs) {
            $scope.memberSkills = $scope.memberSkills || [];
            $scope.skills = $scope.memberSkills.filter(function (skill) {
                return skill.member_id == $scope.member.id;
            });
        }
    };
}