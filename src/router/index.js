import vueRouter from "vue-router"
import vue from "vue"
vue.use(vueRouter);
import gifs from "../components/gifs/gifs"
import cake from "../components/cake/cake"
import home from "../components/home/home"
import shopping from "../components/shopping/shopping"
import self from "../components/self/self"

export default new vueRouter({
    routes:[
        {
            path:"/",
            component:gifs
        },
        {
            path:"/shopping",
            component:shopping
        },
        {
            path:"/gifs",
            component:gifs
        },

        {
            path:"/cake",
            component:cake
        },
        {
            path:"/self",
            component:self
        },
        {
            path:"/home",
            component:home
        },
    ]
})