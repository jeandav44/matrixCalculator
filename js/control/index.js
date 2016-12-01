// jQuery code
$(document).ready(function () {

});

// angularjs code
/* (function(){ // write your code here })(); */
(function(){
  // This is the instance of our angular app
  var app = angular.module("DAWM6DateCalculatorApp", []);

  app.controller("DAWM6DateCalculatorController", function($scope) {
    // Properties
    this.numberOfDates;
    this.numberOfDays;
    // Scope variables
    $scope.action = "init";
    $scope.actionNames = {"add": "Add",
                          "substract": "Substract",
                          "weekDay": "Days of the week",
                          "daysUntilToday": "Days until today"};
    // Methods


    this.generatePopUp = function () {
      // TODO validate
      /* var hasError = false;
        if (isNaN(this.numberOfDates)
          || this.numberOfDates == ""
          || this.numberOfDates <= 0) {
          hasError = true;
      } */

      window.open("popUps/popUp.html");
    };
  });

})();
