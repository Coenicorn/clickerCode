// adds a shortcut for selling items, as I don't think there is one, there might be tho
document.addEventListener("keydown", (e)=>{
  if (e.key=="z"&&Game.buyMode>0) {Game.storeBulkButton(1);}
});
document.addEventListener("keyup",(e)=>{
  if (e.key=="z") {Game.storeBulkButton(0)}
});

// display the amount wrinklers have sucked
(function () {
    if (!Game.wrinklers.length) return;
    var b = document.createElement("h1");
    b.innerHTML = "Coenicorn test";
    b.style.color = "yellow";
    b.style.position = "relative";
    b.style.top = "250px";
    b.style.fontSize = "20px";
    b.style.zIndex = 9999999999999;
    document.getElementById("sectionLeft").appendChild(b);
    function update() {
        var t = "Wrinklers have sucked ";
        var tt = 0;
        for (var i = 0; i < Game.wrinklers.length; i++) {
            var c = Game.wrinklers[i];
            tt += c.sucked;
        };
        t += Beautify(tt) + " cookies";
        b.innerHTML = t;
        requestAnimationFrame(update);
    }; 
    update();
})();

// scream
alert("Code added succesfully!");
