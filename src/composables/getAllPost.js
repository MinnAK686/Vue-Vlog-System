import { db, collectionRef } from "../firebase/config"
import { onSnapshot } from "firebase/firestore";

import { ref } from "vue"

const getAllPost = () => {
    const posts = ref([]);
    const error = ref("");
    const colRef = ref(null);
    const loadPosts = async () => {
        try {
            onSnapshot(collectionRef, (docs) => {
                docs.forEach(doc => {
                    posts.value.push({id: doc.id, ...doc.data()})
                })
            })
        } catch(e) {
            error.value = e.message;
        }
    }
    return {
        posts,error,loadPosts
    }
}

export default getAllPost