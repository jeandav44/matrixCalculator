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
    //trial code

    $scope.validated =0;
    $scope.action = "init";
    $scope.actionNames = {"add": "+",
                          "substract": "-",
                          "multiply": "*"};
    $scope.sizeM=[];
    $scope.rangeM=[];

    //matrix
    $scope.matrix1=[[]];
    $scope.matrix2=[[]];
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
      $scope.validated=0;
      var flag=true;
      if(!isNaN(this.sizeMatrix) && this.sizeMatrix>0 ){
          $("#rows").removeClass("invalid").addClass("valid");
        }
      else{
        $("#rows").removeClass("valid").addClass("invalid");
        flag=false;
      }

      if(!isNaN(this.rangeMatrix) && this.rangeMatrix>1){
          $("#range").removeClass("invalid").addClass("valid");
        }
      else{
        $("#range").removeClass("valid").addClass("invalid");
        flag=false;
      }

        if(flag){

          $scope.sizeM=[];
          $scope.rangeM=[];
          $scope.validated=1;
          for (var i = 0; i < this.sizeMatrix; i++) {
              $scope.sizeM.push(i);
            }
          for (var i = 0; i < this.rangeMatrix; i++) {
                $scope.rangeM.push(i);
            }

        }

    };

    this.trial1 = function (){
       alert($scope.matrix2[0][1]);
    };


  });

  app.directive("matrixTemplate", function () {
		return {
		  restrict: 'E', // type of directive
		  templateUrl:"templates/matrix-template.html",
		  controller: function() {
        // When the document is ready execute this code
		  },
		  controllerAs: 'matrixTemplate' // This is the alias of the directive
		};
  });


  app.directive("matrixTemplateS", function () {
    return {
      restrict: 'E', // type of directive
      templateUrl:"templates/matrix-template-s.html",
      controller: function() {
        // When the document is ready execute this code
      },
      controllerAs: 'matrixTemplateS' // This is the alias of the directive
    };
  });

})();
