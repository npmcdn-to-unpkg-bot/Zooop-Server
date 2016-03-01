const angular = require('angular');
var hello = "Hello";


require('./controllers/index');


console.log(`${hello} world!!`);
console.log("Test!");

const app = angular.module('zooopApp',['ngMaterial','zoopController']);

app.config(["$mdThemingProvider",($mdThemingProvider)=>{
  $mdThemingProvider.theme('default').primaryPalette('light-blue',{
    'default':'700'
  })
  .accentPalette('red',{
    'default': '700'
  });
}]);
