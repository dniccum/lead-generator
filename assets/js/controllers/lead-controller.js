/**
 * @name Lead Controller
 * @param {Object} $scope
 * @param {factory} AJAXService
 */
leadGenerator.controller('LeadController', ['$scope', 'AJAXService', function($scope, AJAXService) {
    $scope.leadForm = {
        firstName: '',
        lastName: '',
        zipCode: '',
        type: '',
        loading: false
    };

    $scope.submitForm = function() {
        $scope.leadForm.loading = true;

        AJAXService.submitLead($scope.leadForm.firstName, $scope.leadForm.lastName, $scope.leadForm.type, $scope.leadForm.zipCode).then(function(success) {
            $scope.showToast(success.data.message, 'green');
            $scope.resetForm();
        }, function(error) {
            $scope.leadForm.loading = false;

            if (typeof error.data === 'string') {
                $scope.showToast(error.data, 'red');
            } else if (typeof error.isArray) {
                for (var i = 0; i < error.length; i++){
                    $scope.showToast(error[i], 'red');
                }
            } else {
                $scope.showToast(error.data.statusText, 'red');
            }
        })
    };

    /**
     * Resets the submission form
     *
     * @name resetForm
     * @return void
     */
    $scope.resetForm = function() {
        $scope.leadForm.firstName = '';
        $scope.leadForm.lastName = '';
        $scope.leadForm.zipCode = '';
        $scope.leadForm.type = '';
        $scope.leadForm.loading = false;
        $scope.leadForm.$setUntouched();
    };

    /**
     * Shows a toast notification
     *
     * @name showToast
     * @param {string} message
     * @param {string} color
     * @return void
     */
    $scope.showToast = function(message, color) {
        var options = {
            message: message,
            messageSize: '15',
            color: color,
            titleColor: 'white',
            messageColor: 'white',
            iconColor: 'white',
            position: 'topRight',
            transitionIn: 'bounceInUp',
            progressBar: false
        };

        return iziToast.show(options);
    };

}]);