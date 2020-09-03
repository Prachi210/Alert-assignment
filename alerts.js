var app = angular.module("alertsApp",
		[ "ui.grid","ui.grid", "ui.grid.autoResize","ui.grid.pagination","ui.grid.resizeColumns","ui.grid.moveColumns","ui.grid.pinning","ui.grid.selection", "ui.grid.exporter","ui.grid.grouping"]);
app
		.controller(
				'alertsCtrl',
				[
						'$scope','uiGridConstants','uiGridGroupingConstants',
						'$http','$window', function($scope, uiGridConstants,uiGridGroupingConstants,$http, $window) {
							
							$scope.refs = ["Sam X Willos", "Tony Christie", "Andry Anthony"];
							$scope.alertDtls= {};
							
							$scope.pushData = function(alertDtls ){ 
								$scope.nameListGridData.data = [];
								$scope.nameData.push($scope.alertDtls);
								$scope.nameListGridData.data = $scope.nameData;
							}
							
							$scope.deleteName = function(){
								$scope.nameListGridData.data = [];
								$scope.nameData.pop();
								console.log($scope.nameData);
								$scope.nameListGridData.data = $scope.nameData;
							}
							
							$scope.delete = function(row){
								 $window.alert("Cant be deleted");
							}
							
							$scope.edit = function(row){
								 $window.alert("No edits allowed ");
							}
							
							$scope.close = function(){		
								$window. close();				
							}
							
							 $scope.nameData = [ 
{
										name :' Andrews Phillips',
										description : 'Contrary to popular belief',
										ref : 'Sam X Willos'
}, 
{
										name : 'Quique',
										description : 'Quisque lacinia ante tempror leo',
										ref : 'Andry Anthony'
},
{
										name : 'Miller Jessica',
										description : 'Many Desktop Publishing Packages',
										ref : 'Tony Christie'
},
{
										name :' Andrews Phillips',
										description : 'Contrary to popular belief',
										ref : 'Sam X Willos'
}, 
{
										name : 'Quique',
										description : 'Quisque lacinia ante tempror leo',
										ref : 'Andry Anthony'
},
{
										name : 'Miller Jessica',
										description : 'Many Desktop Publishing Packages',
										ref : 'Tony Christie'
},
{
										name :' Andrews Phillips',
										description : 'Contrary to popular belief',
										ref : 'Sam X Willos'
}, 
{
										name : 'Quique',
										description : 'Quisque lacinia ante tempror leo',
										ref : 'Andry Anthony'
},
{
										name : 'Miller Jessica',
										description : 'Many Desktop Publishing Packages',
										ref : 'Tony Christie'
},
{
										name :' Andrews Phillips',
										description : 'Contrary to popular belief',
										ref : 'Sam X Willos'
}, 
{
										name : 'Quique',
										description : 'Quisque lacinia ante tempror leo',
										ref : 'Andry Anthony'
},
{
										name : 'Miller Jessica',
										description : 'Many Desktop Publishing Packages',
										ref : 'Tony Christie'
},
{
										name :' Andrews Phillips',
										description : 'Contrary to popular belief',
										ref : 'Sam X Willos'
}, 
{
										name : 'Quique',
										description : 'Quisque lacinia ante tempror leo',
										ref : 'Andry Anthony'
},
{
										name : 'Miller Jessica',
										description : 'Many Desktop Publishing Packages',
										ref : 'Tony Christie'
},
{
										name :' Andrews Phillips',
										description : 'Contrary to popular belief',
										ref : 'Sam X Willos'
}, 
{
										name : 'Quique',
										description : 'Quisque lacinia ante tempror leo',
										ref : 'Andry Anthony'
},
{
										name : 'Miller Jessica',
										description : 'Many Desktop Publishing Packages',
										ref : 'Tony Christie'
},
{
										name :' Andrews Phillips',
										description : 'Contrary to popular belief',
										ref : 'Sam X Willos'
}, 
{
										name : 'Quique',
										description : 'Quisque lacinia ante tempror leo',
										ref : 'Andry Anthony'
},
{
										name : 'Miller Jessica',
										description : 'Many Desktop Publishing Packages',
										ref : 'Tony Christie'
},
{
										name :' Andrews Phillips',
										description : 'Contrary to popular belief',
										ref : 'Sam X Willos'
}, 
{
										name : 'Quique',
										description : 'Quisque lacinia ante tempror leo',
										ref : 'Andry Anthony'
},
{
										name : 'Miller Jessica',
										description : 'Many Desktop Publishing Packages',
										ref : 'Tony Christie'
},
{
										name :' Andrews Phillips',
										description : 'Contrary to popular belief',
										ref : 'Sam X Willos'
}, 
{
										name : 'Quique',
										description : 'Quisque lacinia ante tempror leo',
										ref : 'Andry Anthony'
},
{
										name : 'Miller Jessica',
										description : 'Many Desktop Publishing Packages',
										ref : 'Tony Christie'
},
{
										name :' Andrews Phillips',
										description : 'Contrary to popular belief',
										ref : 'Sam X Willos'
}, 
{
										name : 'Quique',
										description : 'Quisque lacinia ante tempror leo',
										ref : 'Andry Anthony'
},
{
										name : 'Miller Jessica',
										description : 'Many Desktop Publishing Packages',
										ref : 'Tony Christie'
									} ];
										
										$scope.testData = [
										{
										test :' Andrews Phillips',
										type : 'Contrary to popular belief',
										frequency : 'Sam X Willos',ref : 'XYZ' }, 
{
										test : 'Quique',
										type : 'Quisque lacinia ante tempror leo',
										frequency : 'Andry Anthony',ref : 'XYZ' },
{
										test : 'Miller Jessica',
										type : 'Many Desktop Publishing Packages',
										frequency : 'Tony Christie',ref : 'XYZ' },
{
										test :' Andrews Phillips',
										type : 'Contrary to popular belief',
										frequency : 'Sam X Willos',ref : 'XYZ' }, 
{
										test : 'Quique',
										type : 'Quisque lacinia ante tempror leo',
										frequency : 'Andry Anthony',ref : 'XYZ' },
{
										test : 'Miller Jessica',
										type : 'Many Desktop Publishing Packages',
										frequency : 'Tony Christie',ref : 'XYZ' },
{
										test :' Andrews Phillips',
										type : 'Contrary to popular belief',
										frequency : 'Sam X Willos',ref : 'XYZ' }, 
{
										test : 'Quique',
										type : 'Quisque lacinia ante tempror leo',
										frequency : 'Andry Anthony',ref : 'XYZ' },
{
										test : 'Miller Jessica',
										type : 'Many Desktop Publishing Packages',
										frequency : 'Tony Christie',ref : 'XYZ' },
{
										test :' Andrews Phillips',
										type : 'Contrary to popular belief',
										frequency : 'Sam X Willos',ref : 'XYZ' }, 
{
										test : 'Quique',
										type : 'Quisque lacinia ante tempror leo',
										frequency : 'Andry Anthony',ref : 'XYZ' },
{
										test : 'Miller Jessica',
										type : 'Many Desktop Publishing Packages',
										frequency : 'Tony Christie',ref : 'XYZ' },
{
										test :' Andrews Phillips',
										type : 'Contrary to popular belief',
										frequency : 'Sam X Willos',ref : 'XYZ' }, 
{
										test : 'Quique',
										type : 'Quisque lacinia ante tempror leo',
										frequency : 'Andry Anthony',ref : 'XYZ' },
{
										test : 'Miller Jessica',
										type : 'Many Desktop Publishing Packages',
										frequency : 'Tony Christie',ref : 'XYZ' },
{
										test :' Andrews Phillips',
										type : 'Contrary to popular belief',
										frequency : 'Sam X Willos',ref : 'XYZ' }, 
{
										test : 'Quique',
										type : 'Quisque lacinia ante tempror leo',
										frequency : 'Andry Anthony',ref : 'XYZ' },
{
										test : 'Miller Jessica',
										type : 'Many Desktop Publishing Packages',
										frequency : 'Tony Christie',ref : 'XYZ' },
{
										test :' Andrews Phillips',
										type : 'Contrary to popular belief',
										frequency : 'Sam X Willos',ref : 'XYZ' }, 
{
										test : 'Quique',
										type : 'Quisque lacinia ante tempror leo',
										frequency : 'Andry Anthony',ref : 'XYZ' },
{
										test : 'Miller Jessica',
										type : 'Many Desktop Publishing Packages',
										frequency : 'Tony Christie',ref : 'XYZ' },
{
										test :' Andrews Phillips',
										type : 'Contrary to popular belief',
										frequency : 'Sam X Willos',ref : 'XYZ' }, 
{
										test : 'Quique',
										type : 'Quisque lacinia ante tempror leo',
										frequency : 'Andry Anthony',ref : 'XYZ' },
{
										test : 'Miller Jessica',
										type : 'Many Desktop Publishing Packages',
										frequency : 'Tony Christie',ref : 'XYZ' },
{
										test :' Andrews Phillips',
										type : 'Contrary to popular belief',
										frequency : 'Sam X Willos',ref : 'XYZ' }, 
{
										test : 'Quique',
										type : 'Quisque lacinia ante tempror leo',
										frequency : 'Andry Anthony',ref : 'XYZ' },
{
										test : 'Miller Jessica',
										type : 'Many Desktop Publishing Packages',
										frequency : 'Tony Christie',ref : 'XYZ' },
{
										test :' Andrews Phillips',
										type : 'Contrary to popular belief',
										frequency : 'Sam X Willos',ref : 'XYZ' }, 
{
										test : 'Quique',
										type : 'Quisque lacinia ante tempror leo',
										frequency : 'Andry Anthony',ref : 'XYZ' },
{
										test : 'Miller Jessica',
										type : 'Many Desktop Publishing Packages',
										frequency : 'Tony Christie'
									} 
										];
										$scope.nameListGridData ={
											data:  $scope.nameData,
											enableFiltering : true,
								paginationPageSizes : [ 25, 150, 75 ],
								paginationPageSize : 25,
								enableColumnResizing : true,
								enableGridMenu : true,
								showGridFooter : true,
								showColumnFooter : true,
								enableCellEditOnFocus : false,
								enableSelectAll : true,
								enableFiltering : false,
								columnDefs : [
										{
											field : 'name',
											displayName : 'Name',
											width : 150,
											visible : true
										},
										
										{
											field : 'description',
											displayName : 'Description',
											width : 250,
											visible : true
										},
										{
											field : 'ref',
											displayName : 'Web Reference',
											width : 180,
											visible : true
										},]
										};

						$scope.testListGridData ={
								data:  $scope.testData,
								enableFiltering : true,
								paginationPageSizes : [ 25, 150, 75 ],
								paginationPageSize : 25,
								enableColumnResizing : true,
								enableGridMenu : true,
								showGridFooter : false,
								enableCellEditOnFocus : false,
								enableSelectAll : true,
								enableFiltering : false,
								columnDefs : [
										{
											field : 'test',
											displayName : 'Test',
											width : 150,
											visible : true
										},
										{
											field : 'type',
											displayName : 'Type',
											width : 150,
											visible : true
										},
										{
											field : 'frequency',
											displayName : 'Frequency',
											width : 150,
											visible : true
										},
										{
											field : 'ref',
											displayName : 'Web Reference',
											width : 150,
											visible : true
										},
										{
											field : 'action',
											displayName : 'Action ',
											width : 150,
											visible : true,
											cellTemplate : '<div  class="ui-grid-cell-contents">'
												+ '<a  	class="btn btn-primary"'
												+ 'ng-click="grid.appScope.delete(row.entity)">'
												+ 'X</a>' 
												+ '<a  	class="btn btn-primary"'
												+ 'ng-click="grid.appScope.edit(row.entity)">'
												+ '/</a>' + '</div>'
										},
						]
										};

						} ]);