// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: ''
  },
  handleChooseAlbum() {
    // 系统api，让用户再相册中选择图片（或者拍照）
    wx.chooseImage({
      success: res => {
        // 取出路径
        const path = res.tempFilePaths[0]
        this.setData({
          path
        })
      }
    })
  },
  handleImageLoad() {
    console.log('图片加载完成')
  }
})