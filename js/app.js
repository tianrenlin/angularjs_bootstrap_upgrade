angular.module('app', ['ngRoute'])
// .controller('HomeController', function ($scope, $route) { $scope.$route = $route;})
.config( function ($routeProvider,$locationProvider) {
   
    $routeProvider.
    when('/', {
        templateUrl: 'html/index.html'
        // controller: 'HomeController'
    }).
    when('/one', {
        templateUrl: 'html/one.html'
    }).
    when('/two', {
        templateUrl: 'html/two.html'
    }).
    when('/three', {
        templateUrl: 'html/three.html'
    }).
    when('/four', {
        templateUrl: 'html/four.html'
    }).
    when('/five', {
        templateUrl: 'html/five.html'
    }).
    otherwise({
        redirectTo: '/' //重定向回到首页 
    });
})
.run(function(){
// 点击时导航高亮
    var list=$('.list_child')
    list.on('click',function(){
        var list_a=$(this).children('a')
        list_a.css('font-weight','700').parent().siblings().children('a').css('font-weight','normal')
        list_a.children('span').css('visibility','visible').parents('.list_child').siblings().children('a').children('span').css('visibility','hidden')
    })
// 刷新导航保持高亮
    var firstHref = window.location.href.split('#/')[1]
    for(var i=0;i<list.length;i++){
        var list_a=list.eq(i).children('a')
        if(list_a.attr('href').split('#/')[1]==firstHref){
            list_a.css('font-weight','700')
            list_a.children('span').css('visibility','visible')
        }
    }
// 导航隐藏时返回的问题
    $('.list_child').eq(1).click(function(){
        $('nav').hide()
    })
    if(firstHref=='one'){
        $('nav').hide()
    }
    window.addEventListener('hashchange', function(ev){
        var newUrl=ev.newURL.toString();
        if(newUrl.split('#/')[1]=='one'){
             $('nav').hide()
        }
        else{
            // $('nav').show()
            location.reload()
        }
    });
})




 
  



