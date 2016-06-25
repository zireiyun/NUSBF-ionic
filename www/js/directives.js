angular.module('app.directives', [])

.directive('popoverMenu', [function(){
	return{
		restrict :'E',
		templateUrl:'templates/my-popover.html'
	};
}])