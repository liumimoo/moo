// pages/journey/waitpro/waitpro.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:0,
    startplacead: '',
    endplacead: '',
    odd:'1502',
    remessages:'司机正在赶来，请稍等，大约需要2分钟。',
    licencetitle: '予A-12345',
    drivername: '李师傅',
    carname: '白色*丰田卡罗拉',
    star: '4.9',
    designation: '城市先锋',
    maphide: false,
    hiddenmodalput: true,
    icontop: 400,
    personrole: '普通会员',
    map_width: 380,
    map_height: 500,
    price: 13.00,
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
        url: '../startjourney/startjourney?startplacead=' + startplaceadd + '&endplacead=' + endplaceadd
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
        console.log(res.windowHeight );
        that.setData({
          map_width: res.windowWidth,
          map_height: res.windowHeight,
          icontop: res.windowHeight * 0.60,
          controls: [//{
            // id: 1,
            //   iconPath: '../images/ic_location.png',
            //   position: {
            //     left: res.windowWidth / 2 - 8,
            //     top: res.windowWidth / 2 - 16,
            //     width: 20,
            //     height: 20
            //   },
            //   clickable: true
            // },
            // {
            //   id: 2,
            //   iconPath: '../../images/location.png',
            //   position: {
            //     left: res.windowWidth / 2 + 130,
            //     top: res.windowWidth / 2 + 90,
            //     width: 40,
            //     height: 40
            //   },
            //   clickable: true
            // }
          ]
        })
      }
    })
  },
  //取消定单
  cancelorder: function () {
    this.setData({
      maphide: true,
      hiddenmodalput: false,
    })
  },
  //取消按钮
  cancel: function () {
    this.setData({
      hiddenmodalput: true,
      maphide: false,

      messagehide: false,
      closehide: true,
      timehide: false,
      endtophide: false,

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

  returnback: function () {

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