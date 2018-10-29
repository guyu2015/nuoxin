<template>
    <div id="app">
        <router-view></router-view>
        <div class="tab" >
            <div class="tabItem" v-for="(item ,index) in listTabs" :key="item.name" @click="change(index)">
                <router-link :to="{path:item.path}" :class="[item.className]" >
                    <div :class="[item.className2, item.className4]"></div>
                    <div :class="[item.className3]">{{item.name}}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>


    export default {
        name: 'app',
        data:function () {
            return{
                listTabs:[
                    {name:"首页",path:"/home",className:"home",className2: "homePic",className3:"active",className4:"active0"},
                    {name:"礼品馆",path:"/gifs",className:"gifs",className2: "gifsPic"},
                    {name:"蛋糕",path:"/cake",className:"cake",className2: "cakePic"},
                    {name:"购物",path:"/shopping",className:"shopping",className2: "shoppingPic"},
                    {name:"我的",path:"/self",className:"self",className2: "selfPic"},
                ]
            }
        },
        methods:{
            change(index){
                console.log(index);
                var array = this.listTabs;
                for(var i=0;i<array.length;i++){
                    if(i == index){
                        this.listTabs[i].className3 = "active";
                        this.listTabs[i].className4 = "active"+index

                    }else{
                        this.listTabs[i].className3 = ""
                        this.listTabs[i].className4 = ""
                    }
                }
            }
        },


        components: {

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .tab {
        background: #ededed;
        text-align: center;
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        color: #2c3e50;
        position: fixed;
        bottom: 0;
    }

    .tab .tabItem {
        width: 20%;

        text-decoration: none;
        display: inline-block;
    }
    .tabItem{
        width:20%;
        height:50px;
    }
    .tab .tabItem a{
        text-decoration: none;
        color: #a38d6b;
    }
    .homePic,.gifsPic, .cakePic,.shoppingPic,.selfPic{
        background-image: url("./static/image/main_nav_3.png");
        width: 25px;
        height: 27px;
        background-size: 50px;
        margin: 0 auto;
        background-repeat: no-repeat;

    }
    .homePic{
        background-position: -25px 2px;
    }
    .gifsPic{
        background-position: -25px -23px;
    }
    .cakePic{
        background-position: -25px -48px;
    }
    .shoppingPic{
        background-position: -25px -73px;
    }
    .selfPic{
        background-position: -25px -99px;
    }

    a div:nth-child(2){
        width: 20%;
        height: 20px;
        line-height: 20px;
        position: absolute;
        bottom: 0;
    }

    .active {
        color: #ff4001;
    }
    .active0{
        background-position: 0px 2px;
    }
    .active1{
        background-position: 0px -23px;
    }
    .active2{
        background-position: 0 -48px;
    }
    .active3{
        background-position: 0px -73px;
    }
    .active4{
          background-position:0 -99px;
      }

</style>
