/**
 * Created by XD on 2017/3/3.
 */
export default {
    state: {
        todos:[{text:'vue',canEdit:false},{text:'react',canEdit:false},{text:'angular',canEdit:false}]
    },
    mutations: {
        deleteTodo(state,index){
            state.todos.splice(index,1);
        },
        addTodo(state,newTodo){
            state.todos.push({text:newTodo,canEdit:false});
        },
        editTodo(state,index){
            state.todos[index].canEdit=!state.todos[index].canEdit;
        },
        confirmChange(state,obj){
            let index=obj.index;
            let todo=obj.todo;
            state.todos[index]=todo;
            state.todos[index].canEdit=false;

        }
    },
    actions: {
        deleteTodo({commit},index){
            commit('deleteTodo',index);
        },
        addTodo({commit},newTodo){
            commit('addTodo',newTodo);
        },
        editTodo({commit},index){
            commit('editTodo',index);
        },
        confirmChange({commit},obj){
            commit('confirmChange',obj);
        }
    },
    getters: {
        getAllTodo: state => {
            return state.todos;
        }
    }
};