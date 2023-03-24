window.GioiThieuController = function($scope,$routeParams) {
    //routeParams lấy ra object các tham số trên url
    // console.log($routeParams.name);
    // tao ra 1 doi tuong kiemtradulieu 
    $scope.kiemTraDuLieu = {
        ten:false, // chua co loi
        tuoi:false // chua co loi
    }
    $scope.onSubmitForm = function() {
        // check validate bỏ trống 
    
        if(!$scope.inputValue || !$scope.inputValue.ten) { // họ tên bỏ trống
            $scope.kiemTraDuLieu.ten = true; //có lỗi
        }
        if(!$scope.inputValue || !$scope.inputValue.tuoi) { // tuổi bỏ trống
            $scope.kiemTraDuLieu.tuoi = true; //có lỗi
        }
    }
}