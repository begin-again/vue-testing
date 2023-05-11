
<template lang="pug">
.nav
    nav
        a(id="home") Home
        a(v-if="isLoggedIn" id="profile") My Profile
</template>

<script>
export default {
    name: 'NavVue',
    data() {
        return {
        isLoggedIn: false

        }
    }
}
</script>

<style scoped>

</style>
