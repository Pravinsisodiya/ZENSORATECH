const container = document.getElementById("userContainer");

const names = [
"Shantanu",
"Shubham",
"Suraj",
"Sourabh",
"Prachi",
"Krishna",
"Yugal",
"Gagan",
"Pramod",
"Gourav"
];

const cities = [
"Bhopal",
"Indore",
"Bangalore",
"Pune",
"Mumbai",
"Hyderabad",
"Chennai",
"Jaipur",
"Kolkata",
"Delhi"
];

async function loadUsers(){

    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        users.slice(0,10).forEach((user,index)=>{

            const card = document.createElement("div");
            card.className="card";

            const name=document.createElement("h3");
            name.innerText=names[index];

            const email=document.createElement("p");
            email.innerText="Email: "+user.email;

            const city=document.createElement("p");
            city.innerText="City: "+cities[index];

            card.appendChild(name);
            card.appendChild(email);
            card.appendChild(city);

            container.appendChild(card);

        });

    }
    catch(error){

        container.innerHTML="Error loading users";
        console.log(error);

    }

}

loadUsers();