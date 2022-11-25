<template>
    <!-- Posts -->
  
  <Posts></Posts>
  <Sidebar></Sidebar>

</template>

<script>
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts/Posts'
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    Sidebar,
    Posts,
    
  }
}
</script>
