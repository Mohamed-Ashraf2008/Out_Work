let workOuts = {
    chest:[{name:"incline dumbell press",sets:3,reps:10},{name:"close grip dumbbel press",sets:3,reps:10},{name:"machine flys",sets:3,reps:10},{name:"incline bench press",sets:3,reps:10},{name:"cable flys",sets:3,reps:10}],
    back:[{name:"single arm dumbbell row",sets:3,reps:12},{name:"seated cable row",sets:3,reps:12},{name:"seated cable wide grip",sets:3,reps:12},{name:"wide grip lat pull down",sets:3,reps:12},{name:"single arm rows",sets:3,reps:12},{name:"dumbbell pullover",sets:3,reps:12}],
    legs:[{name:"smith machine squats",sets:2,reps:15},{name:"leg Extension machine",sets:2,reps:15},{name:"leg curl machine"},{name:"leg press machine",sets:2,reps:15},{name:"calf raises",sets:2,reps:15}],
    shoulders:[{name:"shourlder press", sets:3,reps:12},{name:"front raises", sets:3,reps:12},{name:"rear delt raises", sets:3,reps:12},{name:"shrugs",sets:3,reps:12},{name:"front lateral raises",sets:3,reps:12},{name:"seated lateral shoudler raises",sets:3,reps:12}],
    arms:[{name:"bicep curl",sets:3 ,reps:12 },{name:"21's",sets:3,reps:7},{name:"rope curls", sets:2,reps:15},{name:"tricep pushdown var",sets:3,reps:12},{name:"rope tricep pushdown",sets:2,reps:15},{name:"cable kickbacks", sets:3,reps:12}]
}
let logInEl = document.getElementById("logIn");
let navEl = document.querySelector(".nav")
let mas = document.querySelector(".mas")
let customizationEl = document.querySelector(".customization")
let workOutsEl = document.querySelector(".workOuts")
function activate(activeId) {
    // List of all possible links
    const links = ['home', 'calendar', 'customization'];
    // Iterate over each link to update their active state
    links.forEach(link => {
        // Get the elements for the current link
        const activeElement = document.querySelector(`.${link}-a`);
        const inactiveElement = document.querySelector(`.${link}-i`);
        const page = document.querySelector(`.${link}`);
        if (link === activeId) {
            // If it's the active link, show the active icon and hide the inactive icon
            activeElement.style.display = 'block';
            inactiveElement.style.display = 'none';
            page.style.display = 'block';
        } else {
            // Otherwise, hide the active icon and show the inactive icon
            activeElement.style.display = 'none';
            inactiveElement.style.display = 'block';
            page.style.display = 'none';
        }
    });
}
function sign() {
    const signEl = document.getElementById("signUp");
    if (signEl) {
        // Toggle visibility by adding/removing the class
        signEl.classList.toggle("signUpCl");
        activate("home");
        navEl.classList.toggle("navOp");
    }
}
function hasAcc(){
    const signEl = document.getElementById("signUp");
    if (signEl) {
        // Toggle visibility by adding/removing the class
        signEl.classList.toggle("signUpCl");
        logInEl.classList.toggle("logInOP");
    }
}
function hasNoAcc(){
    const signEl = document.getElementById("logInEl");
    signEl.style.display("flex")
    logInEl.style.display("none")
}
function log(){
    const logEl = document.getElementById("logIn");
    let username = document.getElementById('username')
    let password = document.getElementById('password')
    if (username.value == "bootCamp" && password.value == "mrMApro0") {
        // Toggle visibility by adding/removing the class
        logEl.style.display="none"
        navEl.classList.toggle("navOp");

        activate("home");
        customizationEl.innerHTML=`
        <h1>User Name: ${username.value}</h1>
        <h2>Password: ${password.value}</h2>
        `
        putWorkOut()
    }
    else{
        mas.textContent = username.value
    }
}
function putWorkOut() {
    let workOutHTML = ''; // Initialize an empty string to build the HTML content

    // Iterate over each category in the workOuts object
    for (const category in workOuts) {
        if (workOuts.hasOwnProperty(category)) {
            // Get the exercises for the current category
            const exercises = workOuts[category];

            // Iterate over each exercise in the current category
            exercises.forEach(exercise => {
                workOutHTML += `
                    <li class="workOut">
                        <div>
                            <h1 class="workOutName">${exercise.name}</h1>
                            <h2 class="stats">${exercise.sets || 'N/A'} sets of ${exercise.reps || 'N/A'} reps</h2>
                        </div>
                        <div>
                            <a href=""><button class="howTo">How To Do</button></a>
                        </div>
                    </li>`;
            });
        }
    }

    // Set the innerHTML of workOutsEl to the built content
    workOutsEl.innerHTML = workOutHTML;
}

// Optional: Set the initial state if needed
// Example to set 'home' as the initial active ico

 