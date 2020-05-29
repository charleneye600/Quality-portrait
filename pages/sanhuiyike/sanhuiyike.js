// pages/sanhuiyike/sanhuiyike.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    location:"",
    time:"",
    content:"",
    show:false,
    minHour: 10,
    maxHour: 20,
    minDate: new Date().getTime(),
    maxDate: new Date(2020, 10, 1).getTime(),
    currentDate: new Date().getTime()  //获取选择的时间

  },
  afterRead(event){
    const {file} = event.detail
    console.log(file);
    wx.cloud.uploadFile({
      //指定上传的云路径
      cloudPath:'aa/myphoto.png',
      filePath:file.path,
      sucess:res=>{
        console.log("上传成功",res); 
      },
      fail:err=>{
        console.log("上传失败",err);
        
      }

    })
    

  },
  //从数据库获取数据
  selectAllData(){
    let db=wx.cloud.database().collection('score_item')
    db.where({
      _openid:'111'
    }).get().then(res=>{
      console.log(res.data);
      res.data.map((value,index)=>{
        console.log(`数组下标${index}`);
        console.log("数组的值");
        console.log(value);     
      })
    })
  },
  //控制弹出窗
  showPopup() {
    this.setData({ show: !this.data.show});
  }, 
    // 时间格式化
    formatDateTime(inputTime) {
      let date = new Date(inputTime);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    },
    //点击确定按钮时，弹出框消失，并把格式化的时间戳，在时间输入框显示出来
    oncureentTime(event){
    let cureentTime=event.detail
    let cureentDatetime = this.formatDateTime(cureentTime)
    this.setData({
      time:cureentDatetime,
      show:false
    });
  },
  //时间选择
  onInput(event) {
    this.setData({
      currentDate: event.detail
    });
  },
  save(){
    console.log("data=")
    console.log(this.data)
    this.selectAllData()
    let scoreFormItem=this.data;
    // console.log(scoreFormItem);
    
    //初始化连接到数据库
    const db = wx.cloud.database()
    //获取到集合到名称操作对象，选择数据库
    let scoreItem = db.collection('score_item')
    //添加
    scoreItem.add({
      data:{
        'name':"自主学习",
        'Form':scoreFormItem
      }
    }).then(res=>{
      console.log(`插入的结果${res._id}`);  
    })
    
  },

  onChange(event){
    console.log(event.detail);
    this.setData({
      "username":event.detail
    })
  },
  onLocationChange(event){
    console.log(event.detail);
    this.setData({
      "location":event.detail
    })
  },
  onContentChange(event){
    console.log(event.detail);
    this.setData({
      "content":event.detail
    })
  },
  onClose() {
    this.setData({ show: false });
  },
  onTime() {
    this.setData({ show: true });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail)
    });
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