require.config({
    baseUrl: './',
    paths: {
        'jquery': 'lib/bower_components/jquery/dist/jquery',
        'angular': 'lib/bower_components/angular/angular',
        'angularAMD': 'lib/bower_components/angularAMD/angularAMD',
        'angular-ui-router': 'lib/bower_components/angular-ui-router/release/angular-ui-router',
        'angular-file-upload' : 'lib/bower_components/angular-file-upload/dist/angular-file-upload.min'
    },
    shim: {
        'angular-ui-router': ['angular'],
        'angular':{
            exports:'angular'
        },
        'angular-route':{
            deps:['angular'],
            exports: 'angular-ui-router'
        }
    },
    urlArgs: "bust=" + (new Date()).getTime(),
    deps: ['js/app']
});
