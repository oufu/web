/**
 * Created by administator on 2016/10/26.
 */
app.controller('IndexController', function($scope) {
    $scope.carname = "Volvo";
});

app.controller('TestCorl',['$scope','apiKey',function($scope,apiKey) {

    $scope.name = apiKey.key;
    }]);
