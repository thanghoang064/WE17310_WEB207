var app = angular.module("myapp",[]);
// map demoController với hàm myFunc để xử lý render dữ liệu ra
//viết tắt
app.controller("infoController",function ($scope) {
    // $scope.name = "Nguyễn văn a";
    // $scope.age = 19;
    // $scope.phone = "099992392";
        $scope.info = [{
            name:"nguyễn văn a",
            age: 20,
            phone:"099292929"
        },
        {
            name:"nguyễn văn b",
            age: 30,
            phone:"030303003"
        },
        {
            name:"nguyễn văn c",
            age: 30,
            phone:"030303003"
        }
        ];
        $scope.sayHello = function() {
            $scope.hihi = ($scope.gioitinh == 1) ? "Nam" : "Nữ";
        }
        $scope.count = 0;
        $scope.myMouse = function() {
            $scope.count ++;
        }
})