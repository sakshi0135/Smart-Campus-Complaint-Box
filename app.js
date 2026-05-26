import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// 🔴 PASTE YOUR OWN FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyDRQgP8gk-3yzSOQDIvxiku5N0TV0H54b0",
    authDomain: "http://smart-campus-complaint-box.firebaseapp.com/",
    projectId: "smart-campus-complaint-box",
    appId: "1:686027057222:web:c8ba711c9bf6ba14d74247"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("complaintForm");

// SUBMIT COMPLAINT
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  await addDoc(collection(db, "complaints"), {
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    location: document.getElementById("location").value,
    description: document.getElementById("description").value,
    status: "Pending",
    time: new Date()
  });

  alert("✅ Complaint submitted and saved to Firebase!");
  form.reset();
});
