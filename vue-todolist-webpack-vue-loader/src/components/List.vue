<template>
    <div class="container">
        <table class="table table-bordered table-hover">
            <tr class="btn-danger">
                <th class="text-center">ID</th>
                <th class="text-center">名字</th>
                <th class="text-center">年龄</th>
                <th class="text-center">操作</th>
            </tr>
            <tr class="text-center" v-for="item in list">
                <td>{{$index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.age}}</td>
                <td>
                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target=".bs-example-modal-sm" @click="removeChange($index,'确认删除么?')">删除</button>
                </td>
            </tr>
            <tr>
                <td colspan="4" class="text-right" v-cloak v-show="list.length!=0">
                    <button class="btn btn-danger btn-sm" @click="removeChange(-2,'确认删除全部么?')" data-toggle="modal" data-target=".bs-example-modal-sm">删除全部</button>
                </td>
            </tr>
            <tr>
                <td colspan="4" class="text-center" v-show="list.length==0">
                    <p>暂无数据...</p>
                </td>
            </tr>
        </table>
    </div>
    <Modal :text-tip="textTip" :list.sync="list" :remove-index="removeIndex"></Modal>
</template>
<style>
</style>
<script>
    import Modal from './Modal.vue';
    export default{
        components:{
            Modal
        },
        props:{
            list:Array,
            textTip:String,
            removeIndex:null
        },
        methods:{
            removeChange(n,msg){
                this.textTip=msg;
                this.removeIndex=n;
            }
        }
    }
</script>





















