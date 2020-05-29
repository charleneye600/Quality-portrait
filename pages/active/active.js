// pages/active/active.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
      active:0,
      active1:[
        {
          id:1,
          title:"爱护环境",
          src:"http://img3.imgtn.bdimg.com/it/u=2729782615,1137308420&fm=26&gp=0.jpg",
          url:"/pages/activepage/activepage?id=1"
        },
        {
          id:2,
          title:"关爱留守儿童",
          src:"http://img0.imgtn.bdimg.com/it/u=3636790069,449159105&fm=26&gp=0.jpg",
          url:"/pages/activepage/activepage?id=2&uid=3"
      },

      ],
      active2:[


      ],
      active3:[
        {
          title:"抗疫期间，绘出精彩",
          src:"http://img3.imgtn.bdimg.com/it/u=2001936659,3627078824&fm=26&gp=0.jpg",
          url:"/pages/web/web?src=https://mp.weixin.qq.com/s/45auiI8oe8XhIl3AfMl0Lg"
        },
        {
          title:"师说，特殊时期，平常对待.....",
          src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587720901669&di=d685f5b0c073d8a0c5d0897cf92e4211&imgtype=0&src=http%3A%2F%2Fp1.qhimg.com%2Ft0104cde4883fe01ee1.png",
          url:"/pages/web/web?src=https://mp.weixin.qq.com/s/7TDWz0AF9s3_6U0tGSZceQ"
        },
        {
          title:"师说：疫情下的“静”字诀",
          src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3859008928,1408836571&fm=11&gp=0.jpg",
          url:"/pages/web/web?src=https://mp.weixin.qq.com/s/2Lu1OKnb9INIsekYb5B1lw"
        }
      ]
  
  

  },
  fetchActive(){
    let that=this;
    // 请求还没完成时的加载动画
    wx.showNavigationBarLoading({})
    wx.request({
    
      url:"https://devmp.mdysz.cn/index/party/active",
      // 无论请求是否完成都要结束加载
      complete(){
        wx.hideNavigationBarLoading({}) 

      },
      success(res){
        console.log(res);
        console.log(res.data.data); 
        that.setData({
          active2:res.data.data
        })
        // wx.hideNavigationBarLoading({}) 
      }    
    })
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchActive()

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