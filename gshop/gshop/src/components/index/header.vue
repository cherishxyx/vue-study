<template>
  <div class="header-wrapper">
    <div class="header w">
      <div class="logo">
        <span>小米官网</span>
        <a href="/"></a>
      </div>

      <div class="nav-wrapper clearfix">
        <!--创建导航条-->
        <ul class="nav">
          <li v-for="(item) in navlist"
              :key="item.index"
              :class="[{'show-goods':(item.href==='javascript: void(0);')},
              {'all-goods':(item.title==='全部商品分类')}]">
            <a :href="item.href">{{item.title}}</a>
          </li>
          <div class="goods-info">
          </div>
        </ul>
      </div>

      <div class="search-wrapper">
        <form action="#" class="search">
          <input class="search-inp" type="text" v-model="search_content" placeholder="小米MIX4">
          <button class="search-btn">
            <i class="iconfont icon-search"></i>
          </button>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  data(){
    return{
      navlist: [{
        title: '全部商品分类',
        index: '001',
        href: 'https://www.mi.com/category/list'
      }, {
          title: '小米手机',
          index: '002',
          href: 'javascript: void(0);'
      }, {
          title: 'Redmi 红米',
          index: '003',
          href: 'javascript: void(0);'
      }, {
          title: '电视',
          index: '004',
          href: 'javascript: void(0);'
      },{
          title: '笔记本',
          index: '005',
          href: 'javascript: void(0);'
      },{
        title: '平板',
        index: '006',
        href: 'javascript: void(0);'
      },{
        title: '家电',
        index: '007',
        href: 'javascript: void(0);'
      },{
        title: '路由器',
        index: '008',
        href: 'javascript: void(0);'
      },{
        title: '智能硬件',
        index: '009',
        href: 'javascript: void(0);'
      },{
        title: '服务',
        index: '010',
        href: 'https://www.mi.com/service'
      },{
        title: '社区',
        index: '011',
        href: 'https://www.xiaomi.cn/'
      }],
      search_content: ''
    }
  }
}
</script>

<style scoped>
/*头部宽度*/
.header{
  height: 100px;
}

/*设置头部图标*/
.header .logo{
  float: left;
}
/*设置小米官网字不显示*/
.logo span{
  position: absolute;
  text-indent: -9999px;
}
/*设置背景图片*/
.header .logo a{
  display: block;
  width: 56px;
  height: 56px;
  margin: 22px 0;
  background-image: url("../../../public/img/logo-mi2.png");
}


/**/
.header .nav-wrapper{
  float: left;
  margin-left: 7px;
}

.nav-wrapper li{
  float: left;
}

.header .nav{
  /*width: 792px;*/
  height: 100px;
  line-height: 100px;
  padding-left: 58px;
}

.nav li a{
  font-size: 16px;
  color: #000;
  padding-right: 20px;
  display: block;
  text-align: center;
}

.all-goods{
  visibility: hidden;
}

.nav li a:hover{
  color: #ff6700;
}


/*下拉*/
.header-wrapper{
  position: relative;
}

.goods-info{
  /*height: 228px;*/
  height: 0;
  overflow: hidden;
  width: 100%;
  position: absolute;
  left: 0;
  top: 100px;
  /*border-top: 1px solid rgb(224,224,224);*/
  /*box-shadow: 0 5px 5px rgba(0,0,0,.2);*/
  transition: height 0.3s;
  z-index: 9998;
}

/*除了第一个和最后两个li不触发hover*/
/*.nav li:not(:first-of-type):not(:nth-child(10)):not(:nth-child(9)):hover ~ .goods-info,*/
.nav .show-goods:hover ~ .goods-info,
.goods-info:hover{
  height: 228px;
  border-top: 1px solid rgb(224,224,224);
  box-shadow: 0 5px 5px rgba(0,0,0,.2);
}


/*搜索框*/
.search-wrapper{
  margin-top: 25px;
  float: right;
  width: 296px;
  height: 50px;
  line-height: 50px;
  border: 1px solid rgb(224,224,224);
}

.search-inp{
  width: 224px;
  height: 50px;
  float: left;
  border: none;
  color: #616161;
  font-size: 18px;
  padding: 0 10px;
}

.search-btn{
  height: 50px;
  width: 52px;
  float: left;
  padding: 0;
  border: none;
  background-color: #fff;
  border-left: 1px solid rgb(224,224,224);
}

</style>
