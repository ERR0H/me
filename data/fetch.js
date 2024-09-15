const file = "/data/u.json";
const div = document.querySelector("#user-pf");

fetch(file)
    .then(Response => Response.json())
