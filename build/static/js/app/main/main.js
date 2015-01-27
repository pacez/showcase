//实例化应用
var app = angular.module('app',[]);

//定义control
app.controller('control', function($scope) {
  //数据集
  var datasets=[];

  for(var i=0; i<21; i++){
    var item={
      img: 'http://photo.xuefo.net/user/editor5/asp/upload//2014223/13931283537056.jpg',
      name: 'Project Name',
      author: 'Pace Zhong',
      desc: '3岁哪年,我执酒仗剑于江湖...'
    }
    if(i%2==0) {
      item.img='http://d01.res.meilishuo.net/pic/m/35/5c/2cf9e5dbe3296663da1dfc55083e_510_408.jpg';
      item.author="Nancy Liu";
      item.desc="3岁哪年,采蘑菇的我遇到了你..."
    }
    datasets.push(item);
  }
  $scope.datasets=datasets;
});

//指令
app.directive('tmpHeader', function($document) {
  var options={
    templateUrl: '/build/static/template/header.html',
    replace: true
  };
  return options;
});


app.directive('tmpFooter', function() {
  var options={
    templateUrl: '/build/static/template/footer.html',
    replace: true
  };
  return options;
});

app.directive('search', function() {
  var options={
    template: '<input type="text" id="search" ng-model="query"/>',
    replace: true
  };
  return options;
});

app.directive('caseList', function() {
 var html='';
      html+='<div class="case-list">';
        html+='<div class="case" ng-repeat="case in datasets | filter:query">';
          html+='<div><img width="300" height="220" ng-src="{{case.img}}" /></div>';
          html+='<p><b>Project Name:</b> <span ng-bind="case.name"></span></p>';
          html+='<p><b>Author:</b> <span ng-bind="case.author"></span></p>';
          html+='<p><b>description:</b> <span ng-bind="case.desc"></span></p>';
        html+='</div>'
      html+='<div>';

  var options={
      template: html,
      replace: true
  };
  return options;
});
