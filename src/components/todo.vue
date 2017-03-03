<template>
<div>
    <div class="row">
        <div class="col-md-12" style="margin-bottom:10px;">
            <input class="form-control" placeholder="please enter some todo" v-model="newTodo"  @keyup.enter="addTodo"></div><br>
        <div class="col-md-12">
            <ul class="list-group">
                <li class="list-group-item" v-for="(todo,index) in alltodos">
                    <div class="row">
                        <div class="col-md-8"  >
                             <span v-show="!todo.canEdit" @click="editTodo(index)">{{todo.text}}</span>
                             <input type="text" class="form-control" v-model="todo.text" v-show="todo.canEdit"  @keyup.enter="confirmChange(index,todo)">
                        </div>
                        <div class="col-md-4"> <button type="button" class="btn btn-danger pull-right" @click="deleteTodo(index)">X</button></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>

</template>
<script>
    export default {
        data(){
           return {
               newTodo:''
           }
        },
        computed:{
            alltodos(){
                return this.$store.getters.getAllTodo;
            }
        },
        methods:{
            addTodo(){
                let newTodo=this.newTodo;
                this.$store.dispatch('addTodo',newTodo);
                this.newTodo='';
            },
            deleteTodo(index){
                this.$store.dispatch('deleteTodo',index);
            },
            editTodo(index){
                this.$store.dispatch('editTodo',index);
            },
            confirmChange(index,todo){
                var obj={
                    'index':index,
                    'todo':todo
                }
                this.$store.dispatch('confirmChange',obj);
            }
        }
    }
</script>
<style lang="scss">
    #app{
        width:400px;

    }
    .list-group-item{display:block;height:60px;line-height:40px;font-size:20px;}
</style>