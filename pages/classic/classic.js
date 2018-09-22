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
    first: false,
    likeCount : 0,
    likeStatus: false
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
          "index": 2,
          "like_status": 0,
          "pubdate": "2018-06-22",
          "title": "李安《饮食男女》",
          "type": 100
        },
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
    })
  },

  onLike: function(event){
    console.log(event)
    let behavior = event.detail.behavior
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type)
  },

  onNext: function(event){
    let index = this.data.classic.index
    classicModel.getClassic(index,'next', (res)=>{
      this._getLikeStatus(res.id, res.type)
      this.setData({
        classic: {
          "content": "这个夏天又是一个毕业季",
          "fav_nums": 0,
          "id": 2,
          "image": "http://bl.7yue.pro/images/sentence.2.png",
          "index": 2,
          "like_status": 0,
          "pubdate": "2018-06-22",
          "title": "未名",
          "type": 300
        },
        latest: classicModel.isLatest(2),
        first: classicModel.isFirst(2)
      })
    })
  },

  onPrevious: function(evnet){
    let index = this.data.classic.index
    classicModel.getClassic(index,'previous', (res) =>{
      this._getLikeStatus(res.id,res.type)
      this.setData({
        classic: {
          "content": "你陪我步入蝉夏 越过城市喧嚣",
          "fav_nums": 0,
          "image": "http://bl.7yue.pro/images/music.7.png",
          "id": 3,
          "index": 1,
          "like_status": 0,
          "pubdate": "2018-06-22",
          "title": "纸短情长",
          "type": 200,
          "url": "http://music.163.com/song/media/outer/url?id=557581284.mp3"
        },
        latest: classicModel.isLatest(1),
        first:classicModel.isFirst(1)
        // first:classicModel.isFirst(res.index)
        // latest: classicModel.isLatest(res.index)
      })
    })
  },

  _getLikeStatus:function(artID,category){
    likeModel.getClassicLikeStatus(artID,category,(res)=>{
      this.setData({
        likeStatus: res.like_status,
        likeCount: res.fav_nums
      })
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

  }
})