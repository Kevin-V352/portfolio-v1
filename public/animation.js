const animation = bodymovin.loadAnimation({
    container: document.getElementById("loader"),
    rendered: "svg",
    loop: true,
    autoplay: true,
    path: "data.json"
});