var app = angular.module('app', ['kendo.directives']);

app.controller('AppController', function ($scope, $timeout) {

    $scope.question = {
        value: null,
        //options:[]
    };

    $timeout(function(){
        $scope.question.options = {
            dataSource: [{ContactName:'A', CustomerID:'1'}, {ContactName:'B', CustomerID:'2'}],
            dataTextField: "ContactName",
            dataValueField: "CustomerID"
        };

    },3000);

});


app.component('mySelect', {
    template: '<select kendo-drop-down-list style="width: 100%" ng-model="$ctrl.myVal" k-options="$ctrl.options"></select>',
    bindings:{
        options: "=",
        myVal: "="
    }
});

