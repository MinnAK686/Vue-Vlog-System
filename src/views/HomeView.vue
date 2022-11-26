<template>
    <!-- Posts -->
  <Posts :posts="posts"></Posts>

  <!-- Sidebar -->
  <Sidebar :posts="posts"></Sidebar>

</template>

<script>
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts/Posts'
// @ is an alias to /src
import getAllPost from '@/composables/getAllPost'


export default {
  name: 'HomeView',
  components: {
    Sidebar,
    Posts,    
  },
  setup() {
    let {posts,error,loadPosts} = getAllPost();
    loadPosts();
  

    return {
      posts,error
    }
  }

}
</script>
