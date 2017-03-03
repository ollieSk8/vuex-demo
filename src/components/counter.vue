<template>
    <div>
        {{count}}
        <button type="button" class="btn btn-primary" @click="add">+</button>
        <button type="button" class="btn btn-primary" @click="reduce">-</button>
    </div>
</template>
<script>
    export default {
        computed:{
            count(){
                return this.$store.getters.getCount;
            }
        },
        methods:{
            add(){
                this.$store.dispatch('increment');
            },
            reduce(){
                this.$store.dispatch('reduce');
            }
        }
    }
</script>
<style>

</style>