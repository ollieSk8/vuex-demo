/**
 * Created by XD on 2017/3/3.
 */
export default {
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            // 变更状态
            state.count++
        },
        reduce (state) {
            // 变更状态
            state.count--
        }
    },
    actions: {
        increment (context) {
            context.commit('increment')
        },
        reduce (context) {
            context.commit('reduce')
        }
    },
    getters: {
        getCount: state => {
            return state.count;
        }
    }
};