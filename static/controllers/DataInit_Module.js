var DBInitModule = angular.module("SoleTrip",[]);

DBInitModule.controller("dataController",
  function ($scope,$http) {
	$scope.database = {
	  name: "init",
	  status: "start"
	};
	
	$scope.planeInited = false;
    $scope.cityInited = false;
    $scope.countryInited = false;
    $scope.hotelInited = false;
    $scope.scenicsInited = false;
    $scope.shopInited = false;
    $scope.userInited = false;
    $scope.planeOrderInited = false;
    $scope.inquireInited = false;
    $scope.bussinessInited = false;
    $scope.priceInited = false;
    $scope.statusInited = false;
    $scope.communicateInited = false;
    $scope.evaluationInited = false;
    $scope.complainInited = false;
	$scope.statusLogInited = false;
	
	$scope.initPlane = function() {
	  $scope.database.name = "init Plane database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/Plane',
         data: {
		   'plane_id' : 'CA4187',          // 航班号
		   'company_name':'china',         // 航空公司名字
		   'plane_status':'on-going',      // 航班状态(StatusID)
		   'departure_city':'cheng du',    // 起飞城市ID
		   'departure_time':'0715',        // 起飞时间
		   'departure_airport':"shuanliu international", // 起飞机场名字
		   'landing_city':"tian jing",     // 到达城市ID
		   'landing_time':'0950',          // 到达时间
		   'landing_airport':'binghai international', // 到达机场名字
		   'status':'checking'             // 航班在系统中的状态(StatusID): new,checking,normal,phase out. 
		 },  // pass in data as strings
         headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.planeInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }
	
	$scope.initCity = function() {
	  $scope.database.name = "init City database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/City',
         data: {
		   'cn_name':'Chinese Name', // 中文名字
		   'en_name':'English Name', // 英文名字
		   'first_name':'test',      //  
           'second_name':'test',     //
           'local_name':'test',      //
		   'longitude':'0',          // 经度
           'latitude':'0',           // 纬度
           'hot':'true',              //热门城市
           'cn_overview':'test chinese overview ', //  城市概要介绍（中文）
           'en_overview':'test english overview ', //城市概要介绍（英文）
           'country_id':'45343543'                 // Country object id.
		 },  // pass in data as strings
         headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.cityInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }
	
    $scope.initCountry = function() {
	  $scope.database.name = "init Country database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/Country',
         data: {
		  'cn_name':'Chinese name',  // 中文名称
          'en_name':'English name',  // 英文名称
          'city_count':'9',          // 国家拥有多少城市
          'hot':'true',               //热门国家 
          'last_update':'2015-11-18 21:50:50', 
		  'continent_cn_name':'Eur', // 中文名称
          'continent_en_name':'Eur'  // 英文名称
		 },  // pass in data as strings
         headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.countryInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }
	
    $scope.initHotel = function() {
	  $scope.database.name = "init Hotel database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/Hotel',
         data: {
			 'cn_name':'Chinese name',  // 
             'en_name':'English name',  //
             'longitude':'0',           // 经度
             'latitude':'0',            // 纬度
             'address':'China CD',      // 地址
             'cn_introduction':'test',  // 酒店介绍（中文）
             'en_introduction':'test',  // 酒店介绍（英文）
             'phonenum':'0',            // 电话1
             'website':'www.test.com',  // 酒店主页
             'hot':'true',              // 是否热门酒店
             'grade':'0',               // 星级1）经济，2）3星，3）4星，4）5星
             'grade_desc':'test',       // 
			 'device':'test',           // 酒店设备提供1）wifi 0x01 2）暖气 0x02 3）空调 0x04 4）……多选项，依赖于数据库位操作
             'device_desc':'test',      //  
             'area':'test',             // 所在区域 1）市区以内 2）郊区周边 3）……
             'area_desc':'test',        // 区域说明
             'city_id':'test',          // 
             'company_id':'test',       // 
             'type_id':'test'           //  
		 },  // pass in data as strings
         headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.hotelInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }
	
    $scope.initScenics = function() {
	  $scope.database.name = "init Scenics database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/Scenics',
         data: {
			'cn_name':'Chinese name',          // 中文名字
            'en_name':'English name',          // 英文名字
            'first_name':'test',               //
            'second_name':'test',              //  
            'local_name':'test',               //  
            'cn_overview':'test',              // 景点概要介绍（中文）
            'en_overview':'test',              // 景点概要介绍（英文）
            'longitude':'0',                   // 经度
            'latitude':'0',                    // 纬度
            'address':'www.test.com',          // 地址
            'cn_introduction':'test',          // 景点介绍
            'en_introduction':'test',          //
            'business_hours':'test',           // 营业时间介绍（中文）
            'notice':'test',                   // 注意事项
            'phonenum':'test',                 // 电话
            'website':'test',                  //
            'grade_index':'1',                 // 景点等级
            'cn_grade_desc':'test',            // 景点等级描述（中文）
            'en_grade_desc':'test',            // 景点等级描述（英文）
            'hot':'true',                      // 是否为热门景点
            'spot_type':'test',                // 景点归类，比如 1）人文， 2）自然 3）……多选项，依赖于位操作
            'city_id':'test',                  //
	        'ticket_detail_info':'test',       // 门票说明
            'ticket_price':'test',             // 价格
            'money_type_id':'test'             //  
		 },  // pass in data as strings
         headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.scenicsInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }
	
    $scope.initShop = function() {
	  $scope.database.name = "init Shop database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/Shop',
         data: {
			'cn_name':'Chinese name',    //
            'en_name':'English name',    //
            'longitude':'0',             // 经度
            'latitude':'0',              // 纬度
            'address':'test',            // 地址
            'cn_introduction':'test',    // 餐厅介绍（中文）
            'en_introduction':'test',    // 餐厅介绍（英文）
            'phonenum':'0',              // 电话
            'website':'www.test.com',    // 餐厅主页
            'hot':'true',                // 是否热门
            'area':'test',               // 所在区域
            'area_desc':'test',          // 区域说明
            'type':'test',               // 购物类型
            'city_id':'test',            //
            'company_id':'test'          //
		 },  // pass in data as strings
         headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.shopInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }
	
    $scope.initUser = function() {
	  $scope.database.name = "init User database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/User2',
         data: {
			 'cn_name':'Chinese name'    //
		 },  // pass in data as strings
         headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.userInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }

    $scope.initPlaneOrder = function() {
	  $scope.database.name = "init PlaneOrder database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/PlaneOrder',
         data: {
		    'type':'0',               // 0.接机 1.送机
		    'order_user':'tester',    //
			'plane_id':'5398539',     // 'plane_object_id'
			'destination':'test',     // '国家、城市、酒店'
			'hotel':'test',           // (可选) id (前期填名字、可搜索)
			'adult':'0',              // '成人人数'
			'chrildren':'0',          // '小孩人数'
			'triffic_type':'test',    // '车型'
			'triffic_count':'0',      // '车辆数'
			'order_status':'test',    // 'status id'
			'hander':'test'           // 跟单同仁			
		 },  // pass in data as strings
         headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.planeOrderInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }
	
    $scope.initInquireOrder = function() {
	  $scope.database.name = "init InquireOrder database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/InquireOrder',
         data: {
			'type':'0',                 // '0纯导 1纯车 2车兼导 3车和导‘
            'order_user':'test',        // 'user_id'
			'sub_inqire':'test',        // 'file link'
			'order_name':'test',        //
            'destination_list':'test',  // 'ladon#pairs#...'
			'checkout_time':'2015-10-18 21:00:00',  // '出发时间'
			'flight_id':'CA4187',       // '航班号'
			'night_count':'7',          // '几个夜晚，默认与白天相同'
			'day_count':'6',            // '天数（白天）'
			'adute':'0',                // 成人人数
			'chrildren':'0',            //
			'triffic_type':'test',      // '车型'
			'triffic_count':'0',        // 
			'transfered_mail':'test',   //
			'vailabe_time':'0',         //
			'handler':'test',           //
			'auto_triffic':'0',         // '0否 1是'
		    'order_status':'122888'     // 'status'
		 },  // pass in data as strings
      headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.inquireInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }
	
	$scope.initSubInquireOrder = function() {
	  $scope.database.name = "init SubInquireOrder database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/SubInquireOrder',
         data: {
			'type':'0',                 // '0纯导 1纯车 2车兼导 3车和导‘
            'inquired_id':'test',        // 'user_id'
			'order_file_path':'test',   // 'file link'
			'type_name':'test',        //
            'destination_list':'test',  // 'ladon#pairs#...'
			'vailabe_time':'0',         //  有效时间
			'handler':'test',           //
			'auto_triffic':'0',         // '0否 1是'
			'auto_index':'0',           // '顺序'
		    'order_status':'122888'     // 'status'
		 },  // pass in data as strings
      headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.subInquireInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }

    $scope.initBusinessOrder = function() {
	  $scope.database.name = "init BusinessOrder database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/BusinessOrder',
         data: {
			'price_order_id':'1234567',   //'询价单号'
			'order_user':'test',          //
			'res_user':'test',            // 资源方User
		    'total_price':'1000',         //
			'status':'1242525',           //
			'pre_pay':'200',              //
			'cheek_out_time':'2015-11-18 21:55:50',      //
			'pre_pay_time':'2015-10-18 21:55:50',        //
			'pay_time':'2015-11-10 21:55:50',            //
			'adute':'0',                                 //
			'chrildren':'0',                             //
			'im_id':'14443434',                          //
			'totaltime':'8',                             //
			'hander':'66666'                             //
		 },  // pass in data as strings
         headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.bussinessInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }
	
    $scope.initPriceList = function() {
	  $scope.database.name = "init PriceList database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/PriceList',
         data: {
			'order_id':'0',       // '询价单号'
			'user_id':'5678',     // 'userid'
			'price':'0',          // 数字
			'status':'6789',      // '状态'
			'push_time':'2015-11-18 21:55:50',    // 推送时间
			'vailabe_time':'2015-11-18 21:55:50', // 有效时间
			'price_time':'2015-11-18 21:55:50',   // 生成订单时间
			'im_id':'4567'                        // 聊天信息ID
		 },  // pass in data as strings
         headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.priceInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }
	
    $scope.initStatusMachine = function() {
	  $scope.database.name = "init StatusMachine database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/StatusMachine',
         data: {
			'status_id':'1234',          //
			'pre_id':'2345',             //
			'next_id':'4567',            //
			'status_name':'Checking',    //
			'business_type':'PriceList', //
			'need_check':'true',         //
			'check_person':'res_user'    // 
		 },  // pass in data as strings
         headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.statusInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }
	
    $scope.initCommunication = function() {
	  $scope.database.name = "init Communication database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/Communication',
         data: {
			'order_id':'Object id', //
			'user_id':'test',       //
			'message':'test',       //
			'create_time':'0'       //
		 },  // pass in data as strings
         headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.communicateInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }

    $scope.initEvaluation = function() {
	  $scope.database.name = "init Evaluation database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/Evaluation',
         data: {
			'bussness_id':'1234',     //
			'res_user':'2345',        //
			'order_user':'6789',      //
			'stars':'5',              //
			'comments':'good',        //
			'sen_star':'5',           //
			'attitade_star':'5',     //
			'meal_star':'5'           //
		 },  // pass in data as strings
         headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.evaluationInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }
	
    $scope.initComplain = function() {
	  $scope.database.name = "init Complain database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/Complain',
         data: {
			'business_id':'1234',         //
			'complain_user':'4567',       //
			'user':'6789',                //
			'complain_type':'attitade',   //
			'comments':'bad',             //
			'statas':'waiting',           //
			'handler':'test'              //
		 },  // pass in data as strings
         headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.complainInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }
	
	$scope.initStatusLog = function() {
	  $scope.database.name = "init StatusLog database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/StatusLog',
         data: {
			'order_id':'1234',         //
			'old_status':'4567',       //
			'new_status':'6789',       //
			'handler':'4567'           //
		 },  // pass in data as strings
         headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.statusLogInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }
	
	$scope.initTypes = function() {
	  $scope.database.name = "init Types database";
	  $scope.database.status = "starting......";
	  return $http({
         method: 'POST',
         url:'https://api.leancloud.cn/1.1/classes/Types',
         data: {
			'type_id':'1234',         //
			'status':'4567',       //
			'name':'Triffic',       //
			'handler':'4567'           //
		 },  // pass in data as strings
         headers : { 'Content-Type': 'application/json', 'X-LC-Id':'M0fpy60YKxsgnfHnwktJxyey','X-LC-Sign':'85066a9c2461a5a1b60a3fb4ce0ac34d,1898215632566' }
         }).success(function(){
         $scope.database.status = "success";
		 $scope.statusTypesInited = true;
     }).error(function(){
         $scope.database.status = "fail";
     })
    }

  }
);