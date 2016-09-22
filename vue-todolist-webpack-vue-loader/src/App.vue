<template>
    <my-form :user-name="username" :age="age" :list="msgArr"></my-form>
    <my-list :list.sync="msgArr":text-tip="textMessage" :remove-index="removeIndex"></my-list>
</template>
<style>
</style>
<script>
    import Form from './components/Form.vue';
    import List from './components/List.vue';
    export default{
        data(){
            return {
                msgArr:[],
                textMessage:'确认删除么?',
                removeIndex:-100,
                userName:'',
                age:''
            }
        },
        components:{
            'my-form':Form,
            'my-list':List
        }
    }
</script>






















