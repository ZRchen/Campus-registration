// pages/report/report.js
Page({

    jumpPage:function(){
        wx.switchTab({
          url: '/pages/zhuye/zhuye',
        })
    },

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:function(options) {   
  },

  onLaunch: function() {
    // 获取激励视频广告位加载的次数
    var count = wx.getStorageSync('Count');
    if (!count) {
    wx.setStorage({
    key: 'Count',
    data: 0,
    })
    };
    var newCount = parseInt(count) + 1;
    wx.setStorage({
     key: 'Count',
     data: newCount,
    });
    var time = new Date()
    time = time.getTime();
},

    onLoad: function (options) {
        var that=this
        setInterval(function(){
        that.setData({
        //此方法复杂
        // Time:String(new Date().getDay())+String(new Date().getDate())+String(new Date().getFullYear())+String(new Date().getHours())+String(new Date().getTime())+String(new Date().getMinutes())+String(new Date().getSeconds())+String(new Date().getTimezoneOffset())+String(new Date().getMonth())+String(new Date().getMilliseconds())+String(new Date().getYear())+String(new Date().getSeconds())
          //Time: (new Date()).toLocaleDateString('cn-ZH')+"---"+(new Date()).toTimeString()
          //Time:(new Date()).toString()
          //Time:(new Date()).toISOString()此方法设备通用
          //最少代码还原可读的动态时间
          //Time:（new Date(+new Date()+8*3600*1000）.toISOString().replace("T","---").slice(0,21))
          Time:(new Date(+new Date()+8*3600*1000).toISOString().replace("T","   ").slice(0,22)).replace("-","/").replace("-","/").replace("."," 星期"+String(new Date().getDay())).replace("星期0","星期日").replace("星期1","星期一").replace("星期2","星期二").replace("星期3","星期三").replace("星期4","星期四").replace("星期5","星期五").replace("星期6","星期六")
         })
       },1000)
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    // 其他函数方法
    onDefaultButtonClick: function () {
        console.log('点击事件')
      }


})