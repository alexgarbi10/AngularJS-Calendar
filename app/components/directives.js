var INTEGER_REGEXP = /^\d*$/;
var CODE_REGEXP = /^([A-Z]){2}$/;
var LARGE_CODE_REGEXP = /^([A-Z]){2}(\-){1}([A-Z]){3}$/;

angular.module('myApp.directives',[])

.directive('number', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.number = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue) || INTEGER_REGEXP.test(viewValue)) return true;
        else return false;
      };
    }
  };
})

.directive('code', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.code = function(modelValue, viewValue) {

        if (ctrl.$isEmpty(modelValue)) return true;
        else {
          if (CODE_REGEXP.test(viewValue) || LARGE_CODE_REGEXP.test(viewValue)) {
            var codes = ['AR', 'AO', 'AT', 'AU', 'AW', 'BE', 'BG', 'BO', 'BR', 'CA', 'CH',
                         'CN', 'CO', 'CZ', 'DE', 'DK', 'DO', 'EC', 'ES', 'FR', 'GB', 'GB-ENG',
                         'GB-NIR', 'GB-SCT', 'GB-WLS', 'GR', 'GT', 'HN', 'HR', 'HU', 'ID', 'IE',
                         'IN', 'IL', 'IT', 'KZ', 'LS', 'LU', 'MG', 'MQ', 'MT', 'MU', 'MX', 'MZ',
                         'NL', 'NO', 'PE', 'PK', 'PH', 'PL', 'PR', 'PT', 'PY', 'RE', 'RU', 'SC',
                         'SE', 'SG', 'SI', 'ST', 'SK', 'TR', 'UA', 'US', 'UY', 'VE'];
            var valid = false;
            for (var i = 0; i < codes.length; i++) {
              if (viewValue == codes[i]) valid = true;
            };
            return valid;
          }
          else return false;
        };
      };
    }
  };
});
