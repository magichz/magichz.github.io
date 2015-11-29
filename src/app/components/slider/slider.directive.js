(function() {
  'use strict';

  angular
    .module('magichzGithubIo')
    .directive('slider', slider);

  /** @ngInject */
  function slider() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/slider/slider.html',
      scope: {
        creationDate: '='
      },
      controller: SliderController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SliderController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
