import { ref } from "vue"

const getAllPost = (id) => {
    const post = ref({});
    const error = ref("");

    const load = async () => {
        try {
            let res = await fetch(`http://localhost:3000/posts/${id}`);
            if(res.status === 404) {
                throw new Error("404 Post Not Found!")
            }
            const data = await res.json();
            post.value = data;
        } catch(e) {
            error.value = e.message;
        }
    }
    return {
        post,error,load
    }
}

export default getAllPost