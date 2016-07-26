angular.module('app.controllers', ['ngCordova'])

.controller('checkInCtrl', function($ionicPlatform, $scope, $ionicPopover, $http, $cordovaGeolocation) {

  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $ionicPlatform.ready(function() {
    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude;
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

.controller('currentLocationCtrl', function($scope, $ionicPopover) {

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

.controller('itemsCtrl', function($scope, $ionicPopover, $ionicPopup) {

  $scope.items = [ {
    name : 'Arts Tee',
    image: 'img/item/bag.png',
    description: 'Arts pride',
    collected: true
  },
  {
    name : 'Chinese Manuscript',
    image: 'img/item/bag.png',
    description: 'Mastering kungfu one page at a time',
    collected: true
  },
  {
    name : 'Dragonball',
    image: 'img/item/bag.png',
    description: "It's rumoured that you can collect them if you get all A+",
    collected: true
  },
  {
    name : 'Magic stick',
    image: 'img/item/bag.png',
    description: 'Fabulous, rainbow, sparkles. Transform!! •̀.̫•́✧',
    collected: true
  },
  {
    name : 'Lipstick',
    image: 'img/item/bag.png',
    description: 'Lips are on fleek',
    collected: true
  },
  {
    name : 'Pink shirt',
    image: 'img/item/bag.png',
    description: 'On Wednesdays, we wear pink.',
    collected: true
  },
  {
    name : 'Psychology Textbook',
    image: 'img/item/bag.png',
    description: '"The textbook is a monster", "memorising the whole textbook will give you that A", "they will test everything"',
    collected: true
  },
  {
    name : 'Yong Tau Fu tofu',
    image: 'img/item/bag.png',
    description: 'Best tofu from the best ytf',
    collected: true
  },
  {
    name : 'Accounting Equation',
    image: 'img/item/bag.png',
    description: 'It fell from the sky and now you understand. Assets = Liabilities + Stockholders’ Equity',
    collected: true
  },
  {
    name : 'Biz Tee',
    image: 'img/item/bag.png',
    description: 'Biz pride',
    collected: true
  },
  {
    name : 'Blazer',
    image: 'img/item/bag.png',
    description: 'Looking smart for the part',
    collected: true
  },
  {
    name : 'Class participation',
    image: 'img/item/bag.png',
    description: 'Source of so much stresss',
    collected: true
  },
  {
    name : 'Instagram post',
    image: 'img/item/bag.png',
    description: "I'd like to thank all 5 of my project group. This sem was tough but we did it together<3",
    collected: true
  },
  {
    name : 'Laser pointer',
    image: 'img/item/bag.png',
    description: 'Presentation weaponzs',
    collected: true
  },
  {
    name : 'Wallet',
    image: 'img/item/bag.png',
    description: 'Even their wallets look so sleek',
    collected: true
  },
  {
    name : 'Com Tee',
    image: 'img/item/bag.png',
    description: 'Computing pride',
    collected: true
  },
  {
    name : 'Commitment',
    image: 'img/item/bag.png',
    description: 'Such commitment wow. Can revert?',
    collected: true
  },
  {
    name : 'Driod power',
    image: 'img/item/bag.png',
    description: 'Random green driod appeared and brought you 2% battery',
    collected: true
  },
  {
    name : 'Java bean',
    image: 'img/item/bag.png',
    description: 'Not sure if coffee bean or Soccat poop..',
    collected: true
  },
  {
    name : 'Keyboard',
    image: 'img/item/bag.png',
    description: 'Keyboard with rainbow backlight. #keyboardgoals',
    collected: true
  },
  {
    name : 'Mouse',
    image: 'img/item/bag.png',
    description: 'Mouse emitting sparkly rainbow spectrum of light. #mousegoals',
    collected: true
  },
  {
    name : 'Snowman',
    image: 'img/item/bag.png',
    description: 'Brr.. Why is it so cold in com. Regret not bringing a jacket..',
    collected: true
  },
  {
    name : 'Copics',
    image: 'img/item/bag.png',
    description: 'Fancy markers for artsy sketches',
    collected: true
  },
  {
    name : 'Pen knife',
    image: 'img/item/bag.png',
    description: 'You never know when you need to stab someone.',
    collected: true
  },
  {
    name : 'SDE Tee',
    image: 'img/item/bag.png',
    description: "Leaders of tomorrow's built environment.",
    collected: true
  },
  {
    name : 'Sketchbook',
    image: 'img/item/bag.png',
    description: 'To put ideas down onto paper',
    collected: true
  },
  {
    name : 'Arduino board',
    image: 'img/item/bag.png',
    description: 'Smells of electrical components and prototyping',
    collected: true
  },
  {
    name : 'Quadcopter',
    image: 'img/item/bag.png',
    description: 'Essential item of any engineering department',
    collected: true
  },
  {
    name : 'Engine Tee',
    image: 'img/item/bag.png',
    description: 'Engineering!!',
    collected: true
  },
  {
    name : 'lightbulb',
    image: 'img/item/bag.png',
    description: 'We got the tools for your lightbulb',
    collected: true
  },
  {
    name : 'Raspberrypi',
    image: 'img/item/bag.png',
    description: 'Apparently not the edible type of pie',
    collected: true
  },
  {
    name : 'Spanner',
    image: 'img/item/bag.png',
    description: 'We got the spanner for your ideas',
    collected: true
  },
  {
    name : 'weird blob of plastic',
    image: 'img/item/bag.png',
    description: '3D printing gone wrong',
    collected: true
  },
  {
    name : 'Dino bones',
    image: 'img/item/bag.png',
    description: 'Marvelous skeleton of a long dead Sauropod',
    collected: true
  },
  {
    name : 'Jubilee Whale',
    image: 'img/item/bag.png',
    description: 'washed on shore 10 July 2015',
    collected: true
  },
  {
    name : 'Ayam Penyet',
    image: 'img/item/bag.png',
    description: 'Super good and delish',
    collected: true
  },
  {
    name : 'Beaker',
    image: 'img/item/bag.png',
    description: 'Can I drink tea in this?',
    collected: true
  },
  {
    name : 'Homework7',
    image: 'img/item/bag.png',
    description: 'CCW walks past and passes you a hw',
    collected: true
  },
  {
    name : 'Lab report',
    image: 'img/item/bag.png',
    description: 'What is lab report? Can eat?',
    collected: true
  },
  {
    name : 'Linear algebra hw',
    image: 'img/item/bag.png',
    description: 'Looking at the homework that seems hastily scribled with answers, it fills you with DETERMINANTS.',
    collected: true
  },
  {
    name : 'Sci Tee',
    image: 'img/item/bag.png',
    description: 'Sci fac is the best fac!!',
    collected: true
  },
  {
    name : 'Soy sauce',
    image: 'img/item/bag.png',
    description: 'Why is there soy sauce? Kikkoman brand. Maybe its from science...',
    collected: true
  },
  {
    name : 'Cake',
    image: 'img/item/bag.png',
    description: 'Sweet treat during study breaks',
    collected: true
  },
  {
    name : 'Recycled clothing',
    image: 'img/item/bag.png',
    description: 'Please recycle textiles at utown!',
    collected: true
  },
  {
    name : 'Snowstorm',
    image: 'img/item/bag.png',
    description: 'What is this fabulous throne?? Personal flying machine built by Team FrogWorks.',
    collected: true
  },
  {
    name : 'Starbux card',
    image: 'img/item/bag.png',
    description: 'Seems like someone misplaced it. Only has $0.01 value left..',
    collected: true
  },
  {
    name : 'Dentisry Tee',
    image: 'img/item/bag.png',
    description: 'Dentistry family',
    collected: true
  },
  {
    name : 'email',
    image: 'img/item/bag.png',
    description: 'You received an email! Reminder to join whatever event x100!!',
    collected: true
  },
  {
    name : 'Kylie Jenner lipkit',
    image: 'img/item/bag.png',
    description: 'Like, literally so cute when you put them on ',
    collected: true
  },
  {
    name : 'Law Tee',
    image: 'img/item/bag.png',
    description: 'Law school the best school',
    collected: true
  },
  {
    name : 'Medicine Tee',
    image: 'img/item/bag.png',
    description: 'Med school',
    collected: true
  },
  {
    name : 'pen',
    image: 'img/item/bag.png',
    description: 'Pen left behind in lecture theatre, looks sad..',
    collected: true
  }];

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

.controller('bossCtrl', function($scope, $ionicPopover) {

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