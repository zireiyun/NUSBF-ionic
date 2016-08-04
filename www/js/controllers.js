angular.module('app.controllers', ['ngCordova', 'ngStorage']).run(function($rootScope) {
  $rootScope.items = [ {
    name : 'Arts Tee',
    image: 'img/item/bag.png',
    description: 'Arts pride',
    collected: false
  },
  {
    name : 'Chinese Manuscript',
    image: 'img/item/bag.png',
    description: 'Mastering kungfu one page at a time',
    collected: false
  },
  {
    name : 'Dragonball',
    image: 'img/item/bag.png',
    description: "It's rumoured that you can collect them if you get all A+",
    collected: false
  },
  {
    name : 'Magic stick',
    image: 'img/item/bag.png',
    description: 'Fabulous, rainbow, sparkles. Transform!! •̀.̫•́✧',
    collected: false
  },
  {
    name : 'Lipstick',
    image: 'img/item/bag.png',
    description: 'Lips are on fleek',
    collected: false
  },
  {
    name : 'Pink shirt',
    image: 'img/item/bag.png',
    description: 'On Wednesdays, we wear pink.',
    collected: false
  },
  {
    name : 'Psychology Textbook',
    image: 'img/item/bag.png',
    description: '"The textbook is a monster", "memorising the whole textbook will give you that A", "they will test everything"',
    collected: false
  },
  {
    name : 'Yong Tau Fu tofu',
    image: 'img/item/bag.png',
    description: 'Best tofu from the best ytf',
    collected: false
  },
  {
    name : 'Accounting Equation',
    image: 'img/item/bag.png',
    description: 'It fell from the sky and now you understand. Assets = Liabilities + Stockholders’ Equity',
    collected: false
  },
  {
    name : 'Biz Tee',
    image: 'img/item/bag.png',
    description: 'Biz pride',
    collected: false
  },
  {
    name : 'Blazer',
    image: 'img/item/bag.png',
    description: 'Looking smart for the part',
    collected: false
  },
  {
    name : 'Class participation',
    image: 'img/item/bag.png',
    description: 'Source of so much stresss',
    collected: false
  },
  {
    name : 'Instagram post',
    image: 'img/item/bag.png',
    description: "I'd like to thank all 5 of my project group. This sem was tough but we did it together<3",
    collected: false
  },
  {
    name : 'Laser pointer',
    image: 'img/item/bag.png',
    description: 'Presentation weaponzs',
    collected: false
  },
  {
    name : 'Wallet',
    image: 'img/item/bag.png',
    description: 'Even their wallets look so sleek',
    collected: false
  },
  {
    name : 'Com Tee',
    image: 'img/item/bag.png',
    description: 'Computing pride',
    collected: false
  },
  {
    name : 'Commitment',
    image: 'img/item/bag.png',
    description: 'Such commitment wow. Can revert?',
    collected: false
  },
  {
    name : 'Driod power',
    image: 'img/item/bag.png',
    description: 'Random green driod appeared and brought you 2% battery',
    collected: false
  },
  {
    name : 'Java bean',
    image: 'img/item/javabean.png',
    description: 'Not sure if coffee bean or Soccat poop..',
    collected: false
  },
  {
    name : 'Keyboard',
    image: 'img/item/bag.png',
    description: 'Keyboard with rainbow backlight. #keyboardgoals',
    collected: false
  },
  {
    name : 'Mouse',
    image: 'img/item/bag.png',
    description: 'Mouse emitting sparkly rainbow spectrum of light. #mousegoals',
    collected: false
  },
  {
    name : 'Snowman',
    image: 'img/item/bag.png',
    description: 'Brr.. Why is it so cold in com. Regret not bringing a jacket..',
    collected: false
  },
  {
    name : 'Copics',
    image: 'img/item/bag.png',
    description: 'Fancy markers for artsy sketches',
    collected: false
  },
  {
    name : 'Pen knife',
    image: 'img/item/bag.png',
    description: 'You never know when you need to stab someone.',
    collected: false
  },
  {
    name : 'SDE Tee',
    image: 'img/item/bag.png',
    description: "Leaders of tomorrow's built environment.",
    collected: false
  },
  {
    name : 'Sketchbook',
    image: 'img/item/bag.png',
    description: 'To put ideas down onto paper',
    collected: false
  },
  {
    name : 'Arduino board',
    image: 'img/item/bag.png',
    description: 'Smells of electrical components and prototyping',
    collected: false
  },
  {
    name : 'Quadcopter',
    image: 'img/item/bag.png',
    description: 'Essential item of any engineering department',
    collected: false
  },
  {
    name : 'Engine Tee',
    image: 'img/item/bag.png',
    description: 'Engineering!!',
    collected: false
  },
  {
    name : 'lightbulb',
    image: 'img/item/bag.png',
    description: 'We got the tools for your lightbulb',
    collected: false
  },
  {
    name : 'Raspberrypi',
    image: 'img/item/bag.png',
    description: 'Apparently not the edible type of pie',
    collected: false
  },
  {
    name : 'Spanner',
    image: 'img/item/bag.png',
    description: 'We got the spanner for your ideas',
    collected: false
  },
  {
    name : 'weird blob of plastic',
    image: 'img/item/bag.png',
    description: '3D printing gone wrong',
    collected: false
  },
  {
    name : 'Dino bones',
    image: 'img/item/bag.png',
    description: 'Marvelous skeleton of a long dead Sauropod',
    collected: false
  },
  {
    name : 'Jubilee Whale',
    image: 'img/item/bag.png',
    description: 'washed on shore 10 July 2015',
    collected: false
  },
  {
    name : 'Ayam Penyet',
    image: 'img/item/bag.png',
    description: 'Super good and delish',
    collected: false
  },
  {
    name : 'Beaker',
    image: 'img/item/bag.png',
    description: 'Can I drink tea in this?',
    collected: false
  },
  {
    name : 'Homework7',
    image: 'img/item/bag.png',
    description: 'CCW walks past and passes you a hw',
    collected: false
  },
  {
    name : 'Lab report',
    image: 'img/item/bag.png',
    description: 'What is lab report? Can eat?',
    collected: false
  },
  {
    name : 'Linear algebra hw',
    image: 'img/item/bag.png',
    description: 'Looking at the homework that seems hastily scribled with answers, it fills you with DETERMINANTS.',
    collected: false
  },
  {
    name : 'Sci Tee',
    image: 'img/item/bag.png',
    description: 'Sci fac is the best fac!!',
    collected: false
  },
  {
    name : 'Soy sauce',
    image: 'img/item/bag.png',
    description: 'Why is there soy sauce? Kikkoman brand. Maybe its from science...',
    collected: false
  },
  {
    name : 'Cake',
    image: 'img/item/bag.png',
    description: 'Sweet treat during study breaks',
    collected: false
  },
  {
    name : 'Recycled clothing',
    image: 'img/item/bag.png',
    description: 'Please recycle textiles at utown!',
    collected: false
  },
  {
    name : 'Snowstorm',
    image: 'img/item/bag.png',
    description: 'What is this fabulous throne?? Personal flying machine built by Team FrogWorks.',
    collected: false
  },
  {
    name : 'Starbux card',
    image: 'img/item/bag.png',
    description: 'Seems like someone misplaced it. Only has $0.01 value left..',
    collected: false
  },
  {
    name : 'Dentisry Tee',
    image: 'img/item/bag.png',
    description: 'Dentistry family',
    collected: false
  },
  {
    name : 'email',
    image: 'img/item/bag.png',
    description: 'You received an email! Reminder to join whatever event x100!!',
    collected: false
  },
  {
    name : 'Kylie Jenner lipkit',
    image: 'img/item/bag.png',
    description: 'Like, literally so cute when you put them on ',
    collected: false
  },
  {
    name : 'Law Tee',
    image: 'img/item/bag.png',
    description: 'Law school the best school',
    collected: false
  },
  {
    name : 'Medicine Tee',
    image: 'img/item/bag.png',
    description: 'Med school',
    collected: false
  },
  {
    name : 'pen',
    image: 'img/item/bag.png',
    description: 'Pen left behind in lecture theatre, looks sad..',
    collected: false
  }]; 

})


.controller('checkInCtrl', function($ionicPlatform, $scope, $ionicPopover, $http, $cordovaGeolocation) {

  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $ionicPlatform.ready(function() {
    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      $http({
        method : "GET",
        url : "http://nuslivinglab.nus.edu.sg/api_dev/api/Nearby?lat="+lat+"&lon="+lon+"&radius=200&category=building&output=json&num=1"
      }).then(function mySucces(response) {
        $scope.noInternet = false;
        if (response.data[0] == null){$scope.area = "home";}
        else{
          $scope.name = response.data[0].name;

          var code = response.data[0].code;
          var firstTwo = code.charAt(0) + code.charAt(1);

          if (firstTwo == "LT"){
            var num = code.slice(1);
            if (num == "7A"){$scope.area = "eng";}
            else{
              num = parseInt(num);
              if (num<=7){$scope.area = "eng";}
              else if (num<=15){$scope.area = "art";}
              else if (num<=17){$scope.area = "com";}
              else if (num<=19){$scope.area = "biz";}
              else {$scope.area = "sci";}
            }
          }
          else if(code == "THE DECK"){$scope.area = "art";}
          else if(code == "THE TERRACE"){$scope.area = "com";}
          else if(code == "CELC"){$scope.area = "des";}
          else if(code == "CELS"){$scope.area = "sci";}
          else {
            switch (firstTwo){
              case 'AS' : $scope.area = "art"; break;
              case 'BI' : $scope.area = "biz"; break;
              case 'CO' : $scope.area = "com"; break;
              case 'SD' : $scope.area = "des"; break;
              case 'UT' : $scope.area = "uto"; break;
              case 'S1' : $scope.area = "sci"; break;
              case 'MD' : $scope.area = "sci"; break;
              case 'CH' : $scope.area = "neu"; break;
              case 'SH' : $scope.area = "neu"; break;
              case 'SR' : $scope.area = "neu"; break;
              case 'UH' : $scope.area = "neu"; break;
              case 'KR' : $scope.area = "neu"; break;
              case 'H1' : $scope.area = "neu"; break;
              case 'H3' : $scope.area = "neu"; break;
              case 'H4' : $scope.area = "neu"; break;
              case 'H5' : $scope.area = "neu"; break;
              case 'H6' : $scope.area = "neu"; break;
              case 'H7' : $scope.area = "neu"; break;
              case 'H8' : $scope.area = "neu"; break;
              case 'HS' : $scope.area = "biz"; break;
              case 'EW' : $scope.area = "eng"; break;
              case 'ED' : $scope.area = "uto"; break;
              case 'BB' : $scope.area = "law"; break;
              case 'I3' : $scope.area = "com"; break;
              case 'IS' : $scope.area = "com"; break;
              case 'SS' : $scope.area = "com"; break;
              case 'PG' : $scope.area = "neu"; break;
              case 'OE' : $scope.area = "art"; break;
              case 'SF' : $scope.area = "biz"; break;
              case 'CC' : $scope.area = "eng"; break;
              case 'E ' : $scope.area = "eng"; break;
              case 'E1' : $scope.area = "eng"; break;
              case 'E2' : $scope.area = "eng"; break;
              case 'E3' : $scope.area = "eng"; break;
              case 'E4' : $scope.area = "eng"; break;
              case 'E5' : $scope.area = "eng"; break;
              case 'EA' : $scope.area = "eng"; break;
              case 'MA' : $scope.area = "eng"; break;
              case 'TE' : $scope.area = "eng"; break;
              case 'VI' : $scope.area = "eng"; break;
              case 'LK' : $scope.area = "law"; break;
              case 'OT' : $scope.area = "law"; break;
              case 'VT' : $scope.area = "art"; break;
              case 'DS' : $scope.area = "sci"; break;
              case 'S2' : $scope.area = "sci"; break;
              case 'S3' : $scope.area = "sci"; break;
              case 'S4' : $scope.area = "sci"; break;
              case 'S5' : $scope.area = "sci"; break;
              case 'S6' : $scope.area = "sci"; break;
              case 'S7' : $scope.area = "sci"; break;
              case 'S8' : $scope.area = "sci"; break;
              case 'S9' : $scope.area = "sci"; break;
              case 'FO' : $scope.area = "sci"; break;
              case 'FR' : $scope.area = "sci"; break;
              case 'CR' : $scope.area = "uto"; break;
              default   : $scope.area = "neu"; break;
            }
          }
        }

        $scope.art = false;
        $scope.biz = false;
        $scope.com = false;
        $scope.des = false;
        $scope.eng = false;
        $scope.law = false;
        $scope.neu = false;
        $scope.sci = false;
        $scope.uto = false;
        $scope.home = false;

        if ($scope.area == "home"){$scope.home = true;}
        else if ($scope.area == "art"){$scope.art = true;}
        else if ($scope.area == "biz"){$scope.biz = true;}
        else if ($scope.area == "com"){$scope.com = true;}
        else if ($scope.area == "des"){$scope.des = true;}
        else if ($scope.area == "eng"){$scope.eng = true;}
        else if ($scope.area == "law"){$scope.law= true;}
        else if ($scope.area == "neu"){$scope.neu = true;}
        else if ($scope.area == "sci"){$scope.sci = true;}
        else {$scope.uto = true;}

      }, function myError(response) {
        $scope.noInternet = true;
      });
}, function(err) {
  $scope.noInternet = true;
});
})

})

.controller('currentLocationCtrl', function($ionicPopup, $localStorage,
  $sessionStorage, $ionicPlatform, $scope, $ionicPopover, $http, $cordovaGeolocation, $rootScope) {

  var date = new Date();
  var currentDate;

  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  
  $ionicPlatform.ready(function() {

    //$localStorage.$reset();

    currentDate = date.getDate();

    if($localStorage.date != currentDate){
      $scope.remainingForages = 5
      $localStorage.date = currentDate;
      $localStorage.remainingForages = $scope.remainingForages;
    }else{ $scope.remainingForages = $localStorage.remainingForages;}

    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      $http({
        method : "GET",
        url : "http://nuslivinglab.nus.edu.sg/api_dev/api/Nearby?lat="+lat+"&lon="+lon+"&radius=200&category=building&output=json&num=3"
      }).then(function mySucces(response) {
        if (response.data[0] == null){
          $scope.area = "Home";
          $scope.name = "away from NUS~~~";
          $scope.map = "https://maps.googleapis.com/maps/api/staticmap?&zoom=18&size=300x200&maptype=roadmap&markers=color:blue%7Clabel:L%7C"+lat+","+lon;
        } else {
         $scope.name = response.data[0].name;
         var code = response.data[0].code;
         $scope.area = getArea(code);
         $scope.map = "https://maps.googleapis.com/maps/api/staticmap?&size=300x200&maptype=roadmap&markers=color:blue%7Clabel:L%7C"+lat+","+lon+"&markers=color:green|label:1|"+response.data[0].lat+","+response.data[0].lon;
         if (response.data[1]!=null)  {$scope.map = $scope.map + "&markers=color:green|label:2|"+response.data[1].lat+","+response.data[1].lon;}
         if (response.data[2]!=null) {$scope.map = $scope.map + "&markers=color:green|label:3|"+response.data[2].lat+","+response.data[2].lon;}
       }
     }, function myError(response) {
      $scope.map = "https://maps.googleapis.com/maps/api/staticmap?&zoom=18&size=300x200&maptype=roadmap&markers=color:blue|label:L|"+lat+","+lon;
      $scope.name = "away from NUS~~~"
      $scope.area = "Home";
    });
    }, function(err) {
      $scope.name = "so hidden, we don't know where you are"
      $scope.area = "Mysterious Location";
    });
  })

  $scope.forage = function() {
    if ($scope.remainingForages<=0){$scope.noForages = true;}
    else if ($scope.remainingForages==5){
      $scope.remainingForages = $scope.remainingForages - 1;
      $localStorage.remainingForages = $scope.remainingForages;
      $rootScope.items[18].collected = true;
      newItem();
    }
    else{
      $scope.remainingForages = $scope.remainingForages - 1;
      $localStorage.remainingForages = $scope.remainingForages;
    }
  }


  var newItem = function() {
   var newPopup = $ionicPopup.alert({
    template: '<img style="display: block; margin: auto auto; height:80px; width:80px;" src="' + $rootScope.items[18].image + '"/>',
    title: "New Item!!!" 
  });
 };


 $scope.refresh = function() {
  $cordovaGeolocation
  .getCurrentPosition(posOptions)
  .then(function (position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $http({
      method : "GET",
      url : "http://nuslivinglab.nus.edu.sg/api_dev/api/Nearby?lat="+lat+"&lon="+lon+"&radius=200&category=building&output=json&num=3"
    }).then(function mySucces(response) {
      if (response.data[0] == null){
        $scope.area = "Home";
        $scope.name = "away from NUS~~~";
        $scope.map = "https://maps.googleapis.com/maps/api/staticmap?&zoom=18&size=300x200&maptype=roadmap&markers=color:blue%7Clabel:L%7C"+lat+","+lon;
      } else {
       $scope.name = response.data[0].name;
       var code = response.data[0].code;
       $scope.area = getArea(code);
       $scope.map = "https://maps.googleapis.com/maps/api/staticmap?&size=300x200&maptype=roadmap&markers=color:blue%7Clabel:L%7C"+lat+","+lon+"&markers=color:green|label:1|"+response.data[0].lat+","+response.data[0].lon;
       if (response.data[1]!=null)  {$scope.map = $scope.map + "&markers=color:green|label:2|"+response.data[1].lat+","+response.data[1].lon;}
       if (response.data[2]!=null) {$scope.map = $scope.map + "&markers=color:green|label:3|"+response.data[2].lat+","+response.data[2].lon;}
     }
   }, function myError(response) {
    $scope.map = "https://maps.googleapis.com/maps/api/staticmap?&zoom=18&size=300x200&maptype=roadmap&markers=color:blue|label:L|"+lat+","+lon;
    $scope.name = "away from NUS~~~"
    $scope.area = "Home";
  });
  }, function(err) {
    $scope.name = "away from NUS~~~"
    $scope.area = "Home";
  });
}

var getArea = function(code){
  var firstTwo = code.charAt(0) + code.charAt(1);
  var place;

  if (firstTwo == "LT"){
    var num = code.slice(1);
    if (num == "7A"){place = "eng";}
    else{
      num = parseInt(num);
      if (num<=7){place = "eng";}
      else if (num<=15){place = "art";}
      else if (num<=17){place = "com";}
      else if (num<=19){place = "biz";}
      else {place = "sci";}
    }
  }
  else if(code == "THE DECK"){place = "art";}
  else if(code == "THE TERRACE"){place = "com";}
  else if(code == "CELC"){place = "des";}
  else if(code == "CELS"){place = "sci";}
  else {
    switch (firstTwo){
      case 'AS' : place = "art"; break;
      case 'BI' : place = "biz"; break;
      case 'CO' : place = "com"; break;
      case 'SD' : place = "des"; break;
      case 'UT' : place = "uto"; break;
      case 'S1' : place = "sci"; break;
      case 'MD' : place = "sci"; break;
      case 'HS' : place = "biz"; break;
      case 'EW' : place = "eng"; break;
      case 'ED' : place = "uto"; break;
      case 'BB' : place = "law"; break;
      case 'I3' : place = "com"; break;
      case 'IS' : place = "com"; break;
      case 'SS' : place = "com"; break;
      case 'OE' : place = "art"; break;
      case 'SF' : place = "biz"; break;
      case 'CC' : place = "eng"; break;
      case 'E ' : place = "eng"; break;
      case 'E1' : place = "eng"; break;
      case 'E2' : place = "eng"; break;
      case 'E3' : place = "eng"; break;
      case 'E4' : place = "eng"; break;
      case 'E5' : place = "eng"; break;
      case 'EA' : place = "eng"; break;
      case 'MA' : place = "eng"; break;
      case 'TE' : place = "eng"; break;
      case 'VI' : place = "eng"; break;
      case 'LK' : place = "law"; break;
      case 'OT' : place = "law"; break;
      case 'VT' : place = "art"; break;
      case 'DS' : place = "sci"; break;
      case 'S2' : place = "sci"; break;
      case 'S3' : place = "sci"; break;
      case 'S4' : place = "sci"; break;
      case 'S5' : place = "sci"; break;
      case 'S6' : place = "sci"; break;
      case 'S7' : place = "sci"; break;
      case 'S8' : place = "sci"; break;
      case 'S9' : place = "sci"; break;
      case 'FO' : place = "sci"; break;
      case 'FR' : place = "sci"; break;
      case 'CR' : place = "uto"; break;
      default   : place = "neu"; break;
    }
  }

  if (place == "art"){
    return "Faculty of Arts and Social Sciences"
  }
  else if (place == "biz"){
    return "Business School"
  }
  else if (place == "com"){
    return "School of Computing"
  }
  else if (place == "des"){
    return "School of Design & Environment"
  }
  else if (place == "eng"){
    return "Faculty of Engineering"
  }
  else if (place == "law"){
    return "Bukit Timah Campus"
  }
  else if (place == "neu"){
    return "Somewhere in NUS"
  }
  else if (place == "uto"){
    return "University Town"
  }
  else{
    return "Faculty of Science"
  }


}

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function(event) {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
})

.controller('itemsCtrl', function($scope, $ionicPopover, $ionicPopup, $rootScope) {

  $scope.items = $rootScope.items; 
  /*[ {
    name : 'Arts Tee',
    image: 'img/item/bag.png',
    description: 'Arts pride',
    collected: false
  },
  {
    name : 'Chinese Manuscript',
    image: 'img/item/bag.png',
    description: 'Mastering kungfu one page at a time',
    collected: false
  },
  {
    name : 'Dragonball',
    image: 'img/item/bag.png',
    description: "It's rumoured that you can collect them if you get all A+",
    collected: false
  },
  {
    name : 'Magic stick',
    image: 'img/item/bag.png',
    description: 'Fabulous, rainbow, sparkles. Transform!! •̀.̫•́✧',
    collected: false
  },
  {
    name : 'Lipstick',
    image: 'img/item/bag.png',
    description: 'Lips are on fleek',
    collected: false
  },
  {
    name : 'Pink shirt',
    image: 'img/item/bag.png',
    description: 'On Wednesdays, we wear pink.',
    collected: false
  },
  {
    name : 'Psychology Textbook',
    image: 'img/item/bag.png',
    description: '"The textbook is a monster", "memorising the whole textbook will give you that A", "they will test everything"',
    collected: false
  },
  {
    name : 'Yong Tau Fu tofu',
    image: 'img/item/bag.png',
    description: 'Best tofu from the best ytf',
    collected: false
  },
  {
    name : 'Accounting Equation',
    image: 'img/item/bag.png',
    description: 'It fell from the sky and now you understand. Assets = Liabilities + Stockholders’ Equity',
    collected: false
  },
  {
    name : 'Biz Tee',
    image: 'img/item/bag.png',
    description: 'Biz pride',
    collected: false
  },
  {
    name : 'Blazer',
    image: 'img/item/bag.png',
    description: 'Looking smart for the part',
    collected: false
  },
  {
    name : 'Class participation',
    image: 'img/item/bag.png',
    description: 'Source of so much stresss',
    collected: false
  },
  {
    name : 'Instagram post',
    image: 'img/item/bag.png',
    description: "I'd like to thank all 5 of my project group. This sem was tough but we did it together<3",
    collected: false
  },
  {
    name : 'Laser pointer',
    image: 'img/item/bag.png',
    description: 'Presentation weaponzs',
    collected: false
  },
  {
    name : 'Wallet',
    image: 'img/item/bag.png',
    description: 'Even their wallets look so sleek',
    collected: false
  },
  {
    name : 'Com Tee',
    image: 'img/item/bag.png',
    description: 'Computing pride',
    collected: false
  },
  {
    name : 'Commitment',
    image: 'img/item/bag.png',
    description: 'Such commitment wow. Can revert?',
    collected: false
  },
  {
    name : 'Driod power',
    image: 'img/item/bag.png',
    description: 'Random green driod appeared and brought you 2% battery',
    collected: false
  },
  {
    name : 'Java bean',
    image: 'img/item/javabean.png',
    description: 'Not sure if coffee bean or Soccat poop..',
    collected: true
  },
  {
    name : 'Keyboard',
    image: 'img/item/bag.png',
    description: 'Keyboard with rainbow backlight. #keyboardgoals',
    collected: false
  },
  {
    name : 'Mouse',
    image: 'img/item/bag.png',
    description: 'Mouse emitting sparkly rainbow spectrum of light. #mousegoals',
    collected: false
  },
  {
    name : 'Snowman',
    image: 'img/item/bag.png',
    description: 'Brr.. Why is it so cold in com. Regret not bringing a jacket..',
    collected: false
  },
  {
    name : 'Copics',
    image: 'img/item/bag.png',
    description: 'Fancy markers for artsy sketches',
    collected: false
  },
  {
    name : 'Pen knife',
    image: 'img/item/bag.png',
    description: 'You never know when you need to stab someone.',
    collected: false
  },
  {
    name : 'SDE Tee',
    image: 'img/item/bag.png',
    description: "Leaders of tomorrow's built environment.",
    collected: false
  },
  {
    name : 'Sketchbook',
    image: 'img/item/bag.png',
    description: 'To put ideas down onto paper',
    collected: false
  },
  {
    name : 'Arduino board',
    image: 'img/item/bag.png',
    description: 'Smells of electrical components and prototyping',
    collected: false
  },
  {
    name : 'Quadcopter',
    image: 'img/item/bag.png',
    description: 'Essential item of any engineering department',
    collected: false
  },
  {
    name : 'Engine Tee',
    image: 'img/item/bag.png',
    description: 'Engineering!!',
    collected: false
  },
  {
    name : 'lightbulb',
    image: 'img/item/bag.png',
    description: 'We got the tools for your lightbulb',
    collected: false
  },
  {
    name : 'Raspberrypi',
    image: 'img/item/bag.png',
    description: 'Apparently not the edible type of pie',
    collected: false
  },
  {
    name : 'Spanner',
    image: 'img/item/bag.png',
    description: 'We got the spanner for your ideas',
    collected: false
  },
  {
    name : 'weird blob of plastic',
    image: 'img/item/bag.png',
    description: '3D printing gone wrong',
    collected: false
  },
  {
    name : 'Dino bones',
    image: 'img/item/bag.png',
    description: 'Marvelous skeleton of a long dead Sauropod',
    collected: false
  },
  {
    name : 'Jubilee Whale',
    image: 'img/item/bag.png',
    description: 'washed on shore 10 July 2015',
    collected: false
  },
  {
    name : 'Ayam Penyet',
    image: 'img/item/bag.png',
    description: 'Super good and delish',
    collected: false
  },
  {
    name : 'Beaker',
    image: 'img/item/bag.png',
    description: 'Can I drink tea in this?',
    collected: false
  },
  {
    name : 'Homework7',
    image: 'img/item/bag.png',
    description: 'CCW walks past and passes you a hw',
    collected: false
  },
  {
    name : 'Lab report',
    image: 'img/item/bag.png',
    description: 'What is lab report? Can eat?',
    collected: false
  },
  {
    name : 'Linear algebra hw',
    image: 'img/item/bag.png',
    description: 'Looking at the homework that seems hastily scribled with answers, it fills you with DETERMINANTS.',
    collected: false
  },
  {
    name : 'Sci Tee',
    image: 'img/item/bag.png',
    description: 'Sci fac is the best fac!!',
    collected: false
  },
  {
    name : 'Soy sauce',
    image: 'img/item/bag.png',
    description: 'Why is there soy sauce? Kikkoman brand. Maybe its from science...',
    collected: false
  },
  {
    name : 'Cake',
    image: 'img/item/bag.png',
    description: 'Sweet treat during study breaks',
    collected: false
  },
  {
    name : 'Recycled clothing',
    image: 'img/item/bag.png',
    description: 'Please recycle textiles at utown!',
    collected: false
  },
  {
    name : 'Snowstorm',
    image: 'img/item/bag.png',
    description: 'What is this fabulous throne?? Personal flying machine built by Team FrogWorks.',
    collected: false
  },
  {
    name : 'Starbux card',
    image: 'img/item/bag.png',
    description: 'Seems like someone misplaced it. Only has $0.01 value left..',
    collected: false
  },
  {
    name : 'Dentisry Tee',
    image: 'img/item/bag.png',
    description: 'Dentistry family',
    collected: false
  },
  {
    name : 'email',
    image: 'img/item/bag.png',
    description: 'You received an email! Reminder to join whatever event x100!!',
    collected: false
  },
  {
    name : 'Kylie Jenner lipkit',
    image: 'img/item/bag.png',
    description: 'Like, literally so cute when you put them on ',
    collected: false
  },
  {
    name : 'Law Tee',
    image: 'img/item/bag.png',
    description: 'Law school the best school',
    collected: false
  },
  {
    name : 'Medicine Tee',
    image: 'img/item/bag.png',
    description: 'Med school',
    collected: false
  },
  {
    name : 'pen',
    image: 'img/item/bag.png',
    description: 'Pen left behind in lecture theatre, looks sad..',
    collected: false
  }];*/

  $scope.showAlert = function(name, img, des, col) {
    if(col){
     var alertPopup = $ionicPopup.alert({
       template: '<img style="display: block; margin: auto auto; height:80px; width:80px;" src="' + img + '"/><div style="display: block; margin-top: 8px;">' + des + '</div>',
       title: name
     });
   };

 };

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function(event) {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
})

.controller('bossCtrl', function($rootScope, $http, $cordovaGeolocation, $scope, $ionicPopover, $localStorage, $sessionStorage,  $ionicPlatform) {

 var date = new Date();
 var currentDate = date.getDate();
 var posOptions = {timeout: 10000, enableHighAccuracy: false};

 $ionicPlatform.ready(function(){

  //$localStorage.$reset();
  
  if ($localStorage.day != currentDate){
    $scope.loot = "";
    $scope.bossDead = false;
    var num = Math.floor(Math.random() * 6) + 1;
    if (num==1){$scope.area = "Arts"}
      else if (num==2){$scope.area = "Business"}
        else if (num==3){$scope.area = "Computing"}
          else if (num==4){$scope.area = "SDE"}
            else if (num==5){$scope.area = "Engineering"}
              else if (num==6){$scope.area = "Science"}
                $localStorage.area = $scope.area;
              $localStorage.day = currentDate;
              $scope.health = 1000;
              $localStorage.health = $scope.health;
            }else{
              $scope.area = $localStorage.area;
              $scope.health = $localStorage.health;
            }
            $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function (position) {
              var lat = position.coords.latitude;
              var lon = position.coords.longitude;
              $http({
                method : "GET",
                url : "http://nuslivinglab.nus.edu.sg/api_dev/api/Nearby?lat="+lat+"&lon="+lon+"&radius=200&category=building&output=json&num=1"
              }).then(function mySucces(response) {
                if (response.data[0] == null){
                  $scope.areayou = "Home";
                } else {
                 var code = response.data[0].code;
                 $scope.areayou = getArea(code);
               }
             }, function myError(response) {
              $scope.areayou = "Home"
            });
            }, function(err) {
              $scope.areayou = "Undetected";
            });
          })

 $scope.attack = function(){
  if ($scope.health>0){
    var damage = Math.floor(Math.random() * 100) + 150;
    $scope.health -= damage;
    $localStorage.health = $scope.health;  
    if ($scope.health<0){
      $scope.bossDead = true;
      var numItems = Math.floor(Math.random() * 3) + 1;
      for (i=0; i<numItems; i++){
        var ran = Math.floor(Math.random() * 52) + 1;
        $scope.loot += $rootScope.items[ran].name;
        if (i+1 <numItems){$scope.loot += " & ";}
        $rootScope.items[ran].collected = true;
      }

    }
  }

}

$scope.refresh = function() {
  $cordovaGeolocation
  .getCurrentPosition(posOptions)
  .then(function (position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $http({
      method : "GET",
      url : "http://nuslivinglab.nus.edu.sg/api_dev/api/Nearby?lat="+lat+"&lon="+lon+"&radius=200&category=building&output=json&num=3"
    }).then(function mySucces(response) {
      if (response.data[0] == null){
        $scope.areayou = "Home";
      } else {
        var code = response.data[0].code;
        $scope.areayou = getArea(code);
      }
    }, function myError(response) {
     $scope.areayou = "Home"
   });
  }, function(err) {
   $scope.areayou = "Undetected";
 });
}


var getArea = function(code){
  var firstTwo = code.charAt(0) + code.charAt(1);
  var place;

  if (firstTwo == "LT"){
    var num = code.slice(1);
    if (num == "7A"){place = "eng";}
    else{
      num = parseInt(num);
      if (num<=7){place = "eng";}
      else if (num<=15){place = "art";}
      else if (num<=17){place = "com";}
      else if (num<=19){place = "biz";}
      else {place = "sci";}
    }
  }
  else if(code == "THE DECK"){place = "art";}
  else if(code == "THE TERRACE"){place = "com";}
  else if(code == "CELC"){place = "des";}
  else if(code == "CELS"){place = "sci";}
  else {
    switch (firstTwo){
      case 'AS' : place = "art"; break;
      case 'BI' : place = "biz"; break;
      case 'CO' : place = "com"; break;
      case 'SD' : place = "des"; break;
      case 'UT' : place = "uto"; break;
      case 'S1' : place = "sci"; break;
      case 'MD' : place = "sci"; break;
      case 'HS' : place = "biz"; break;
      case 'EW' : place = "eng"; break;
      case 'ED' : place = "uto"; break;
      case 'BB' : place = "law"; break;
      case 'I3' : place = "com"; break;
      case 'IS' : place = "com"; break;
      case 'SS' : place = "com"; break;
      case 'OE' : place = "art"; break;
      case 'SF' : place = "biz"; break;
      case 'CC' : place = "eng"; break;
      case 'E ' : place = "eng"; break;
      case 'E1' : place = "eng"; break;
      case 'E2' : place = "eng"; break;
      case 'E3' : place = "eng"; break;
      case 'E4' : place = "eng"; break;
      case 'E5' : place = "eng"; break;
      case 'EA' : place = "eng"; break;
      case 'MA' : place = "eng"; break;
      case 'TE' : place = "eng"; break;
      case 'VI' : place = "eng"; break;
      case 'LK' : place = "law"; break;
      case 'OT' : place = "law"; break;
      case 'VT' : place = "art"; break;
      case 'DS' : place = "sci"; break;
      case 'S2' : place = "sci"; break;
      case 'S3' : place = "sci"; break;
      case 'S4' : place = "sci"; break;
      case 'S5' : place = "sci"; break;
      case 'S6' : place = "sci"; break;
      case 'S7' : place = "sci"; break;
      case 'S8' : place = "sci"; break;
      case 'S9' : place = "sci"; break;
      case 'FO' : place = "sci"; break;
      case 'FR' : place = "sci"; break;
      case 'CR' : place = "uto"; break;
      default   : place = "neu"; break;
    }
  }

  if (place == "art"){
    return "Arts"
  }
  else if (place == "biz"){
    return "Business"
  }
  else if (place == "com"){
    return "Computing"
  }
  else if (place == "des"){
    return "SDE"
  }
  else if (place == "eng"){
    return "Engineering"
  }
  else if (place == "law"){
    return "Bukit Timah Campus"
  }
  else if (place == "neu"){
    return "Somewhere in NUS"
  }
  else if (place == "uto"){
    return "University Town"
  }
  else{
    return "Science"
  }


}

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function(event) {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
})

.controller('skillsCtrl', function($scope, $ionicPopover) {

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function(event) {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
})

.controller('settingsCtrl', function($scope, $ionicPopover) {

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function(event) {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
})

.controller('PvPCtrl', function($scope, $ionicPopover) {

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function(event) {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
})

.controller('creditsCtrl', function($scope, $ionicPopover) {

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function(event) {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
})

.controller('blankCtrl', function($scope, $ionicPopover) {

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function(event) {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

})