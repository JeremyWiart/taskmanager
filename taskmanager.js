const dayTab1 = ["Lundi","Mardi","Mercredi","Jeudi"];
const dayTab2 = ["Vendredi","Samedi","Dimanche"];

function mainHtml(){
    let attMain = ["class","bg-blue-500 h-96 text-white border-2 border-black w-full"];
    let attDivMain = ["class", "flex justify-center flex-wrap mx-auto text-xl font-bold mt-3 pt-2 pb-2"];
    let attSection = ["class","w-full border-2 border-black h-42 px-2 py-2"];
    let attDivSection = ["class","border-4 border-red-600 h-24 text-wrap"];
    let attTableau = ["class","h-full w-full"];
    let attThTableau = ["class","border-2 border-black"];
    let attTdTableau = ["class","border-2 border-white-600"];

 let main =       document.createElement("main");
 let divMain =    document.createElement("div");

 let section2 =    document.createElement("section");
 let divSection2 = document.createElement("div");
 let tableau2 =    document.createElement("table");
 let trThTableau2 =document.createElement("tr");
 let trTableau2 =  document.createElement("tr");  

 let section1 =    document.createElement("section");
 let divSection = document.createElement("div");
 let tableau1 =    document.createElement("table");
 let trThTableau =document.createElement("tr");
 let trTableau =  document.createElement("tr");   
 for(i=0;i<=3;i++){
        let thTrTableau = document.createElement("th");
        let tdTableau = document.createElement("td");
        let contentTh = document.createTextNode(dayTab1[i]);

            tdTableau.setAttribute(attTdTableau[0],attTdTableau[1]);
            thTrTableau.setAttribute(attThTableau[0],attThTableau[1]);
            thTrTableau.appendChild(contentTh);
            trThTableau.appendChild(thTrTableau);
            trTableau.appendChild(tdTableau);

    }
    for(i=0;i<=2;i++){
      let thTrTableau2 = document.createElement("th");
      let tdTableau2 = document.createElement("td");
      let contentTh2 = document.createTextNode(dayTab2[i]);

          tdTableau2.setAttribute(attTdTableau[0],attTdTableau[1]);
          thTrTableau2.setAttribute(attThTableau[0],attThTableau[1]);
          thTrTableau2.appendChild(contentTh2);
          trThTableau2.appendChild(thTrTableau2);
          trTableau2.appendChild(tdTableau2);

  }


          main.setAttribute(attMain[0],attMain[1]);
       divMain.setAttribute(attDivMain[0],attDivMain[1]);

       section1.setAttribute(attSection[0],attSection[1]);
      divSection.setAttribute(attDivSection[0],attDivSection[1]);
       tableau1.setAttribute(attTableau[0],attTableau[1]);

       section2.setAttribute(attSection[0],attSection[1]);
       divSection2.setAttribute(attDivSection[0],attDivSection[1]);
      tableau2.setAttribute(attTableau[0],attTableau[1]);
    


 let body = document.querySelector("body");

        tableau1.appendChild(trThTableau);
        tableau1.appendChild(trTableau);
        divSection.appendChild(tableau1);
        section1.appendChild(divSection);
        divMain.appendChild(section1);

        tableau2.appendChild(trThTableau2);
        tableau2.appendChild(trTableau2);
        divSection2.appendChild(tableau2);
        section2.appendChild(divSection2);
        divMain.appendChild(section2);


        main.appendChild(divMain);
        body.appendChild(main);
console.log(body);
}mainHtml();


/*const start = new Date();
 let datee= start.getMonths();
   console.log(datee);*/