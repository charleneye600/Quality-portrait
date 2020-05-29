// component/newCard/newCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:"未传递标题"
    },
    src:{
      type:String,
      value:''
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goTo(){
      console.log("跳转")
      wx.navigateTo({
        url: '../news/news',
      })
    }

  }
})
