const file = "/data/u.json";
const div = document.querySelector("#user-pf");

fetch(file)
    .then(Response => Response.json())
    .then(data => {
        data.forEach(user => {
            const u = document.createElement("div");
            u.classList.add("user-pf");
            u.innerHTML = `
            <img class="banner" src="${user.banner}" alt="">
            <div class="av-na">
            <img class="avatar" src="${user.avatar}" alt="">
            <h2>${user.name}</h2>
            </div>
            `;
            div.appendChild(u);
        });
    })