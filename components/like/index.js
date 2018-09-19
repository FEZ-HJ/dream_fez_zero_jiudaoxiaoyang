Component({
  properties:{
    like:{
      type: Boolean
    },
    count:{
      type:Number
    }

  },

  data:{
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png',
  },

  methods:{
    onLike:function(event){
      let like = !this.properties.like
      let count = this.properties.count

      count  = like ? ++count : --count
      this.setData({
        count: count,
        like: like
      })

      // 自定义事件
      let behavior = this.properties.like ? 'like' : 'cancel'
      // 激活
      this.triggerEvent('like',{
        behavior: behavior
      },{})
    }
  }
})