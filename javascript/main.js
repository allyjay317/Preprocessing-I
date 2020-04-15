var coll = document.getElementById("collapse");
var i;

    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibliing;
        if(content.style.display = "block"){
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });

// function collapse(){
//     this.classList.toggle("active");
//         var content = document.getElementById("menu");
//         if(content.style.display = "block"){
//             content.style.display = "none";
//         } else {
//             content.style.display = "block";
//         }
// }