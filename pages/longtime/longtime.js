// pages/daily/daily.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: '',
        vaule2:'',
        array:['回家','旅游','实习','见习','找工作','其他'],
        array1:['是','否'],
        array2:['飞机','火车','客车','自驾'],
        index:'',
        select:'',
    },
    handleChange(e) {
        console.log(e.detail.dateString)
        this.setData({
          value: e.detail.dateString
        })
    },
    handleChange2(e) {
        console.log(e.detail.dateString)
        this.setData({
          value2:e.detail.dateString
        })
    },
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
        index: e.detail.value
        }) 
        },
        bindRegionChange: function (e) {
            console.log('picker发送选择改变，携带值为', e.detail.value)
            this.setData({
              region: e.detail.value
            })
          },
          bindSelectChange: function (e) {
            console.log('picker发送选择改变，携带值为', e.detail.value)
            this.setData({
            select1: e.detail.value
            })
          },
          bindSelectChange2: function (e) {
            console.log('picker发送选择改变，携带值为', e.detail.value)
            this.setData({
            select2: e.detail.value
            })
          },
         
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:function() {

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