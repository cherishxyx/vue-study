<template>
  <div class="topbar-wrapper">
    <div class="topbar w clearfix">
      <!--左侧导航-->
      <ul class="service">
        <li><a href="javascript:;">小米商场</a></li>
        <li class="line">|</li>
        <li><a href="javascript:;">MIUI</a></li>
        <li class="line">|</li>
        <li><a href="javascript:;">Iot</a></li>
        <li class="line">|</li>
        <li><a href="javascript:;">云服务</a></li>
        <li class="line">|</li>
        <li><a href="javascript:;">金融</a></li>
        <li class="line">|</li>
        <li><a href="javascript:;">有品</a></li>
        <li class="line">|</li>
        <li><a href="javascript:;">小爱开放平台</a></li>
        <li class="line">|</li>
        <li><a href="javascript:;">企业回购</a></li>
        <li class="line">|</li>
        <li><a href="javascript:;">资质证照</a></li>
        <li class="line">|</li>
        <li><a href="javascript:;">协议规则</a></li>
        <li class="line">|</li>
        <li>
          <a class="app" href="javascript:;">下载app
            <!--添加一个弹出框-->
            <div class="qrcode">
              <img src="../../../public/img/download.png"/>
              <span>小米商城app</span>
            </div>
          </a>
        </li>
        <li class="line">|</li>
        <li><a href="javascript:;">Select Location</a></li>
        <li class="line">|</li>
      </ul>
      <!--购物车-->
      <ul class="shop-cart">
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-shopping_cart"></i>
            购物车(0)
            <div id="shopcart">
              <span>暂无购物车信息</span>
            </div>
          </a>
        </li>
      </ul>
      <!--用户登录注册-->
      <ul class="user-info">
        <li><a href="javascript:;">登录</a></li>
        <li class="line">|</li>
        <li><a href="javascript:;">注册</a></li>
        <li class="line">|</li>
        <li><a href="javascript:;">消息通知</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "toper"
}
</script>

<style scoped>
/*主页index.html得样式表*/

/*顶部导航条容器*/
.topbar-wrapper{
  /*设置宽度全屏*/
  width: 100%;
  /*设置宽度和行高*/
  height: 40px;
  line-height: 40px;
  /*设置背景颜色*/
  background-color: #333;
}

/*设置超链接颜色*/
.topbar a{
  color: #b0b0b0;
  font-size: 12px;
  display: block;
}
/*设置超链接动画*/
.service a:hover{
  color: white;
}
.user-info a:hover{
  color: white;
}
/*设置左侧导航样式*/
.service, .topbar li{
  float: left;
}
/*设置右侧导航样式*/
.shop-cart, .user-info{
  margin-left: 20px;
  float: right;
}
/*设置中间分割线*/
.topbar .line{
  font-size: 12px;
  color: #424242;
  margin: 0 8px;
  margin-top: -1px;
}

/*设置购物车样式*/
.shop-cart a{
  width: 100px;
  height: 40px;
  line-height: 40px;
  background-color: #424242;
  text-align: center;
  z-index: 9999;
}

.shop-cart i{
  margin-right: 2px;
}

.shop-cart:hover a{
  background-color: #fff;
  color: #ff6700;
}

/*app下拉实现*/
/*添加相对定位，让其子元素能绝对定位到改元素*/
.app{
  position: relative;
}
/*下载app 下拉容器*/
.app .qrcode{
  /*display: none;*/
  width: 124px;
  /*height: 148px;*/
  height: 0;
  overflow: hidden;
  background-color: #fff;
  line-height: 1;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  position: absolute;
  left: -37px;
  transition: height 0.3s;
  z-index: 9999;
}
/*设置下拉二维码中二维码图片*/
.qrcode img{
  width: 90px;
  height: 90px;
  margin: 17px;
  margin-bottom: 12px;
}
/*设置下拉二维码中字体*/
.app .qrcode span{
  font-size: 14px;
  color: #000;
}
/*设置下拉二维码动画*/
.app:hover .qrcode,
.app:hover::after{
  display: block;
  height: 148px;
}
/*设置app下得小三角*/
.app::after{
  display: none;
  /*设置内容,不设置看不出来*/
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0;
  height: 0;
  border: 8px solid;
  /*去除上边框*/
  border-top: none;
  border-color: transparent transparent #fff transparent;
}

/*购物车下拉*/
#shopcart{
  /*display: none;*/
  width: 316px;
  text-align: center;
  /*height: 100px;*/
  height: 0;
  line-height: 100px;
  overflow: hidden;
  /*line-height: 100px;*/
  box-shadow: 0 5px 5px rgba(0, 0, 0, .3);
  position: absolute;
  right: 0;
  top: 40px;
  transition: height 0.3s;
  background-color: #fff;
}

#shopcart span{
  color: #424242;
}

.shop-cart a{
  position: relative;
}

.shop-cart:hover #shopcart{
  /*display: block;*/
  height: 100px;
  line-height: 100px;
}
</style>