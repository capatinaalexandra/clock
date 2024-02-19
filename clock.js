
function setClock() {
    //furnizam data si timpul aferente celor de la laptop prin crearea unui nou obiect
    let time=new Date();
  //furnizam ora, minutele si secundele de la calculator
    let h=time.getHours()
    let m =time.getMinutes()
    let s=time.getSeconds()
    let timeoftheday="AM"
    //verificam daca ora este 00, daca da, atunci o transaformam in ora 12
     if(h===0){
         h=12
     }
    //verificam daca ora este mai mare de 12, daca da, scadem  din ora prezenta, 12 ore si modificam in PM
     if(h>12){
      h=h-12
         timeoftheday="PM"
    }

    if(h<10){
        h="0"+h
    }else {
        h=h
    }

    if(m<10){
        m="0"+m
    }else{
        m=m
    }

    if(s<10){
        s="0"+ s
    }else{
        s=s
    }

//INNER html SELECTEAZA contentul si tag-ul HTML, unde este cazul
 document.getElementById("hour").innerHTML=h
 document.getElementById("minutes").innerHTML=m
 document.getElementById("seconds").innerHTML=s +" " +timeoftheday


//apelam functia la fiecare 1000 de milisecunde
    setTimeout(setClock,1000)


}

setClock()

//vrem sa afisam si data
function updateDateTime() {
    let currentDate = new Date();
    // linia de mai jos afiseaza atat data cat si ora curenta in formatul Am/pm
   // let formattedDate = currentDate.toLocaleString();
   //linia de mai jos afiseaza doar data:
    let date=currentDate.toLocaleDateString()
    document.getElementById('datetime').textContent =  date;
  }

  // Actualizare la încărcarea paginii
  updateDateTime();


