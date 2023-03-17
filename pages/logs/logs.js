// pages/logs/logs.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that=this
        setInterval(function(){
        that.setData({
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

    }
})