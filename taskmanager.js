const dayTab1 = ["Lundi","Mardi","Mercredi","Jeudi"];
const dayTab2 = ["Vendredi","Samedi","Dimanche"];

function mainHtml(){

//--------------------------------Table Tailwind Class---------------------------------------------------------------------//
    let attMain = ["class","bg-blue-500 h-96 text-white border-2 border-black w-full"];
    let attDivMain = ["class", "flex flex-wrap justify-center mx-auto text-xl font-bold mt-3 pt-2 pb-2"];
    let attSection = ["class","flex flex-wrap justify-center border-2 border-black w-96 h-42 py-2 mb-24"];
    let attDivSection = ["class","border-4 border-red-600 w-full h-24 text-wrap"];
    let attTableau = ["class","h-full w-full"];
    let attThTableau = ["class","border-2 border-black"];
    let attTdTableau = ["class","border-2 border-white-600 w-42"];
    let attSectionBottom = ["class", "bg-grey-800 border-2 border-black py-2"];
    let attSectionDivBottom = ["class", "container mx-auto flex justify-center flex-col items-center border-2 border-red-600 rounded-3xl bg-blue-400"];
    let attIdSDB = ["id", "sectionDB"];
    
    let attClassInputDateSDB = ["class","bg-white-600 text-black my-4"];
    let attTypeInputDateSDB = ["type","date"];
    let attIdInputDateSDB = ["id","dateInput"];

    let attClassInputAreaSDB = ["class","w-2/6 h-64 my-4"];
    let attIdInputAreaSDB = ["id","areaInput"];
    let attReqInputAreaSDB = ["placeholder","Entrez votre tâche ici"];

    let attClassInputButtonSDB = ["class","bg-green-500 w-42 h-12"];
    let attTypeInputButtonSDB = ["type","button"];
    let attIdInputButtonSDB = ["id","buttInput"];
    let attValueInputButtonSDB = ["value","Enregistrez votre tâche"];


//---------------------------------------------------------------------------------------------------------------------//

//------------------Create Main Element and Div----------------------------//
 let main =       document.createElement("main");
 let divMain =    document.createElement("div");
//------------------------------------------------------------------//
//-------------------Create First Section and Table------------------------//
 let section2 =    document.createElement("section");
 let divSection2 = document.createElement("div");
 let tableau2 =    document.createElement("table");
 let trThTableau2 =document.createElement("tr");
 let trTableau2 =  document.createElement("tr");  
//------------------------------------------------------------------//

//-----------------Create Second Section and Table-------------------------//
 let section1 =    document.createElement("section");
 let divSection = document.createElement("div");
 let tableau1 =    document.createElement("table");
 let trThTableau =document.createElement("tr");
 let trTableau =  document.createElement("tr");
 //-------------------------------------------------------------------//

 //---------------Create Element First Table Setattribut and appendChild------------//
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
//-------------------------------------------------------------------//

//-----------Create Element second table Setattribut and appendChild-----//
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
//--------------------------------------------------------------------//
 

//----------------------------Create Bottom Section-----------------------------------//

   let sectionBottom = document.createElement("section")     
   let sectionDivBottom = document.createElement("div")
   let inputDate = document.createElement("input");
   let inputArea = document.createElement("textarea");
   let inputButt = document.createElement("input");
//------------------------------------------------------------------------------------//

  




//--------------------Setting ATTRIBUTS with Tailwind---------------------------------//

    main.setAttribute(attMain[0],attMain[1]);
        divMain.setAttribute(attDivMain[0],attDivMain[1]);
            section1.setAttribute(attSection[0],attSection[1]);
            divSection.setAttribute(attDivSection[0],attDivSection[1]);
            tableau1.setAttribute(attTableau[0],attTableau[1]);

            section2.setAttribute(attSection[0],attSection[1]);
            divSection2.setAttribute(attDivSection[0],attDivSection[1]);
            tableau2.setAttribute(attTableau[0],attTableau[1]);

    sectionBottom.setAttribute(attSectionBottom[0],attSectionBottom[1]);
        sectionDivBottom.setAttribute(attSectionDivBottom[0],attSectionDivBottom[1]);
        sectionDivBottom.setAttribute(attIdSDB[0],attIdSDB[1])
            inputDate.setAttribute(attClassInputDateSDB[0],attClassInputDateSDB[1]);
            inputDate.setAttribute(attTypeInputDateSDB[0],attTypeInputDateSDB[1]);
            inputDate.setAttribute(attIdInputDateSDB[0],attIdInputDateSDB[1]);

            inputArea.setAttribute(attIdInputAreaSDB[0],attIdInputAreaSDB[1]);
            inputArea.setAttribute(attClassInputAreaSDB[0],attClassInputAreaSDB[1]);
            inputArea.setAttribute(attReqInputAreaSDB[0],attReqInputAreaSDB[1]);

            inputButt.setAttribute(attTypeInputButtonSDB[0],attTypeInputButtonSDB[1]);
            inputButt.setAttribute(attIdInputButtonSDB[0],attIdInputButtonSDB[1]);
            inputButt.setAttribute(attClassInputButtonSDB[0],attClassInputButtonSDB[1]);
            inputButt.setAttribute(attValueInputButtonSDB[0],attValueInputButtonSDB[1]);

//----------------------------------------------------------------------------------//    

//-------------------------APPEND of elements to the html page----------------//
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
        
        sectionDivBottom.appendChild(inputDate);
        sectionDivBottom.appendChild(inputArea);
        sectionDivBottom.appendChild(inputButt);
        sectionBottom.appendChild(sectionDivBottom);
        
        body.appendChild(main);
        body.appendChild(sectionBottom);
//------------------------------------------------------------------------------//
console.log(body);
}mainHtml();





    document.getElementById("buttInput").addEventListener("click", function() {
        let dayOfWeek = document.getSelection("dateInput").anchorNode.firstChild.valueAsDate.getDay();
        let date = document.getElementById("dateInput");
        let task = document.getElementById("areaInput");
        console.log(dayOfWeek);
        console.log(date.value);
        console.log(task.value);
        window.localStorage.setItem("jours"+dayOfWeek, date.value);
        window.localStorage.setItem("Tâchedu"+date.value, task.value);
     })


/*const start = new Date();
 let datee= start.getMonths();
   console.log(datee);*/

