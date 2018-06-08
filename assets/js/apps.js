var app = angular.module('app', []);

app.service('MathService', function() {
    this.add = function(a, b, c) {
      return parseInt(a) + parseInt(b) + parseInt(c)
    };

    this.substract = function(a, b, c) {
      return a - b - c
    };

    this.multiply = function(a, b, c) {
      return a * b * c
    };

    this.divide = function(a, b , c) {
      return a / b / c
    };
  });

  app.service('MathService2', function() {
    this.add = function(a, b) {
      return parseInt(a) + parseInt(b) 
    };

    this.substract = function(a, b) {
      return a - b
    };

    this.multiply = function(a, b) {
      return a * b 
    };

    this.divide = function(a, b) {
      return a / b 
    };
  });

  app.service('CalculatorService2', function(MathService2) {
    this.add = function(a, b) {
      return MathService2.add(a, b);
    };
    this.substract = function(a, b) {
      return MathService2.substract(a, b);
    };
    this.multiply = function(a, b) {
      return MathService2.multiply(a, b);
    };
    this.divide = function(a, b) {
      return MathService2.divide(a, b);
    };

});

app.service('CalculatorService', function(MathService) {
    this.add = function(a, b, c) {
      return MathService.add(a, b, c);
    };
    this.substract = function(a, b, c) {
      return MathService.substract(a, b, c);
    };
    this.multiply = function(a, b, c) {
      return MathService.multiply(a, b, c);
    };
    this.divide = function(a, b, c) {
      return MathService.divide(a, b, c);
    };

});

app.controller('CalcAppsCtrl', ['$scope','CalculatorService','CalculatorService2', function($scope,CalculatorService,CalculatorService2) {
    
    $scope.cbSelected = function() {
        if ($scope.cbvalue1 && $scope.cbvalue2 === true ) { 
            $scope.calcAdd = function(){
                $scope.result = CalculatorService2.add($scope.numb1, $scope.numb2);       
            }
            $scope.calcSubstract = function(){
                $scope.result = CalculatorService2.substract($scope.numb1, $scope.numb2);
            }
            $scope.calcMultiply = function(){
                $scope.result = CalculatorService2.multiply($scope.numb1, $scope.numb2);
            }
            $scope.calcDivide = function(){
                $scope.result = CalculatorService2.divide($scope.numb1, $scope.numb2);
            }
        }if ($scope.cbvalue1 && $scope.cbvalue2 && $scope.cbvalue3 === true) {
            $scope.calcAdd = function(){
                $scope.result = CalculatorService.add($scope.numb1, $scope.numb2, $scope.numb3);       
            }        
            $scope.calcSubstract = function(){
                $scope.result = CalculatorService.substract($scope.numb1, $scope.numb2, $scope.numb3);
            }        
            $scope.calcMultiply = function(){
                $scope.result = CalculatorService.multiply($scope.numb1, $scope.numb2, $scope.numb3);
            }
            $scope.calcDivide = function(){
                $scope.result = CalculatorService.divide($scope.numb1, $scope.numb2, $scope.numb3);
            }
        }
    };


    $scope.calcAdd = function(){
        alert("Please Check Your Checklist Item to Continue")    
    }

    $scope.calcSubstract = function(){
        alert("Please Check Your Checklist Item to Continue")  
    }

    $scope.calcMultiply = function(){
        alert("Please Check Your Checklist Item to Continue") 
    }

    $scope.calcDivide = function(){
        alert("Please Check Your Checklist Item to Continue") 
    }
}])