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
            <span>
                <button class="btn btn-outline-primary">tag one</button>
                <button class="btn btn-outline-primary">tag two</button>
                <button class="btn btn-outline-primary">tag three</button>
            </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>