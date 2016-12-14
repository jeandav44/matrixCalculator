// jQuery code
$(document).ready(function () {

});

// angularjs code
/* (function(){ // write your code here })(); */
(function(){
  // This is the instance of our angular app
  var app = angular.module("MatrixCalculatorApp", []);

  app.controller("MatrixCalculatorController", function($scope) {
    // Properties
    this.sizeMatrix;
    this.rangeMatrix;
    // Scope variables
    $scope.action = "init";
    $scope.actionNames = {"add": "+",
                          "substract": "-",
                          "multiply": "*"};
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

    this.generateMatrix = function (){
      if(!isNaN(this.sizeMatrix) && !isNaN(this.rangeMatrix)){

          $("#rows").parent().removeClass('has-error');

        }
      else{

        $("#rows").parent().addClass('has-error');
      }

    };



  });
})();
