let MainBody = document.querySelector('body');
const button = document.getElementById('btn');
const moonDiv = document.getElementById('moon-icon');
const sunDiv = document.getElementById('sun-icon');

const moonIcon = document.getElementById('moon');
const sunIcon = document.getElementById('sun');

// Check the stored theme mode on page load
let themeMode = localStorage.getItem('themeMode');

// Apply the corresponding styles based on the theme mode
if (themeMode === 'dark') {
    MainBody.style.backgroundColor = '#1a202c';
    MainBody.style.color = 'white';
    moonDiv.style.visibility = 'hidden';
    sunDiv.style.visibility = 'visible';
} else {
    // Default to light mode
    MainBody.style.backgroundColor = 'white';
    MainBody.style.color = '#1a202c';
    sunDiv.style.visibility = 'hidden';
    moonDiv.style.visibility = 'visible';
}

moonIcon.addEventListener('click' , () => {
    // if (themeMode === 'light') {
        localStorage.setItem('themeMode' , 'dark');
        MainBody.style.backgroundColor ='#1a202c';
        MainBody.style.color = 'white';
        moonDiv.style.visibility = 'hidden';
        sunDiv.style.visibility = 'visible';
    
});

sunIcon.addEventListener('click' , () => {
        localStorage.setItem('themeMode' , 'light');
        MainBody.style.backgroundColor = 'white';
        MainBody.style.color = '#1a202c';
        sunDiv.style.visibility = 'hidden';
        moonDiv.style.visibility = 'visible';
});

// Form JS with Local Storage 
const inputForm = document.getElementById("input-form");
const userName = document.getElementById('name');
const userAge = document.getElementById('age');


inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Your alert message
    let userData = JSON.parse(localStorage.getItem("userData")) ?? [];
    let obj = {
        name : userName.value , 
        age: userAge.value
    }
    userData.push(obj);
    localStorage.setItem("userData", JSON.stringify(userData));
    
    document.getElementById('submitMsg').classList.remove('visibility')
    setTimeout(()=> {
        document.getElementById('submitMsg').classList.add('visibility') 
        userName.value = "" ;      
        userAge.value = ""  ;     
    } , 1500)
    setTimeout(()=> {
        document.getElementById('submitMsg').classList.remove('visibility')        
    } , 5000)
    
    // You can add additional logic here to handle the form data or perform other actions
});



// Get Information from Local Stoprage 
const tableBody = document.getElementById('tableBody');
const displayBtn = document.getElementById('getData');


displayBtn.addEventListener('click' , () => {
    tableBody.innerHTML = " ";
    let userData = JSON.parse(localStorage.getItem("userData")) ?? [];
    userData.forEach(element => {
        
        const displayRow = document.createElement('tr');
        const displayName = document.createElement('td');
        const displayAge = document.createElement('td');
                displayName.textContent = element.name;
                displayAge.textContent = element.age;
        displayRow.append (
            displayName,
            displayAge
        )
        tableBody.append(
            displayRow
        )
    });
})


/* ------------clear the localStorage ------------*/
const clearBtn = document.getElementById('clearData');
clearBtn.addEventListener('click',()=> {
    localStorage.clear('userData');
    tableBody.innerHTML = " ";
    userName.value = "" ;      
    userAge.value = ""  ;  
})