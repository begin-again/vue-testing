<template lang="pug">
.message
    h1 {{ msg }}
</template>

<script>
export default {
    name: 'MessageVue',
    props: {
       // eslint-disable-next-line vue/require-default-prop
       msg: String
    }
}

</script>
