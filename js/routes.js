/**
 * Created by administator on 2016/10/26.
 */
    //app是Angular应用对象
    app.config(['$routeProvider',function ($routeProvider) {
            $routeProvider
                .when('/index', {
                    templateUrl: '../views/coneten.html',
                    controller: 'IndexController'
                })
                .when('/', {
                    templateUrl: '../views/coneten.html',
                    controller: 'IndexController'
                })
                .otherwise({ redirectTo: '/index' });
        }]);