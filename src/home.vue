<template>
    <div>
        <ul class="list-group">
            <router-link :to="{name:'counter'}"><li class="list-group-item">counter</li></router-link>
            <router-link :to="{name:'todo'}"><li class="list-group-item">todo</li></router-link>
        </ul>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="scss">

</style>