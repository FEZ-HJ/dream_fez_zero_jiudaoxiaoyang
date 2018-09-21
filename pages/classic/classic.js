import {ClassicModel} from '../../models/classic.js'
import {LikeModel} from '../../models/like.js'
let classicModel = new ClassicModel()
let likeModel = new LikeModel()
// pages/classic/classic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    latest: true,
    first: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res) => {
      console.log(res)
      this.setData({
        // classic:res
        classic: {
          "content": "人生不能像做菜，把所有的料准备好才下锅",
          "fav_nums": 0,
          "id": 1,
          "image": "http://bl.7yue.pro/images/movie.8.png",
          "index": 7,
          "like_status": 0,
          "pubdate": "2018-06-22",
          "title": "李安《饮食男女》",
          "type": 100
        }
      })
    })
  },

  onLike: function(event){
    console.log(event)
    let behavior = event.detail.behavior
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type)
  },

  onLeft: function(event){
    console.log(event)
  },

  onRight: function(evnet){

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