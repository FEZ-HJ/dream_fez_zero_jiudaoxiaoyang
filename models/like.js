import {HTTP} from '../utils/http.js'

export class LikeModel extends HTTP{
  like(behavior , artID , category){
    let url = behavior=='like' ? 'like':'like/cancel'
    this.request({
      url: url,
      method: 'POST',
      data:{
        atr_id: artID,
        type: category
      },
      success: (res) => {
        console.log(res)
      }
    })
  }
}