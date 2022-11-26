// import { reject,resolve } from "core-js/fn/promise";
// import { Promise } from "core-js/core";
import { ref } from "vue"

const getAllPost = () => {
    const posts = ref([]);
    const error = ref("");
    const loadPosts = async () => {
        try {
            let res = await fetch("http://localhost:3000/posts");
            if(res.status === 404) {
                throw new Error("404 Posts Not Found!")
            }
            const data = await res.json();
            posts.value = data;
        } catch(e) {
            error.value = e.message;
        }
    }
    return {
        posts,error,loadPosts
    }
}

export default getAllPost