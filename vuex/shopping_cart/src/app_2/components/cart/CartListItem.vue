<template>
    <div>
        <p class="cart-item--title is-inline">The Fullstack Hoodie</p>
        <div class="is-pulled-right">
            <i class="fa fa-arrow-circle-up cart-item--modify"/>
            <i class="fa fa-arrow-circle-down cart-item--modify"/>
        </div>
        <div class="cart-item--content">
                        <span class="cart-item--price
                            has-text-primary
                            has-text-weight-bold">
                          19.99$ each
                        </span>
            <span class="cart-item--quantity
                            has-text-grey
                            is-pulled-right">
                          Quantity: 2
                        </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartListItem"
    }
</script>

<style scoped>

</style>