console.log("We in the browser foo");

fetch("/api").then(res => res.json()).then(data => console.log(data));
fetch("/data.json").then(res => res.json()).then(data => console.log(data));