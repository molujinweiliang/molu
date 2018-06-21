// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fenlei:[
      { name: "分类1", id: 1 },
      { name: "分类1", id: 1 },
      { name: "分类1", id: 1 },
      { name: "分类1", id: 1 },
    ],
    banner: [
      "http://pic.58pic.com/58pic/13/68/03/86S58PIC26b_1024.jpg",
      "http://pic.58pic.com/58pic/13/68/03/86S58PIC26b_1024.jpg"
    ],
    activeIndex:0,
    left:52
  },
  choose:function(e){
    var index=e.currentTarget.dataset.index,
        id=e.currentTarget.dataset.index;
    this.setData({
      activeIndex: Number(index),
      // marginLeft: 
    })
    // 请求商品列表的方法

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
  
  }
})