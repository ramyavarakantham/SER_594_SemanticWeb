'use strict';

myApp.controller('homeController', ['$scope', '$rootScope', '$http', 'NgTableParams', '$filter', function($scope, $rootScope, $http, NgTableParams, $filter) {

    /*-------------------------------TABLE FUNCTIONALITY-------------------------------*/
    $scope.responseData = {
        "data": [{
                "description": "this is a sample desciprion. thit's it",
                "url": "http//facebook.com",
                "id": "314",
                "intermediate": "abc",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//google.com",
                "id": "315",
                "intermediate": "efg",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//twitter.com",
                "id": "316",
                "intermediate": "argejpo",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//linkedin.com",
                "id": "317",
                "intermediate": "rgeer",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//apple.com",
                "id": "318",
                "intermediate": "4tffwe",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//booking.com",
                "id": "319",
                "intermediate": "ebhgerr",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//xyz.com",
                "id": "320",
                "intermediate": "tweefe",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//amazon.com",
                "id": "321",
                "intermediate": "ktreee",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//flipkart.com",
                "id": "322",
                "intermediate": "wssss",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//facebook.com",
                "id": "323",
                "intermediate": "abc",
                "pk": {
                    "name": "vishnu Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//google.com",
                "id": "324",
                "intermediate": "efg",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//twitter.com",
                "id": "325",
                "intermediate": "argejpo",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//linkedin.com",
                "id": "326",
                "intermediate": "rgeer",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//apple.com",
                "id": "327",
                "intermediate": "4tffwe",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//booking.com",
                "id": "328",
                "intermediate": "ebhgerr",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//xyz.com",
                "id": "329",
                "intermediate": "tweefe",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//amazon.com",
                "id": "330",
                "intermediate": "ktreee",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//flipkart.com",
                "id": "331",
                "intermediate": "wssss",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//facebook.com",
                "id": "332",
                "intermediate": "abc",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//google.com",
                "id": "333",
                "intermediate": "efg",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//twitter.com",
                "id": "334",
                "intermediate": "argejpo",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//linkedin.com",
                "id": "335",
                "intermediate": "rgeer",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//apple.com",
                "id": "336",
                "intermediate": "4tffwe",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//booking.com",
                "id": "337",
                "intermediate": "ebhgerr",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//xyz.com",
                "id": "338",
                "intermediate": "tweefe",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//amazon.com",
                "id": "339",
                "intermediate": "ktreee",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//flipkart.com",
                "id": "340",
                "intermediate": "wssss",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//facebook.com",
                "id": "341",
                "intermediate": "abc",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//google.com",
                "id": "342",
                "intermediate": "efg",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//twitter.com",
                "id": "343",
                "intermediate": "argejpo",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//linkedin.com",
                "id": "344",
                "intermediate": "rgeer",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//apple.com",
                "id": "345",
                "intermediate": "4tffwe",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//booking.com",
                "id": "346",
                "intermediate": "ebhgerr",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//xyz.com",
                "id": "347",
                "intermediate": "tweefe",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//amazon.com",
                "id": "348",
                "intermediate": "ktreee",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//flipkart.com",
                "id": "349",
                "intermediate": "wssss",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//facebook.com",
                "id": "350",
                "intermediate": "abc",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//google.com",
                "id": "351",
                "intermediate": "efg",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//twitter.com",
                "id": "352",
                "intermediate": "argejpo",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//linkedin.com",
                "id": "353",
                "intermediate": "rgeer",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//apple.com",
                "id": "354",
                "intermediate": "4tffwe",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//booking.com",
                "id": "355",
                "intermediate": "ebhgerr",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//xyz.com",
                "id": "356",
                "intermediate": "tweefe",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//amazon.com",
                "id": "357",
                "intermediate": "ktreee",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            },
            {
                "description": "this is a sample desciprion. thit's it",
                "url": "http//flipkart.com",
                "id": "358",
                "intermediate": "wssss",
                "pk": {
                    "name": "Ashish Kumar",
                    "criteria": "criteria-xyz"
                },
                "status": "status-pqr",
                "env": "env-abc"
            }
        ],
        "Status": "200"
    };

    $scope.selectedRows = [];
    $scope.initLoadData = function() {
        $scope.table_data = $scope.responseData.data;
        $scope.loadTable($scope.table_data);
    }

    $scope.loadData = function(id) {
        $scope.selectedRows = [];
        $scope.rule = id;
        var table_data = [];
        var req = {
            method: 'GET',
            url: 'http://localhost:8080/display/' + $scope.rule
        }

        $http(req).then(function(response) {
                $scope.table_data = response.data;
                $scope.loadTable($scope.table_data);
            },
            function(error) {
                alert(error.data.message);
            });
    }

    $scope.loadTable = function(table_data) {
        for (var i in table_data) {
            table_data[i].isChecked = false;
            table_data[i].temp_id = i + 1;
        }
        $scope.setTable();
    }

    $scope.setTable = function(){
    	$scope.data = $scope.searchText ? $filter('filter')($scope.table_data, $scope.searchText) : $scope.table_data;
        $scope.tableParams = new NgTableParams({},{dataset: $scope.data});
    }

    $scope.clearSearch = function(){
    	$scope.searchText = '';
    	$scope.loadTable();
    }

    /*-------------------------------SELECT ROW FUNCTIONALITY-------------------------------*/
    $scope.selectRow = function(rowObj, isChecked) {
        rowObj.isChecked = isChecked;
        var index = $scope.table_data.indexOf(rowObj);

        $scope.table_data[index].isChecked = isChecked;
        if (isChecked) {
            $scope.selectedRows.push(rowObj)
        } else {
            var selectedIndex = $scope.selectedRows.indexOf(rowObj);
            $scope.selectedRows.splice(selectedIndex, 1);
        }
        console.log('Total selected Rows', $scope.selectedRows.length);
    }

    $scope.clearSelectedRow = function() {
        $scope.loadTable($scope.table_data);
        $scope.selectedRows = [];
    }

    /*-------------------------------DELETE FUNCTIONALITY-------------------------------*/
    $scope.deleteRows = function(id) {
        $scope.global_id = id;
        $scope.data_to_be_deleted = angular.copy($scope.selectedRows);
        $scope.data_to_be_deleted.forEach(function(v) {
            delete v.isChecked;
            delete v.temp_id;
        });

        var url = 'http://localhost:8080/display/' + id + '/delete';

        //send this data to api
        console.log('-------DATA TO BE DELETED----------------');
        console.log($scope.data_to_be_deleted);

        $http.post(url, JSON.stringify($scope.data_to_be_deleted)).then(function(response) {
            $scope.loadData($scope.global_id);

        }, function(response) {

            alert("error");
        });


        // run this on success response of delete api
        $('#deleteModal').modal('hide'); // hiding modal
    }

    /*-------------------------------EDIT TABLE FUNCTIONALITY-------------------------------*/
    $scope.initEditTable = function() {
        $scope.isEditing = false;
        $scope.edit_modal_data = angular.copy($scope.selectedRows);
        $scope.edit_modal_data.forEach(function(v) { delete v.isChecked; });
        $scope.orginal_edit_modal_data = angular.copy($scope.edit_modal_data);
    }


    /*-------------------------------EDIT FUNCTIONALITY-------------------------------*/

    $scope.editRows = function() {
        /*WHILE SENDING API DELETE TEMP ID  AS SHOWN BELOW */
        $scope.edit_data_to_be_send = angular.copy($scope.edit_modal_data);
        $scope.edit_data_to_be_send.forEach(function(v) {
            delete v.temp_id;
            delete v.isChecked;
        });
        $scope.orginal_edit_modal_data.forEach(function(v) {
            delete v.temp_id;
            delete v.isChecked;
        });
        /*CALL UPDATE API HERE THEN UPDATE FUNCTION AND MODAL CLOSE */
        var updateRequestWrapper = {};
        updateRequestWrapper["original"] = $scope.orginal_edit_modal_data;
        updateRequestWrapper["updated"] = $scope.edit_data_to_be_send;


        var url = 'http://localhost:8080/display/update';
        $http.post(url, JSON.stringify(updateRequestWrapper)).then(function(response) {},
            function(response) {
                alert(response.data.message);
            });

        $scope.updateFrontEndData();
        $('#editModal').modal('hide');
    }

    $scope.updateFrontEndData = function() {
        for (var i in $scope.edit_modal_data) {
            /*EVALUATING INDEX OF UPDATED DATA IN TABLE DATA USING UNIQUE TEMP_ID */
            var index = $scope.table_data.map(function(e) { return e.temp_id; }).indexOf($scope.edit_modal_data[i].temp_id);

            $scope.table_data[index] = $scope.edit_modal_data[i];
        }
        $scope.loadTable($scope.table_data);
        $scope.edit_modal_data = [];
        $scope.selectedRows = [];
    }



    /*--------------------------------CLONE TABLE FUNCTIONALITY-------------------------*/

    $scope.initCloneTable = function() {
        $scope.isClone = true;
        $scope.clone_modal_data = angular.copy($scope.selectedRows);
        $scope.clone_modal_data.forEach(function(v) {
            delete v.isChecked;
            delete v.temp_id;
        });
        $scope.orginal_clone_modal_data = angular.copy($scope.clone_modal_data);
    }

    $scope.cloneRow = function(index, rowObj) {
        console.log('Row Data');
        console.log(rowObj);
        console.log(index);
        $scope.clone_modal_data.splice(index + 1, 0, JSON.parse(angular.toJson(rowObj)));
        console.log($scope.clone_modal_data);
    }

    $scope.deleteCloneRow = function(index) {
        $scope.clone_modal_data.splice(index, 1);
    }

    $scope.addCloneRows = function() {
        console.log('-------DATA TO BE ADDED USING CLONE MODAL----------------');
        console.log($scope.clone_modal_data);

        /*CALL ADD API HERE (insertmany)*/
        $scope.addFrontEndData($scope.clone_modal_data); // run this on success response of delete api
        $('#cloneModal').modal('hide'); // hiding modal
    }


    /*----------------------------UPDATE ADDED DATA ON UI FUNCTIONALITY-------------------------------*/
    $scope.addFrontEndData = function(array_data) {
        for (var i in array_data) {
            $scope.table_data.push(array_data[i]);
        }
        console.log($scope.table_data);
        $scope.loadTable($scope.table_data);
        $scope.selectedRows = [];
    }


    /*--------------------------------ADD FUNCTIONALITY--------------------------*/
    var emptyRowObject = {
        "description": "",
        "url": "",
        "id": "",
        "intermediate": "",
        "pk": {
            "name": "",
            "criteria": ""
        },
        "status": "",
        "env": "",
        "addnewid": true //by default you are adding id if you can change it to false if you want
    }

    $scope.initAddModal = function() {
        $scope.add_modal_data = [];
        $scope.addRow()
    }

    $scope.addRow = function() {
        $scope.add_modal_data.push(JSON.parse(angular.toJson(emptyRowObject)));
    }

    $scope.deleteRow = function(index) {
        $scope.add_modal_data.splice(index, 1);
    }

    $scope.addRowsOfData = function() {
        console.log('-------DATA TO BE ADDED USING CLONE MODAL----------------');
        console.log($scope.add_modal_data);

        /*CALL ADD API HERE (insertmany)*/
        $scope.addFrontEndData($scope.add_modal_data); // run this on success response of delete api
        $('#addModal').modal('hide'); // hiding modal
    }

}])