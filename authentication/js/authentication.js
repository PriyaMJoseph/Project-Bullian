function showLogin(){
    document.getElementById('log-in').classList.remove('hide-section');
    document.getElementById('sign-up').classList.add('hide-section');
}
function showSignUp(){
    document.getElementById('log-in').classList.add('hide-section');
    document.getElementById('sign-up').classList.remove('hide-section');
}

let logins = [
    {
        email: "test1@test.com",
        password: "test@12345",
        type: "teacher"
    }, {
        email: "test2@test.com",
        password: "test@12345",
        type: "teacher"
    }, {
        email: "test3@test.com",
        password: "test@12345",
        type: "student"

    }, {
        email: "test4@test.com",
        password: "test@12345",
        type: "student"
    }, {
        email: "test5@test.com",
        password: "test@12345",
        type: "student"
    }
];

const signIn = (e) => {
    e.preventDefault();
    let username = document.getElementById('signin-user').value;
    let pass = document.getElementById('signin-passwd').value;
    let isExistingUser = false;
    logins.map((credentials, index) => {
        if((username !== null && username !== undefined && username !== "" && pass !== null && pass !== undefined && pass !== "") 
            && credentials.email === username && credentials.password === pass){
            document.getElementById('login-status').innerHTML = "<h4>You are logged in as "+credentials.email+"</h4>";
            isExistingUser = true;
            if(credentials.type === "teacher"){
                document.location.href = '../teacher/teacher.html';
            }else{
                document.location.href = '../student/student.html';
            }
        }
    })
}

const signUp = (e) => {
    e.preventDefault();
    let username = document.getElementById('signup-user').value;
    let pass = document.getElementById('signup-passwd').value;
    let confPass = document.getElementById('signup-conf-passwd').value;
    if((username !== null && username !== undefined && username !== "" && pass !== null && pass !== undefined && pass !== "" && confPass !== null && confPass !== undefined && confPass !== "")){
        if(pass === confPass){
            let isExistingUser = false;
            logins.map((credentials, index) => {
                if(credentials.email === username){
                    isExistingUser = true;
                }
            }) 
            if(!isExistingUser){
                logins.push({
                    email: username,
                    password: pass,
                    type: "student"
                })
                document.getElementById('login-status').innerHTML = "<h4>You are signed up and logged in as "+username+"</h4>";
            }else{
                document.getElementById('login-status').innerHTML = "<h4>You are already signed up. Please login using your credentials.</h4>";
            }
        }else{
            document.getElementById('login-status').innerHTML = "<h4>Please re-enter the same password</h4>";

        }
    }

}