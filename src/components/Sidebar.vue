<template>
  <!-- Sidebar -->
    <div class="col-sm-12 col-md-12 col-lg-4 mt-4 mt-lg-0 sidebar">
        <form>
            <input type="search" class="form-control" placeholder="Search ...">
        </form>
        <div class="recent-posts">
            <h4>Recent Posts</h4> <hr>
            <div class="recent-post">
            <h5>
                <router-link to="/">Suspendisse et metus nec libero ultrices varius eget in risus</router-link>
            </h5>
            <p>19/11/2022</p>
            </div>
            <div class="recent-post">
            <h5>
                <router-link to="/">Suspendisse et metus nec libero ultrices varius eget in risus</router-link>
            </h5>
            <p>19/11/2022</p>
            </div>
            <div class="recent-post">
            <h5>
                <router-link to="/">Suspendisse et metus nec libero ultrices varius eget in risus</router-link>
            </h5>
            <p>19/11/2022</p>
            </div>
        </div>
        <div class="categories">
            <h4>Categories</h4> <hr>
            <ul>
            <li>
                <router-link to="/">technology</router-link>
            </li>
            <li>
                <router-link to="/">lifestyle</router-link>
            </li>
            <li>
                <router-link to="/">creative ideas</router-link>
            </li>
            <li>
                <router-link to="/">creative and unique</router-link>
            </li>
            </ul>
        </div>
        <div class="tag-clouds">
            <h4>Tag Clouds</h4> <hr>
            <div class="tags">
                <span v-for="tag in uniqueTags" :key="tag">
                    <span>
                        <router-link :to="{name: 'tags',params: {tag}}" class="btn btn-outline-primary">{{tag}}</router-link>
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    props: ["posts"],
    setup(props) {
        let posts = props.posts;
        let tags = ref([])
        let uniqueTags = ref([]);
        posts.forEach(post => { 
            post.tags.forEach(tag => {
                tags.value.push(tag);
            }) 
        })
        uniqueTags.value = tags.value.filter((tag,index,array) => {
            return array.indexOf(tag) === index; 
        })

        return {
            uniqueTags
        }
    }
}
</script>

<style>

</style>