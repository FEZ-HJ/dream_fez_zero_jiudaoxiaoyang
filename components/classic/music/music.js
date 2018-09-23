import { classicBeh } from '../classic-beh.js'

const mMgr = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
    src:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: 'images/player@waitting.png',
    playSrc: 'images/player@playing.png'
  },

  detached:function(event){
    mMgr.stop()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function(event){
      if (!this.data.playing){
        this.setData({
          playing: !this.data.playing
        })
        mMgr.src = this.properties.src
      }else{
        this.setData({
          playing: !this.data.playing
        })
        mMgr.pause()
      }
    }
  }
})
