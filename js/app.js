'use strict';

angular.module('todomvc', ['ngRoute', 'ngResource'])
	.config(function ($routeProvider) {
		

		var routeConfig = {
			controller: 'TodoCtrl',
			templateUrl: 'todo-index.html',
			resolve: {
				store: function (todoStorage) {
					return todoStorage.then(function (module) {
						module.get(); 
						return module;
					});
				}
			}
		};

		$routeProvider
			.when('/', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	});
