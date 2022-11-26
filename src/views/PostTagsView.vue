<template>
  <Posts :posts="filteredPostTags"></Posts>
  <Sidebar :posts="posts"></Sidebar>
</template>

<script>
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts/Posts'
import getAllPost from '@/composables/getAllPost'
import { computed } from '@vue/runtime-core'
export default {
  components: {
    Sidebar, Posts },
    props: ['tag'],

    setup(props) {
      let {posts,error,loadPosts} = getAllPost();
      loadPosts();
      let filteredPostTags = computed(() => {
        return posts.value.filter(post => {
          return post.tags.includes(props.tag)
        })
      })

      return {posts,filteredPostTags,error}
    }
}
</script>

<style>

</style>