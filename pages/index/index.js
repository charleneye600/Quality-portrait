//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    msg:[
      {id:1,title:'联系人',desc:"联系人名称"},
      {id:2,title:'联系方式',desc:"1333333333"},
      {id:3,title:'联系地址',desc:"深圳信息职业技术学院科技楼"}
      
      
    ],
    active: 0,
    markers:[
      {
        latitude:22.684003,
        longitude:114.214401,
        iconPath:'/static/map.png',
        width:'30rpx',
        height:'30rpx'
      }
    ]
    
  },
  onLoad: function () {
    wx.cloud.init()
    console.log("云服务初始化成功")
    console.log("云服务函数的调用")
    wx.cloud.callFunction({
      // 云函数名称
      name: 'add',
      // 传给云函数的参数
      data: {
        a: 1,
        b: 2,
      },
      success: function(res) {
        console.log("调用的结果返回");
        console.log(res.result) // 3
      },
      fail: console.error
    })
    // const db = wx.cloud.database()
    // db.collection('user').add({
    //   // data 字段表示需新增的 JSON 数据
    //   data: {
    //     // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
    //     description: "learn cloud database",
    //     due: new Date("2018-09-01"),
    //     tags: [
    //       "cloud",
    //       "database"
    //     ],
    //     // 为待办事项添加一个地理位置（113°E，23°N）
    //     location: new db.Geo.Point(113, 23),
    //     done: false
    //   },
    //   success: function(res) {
    //     // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    //     console.log(res)
    //   }
    // })
    

  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none'
    });
  } 
});
