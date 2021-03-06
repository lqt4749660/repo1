import { request } from "../../request/index.js"
//Page Object
Page({
  data: {
    // 轮播图数组
    swiperList: [],
    // 分类导航
    cateList: [],
    //楼层数据
    floorList: []
  },
  //options(Object)
  onLoad: function(options){
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },
  // 获取轮播图数据
  getSwiperList(){
    request({url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
      .then(result => {
        this.setData({
          swiperList: result.data.message
        })
      })
  },
  // 获取分类导航数据
  getCateList(){
    request({url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"})
      .then(result => {
        this.setData({
          cateList: result.data.message
        })
      })
  },
  // 获取楼层数据
  getFloorList(){
    request({url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"})
      .then(result => {
        this.setData({
          floorList: result.data.message
        })
      })
  }
});