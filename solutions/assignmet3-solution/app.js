(function (){
'use strict';

  angular.module('Assignment3',[])
  .controller('narrowDownController',narrowDownController)
  .service('search',search)
  .service('menuRetrievalService',menuRetrievalService)
  .directive('displayMenu',displayMenu);

  narrowDownController.$inject=['search'];
  function narrowDownController(search){
    var menu=this;
    menu.searchWord=""; 
    menu.found=[];
    menu.findItems=function(){
      search.findItems(menu.searchWord);
      menu.found=search.getSearchItems();
    };
    menu.remove=function(index){
      search.remove(index);
    }
    menu.errorMessage=search.errorMessage;
  }

  search.$inject=['$q','menuRetrievalService'];
  function search($q,menuRetrievalService){
    var service=this;
    var items=[]
    var data=[]
    service.remove=function(index){
      items.splice(index,1);
    };
    service.getSearchItems=function(){
      console.log(items);
      return items;
    };
    service.findItems=function (searchWord){
      items=[];
      if(searchWord=="")service.errorMessage="Didn't entered any word, Enter any word to search items from menu which matcjes description";
      else{
      var promise=menuRetrievalService.findItems(searchWord);
      $q.all([promise])
      .then(function(response){
        data=response[0].data;
        for(var i=0;i<data.length;i++){
          items.push(data[i]);
        }
      })
      .catch(function(error){
        service.errorMessage=error.message;
      });
    }
  };
}

  menuRetrievalService.$inject=['$http','$q','$timeout'];
  function menuRetrievalService($http,$q,$timeout){
    var menu=this;
    var website='https://davids-restaurant.herokuapp.com/menu_items.json';
    menu.findItems=function (searchWord){
      menu.searchWord=searchWord;
      var promise=$q.defer();
      var response=$http({
      method: "GET",
      url:website
    });
      $timeout(function(){
        response.then(function(response){
      menu.data=response.data.menu_items;
      var items=[];
    for(var i=0;i<menu.data.length;i++){
      if(menu.data[i].description.toLowerCase().indexOf(menu.searchWord)!=-1){
        // console.log(menu.data[i].description);
        items.push(menu.data[i]);
      }
    }
    var result={
      data:items,
      message:""
    };
    console.log(result.data);
    if(result.data.length==0){
      result.message="No such Items were found with the given Description";
      // console.log(result.message);
      promise.reject(result);
      // promise.message="No such Items were found with the given Description";
    }
    else{
      promise.resolve(result);
      // console.log(result.data);
    }
    })
      },1000);
      
      return promise.promise;
    }
  }

  function displayMenu(){
    var ddo={
      templateUrl:'display.html',
      scope:{
        items:'<',
        message:'<',
        remove:'&'
      },
      controller:displayMenuController,
      controllerAs:"menu",
      bindToController:true
    }
    return ddo;
  }

  function displayMenuController(){
    menu=this;
  }
})()