<template>
    <div class="totalWrapper">
        <div class="topWrapper">
            <span class="addressIcon"><div class="address">北京</div></span>
            <div class="centerIcon"></div>
            <span class="msgIcon"></span>
        </div>
        <div class="sliderWrapper">
            <div class="red"> 【 先领券 后下单 】</div>
            <div class="swiperWrapper" ref="swiperWrapper">
                <ul ref="swiperUl">
                    <li v-for="(item,index) in swiperLists" :key="index" class="imgWrapper"><img :src="item.src"/></li>
                </ul>
                <div class="circle" ref="circleWrapper"><span v-for="(item,index) in swiperCircle" :key="index"
                                                              :class="[item.className]"></span></div>
            </div>
        </div>
        <div class="listWrapper">
            <div class="onePartList" ref="onePartList">
                <ul>
                    <li v-for="(item,index) in onePartList" :key="index"><img :src="[item.src]"/></li>
                </ul>
            </div>
            <div class="joinCake">
                <router-link to="/cake">蛋糕馆</router-link>
            </div>
            <div class="goodsList">
                <ul>
                    <li ref="goodsListWrapper" v-for="(item,index) in goodsList" :key="index">
                        <img :src="[item.src]" ref="goodsList"/>
                        <div class="titleClass">
                            <p>{{item.title}}</p>
                            <p>{{item.redTitle}}</p>
                            <p>¥{{item.money}}</p>
                        </div>
                    </li>
                </ul>

            </div>
            <div class="gifs">

                <router-link to="/gifs">
                    <div><img src="../../static/image/gift.jpg"/></div>

                </router-link>
                <router-link to="/gifs" class="gifsIcon">
                    礼品馆
                </router-link>
            </div>
            <div class="gifsList" ref="slider">
            <ul ref="gifsListWrapper"  >
                <li v-for="(item,index) in gifsList" :key="index">
                    <img :src="[item.src]"/>
                    <div class="gifsListDetail">
                        <p>{{item.title}}</p>
                        <p>{{item.logistics}}</p>
                        <p> ¥{{item.money}}</p>
                    </div>
                </li>
            </ul>
        </div>
            <div class="comment">
                <h2 style="text-align: center;">用户评论</h2>
                <div class="commentWrapper">
                    <ul class="commentInner" ref="commentInner">
                        <li v-for="(item,index) in userComments" :key="index">
                            <img :src="[item.src1]" class="pic"/>
                            <p class="phoneNumber">{{item.iphone}}</p>
                            <div class="commentContent">
                                <p class="text">{{item.content}}</p>
                                <img :src="[item.src2]"/>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
            <p class="copyright">
                copyright © 2010-2018 诺心lecake.com版权所有<br>
                诺心食品（上海）有限公司 沪ICP备10211730号
            </p>
        </div>
    </div>
</template>

<script>
    import "../../static/css/home.css"
    import image1 from "../../static/image/1.jpg"
    import image2 from "../../static/image/2.jpg"
    import image3 from "../../static/image/3.jpg"
    import right from "../../static/image/right.jpg"
    import list1 from "../../static/image/list_10800.jpg"
    import list2 from "../../static/image/list_12775.jpg"
    import list3 from "../../static/image/list_12943.jpg"
    import list4 from "../../static/image/list_16196.jpg"
    import list5 from "../../static/image/list_18475.jpg"
    import list6 from "../../static/image/list_18684.jpg"
    import left from "../../static/image/left.jpg"

    import $ from "jquery"
    import BScroll from "better-scroll"
    export default {
        vueMoves:true,
        name: "goods",
        data: function () {
            return {
                goodsListHeight: "",
                onePartListHeight: "",
                swiperHeight: "",
                swiperLists: [
                    {src: image1},
                    {src: image2},
                    {src: image3},
                    {src: image1},
                ],
                swiperCircle: [
                    {className: "active"}, {className: ""}, {className: ""},
                ],
                onePartList: [
                    {src: left}, {src: right},
                ],
                goodsList: [
                    {src: list1, title: "数字蛋糕", redTitle: "人气爆款", money: "78"},
                    {src: list2, title: "数字蛋糕", redTitle: "NEW", money: "78"},
                    {src: list3, title: "数字蛋糕", redTitle: "万圣节蛋糕", money: "78"},
                    {src: list4, title: "数字蛋糕", redTitle: "hot", money: "78"},
                    {src: list5, title: "数字蛋糕", redTitle: "happy birthday", money: "78"},
                    {src: list6, title: "数字蛋糕", redTitle: "lot", money: "78"},

                ],
                gifsList: [
                    {src: list1, title: "数字蛋糕", logistics: "顺丰", money: "45"},
                    {src: list1, title: "数字蛋糕", logistics: "顺丰", money: "45"},
                    {src: list1, title: "数字蛋糕", logistics: "顺丰", money: "45"},
                    {src: list1, title: "数字蛋糕", logistics: "顺丰", money: "45"},
                    {src: list1, title: "数字蛋糕", logistics: "顺丰", money: "45"},
                    {src: list1, title: "数字蛋糕", logistics: "顺丰", money: "45"},
                    {src: list1, title: "数字蛋糕", logistics: "顺丰", money: "45"},
                    {src: list1, title: "数字蛋糕", logistics: "顺丰", money: "45"},
                    {src: list1, title: "数字蛋糕", logistics: "顺丰", money: "45"},


                ],
                userComments:[
                    {src1:list1,src2:list2,content:"蛋糕很好吃，很好看，不甜，金色蜡烛也很漂亮",iphone:"158****321"},
                    {src1:list1,src2:list2,content:"蛋糕很好吃，很好看，不甜，金色蜡烛也很漂亮",iphone:"158****321"},
                    {src1:list1,src2:list2,content:"蛋糕很好吃，很好看，不甜，金色蜡烛也很漂亮",iphone:"158****321"},
                    {src1:list1,src2:list2,content:"蛋糕很好吃，很好看，不甜，金色蜡烛也很漂亮",iphone:"158****321"},
                    {src1:list1,src2:list2,content:"蛋糕很好吃，很好看，不甜，金色蜡烛也很漂亮",iphone:"158****321"},
                    {src1:list1,src2:list2,content:"蛋糕很好吃，很好看，不甜，金色蜡烛也很漂亮",iphone:"158****321"},
                    {src1:list1,src2:list2,content:"蛋糕很好吃，很好看，不甜，金色蜡烛也很漂亮",iphone:"158****321"},
                    {src1:list1,src2:list2,content:"蛋糕很好吃，很好看，不甜，金色蜡烛也很漂亮",iphone:"158****321"},
                    {src1:list1,src2:list2,content:"蛋糕很好吃，很好看，不甜，金色蜡烛也很漂亮",iphone:"158****321"},

                ]
            }
        },
        mounted() {
            this.swiperHeight = ($(document.documentElement.clientWidth)[0]) * 0.96 / 0.84;
            this.onePartListHeight = ($(document.documentElement.clientWidth)[0]) * 0.47 / 0.6875;
            this.goodsListHeight = ($(document.documentElement.clientWidth)[0]) * 0.47;
            this.$refs.swiperWrapper.style.height = this.swiperHeight + "px";
            this.$refs.swiperUl.style.height = this.swiperHeight + "px";
            this.$refs.gifsListWrapper.style.width = this.gifsList.length * 160 + "px";
            this.$refs.commentInner.style.width =  this.userComments.length*167+"px"
            console.log(this.gifsList.length * 160);
            this.$refs.onePartList.style.height = this.onePartListHeight + "px";
            this.$refs.goodsList.style.height = this.onePartListHeight + "px";
            this.$refs.goodsListWrapper.style.height = this.onePartListHeight + 70 + "px";
            const that = this;
            window.onresize = function temp() {
                that.swiperHeight = ($(document.documentElement.clientWidth)[0]) * 0.94 / 0.84;
                // console.log( that.swiperHeight)
                that.$refs.swiperWrapper.style.height = that.swiperHeight + "px";
                that.$refs.swiperUl.style.height = that.swiperHeight + "px";
            };
            var i = 0;
            setInterval(function () {
                i++;
                if (i > 3) {
                    i = 0;
                    that.$refs.swiperUl.style.left = -i + "00%";
                    that.$refs.swiperUl.style.transitionDuration = "0s";

                } else {
                    that.$refs.swiperUl.style.left = -i + "00%";
                    that.$refs.swiperUl.style.transitionDuration = "1s"
                }

                for (var j = 0; j < that.swiperCircle.length; j++) {
                    if (i == 3) {
                        that.swiperCircle[0].className = "active";
                    }
                    if (j == i) {
                        that.swiperCircle[j].className = "active";
                    } else {
                        that.swiperCircle[j].className = "";

                    }

                }

            }, 2000);
            const scroll = new BScroll('.gifsList')

        },
        watch: {

        },
        methods: {

        },
    }

</script>

<style scoped></style>