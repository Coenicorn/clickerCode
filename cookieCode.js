document.addEventListener("keydown", (e)=>{
  if (e.key=="z"&&Game.buyMode>0) {Game.storeBulkButton(1);}
});;
document.addEventListener("keyup",(e)=>{
  if (e.key=="z") {Game.storeBulkButton(0)}
});
