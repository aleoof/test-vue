<template>
    <div class="column is-12 box">
        <div class="space">
        <div class="level">
            <div class="level-left">
                <p class="level-item">Nome - {{name}}</p>
                <p class="level-item">Idade - {{idade}}</p>
            </div>
            <div class="level-right">
                <p class="level-item">
                    <a class="button" v-on:click="removeUser">Remover</a>
                </p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Items',
    props:['name','idade','index'],
    methods: {
        removeUser(){
            this.$emit('removeUser', this.$props.index)
        }
    }
}
</script>

<style>
/* .space{
    margin:0 1em;
} */
</style>