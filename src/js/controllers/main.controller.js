function MainController($scope) {

  $scope.allTasks = [];

  $scope.addTask = function(taskString) {
  $scope.allTasks.push(taskString);
  $scope.task = '';
}
  $scope.buttonStatus = 'Have Not Been Clicked';
  $scope.clicked = function() {
  $scope.buttonStatus = 'Have Been Clicked';

  }


}


export { MainController };
