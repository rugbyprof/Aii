var careTeamApp = angular.module('ct_patientcontrollers',[]);

var controllers = {};

controllers.getPatientDataCtrl = function($scope){
    
    $scope.patients = [
        
        { name: 'Mando Garcia', id: '123456780', careStatus: 'Active', ear: 'Left Ear' },
        { name: 'Travis Osteen', id: '123456781', careStatus: 'Active', ear: 'Left Ear' },
        { name: 'James Rowe', id: '123456782', careStatus: 'Active', ear: 'Right Ear' },
        { name: 'Anne Lam', id: '123456783', careStatus: 'Active', ear: 'Right Ear' },
        { name: 'Sanan Aamir', id: '123456784', careStatus: 'Active', ear: 'Left Ear' }
        
    ];
       
}

careTeamApp.controller(controllers);