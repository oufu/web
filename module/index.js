/**
 * Created by administator on 2016/10/26.
 */
app.controller('indexCtrl',function($scope, $http){
    $http.get("../data/data.json")
        .success(function (response) {
            $scope.names = response.sites;

        });
})