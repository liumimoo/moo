// pages/driver/index/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timehide:false,
    buttonmess:'到达上车地点',
    endtop:10,
    endheight:200,
    rewardme:'你已行驶500km，请及时保养',
    timelimit:'4分30秒内',
  startplace:'某某区一二三四路物流大厦',
  endplace:'某某区七八九路',
  name:'李先生',
  phonenumber:'138****1453',
  introduce:'打车多，履约多',
  map_width: 380,
  map_height: 500,
  icontop:0,
  },
changetitle:function(){
  var that=this
if(that.data.buttonmess=='到达上车地点')
{
  that.setData({
    timehide: true,
    buttonmess: '已到达 等候乘客上车',
    endheight:that.data.endheight-80,
    endtop: that.data.endtop+30,
  })
}
else if (that.data.buttonmess == '已到达 等候乘客上车')
{
  that.setData({
    timehide: true,
    buttonmess: '乘客上车 行程开始',
  })
}
else if (that.data.buttonmess == '乘客上车 行程开始') {
  that.setData({
    timehide: true,
    buttonmess: '到达目的地',
  })
}
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 获取定位，并把位置标示出来
    app.getLocationInfo(function (locationInfo) {
      console.log('map', locationInfo);
      that.setData({
        longitude: locationInfo.longitude
        , latitude: locationInfo.latitude
        , markers: [
          {
            id: 0
            , iconPath: "../../images/ic_location.png"
            , longitude: locationInfo.longitude
            , latitude: locationInfo.latitude
            , width: 30
            , height: 30
          }
        ]
      })
    })

    //set the width and height
    // 动态设置map的宽和高
    wx.getSystemInfo({
      success: function (res) {
        console.log('getSystemInfo');
        console.log(res.windowWidth);
        console.log(res.windowHeight * 0.9);
        that.setData({
          map_width: res.windowWidth,
          map_height: res.windowHeight*0.65,
          icontop: res.windowHeight * 0.30,
          controls: [
          ]
        })
      }
    })
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