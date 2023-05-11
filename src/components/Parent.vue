<template lang="pug">
.parent
    div
        p This is a parent component
        Child
</template>

<script>
import Child from './Child.vue'
export default {
    name: 'ParentVue',
    components: {
        Child
    }
}

</script>
