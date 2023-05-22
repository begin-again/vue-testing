<template lang="pug">
#increment
    v-card(data-testid="increment-card")
        v-card-title
        v-card-actions
            v-spacer
            v-btn(data-testid="increment-button")
</template>



<script>
export default {
    name: 'IncrementVue',
};
</script>
