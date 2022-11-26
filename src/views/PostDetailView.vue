<template>
  <div class="col-sm-12 col-md-12 col-lg-8">
    <div v-if="post">
      <DetailPost :post="post"></DetailPost>
    </div>
    <div v-else>
      Loading...
      <Loading></Loading>
    </div>
  </div>
  <Sidebar :posts="posts"></Sidebar>
</template>

<script>
import Loading from '../components/Loading'
import Sidebar from '../components/Sidebar'
import DetailPost from '../components/Posts/DetailPost'
import getSinglePost from '@/composables/getSinglePost'
import getAllPost from '@/composables/getAllPost'
// import {useRoute} from 'vue-router'
export default {
  components: {
    Loading,
    Sidebar, DetailPost },
    props: ["id"],
    setup(props) {
      let {posts,loadPosts} = getAllPost();
      loadPosts();
      let {post,error,load} = getSinglePost(props.id);
      load();

      return {
        posts,post,error
      }
    }
}
</script>

<style>

</style>