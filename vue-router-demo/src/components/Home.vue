<template>
    <p>
        这是主页 ->>> {{msg}}
    </p>
    <div>
        <p>
            <a v-link="{path:'/home/news'}">--新闻--</a>
            <a v-link="{path:'/home/message'}">--消息--</a>
        </p>
        <strong>
            <router-view></router-view>
        </strong>
    </div>
    <p class="my-p">
        <router-view></router-view>
    </p>
</template>
<style>
    .my-p{
        text-indent: 2em;
        color: #399;
    }
</style>
<script>
    export default{
        data(){
            return {
                msg:'welcome Home Page'
            }
        }
    }
</script>