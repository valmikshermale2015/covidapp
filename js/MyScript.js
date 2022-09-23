
const URL = "https://covid.mathdro.id/api";
let app = angular.module("MyApp", []);

app.controller("MyController", ($scope, $http) => {

    $scope.title = "Stay Home Stay Safe";
    $scope.paragraph = "this is app of covid ";

    $http.get(URL).then((response) => {
        console.log("inside response", response.data);
        $scope.allData = response.data;
    }, (error) => {
        console.log("inside error", error);
    })


    // console.log("country ",$scope.country)


    $scope.get_Country = () => {
        console.log("country name", $scope.country);
        let countryName = $scope.country;
        console.log("CountryName", countryName);
      if(countryName==" "){
        return false;
      }else{
        $http.get(`${URL}/countries/${countryName}`).then((response) => {
            console.log("success", response.data)
            $scope.get_Country_Data=response.data;
        }, (error) => {
            console.log("error", error.data)
        })
    }
    };



}); 