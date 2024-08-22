let workOuts = {
    chest: [{ name: "incline dumbell press", sets: 3, reps: 10, link: "https://youtu.be/oZVCBM9f8Eo" }, { name: "close grip dumbbel press", sets: 3, reps: 10, link: "https://youtu.be/eebXpmPGy2Y" }, { name: "machine flys", sets: 3, reps: 10, link: "https://youtu.be/eGjt4lk6g34" }, { name: "incline bench press", sets: 3, reps: 10, link: "https://youtu.be/oZVCBM9f8Eo" }, { name: "cable flys", sets: 3, reps: 10, link: "https://youtu.be/QcTcWpkn_bw" }],
    back: [{ name: "single arm dumbbell row", sets: 3, reps: 12,link:"https://youtu.be/ZRSGpBUVcNw"}, { name: "seated cable row", sets: 3, reps: 12,link:"https://youtu.be/lJoozxC0Rns"}, { name: "seated cable wide grip", sets: 3, reps: 12,link:"https://youtu.be/sjJ0z4R3w0M"}, { name: "wide grip lat pull down", sets: 3, reps: 12,link:"https://youtu.be/7JnP8dFbS14" }, { name: "dumbbell pullover", sets: 3, reps: 12 ,link:"https://youtu.be/FK4rHfWKEac" }],
    legs: [{ name: "smith machine squats", sets: 2, reps: 15,link:"https://youtu.be/-eO_VydErV0" }, { name: "leg Extension machine", sets: 2, reps: 15, link:"https://youtu.be/MpEydcQ1oDw"}, { name: "leg curl machine",sets: 2, reps: 15,link:"https://youtu.be/qca__Qgjf1Y" }, { name: "leg press machine", sets: 2, reps: 15,link:"https://youtu.be/p5dCqF7wWUw" }, { name: "calf raises", sets: 2, reps: 15,link:"https://youtu.be/k8ipHzKeAkQ"}],
    shoulders: [{ name: "shourlder press", sets: 3, reps: 12,link:"https://youtu.be/WvLMauqrnK8"}, { name: "front raises", sets: 3, reps: 12,link:"https://youtu.be/hRJ6tR5-if0"}, { name: "rear delt raises", sets: 3, reps: 12,link:"https://youtu.be/p1yQnTNE808" }, { name: "shrugs", sets: 3, reps: 12, link:"https://youtu.be/_t3lrPI6Ns4"}, { name: "front lateral raises", sets: 3, reps: 12,link:"https://youtu.be/hRJ6tR5-if0"}, { name: "seated lateral shoudler raises", sets: 3, reps: 12, link:"https://youtu.be/xDrYB81QXmY"}],
    arms: [{ name: "bicep curl", sets: 3, reps: 12,link:"https://youtu.be/ykJmrZ5v0Oo"}, { name: "21's", sets: 3, reps: 7,link:"https://youtu.be/qf6KO7qKFRI" }, { name: "rope curls", sets: 2, reps: 15,link:"https://youtu.be/2CDKTFFp5fA" }, { name: "tricep pushdown var", sets: 3, reps: 12,link:"https://youtu.be/LXkCrxn3caQ" }, { name: "cable kickbacks", sets: 3, reps: 12 ,link:"https://youtu.be/ifP5sFBT7IE"}]
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
        const inactiveElement = document.querySelector(`.${link}-i`)
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
        putWorkOut()
    }
}
function hasAcc() {
    const signEl = document.getElementById("signUp");
    if (signEl) {
        // Toggle visibility by adding/removing the class
        signEl.classList.toggle("signUpCl");
        logInEl.classList.toggle("logInOP");
    }
}
function hasNoAcc() {
    const signEl = document.getElementById("logInEl");
    signEl.style.display("flex")
    logInEl.style.display("none")
}
function log() {
    const logEl = document.getElementById("logIn");
    let username = document.getElementById('username')
    let password = document.getElementById('password')
    if (username.value == "bootCamp" && password.value == "mrMApro0") {
        // Toggle visibility by adding/removing the class
        logEl.style.display = "none"
        navEl.classList.toggle("navOp");

        activate("home");
        customizationEl.innerHTML = `
        <h1>User Name: ${username.value}</h1>
        <h2>Password: ${password.value}</h2>
        `
        putWorkOut()
    }
    else {
        mas.textContent = "Wrong Username or Password"
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
                            <a href="${exercise.link}"><button class="howTo">How To Do</button></a>
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

