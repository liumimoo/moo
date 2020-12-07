var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icontop: 400,
    currentTabhide:false,
    maphides:false,
    selectdate:'7月9日',
    futuresethide:true,
    startplaceaddress:'',
    endplaceaddress:'',
    selectplace:'请输入上车地点',
    maphide:false,
    hiddenmodalput:true,
    endtophide:false,
    selectcartopheight:400,
    closehide:true,
    sendcolor:'#CFE39B',
    takecolor:'white',
    cartopheight:300,
    peoplenum:1,
    owntitle:'送车上门',
    selecttime:' 9：30',
    messageendheight:80,
    timehide:true,
    personrole: '普通会员',
    startplace: '起点',
    endplace: '您到哪下车',
    timetopheight: 300,
    topheight: 400,
    specialcarhide: false,
    messagehide: true,
    ncolor: 'black',
    fcolor: 'grey',
    carmoney: 56,
    navbar: ['专车', '自驾出租', '顺风车'],
    currentTab: 0,
    map_width: 380,
    map_height: 500,
    specialheight: 300,
  },
  test:function(e){
console.log(e)
  },
  //专车时间设置
  changeperson: function (e) {
    //设置事件
    this.setData({
      //给当前time进行赋值
      maphides: true,
      futuresethide: false,

    })
  },
  bindTimeChangeperson: function (e) {
    //设置事件
    this.setData({
      //给当前time进行赋值
      selecttime: e.detail.value,
      maphides: false,
      futuresethide: true,
      ncolor: 'grey',
      fcolor: 'black',
      timehide: false,
      messageendheight: 120,
    })
  },
  bindTimeChangeto: function (e) {
    //设置事件
    this.setData({
      //给当前time进行赋值
      maphides: true,
      futuresethide: false,
    })
  },

  bindTimeChangedate: function (e) {
    //设置事件
    this.setData({
      //给当前time进行赋值
      selectdate: e.detail.value,
    })
  },
  bindTimeChange: function (e) {
    //设置事件
    this.setData({
      //给当前time进行赋值
      selecttime: e.detail.value,
      maphides: false,
      futuresethide: true,
    })
  },
  //选择地点
  selectplace:function(){
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        that.setData({
          selectplace: res.address,
        })
        console.log(res);
      },
    })
  },
  //选择起点
  choosestartplace:function(){
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        that.setData({
          startplace: res.address,
          startplaceaddress: res.longitude+',' +res.latitude,
        })
        console.log(res);
      },
    })
  },
  //选择终点
  chooseendplace: function () {
    var that=this;
    wx.chooseLocation({
      success: function (res) {
        that.setData({
          endplace: res.address,
          endplaceaddress: res.longitude + ',' + res.latitude,
        })
        console.log(res);
        if(that.data.startplace!='起点')
        {
          that.setData({
            specialcarhide: true,
            messagehide: false,
          })
        }
      },
    })
  },
  //转到选择起点终点
  changeto: function () {
    var startplaceadd=this.data.startplaceaddress;
    var endplaceadd = this.data.endplaceaddress;
    wx.navigateTo({
      url: '../journey/waitjourney/waitjourney?startplacead='+startplaceadd+'&endplacead='+endplaceadd
    })
  },
  //现在的格式
  futurestyle:function(){
    this.setData({
      timetopheight:this.data.timetopheight-50,
      ncolor: 'grey',
      fcolor: 'black',
      timehide: false,
      messageendheight: 120,
    })
  },
  //预约的格式
  nowstyle: function () {
    this.setData({
      timetopheight: this.data.timetopheight+50,
      ncolor: 'black',
      fcolor: 'grey',
      timehide: true,
      messageendheight: 80,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.mapCtx = wx.createMapContext("map4select");
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
            , iconPath: "../images/ic_location.png"
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
          map_height: res.windowHeight * 0.9,
          specialheight: res.windowHeight * 0.5,
          topheight: res.windowHeight * 0.63,
          timetopheight: res.windowHeight * 0.63,
          cartopheight: res.windowHeight * 0.53,
          selectcartopheight: res.windowHeight * 0.63,
          icontop: res.windowHeight * 0.45,
            controls: [
          //    {
          //    id: 1,
          //      iconPath: '../images/ic_location.png',
          //      position: {
          //        left: res.windowWidth / 2 - 8,
          //        top: res.windowWidth / 2 - 16,
          //        width: 20,
          //        height: 20
          //      },
          //      clickable: true
          //   },
            // {
            //   id: 2,
            //   iconPath: '../images/location.png',
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
  topersonal: function () {
    wx.navigateTo({
      url: '../personal/personal'
    })
  },
  sendcar:function(){
    this.setData({
      sendcolor: '#CFE39B',
      takecolor: 'white',
      owntitle:'送车上门',
      messagehide: false,
      closehide: true,

      specialcarhide: false,
      closehide: true,
      timehide: false,
      endtophide: false,
    })
  },
  takecar: function () {
    this.setData({
      sendcolor: 'white',
      takecolor: '#CFE39B',
      owntitle: '立即取车',
      messagehide: false,
      closehide: true,

      specialcarhide: false,
      closehide: true,
      timehide: false,
      endtophide: false,
    })
  },
  changetitle:function(){
         if(this.data.owntitle=='送车上门')
         {
           this.setData({
             specialcarhide:true,
             closehide:false,
             timehide:true,
             endtophide:true,
           })
         }
         else if (this.data.owntitle == '立即取车')
          {
      this.setData({
        maphide: true,
        hiddenmodalput: !this.data.hiddenmodalput,


        specialcarhide: false,
        closehide: true,
        timehide: false,
        endtophide: false,
      })
    }
  
  },
  //取消按钮
  cancel: function () {
    this.setData({
      hiddenmodalput: true,
      maphide: false,

      specialcarhide: false,
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

      specialcarhide: false,
      closehide: true,
      timehide: false,
      endtophide: false,
    })
  },

  returnback: function () {

    this.mapCtx.moveToLocation();
  },

  tendtoclass:function(){
    this.setData({
    
      specialcarhide: true,
      messagehide: false,
  
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

  },
  // , regionchange(e) {
  //   // 地图发生变化的时候，获取中间点，也就是用户选择的位置
  //   if (e.type == 'end') {
  //     this.getLngLat()
  //   }
  // }
  // , markertap(e) {
  //   console.log(e)
  // },
  navbarTap: function (e) {
    if (e.currentTarget.dataset.idx==1)
    {
      wx.redirectTo({
        url: '../peroncar/personcar',
      })
    }
    else if (e.currentTarget.dataset.idx == 2) {
      wx.redirectTo({
        url: '../bus/bus',
      })
    }
    this.setData({
      currentTab: e.currentTarget.dataset.idx,
      specialcarhide: false,
      messagehide: true,
      closehide: true,
      timehide: true,
      endtophide: false,
      ncolor: 'black',
      fcolor: 'grey',
      messageendheight: 80,
      futuresethide:true,
      maphides: false,
      
    })  
  }

})