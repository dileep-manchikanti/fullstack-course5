// function test1(){
// 	this.myName="Dileep";
// 
// }
// function test2(){
// 	console.log(this);
// }

// // console.log();
// function circle(radius){
// 	this.radius=radius;
// 	console.log("you are inside function circle");
// 	console.log(this);
// }

// circle.prototype.getArea=function (){
// 		return Math.PI*this.radius*this.radius;
// 	};
// circle.prototype.getRadius=function (){
// 		return this.radius;
// 	};
// var myCircle=new circle(10);
// console.log(myCircle);
// console.log(myCircle.getRadius());
// console.log(myCircle.getArea());
// var arr=new Array();
// arr[0]="Dileep";
// arr[1]=3;
// arr[2]=function (){
// 	console.log("inside function");
// }
// arr[3]={
// 	course:"HTML,CSS & JS"
// }
// console.log(arr);
// arr[2]();
// //short hand notation 
// var array=["Dileep","dileep","DILEEP",
// function(){
// 	console.log("hi");
// }];
// console.log(array);
// function myFunc(multiplier){
// var mul=function multiply(val){
// 	return val*multiplier;
// }	
// return mul;
// }
// var res=myFunc(2);
// console.log(myFunc(2)(5));

// function compliment(){
// 	var movie=document.getElementById("name").value;
// 	var message="<h2> "+movie + " is a great movie"+"</h2>";
// 	var request=new XMLHttpRequest();
// 	request.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//      document.getElementById("demo").innerHTML = this.responseText;
//      console.log(this);
//     }
// };
// 	request.open("GET", "ajax_info.txt", true);
//   	request.send();
// document.getElementById("output").innerHTML=message;
// }
// // alert("hi");re
// // document.getElementById("my").addEventListener("click", compliment)

// (function(){
// 'use strict';

// angular.module("myFirstApp",[])
// .controller("myFirstController",function($scope){
// 	$scope.name="Dileep kumar";
// 	$scope.total_value=0;
// })
// })()

(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Dileep Kumar";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
