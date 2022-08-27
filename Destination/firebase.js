import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';
import { getDatabase, ref, set, child, update, remove, onValue, push } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";

const firebaseApp = initializeApp({
        apiKey: "AIzaSyBso6HyS60ohZFE-tXJQB2SyD4FJuGoNpg",
        authDomain: "login-a912a.firebaseapp.com",
        projectId: "login-a912a",
        storageBucket: "login-a912a.appspot.com",
        messagingSenderId: "550398747095",
        appId: "1:550398747095:web:cb44f6f9fb9530c46aeb92",
        measurementId: "G-EMF6ZZPDX0"
  });

  var adm;
  const auth = getAuth(firebaseApp);
  onAuthStateChanged(auth, (user) => {
    if(!user){
        location.replace("index.html")
    }else{
        //document.getElementById("user").innerHTML = "Hello, "+user.email
        adm = (user.email);
        //adm=document.getElementById('user.email');
        //document.getElementById("user1").innerHTML = "Hello, "+adm;
        console.log(adm)
    }
});
onAuthStateChanged(auth,(user)=>{
    console.log("hello, "+adm);

const konark = {
    email: adm,
    place1: "Jaydev vatika-Park",
    place2: "Dopia Cafe",
    place3: "Mukteshwar temple",
    place4: "Raghurajpur Artist Village",
    place5: "Chilka lake wildlife sanctuary"
  }
  const jagannath = {
    email: adm,
    place1: "Grovis Village",
    place2: "Utkal Galaria",
    place3: "Vimala Temple",
    place4: "Gundisha Temple",
    place5: "Baleshwar Beach"
  }
  const lingraj = {
    email: adm,
    place1: "Khandigiri",
    place2: "Udaygiri",
    place3: "Deras Dam",
    place4: "Iskon Temple",
    place5: "Khau Gali"
  }
  const rammandir ={
    email: adm,
    place1: "Boka Cafe",
    place2: "ESPLANADE",
    place3: "Baitala Temple",
    place4: "Chocolate House",
    place5: "Jugaad Junction"
  }
  
  const app = firebaseApp;
  const db = getDatabase();
    set(ref(db), {
      Konark: konark,
      Jagannath: jagannath,
      Lingraj:lingraj,
      Rammandir:rammandir
    });
    //update(ref(db), konark) 
    onValue(ref(db,"Konark/place1"), (snapshot) => {
      document.getElementById("konar0").innerHTML=snapshot.val()
    });
    onValue(ref(db,"Konark/place2"), (snapshot) => {
      document.getElementById("konar1").innerHTML=snapshot.val()
    });
    onValue(ref(db,"Konark/place3"), (snapshot) => {
      document.getElementById("konar2").innerHTML=snapshot.val()
    });
    onValue(ref(db,"Konark/place4"), (snapshot) => {
      document.getElementById("konar3").innerHTML=snapshot.val()
    });
    onValue(ref(db,"Konark/place5"), (snapshot) => {
      document.getElementById("konar4").innerHTML=snapshot.val()
    });
  
      onValue(ref(db,"Jagannath/place1"), (snapshot) => {
        document.getElementById("jaga0").innerHTML=snapshot.val()
      });
      onValue(ref(db,"Jagannath/place2"), (snapshot) => {
        document.getElementById("jaga1").innerHTML=snapshot.val()
      });
      onValue(ref(db,"Jagannath/place3"), (snapshot) => {
        document.getElementById("jaga2").innerHTML=snapshot.val()
      });
      onValue(ref(db,"Jagannath/place4"), (snapshot) => {
        document.getElementById("jaga3").innerHTML=snapshot.val()
      });
      onValue(ref(db,"Jagannath/place5"), (snapshot) => {
        document.getElementById("jaga4").innerHTML=snapshot.val()
      });
    
      onValue(ref(db,"Lingraj/place1"), (snapshot) => {
        document.getElementById("ling0").innerHTML=snapshot.val()
      });
      onValue(ref(db,"Lingraj/place2"), (snapshot) => {
        document.getElementById("ling1").innerHTML=snapshot.val()
      });
      onValue(ref(db,"Lingraj/place3"), (snapshot) => {
        document.getElementById("ling2").innerHTML=snapshot.val()
      });
      onValue(ref(db,"Lingraj/place4"), (snapshot) => {
        document.getElementById("ling3").innerHTML=snapshot.val()
      });
      onValue(ref(db,"Lingraj/place5"), (snapshot) => {
        document.getElementById("ling4").innerHTML=snapshot.val()
      });

      onValue(ref(db,"Rammandir/place1"), (snapshot) => {
        document.getElementById("ram0").innerHTML=snapshot.val()
      });
      onValue(ref(db,"Rammandir/place2"), (snapshot) => {
        document.getElementById("ram1").innerHTML=snapshot.val()
      });
      onValue(ref(db,"Rammandir/place3"), (snapshot) => {
        document.getElementById("ram2").innerHTML=snapshot.val()
      });
      onValue(ref(db,"Rammandir/place4"), (snapshot) => {
        document.getElementById("ram3").innerHTML=snapshot.val()
      });
      onValue(ref(db,"Rammandir/place5"), (snapshot) => {
        document.getElementById("ram4").innerHTML=snapshot.val()
      });
});

document.getElementById("logout").addEventListener('click',function logout(){
    signOut(auth)
  });