<template>
    <div id="box">
        <ul>
            <li><a v-link="{path:'/home', activeClass:'active'}">主页</a></li>
            <li><a v-link="{path:'/about', activeClass:'active'}">关于我们</a></li>
        </ul>
        <router-view></router-view>

        <div class="show">
            <p>当前路径：<code>{{$route.path}}</code></p>
            <p>当前参数：<code>{{$route.params | json}}</code></p>
            <p>路由名称：<code>{{$route.name}}</code></p>
            <p>路由查询参数：<code>{{$route.query | json}}</code></p>
            <!--<p>路由匹配项：<code>{{$route.matched | json}}</code></p>-->
        </div>
    </div>
</template>
<style>
    .v-link-active{
        font-size: 20px;
        color: #f60;
    }
    .active{
        background: #399;
        color: #fff;
        display: block;
    }
    .show{
        color: #f00;
    }
</style>
<script>

</script>
