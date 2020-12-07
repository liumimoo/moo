// pages/personal/myway/myway.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['已完成', '已取消', '正在进行'],
    currentTab: 0,
    items: [
      {
        "waytype": "专车",
        "time": "2018年1月1日19:20",
        "start": "人民公路46号",
        "end": "人民公路100号"
      },
      {
        "waytype": "专车",
        "time": "2018年1月1日19:20",
        "start": "人民公路46号",
        "end": "人民公路100号"
      },
      {
        "waytype": "专车",
        "time": "2018年1月1日19:20",
        "start": "人民公路46号",
        "end": "人民公路100号"
      },
      {
        "waytype": "专车",
        "time": "2018年1月1日19:20",
        "start": "人民公路46号",
        "end": "人民公路100号"
      },
      {
        "waytype": "专车",
        "time": "2018年1月1日19:20",
        "start": "人民公路46号",
        "end": "人民公路100号"
      }
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

  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})