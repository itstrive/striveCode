<template>
    <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-index="{{removeIndex}}">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="myModalLabel">{{textTip}}</h4>
                </div>
                <div class="modal-body text-right">
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click="removeMsg(removeIndex)">确认</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
</style>
<script>
    export default{
        props:{
            textTip:String,
            list:Array,
            removeIndex:null
        },
        methods:{
            removeMsg(n){
                if(n==-2){
                    this.list=[];
                }else{
                    this.list.splice(n,1);
                }
            }
        }
    }
</script>





















