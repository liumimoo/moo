// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mhide:false,
    thide:true,
    time:10,
    lbcolor:'#EBEBEB',
    tbcolor:'#EBEBEB',
    message:'获取验证码'
  },
  changelogincolor:function(){
    this.setData({
      lbcolor: '#9ac81f'
    })
  },
changecolor:function(e){
if(e.detail.value.length==11)
{
  this.setData({
    tbcolor: '#9ac81f'
  })
}
},
timecount:function(){
  if (this.data.tbcolor == '#9ac81f')
  {
    this.countdown();
  this.setData({
    mhide: true,
    thide: false,
    tbcolor: '#EBEBEB',
  })
 
  }
},
countdown: function () {
  var that = this
  var second = that.data.time
   console.log(second)
  if (second == 0) {
    // console.log("Time Out...");
    that.setData({
      mhide: false,
      thide: true,
    });
    return;
  }
  var timecount = setTimeout(function () {
    that.setData({
      time: second - 1
    });
    that.countdown();
  }
    , 1000)
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
  
  },
  changetopage:function(){
    wx.redirectTo({
      url: '../route/special',
    })
  },
  sendtosignin:function(){
wx.navigateTo({
  url: 'signin/signin',
})
  }
})
