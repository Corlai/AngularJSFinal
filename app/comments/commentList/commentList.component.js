(function (angular) {
  'use strict';

  angular
    .module('app.comments')
    .component('commentList', commentList());

  function commentList() {
    var component = {
      templateUrl: 'app/comments/commentList/commentList.component.html',
      controller: CommentListController,
      bindings: {
        comments: '<',
        filter: '<',
        orderBy: '<'
      }
    };
    return component;
  }

  CommentListController.$inject = [
    '$location',
  ];

  function CommentListController($location) {
    var ctrl = this;
    ctrl.viewPostDetails = viewPostDetails;

    function viewPostDetails(postId) {
      $location.path('/posts/' + postId);
    }
  }
})(window.angular);
