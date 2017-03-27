(function () {
  function CollectionCtrl(){
   this.albums = [];// create an empty array
   for (var i=0; i < 12; i++) {
     this.albums.push(angular.copy(albumPicasso));// push
     //angular.copy is a component of the angular object
   }
  }
  angular
   .module('blocJams')
   .controller('CollectionCtrl, CollectionCtrl');
}) ();
