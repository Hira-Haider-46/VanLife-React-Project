import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "react-vanlife-project.firebaseapp.com",
    projectId: "react-vanlife-project",
    storageBucket: "react-vanlife-project.appspot.com",
    messagingSenderId: "35842905783",
    appId: "1:35842905783:web:d8f5b4ae490ce7acdedf32"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    console.log("vans")
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans;
}

export async function getVan(id) {
    console.log("van")
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log("successfully rendered host vans")
    return vans
}

export async function loginUser(creds) {
    if (process.env.NODE_ENV === "production") {
        return {
            user: { email: creds.email, name: "Simulated User" },
            token: "simulated-token"
        };
    }

    try {
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(creds),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let data;
        const contentType = res.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
            data = await res.json();
        } else {
            data = { message: "No JSON response from server" };
        }

        if (!res.ok) {
            throw {
                message: data.message || "An error occurred",
                statusText: res.statusText,
                status: res.status
            };
        }

        return data;
    } catch (error) {
        console.error('Error in loginUser:', error);
        throw {
            message: error.message || "An unexpected error occurred",
            statusText: error.statusText,
            status: error.status
        };
    }
}