window.GioiThieuController = function($scope,$routeParams) {
    //routeParams lấy ra object các tham số trên url
    // console.log($routeParams.name);
    // tao ra 1 doi tuong kiemtradulieu 
    $scope.kiemTraDuLieu = {
        ten:false, // chua co loi
        tuoi:false // chua co loi
    };
    $scope.danhsach = [
        {id:1,ten:"Đỗ phương nam",tuoi:19},
        {id:2,ten:"Nguyễn văn thạch",tuoi:20},
    ];
    $scope.onClose = function() {
        //reset lại input
        $scope.inputValue = {
            ten:"",
            tuoi:""
        }
        $scope.editId = 0;
    }
    $scope.onSubmitForm = function() {
        // check validate bỏ trống 
        let flag = false;
        if(!$scope.inputValue || !$scope.inputValue.ten) { // họ tên bỏ trống
            $scope.kiemTraDuLieu.ten = true; //có lỗi
            flag = true;
        }
        if(!$scope.inputValue || !$scope.inputValue.tuoi) { // tuổi bỏ trống
            $scope.kiemTraDuLieu.tuoi = true; //có lỗi
            flag = true;
        }
        // nếu như không có lỗi gì thì xử lý thêm 
        if(!flag) {
            //xử lý sửa 
            let editId = $scope.editId;
            //nếu như tồn tại biến editId thực hiện sửa 
            if(editId) {
                for(let i = 0;i< $scope.danhsach.length;i++) {
                    if($scope.danhsach[i].id == editId) {
                        $scope.danhsach[i].ten = $scope.inputValue.ten;
                        $scope.danhsach[i].tuoi =  $scope.inputValue.tuoi;
                    }
                }
                $scope.onClose();
                return;
            }
            //xử lý thêm 
            let ds = $scope.danhsach;
            //fake id tăng tự động 
            let newId = ds.length > 0 ? ds[ds.length-1].id + 1 : 1;
            //tạo 1 đối tượng để thêm mới vào array
            let newItem = {
                id:newId,
                ten:$scope.inputValue.ten,
                tuoi:$scope.inputValue.tuoi
            };
            //push đối tượng đó vào mảng 
            $scope.danhsach.push(newItem);
            $scope.onClose();
        }
    }
    $scope.onEdit = function(editId) {
        $scope.editId = editId;
        // tạo 1 đối tượng sửa 
        let editItem  = {
            ten:"",
            tuoi:""
        }
        for(let i = 0;i < $scope.danhsach.length;i++) {
            if($scope.danhsach[i].id == editId) {
                editItem.ten = $scope.danhsach[i].ten;
                editItem.tuoi = $scope.danhsach[i].tuoi;
            }
        }
        // bắn thông tin cầng sửa lên form 
        $scope.inputValue = {
            ten:editItem.ten,
            tuoi:editItem.tuoi
        }

    }
}