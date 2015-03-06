// script.js
games = [
            {'name':'webgl experiment','description':'this is my first real experiment with webgl, using the javascipt engine three.js. it only works on Chrome. when the webpage loads, click the screen and the canvas window will initialize. click <a href=\'https://dl.dropboxusercontent.com/u/104418673/website/webgl/index.html\'>here</a> to get started.','image':'thumbs/webglpic.png'},
            {'name':'ashford lights audio visualization','description':'this is a non-interactive audio visualization I designed using the javascript web audio api. i intend to make an actual game out of it at some point in time. click <a href=\'ashfordlights/main.html\'>here</a> to get started.','image':''},
            {'name':'the lottery','description':'this is a simple game i wrote in python about playing the lottery and maybe winning a whole bunch of money. you can view it on github <a href=\'https://github.com/microwaveabletoaster/orwelliangenerator\'>here</a>','image':''},

        ];
software = [
            {'name':'orwellian generator','description':'this script uses markov chains to emulate the writing style of the great george orwell. you can view it on github <a href=\'https://github.com/microwaveabletoaster/lotterygame\'>here</a>.'},
        ];

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var lbsApp = angular.module('lbsApp', ['ngRoute']);

    // configure our routes
    lbsApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'main.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/games', {
                templateUrl : 'games.html',
                controller  : 'gamesController'
            })

            .when('/about', {
                templateUrl : 'about.html'
                // controller  : 'gamesController'
            })

            // route for the contact page
            .when('/software', {
                templateUrl : 'software.html',
                controller  : 'softwareController'
            })

            .when('/software/:soft_id', {
                templateUrl : 'softwarePage.html',
                controller  : 'softwarePageController'
            })

            .when('/games/:game_id',{
                templateUrl: 'gamePage.html',
                controller: 'gamePageController'

            });
    });

    // create the controller and inject Angular's $scope
    lbsApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    lbsApp.controller('gamesController', function($scope) {
        $scope.games = games;
    });

    lbsApp.controller('softwareController', function($scope) {
        $scope.software = software;
    });

    lbsApp.controller('softwarePageController',function($scope,$routeParams){
        $scope.sw = $routeParams.soft_id;

        for(a=0;a<software.length;a++){
            if(software[a].name==$scope.sw)
                $scope.softObject = software[a];
        }
    });

    lbsApp.controller('gamePageController',function($scope,$routeParams){
        $scope.game = $routeParams.game_id;

        for(a=0;a<games.length;a++){
            if(games[a].name==$scope.game)
                $scope.gameObject = games[a];
        }
    });