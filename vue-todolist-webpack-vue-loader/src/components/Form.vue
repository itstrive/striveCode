<template>
    <div class="container">
        <form role="form">
            <div class="form-group">
                <label for="username">用户名:</label>
                <input type="text" id="username" class="form-control" placeholder="填写用户名" v-model="userName" />
            </div>
            <div class="form-group">
                <label for="age">年　龄:</label>
                <input type="text" id="age" class="form-control" placeholder="填写年龄" v-model="age" @keyup.enter="addMsg()">
            </div>
            <div class="form-group">
                <input type="button" class="btn btn-primary" value="添加" @click="addMsg()">
                <input type="reset" class="btn btn-default" value="重置">
            </div>
        </form>
    </div>
</template>
<style>
</style>
<script>
    export default{
        props:{
            userName:String,
            age:String,
            list:Array
        },
        methods:{
            addMsg(){
                this.list.push({
                    name:this.userName,
                    age:this.age
                });

                this.userName='';
                this.age='';
            }
        }
    }
</script>




















