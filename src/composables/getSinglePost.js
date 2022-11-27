import { db, collectionRef } from "@/firebase/config";
import { onSnapshot, doc } from "firebase/firestore";

import { ref } from "vue"

const getAllPost = (id) => {
    const post = ref(null);
    const error = ref("");

    const load = async () => {
        try {
            let docRef = doc(collectionRef,id)
            onSnapshot(docRef, (doc) => {
                post.value = {id: doc.id, ...doc.data()}
            })
        } catch(e) {
            error.value = e.message;
        }
    }
    return {
        post,error,load
    }
}

export default getAllPost