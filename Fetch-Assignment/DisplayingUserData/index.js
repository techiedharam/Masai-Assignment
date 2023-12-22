const form = document.getElementById('userForm');
const loading = document.querySelector('.loading');
const rootElement = document.querySelector('.container')
form.addEventListener('submit' , (e)=> {
    e.preventDefault();
    rootElement.innerHTML = "";
    setTimeout(fetchData , 3000);
    loading.classList.add('visibility')
})


// const h1 = document.getElementById("head");

function ShowUserData(userList) {
    loading.classList.remove('visibility');
    // finalResponse is a Object, It has Array of Object as well
    userList.data.forEach(function(user) {
        let userCard = document.createElement("div");
            userCard.className = "user-card";

        let userId = document.createElement('div');
            userId.className = "userId";
            userId.textContent = `# ${user.id}`;

        let userImg = document.createElement('img');
            userImg.src = user.avatar;

        let userFirstName =  document.createElement('h3');
            userFirstName.textContent = user.first_name;
        
        let userLastName =  document.createElement('h3');
            userLastName.textContent = user.last_name; 
        
        let userEmail = document.createElement('p');
            userEmail.textContent  = user.email;

        userCard.append(
        userId,
        userImg,
        userFirstName,
        userLastName,
        userEmail
        );
        rootElement.append(userCard);
    });
}

const API_URL = 'https://reqres.in/api/users';
async function fetchData() {
    try {
        const response = await fetch(API_URL);
        const finalResponse = await response.json();
        ShowUserData(finalResponse);
    } catch (err) {
        h1.textContent = "Something Went Wrong";
    }
}


// Clear User JS 
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click' , ()=> {
    rootElement.innerHTML = "";
})
