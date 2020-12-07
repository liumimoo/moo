// pages/journey/waitjourney/waitjourney.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startplacead:'',
    endplacead:'',
time:0,
    longitude:'',
    latitude:'',
    maphide:false,
    hiddenmodalput:true,
    icontop:400,
    personrole:'普通会员',
    map_width: 380,
    map_height: 500,
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      startplacead: options.startplacead,
      endplacead: options.endplacead,
    });
    console.log(options.startplacead);
    console.log(options.endplacead);
    this.mapCtx = wx.createMapContext("map4select");
    var that = this;
    that.countdown();
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
          map_height: res.windowHeight ,
          icontop: res.windowHeight*0.70,
        //  controls: [{
        //     id: 1,
        //       iconPath: '../../images/ic_location.png',
        //       position: {
        //         left: res.windowWidth / 2 ,
        //         top: res.windowWidth / 2 ,
        //         width: 20,
        //         height: 20
        //       },
        //       clickable: true
        //     },
        //  ]
        })
      }
    })
  },
  countdown: function () {
    var startplaceadd = this.data.startplacead;
    var endplaceadd = this.data.endplacead;
    var that = this
    var second = that.data.time
    console.log(second)
    if (second == 5) {
      // console.log("Time Out...");
      wx.navigateTo({
        url: '../waitpro/waitpro?startplacead=' + startplaceadd + '&endplacead=' + endplaceadd
      });
      return;
    }
    var timecount = setTimeout(function () {
      that.setData({
        time: second + 1
      });
      that.countdown();
    }
      , 1000)
  },
  //取消定单
  cancelorder:function(){
        this.setData({
          maphide: true,
          hiddenmodalput:false,

    });
  },
  //确认
  confirm: function () {
    this.setData({
      hiddenmodalput: true,
      maphide: false,

      messagehide: false,
      closehide: true,
      timehide: false,
      endtophide: false,
    })
  },

  returnback:function(){

    this.mapCtx.moveToLocation();
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