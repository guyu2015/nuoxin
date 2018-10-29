<template>
    <div>
        <div class="topWrapper">
            <span class="addressIcon"><div class="address">北京</div></span>
            <div class="gifs_top">
                <p @click="clickTitle(index)" v-for="(item,index) in titleList" :key="index" :class="[item.className]">
                    {{item.title}}</p>
            </div>
        </div>
        <div class="goodsList">
            <ul>
                <li ref="goodsListWrapper" v-for="(item,index) in dataList" :key="index">
                    <img :src="[item.src]" ref="goodsList"/>
                    <div class="titleClass">
                        <p>{{item.title}}</p>
                        <p>{{item.redTitle}}</p>
                        <p>¥{{item.money}}</p>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    import list2 from "../../static/image/list_12775.jpg"
    import list3 from "../../static/image/list_12943.jpg"
    import list4 from "../../static/image/list_16196.jpg"
    import list5 from "../../static/image/list_18475.jpg"
    import list6 from "../../static/image/list_18684.jpg"
    import "../../static/css/home.css"
    import $ from "jquery"
    import list1 from "../../static/image/list_10800.jpg"

    export default {
        onePartListHeight: "",
        name: "ratings",
        data() {
            return {
                dataList: [
                    {src: list1, title: "数字蛋糕", redTitle: "人气爆款", money: "278"},
                    {src: list2, title: "数字蛋糕", redTitle: "NEW", money: "78"},
                    {src: list3, title: "数字蛋糕", redTitle: "万圣节蛋糕", money: "178"},
                    {src: list4, title: "数字蛋糕", redTitle: "hot", money: "158"},
                    {src: list5, title: "数字蛋糕", redTitle: "happy birthday", money: "128"},
                    {src: list6, title: "数字蛋糕", redTitle: "lot", money: "78"},

                ],
                titleList: [
                    {title: "综合", className: "active"}, {title: "销量", className: ""}, {title: "上新", className: ""}
                ],
                goodsList0: [],
                goodsList1: [],
                goodsList2: []

            }
        },
        mounted() {
            this.goodsList0 = [
                {src: list1, title: "数字蛋糕", redTitle: "人气爆款", money: "178"},
                {src: list2, title: "数字蛋糕", redTitle: "NEW", money: "378"},
                {src: list3, title: "数字蛋糕", redTitle: "万圣节蛋糕", money: "728"},
                {src: list4, title: "数字蛋糕", redTitle: "hot", money: "68"},
                {src: list5, title: "数字蛋糕", redTitle: "happy birthday", money: "78"},
                {src: list6, title: "数字蛋糕", redTitle: "lot", money: "988"},

            ],
                this.goodsList1 = [
                    {src: list4, title: "数字蛋糕", redTitle: "hot", money: "358"},
                    {src: list5, title: "数字蛋糕", redTitle: "happy birthday", money: "228"},
                    {src: list6, title: "数字蛋糕", redTitle: "lot", money: "58"},
                    {src: list1, title: "数字蛋糕", redTitle: "人气爆款", money: "78"},
                    {src: list2, title: "数字蛋糕", redTitle: "NEW", money: "128"},
                    {src: list3, title: "数字蛋糕", redTitle: "万圣节蛋糕", money: "259"},


                ],
                this.goodsList2 = [
                    {src: list3, title: "数字蛋糕", redTitle: "万圣节蛋糕", money: "728"},
                    {src: list4, title: "数字蛋糕", redTitle: "hot", money: "718"},
                    {src: list5, title: "数字蛋糕", redTitle: "happy birthday", money: "378"},
                    {src: list1, title: "数字蛋糕", redTitle: "人气爆款", money: "78"},
                    {src: list2, title: "数字蛋糕", redTitle: "NEW", money: "128"},
                    {src: list3, title: "数字蛋糕", redTitle: "万圣节蛋糕", money: "259"},
                    {src: list6, title: "数字蛋糕", redTitle: "lot", money: "778"},

                ],
                this.onePartListHeight = ($(document.documentElement.clientWidth)[0]) * 0.47 / 0.6875;
            // this.$refs.goodsListWrapper.style.height = this.onePartListHeight + 70 + "px";
        },
        methods: {
            clickTitle(e) {
                for (var i = 0; i < this.titleList.length; i++) {

                    if (e == i) {
                        this.dataList = this["goodsList" + i];
                        console.log(this.dataList);
                        this.titleList[i].className = "active"
                    } else {
                        this.titleList[i].className = ""
                    }
                }

            }
        }
    }
</script>

<style scoped>
    .gifs_top {
        display: inline-block;
        width: 60%;
        height: 100%;
    }

    .gifs_top p {
        display: inline-block;
        width: 33.33333%;
        height: 100%;
        font-size: 13px;
        line-height: 40px;
        text-align: center;
    }

    .active {
        color: tomato;
    }

    .goodsList {
        margin: 50px 0;
    }
</style>