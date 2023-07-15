//Dark Mode

let darkMode=()=>{
    document.body.classList.toggle('dark_mode');
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

//scrollpy
document.getElementById('back_top').addEventListener('click', function(e) {
    e.preventDefault(); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Sayfanın en üstüne animasyonlu bir şekilde kaydır
  });

newDate();