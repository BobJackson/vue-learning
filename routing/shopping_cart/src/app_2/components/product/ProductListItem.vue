<template>
  <div>
    <h2 class="has-text-weight-bold">
      <router-link :to="'/products/' + productItem.id">
        {{ productItem.title }}
      </router-link>
      <span
        @click="addCartItem(productItem)"
        class="tag is-primary is-pulled-right has-text-white">
        Add to Cart
      </span>
    </h2>
    <p>{{ productItem.description }}</p>
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-usd"/> {{ productItem.price }}
    </span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductListItem',
  props: ['productItem'],
  methods: {
    ...mapActions([
      'addCartItem'
    ])
  }
}
</script>

<style scoped>
.tag {
  cursor: pointer;
}
</style>
