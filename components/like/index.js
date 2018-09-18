Component({
  properties:{
    like:{
      type: Boolean,
      value:false,
      observer:function(){

      }
    },
    count:{
      type:Number
    }

  },

  data:{
    yesSrc: '../images/like.png',
    noSrc: '../images/like@dis.png',
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
    }
  }
})