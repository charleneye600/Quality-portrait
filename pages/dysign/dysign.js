// pages/dysign/dysign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    number:''

  },
  getUsername(event){
    console.log(event.detail);
    this.setData({
      username:event.detail
    })
  },

  getNumber(event){
    console.log(event.detail);
    this.setData({
      number:event.detail
    })

  },
  getSure(event){
    let username=this.data.username
    let number=this.data.number
    if (number.length<10){
      wx.showToast({
        icon:'none',
        title: '学号不能少于10位',
      })
      return
    }
    wx.showToast({
      title: '登录成功',
      success(res){
        console.log('成功',res);  
      },
      fail(res){
        console.log('失败',res);
        
      }
    })
    wx.cloud.database().collection('user').add({
      data:{
        username:username,
        number:number

      }
    })
    wx.navigateTo({
      url: '../dysignlist/dysignlist',
    })
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