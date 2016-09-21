<template>
    <div>
        <ul>
            <li v-for="item in newsList">
                <a v-link="item.href">{{item.title}}</a>
            </li>
        </ul>
        <strong>
            <router-view></router-view>
        </strong>
    </div>
</template>
<style>
</style>
<script>
    export default{
        data(){
            return{
                newsList:[
                    {title:'aaaaa', href:{path:'/home/news/detail/001'}},
                    {title:'bbbb', href:{path:'/home/news/detail/002'}},
                    {title:'cccc', href:{path:'/home/news/detail/003'}},
                    {title:'dddd', href:{path:'/home/news/detail/004'}}
                ]
            }
        }
    }
</script>
