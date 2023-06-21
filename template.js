//Dark Mode

let darkModu=()=>{
    window.document.classList.toggle('dark-mode');
}

//input search
$(document).ready(function(){
const searchApi=["adana", "balıkesir","Çorum", "denizli", "edirne", "malatya"];
$("#tags").autocomplete({
        source:searchApi
    });
});


//Footer
let newDate=()=>{
    const date=new Date().getFullYear();
    // JS DOM 
    document.getElementById("date_id").innerHTML = date;

    //Jquery DOM
    $("#date_id").html(date);
}

newDate();