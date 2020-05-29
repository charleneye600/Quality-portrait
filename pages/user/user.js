// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score:[
      {name:"全部",
        group:[
        {
          title:"目前总分",
          value:0
        },
        {
          title:"思想先进",
          value:10
        },
        {
          title:"专业过硬",
          value:20
        },
        {
          title:"乐于奉献",
          value:15
        }
      ]},
      {name:"得分",
       group:[]
      },
      {name:"领取",
      group:[
        {
          title:"思想先进",
          value:0
        },
        {
          title:"专业过硬",
          value:0
        },
        {
          title:"乐于奉献",
          value:0
        }
      ]}
    ],
    mune:[
      {
        title:"领取积分",
        icon:'/static/qiang.png',
        url:"/pages/socre/socre"
      },
      {
        title:"积分规则",
        icon:'/static/zuoye.png',
        url:""
      },
      {
        title:"更换头像",
        icon:'/static/touxiang.png',
        url:""
      },
      {
        title:"领取积分",
        icon:'/static/suo.png',
        url:""
      },
      {
        title:"分享肖像",
        icon:'/static/fenxiang.png',
        url:"/pages/share/share"
      },
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})