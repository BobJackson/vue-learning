<template>
    <div id="app">
        <div class="container">
    <div class="columns">
        <div class="column is-3">
            <CartList/>
        </div>
        <div class="column is-9">
            <ProductList/>
        </div>
    </div>
</div>
    </div>
</template>

<script>
    import ProductList from "./components/product/ProductList";
    import CartList from "./components/cart/CartList";

    export default {
        name: "App",
        components: {ProductList, CartList}
    }
</script>

<style>
    html,
    body {
        background: #f2f6fa;
    }

    #app {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-width: 769px) {
        html,
        body {
            height: 100%;
        }
    }
</style>