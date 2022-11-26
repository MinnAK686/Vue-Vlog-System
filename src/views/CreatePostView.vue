<template>
  <h1 class="text-center">Create Post</h1>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-10 col-sm-8 col-md-7 col-lg-6">
            <form @submit.prevent="createPost">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Post Title</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" v-model="title" required>
                </div>
                <div class="mb-3">
                    <label for="detail" class="form-label">Post Detail</label>
                    <textarea class="form-control" id="detail" v-model="detail" required></textarea>
                </div>
                <div class="mb-3">
                    <label for="category" class="form-label">Category</label>
                    <input type="text" class="form-control" id="category" v-model="category" required>
                </div>
                <div class="mb-3">
                    <label for="tags" class="form-label">Tags (Press Enter key to add Tag)</label>
                    <input type="text" class="form-control" id="category" v-model="tag" @keypress.enter.prevent="addTags">
                </div>
                <div class="mb-3">
                    <span v-for="tag in tags" :key="tag">
                        <span class="badge text-bg-dark m-1">{{tag}}</span>
                    </span>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary">Create Post</button>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router' 
export default {
    
    setup() {
        let router = useRouter();

        let title = ref("");
        let detail = ref("");
        let category = ref("");
        let tag = ref("");
        let tags = ref([]);
        let author = ref("admin");

        let addTags = () => {
            if(!tags.value.includes(tag.value) && tag.value) {
                tags.value.push(tag.value);
            }
            tag.value = "";
            // console.log(tags.value)
        }

        let createPost = async () => {
            await fetch("http://localhost:3000/posts", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    title: title.value,
                    detail: detail.value,
                    category: category.value,
                    tags: tags.value,
                    author: author.value
                })
            })
            router.push("/");
        }

        return {
            title,detail,category,tag,tags,addTags,createPost
        }
    }
}
</script>

<style>

</style>