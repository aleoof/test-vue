<template>
    <div class="column is-12 box">
        <div class="space">
        <div class="level">
            <div class="level-left">
                <p class="level-item">Nome - {{name}}</p>
                <p class="level-item">Idade - {{idade}}</p>
            </div>
            <div class="level-right">
                <p class="level-item" v-if="this.activate">
                    <a class="button" v-on:click="toggleActivate">Desativar</a>
                </p>
                <p class="level-item" v-else>
                    <a class="button" v-on:click="toggleActivate">Ativar</a>
                </p>
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
    props:['name','idade','index','activate'],
    methods: {
        removeUser(){
            this.$emit('removeUser', this.$props.index)
        },
        toggleActivate(){
            let activate = this.$props.activate
            activate = !activate
            this.$emit('toggleActivate', activate)
        }
    }
}
</script>

<style>
/* .space{
    margin:0 1em;
} */
</style>