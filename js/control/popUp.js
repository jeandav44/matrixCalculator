// jQuery code
$(document).ready(function () {

});

// angularjs code
/* (function(){ // write your code here })(); */
(function(){
  // This is the instance of our angular app
  var app = angular.module("PopUpApp", []);

  app.controller("PopUpController", function($scope) {
    // Properties
    this.numberOfDates;
    this.numberOfDays;
    this.dates = [];
    // Scope variables
    $scope.nFields = [];
    $scope.action;
    $scope.actionNames = {"add": "Add",
                          "substract": "Substract",
                          "weekDay": "Days of the week",
                          "daysUntilToday": "Days until today"};
    // Methods
    this.loadData = function () {
      this.numberOfDates = parseInt(window.opener.$("#numberOfDates").val());
      this.numberOfDays = parseInt(window.opener.$("#numberOfDays").val());
      $scope.action = window.opener.$("#action").text();

      for (var i = 0; i < this.numberOfDates; i++) {
        $scope.nFields.push(i); // 0, 1, 2, 3, 4 ...
        this.dates.push("");
      }

    };

    this.calculateDates = function () {
      // TODO
      // validate dates
      // calculate
      var hasError = false;
      var formatedDates = [], resultDates = [];

      for (var i = 0; i < this.dates.length; i++) {
        $("#dateField"+i).addClass("ng-valid").removeClass("ng-invalid");

        // Validate all dates
        if (isNotDate(this.dates[i])) { // There is an error
          hasError = true;
          $("#dateField"+i).addClass("ng-invalid").removeClass("ng-valid");
        } else {
          formatedDates.push(new Date(this.dates[i]));
        }
      }

      if (!hasError) {
        resultDates = applyOperationToDates($scope.action, formatedDates, this.numberOfDays);
        window.opener.$("#result").html(resultDates.toString());
      }
    };
  });

  // Normally you use directives to create tags
  // Driective name must start with lowercase!
	app.directive("popUpTemplate", function () {
		return {
		  restrict: 'E', // type of directive
		  templateUrl:"../templates/pop-up-template.html",
		  controller: function() {
        // When the document is ready execute this code
		  },
		  controllerAs: 'popUpTemplate' // This is the alias of the directive
		};
  });

})();
