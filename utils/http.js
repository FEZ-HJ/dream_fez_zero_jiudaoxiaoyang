import {config} from '../config.js'

const tips = {
  1:'抱歉，出现了一个错误',
  1005: 'appkey无效'
}

export class HTTP{
  request(params){
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      header:{
        'content-type' : 'application/json',
        'appkey' : config.appkey
      },
      success:(res) => {
        let code = res.statusCode.toString()
        if(code.startsWith('2')){

        }else{
          params.success(res)
          this._show_error(res.data.error_code)
        }
      },
      fail:(err) => {
        this._show_error(1)
      }
    })
  }

  _show_error(error_code){
    if(!error_code){
      error_code = 1
    }
    wx.showToast({
      title: tips[error_code],
      icon:'none',
      duration:2000
    })
  }
}