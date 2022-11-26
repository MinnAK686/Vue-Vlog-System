<template>
  <div class="col-sm-12 col-md-12 col-lg-8">
    <div v-if="posts.length > 0">
      <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post"></SinglePost>
      </div>
    </div>
    <div v-else>
      <Loading></Loading>
    </div>
  </div>
</template>

<script>
import Loading from '../Loading'
import SinglePost from './SinglePost'

export default {
  props: ["posts"],
  components: {
    Loading, SinglePost },

  setup() {
    
  }
}
</script>

<style>

</style>