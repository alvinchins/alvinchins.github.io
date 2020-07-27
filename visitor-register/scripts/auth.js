// listen auth change
auth.onAuthStateChanged(user => {
    if (user){
        document.getElementById("login-form").style.display = "none";
        document.getElementById("logout").style.display = "block";
        // get data
        db.collection('visitors').orderBy("date", "desc").get().then(snapshot => {
            setupList(snapshot.docs);
        });
    }else{
        document.getElementById("login-form").style.display = "block";
        document.getElementById("logout").style.display = "none";
        setupList([]);
    }
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password);
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();

    auth.signOut();
});