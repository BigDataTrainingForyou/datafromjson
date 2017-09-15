var app = angular.module("DemoApp", []);
// Controller is injected with $scope and $http as dependencies
app.controller("DemoController", function ($scope, $http) {
  //  $http.get('https://api.github.com/users/angular/repos')
  // $http.get('http://www.omdbapi.com/?t=Sherlock Holmes&tomatoes=true&plot=full')
       // .success(function (repos) {
        //$scope.repos = repos
    //});
        // $scope.search = "Sherlock Holmes";

    //function fetch(){
     
  
       
$http.get("http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo")
        .then(function(response){ $scope.details = response.data; });

    //}
});