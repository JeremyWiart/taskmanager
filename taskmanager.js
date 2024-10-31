const day = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

function mainHtml(){
    let attMain = ["class","bg-blue-500 h-96 text-white border-2 border-black"];
    let attDivMain = ["class", "container mx-auto text-xl font-bold mt-3 pt-2 pb-2"];
    let attSection = ["class","border-2 border-black h-42 px-2 py-2"];
    let attDivSection = ["class","border-4 border-red-600 h-24"];
    let attTableau = ["class","w-full"];
    let attThTableau = ["class","border-2 border-black text-wrap"];
    let attTdTableau = ["class","border-2 border-white-600"];

 let main =       document.createElement("main");
 let divMain =    document.createElement("div");
 let section =    document.createElement("section");
 let divSection = document.createElement("div");
 let tableau =    document.createElement("table");
 let trThTableau =document.createElement("tr");
 let trTableau =  document.createElement("tr");   
 for(i=0;i<=6;i++){
        let thTrTableau = document.createElement("th");
        let tdTableau = document.createElement("td");
        let contentTh = document.createTextNode(day[i]);

            tdTableau.setAttribute(attTdTableau[0],attTdTableau[1]);
            thTrTableau.setAttribute(attThTableau[0],attThTableau[1]);
            thTrTableau.appendChild(contentTh);
            trThTableau.appendChild(thTrTableau);
            trTableau.appendChild(tdTableau);
    }

          main.setAttribute(attMain[0],attMain[1]);
       divMain.setAttribute(attDivMain[0],attDivMain[1]);
       section.setAttribute(attSection[0],attSection[1]);
    divSection.setAttribute(attDivSection[0],attDivSection[1]);
       tableau.setAttribute(attTableau[0],attTableau[1]);
    


 let body = document.querySelector("body");

        tableau.appendChild(trThTableau);
        tableau.appendChild(trTableau);
        divSection.appendChild(tableau);
        section.appendChild(divSection);
        divMain.appendChild(section);
        main.appendChild(divMain);
        body.appendChild(main);
console.log(body);
}mainHtml();


/*const start = new Date();
 let datee= start.getMonths();
   console.log(datee);*/