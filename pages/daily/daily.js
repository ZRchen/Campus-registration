// pages/health/health.js
Page({
    onShareAppMessage() {
        return {
          title: 'radio',
          path: 'page/component/pages/checkbox/checkbox'
        }
      },

    /**
     * 页面的初始数据
     */
    data: {
        select:'',
        array:['正常','疑似病例','确诊病例','无症状感染者'],
        items: [
            {value: '1', name: '14日内有疫情中风险地旅居史'},
            {value: '2', name: '14日内有疫情中风险地返粤人员'},
            {value: '3', name: '14日内有疫情高风险地旅居史'},
            {value: '4', name: '14日内有疫情高风险地返粤人员'},
            {value: '5', name: '以上都没有'}
          ]
    },
    bindSelectChange:function(e){
        console.log('Select发送选择改变，携带value值为：', e.detail.value)
        this.setData({
        select:e.detail.value})
    },

    checkboxChange(e) {
        console.log('check发生change事件，携带value值为：', e.detail.value)
    
        const items = this.data.items
        const values = e.detail.value
        for (let i = 0, lenI = items.length; i < lenI; ++i) {
          items[i].checked = false
    
          for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
            if (items[i].value === values[j]) {
              items[i].checked = true
              break
            }
        }
    }
        this.setData({
          items
        })
      },
    bindRegionChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          region: e.detail.value
        })
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:function() {
        wx.showModal({
            confirmText:'直接提交',
            cancelText:'编辑',
            confirmColor:'red',
            content: '是否需要复制上次填写内容并提交',
            success (res) {
              if (res.confirm) {
                console.log('编辑')
              } else if (res.cancel) {
                console.log('直接提交')
              }
            }
          })
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