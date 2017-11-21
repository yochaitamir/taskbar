 function activate() {
     var missionArray = JSON.parse(localStorage.getItem("missionArray", missionArray));
     localstoring(missionArray);
     console.log(missionArray);
     if (missionArray == null) {
         active()
     } else {




         console.log(missionArray.length);
         refresh(missionArray);
         active();
     }


     function active(missionArray) {
         var i = 0;

         var mission1 = document.getElementById('textzone');
         var addElement = document.getElementById("addmission")
         var date1 = document.getElementById("date");
         var hour1 = document.getElementById("hour");




         addElement.addEventListener('click', checkmission);
     }

     //refresh(missionArray);

     function checkmission(mission1, date1, hour1) {
         var mission1 = document.getElementById('textzone');
         var date1 = document.getElementById("date");
         var hour1 = document.getElementById("hour");
         if (!mission1.value) {
             document.getElementById("textmissing").className = "required";
             return
         } else {
             document.getElementById("textmissing").className = "";
         }
         if (/^([1-9]|0[1-9]|[12][0-9]|3[01])[- /.]([1-9]|0[1-9]|1[012])[- /.](19|20)\d\d$/.test("19.7.2050")) {
             document.getElementById("wrongdate").className = "";

             console.log("true")
         } else {
             document.getElementById("wrongdate").className = "required";
             console.log("false");
         }
         if (/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test("12:30")) {
             document.getElementById("wronghour").className = "";
             console.log("true")
             noteList(mission1, date1, hour1)

         } else {
             document.getElementById("wronghour").className = "required";
             console.log();
             return
         }

     }

     function noteList(mission1, date1, hour1) {

         if (!missionArray) {
             missionArray = [];
             var g = 0;

         } else {

             g = missionArray.length
         }

         listObj = {
             mis: mission1.value,
             date: date1.value,
             hour: hour1.value,
             index: missionArray.length
         }
         missionArray.push(listObj);
         console.log(missionArray);
         f = new createnote(missionArray[g].mis, missionArray[g].date, missionArray[g].hour, missionArray[g].index)
         g++

         localstoring(missionArray);

     }

     function localstoring(missionArray) {
         localStorage.setItem("missionArray", JSON.stringify(missionArray))

     };



     function refresh(missionArray) {
         missionArray = JSON.parse(localStorage.getItem("missionArray", missionArray));
         localstoring(missionArray);
         console.log(missionArray)
         for (let i = 0; i < missionArray.length ; i++) {
             //if (missionArray[i]) 
                 d = new createnote(missionArray[i].mis, missionArray[i].date, missionArray[i].hour, missionArray[i].index);
             //
         }

         //localstoring(missionArray);
     }

     function createnote(mission1, date1, hour1, index) {


         this.mission1 = mission1,
             this.date1 = date1,
             this.hour1 = hour1
         this.index = index;
         var note = document.createElement('div');
         note.innerHTML = '<br>' + this.mission1 + '<br>' + this.date1 + '<br>' + this.hour1;
         note.className = "note";

         var noteplace = document.getElementById("notes");

         noteplace.appendChild(note);
         var buto = document.createElement("button");
         buto.innerHTML = "done";
         buto.dataset.id = this.index;
         buto.className = "butt";


         console.log(buto.dataset.id)


         note.appendChild(buto);


         eraseNote(missionArray);

     }


     function eraseNote(missionArray, y) {
         a = document.querySelectorAll(".butt");
         for (var i = 0; i < a.length; i++) {
             a[i].addEventListener('click', erase)
         }


         console.log(a)
     }

     function deleteById(id) {
         console.log(id);
         let missionArray = JSON.parse(localStorage.getItem("missionArray"));
         for (var i = 0; i < missionArray.length; i++) {
             //console.log(missionArray[i])
             if (missionArray[i] !== null && typeof missionArray[i] === 'object') {
                 if (missionArray[i].index == id) {
                     missionArray.splice(i, 1)
                     localstoring(missionArray)

                 }

             } else {
                 console.log(i);
                  missionArray.splice(i);
             }
             console.log(missionArray)
             //localstoring(missionArray)
         }



     }


     function erase() {
         deleteById(this.dataset.id);

         note = this.parentElement
         this.parentElement.parentElement.removeChild(note)
     }
     //this.parentElement.className = "fade";
     //localstoring(missionArray)

     /*function eraseNote(missionArray) {
          var a = document.getElementsByClassName("butt");
          console.log(a);
          for (q = 0; q < a.length; q++) {
              a[q].addEventListener("click", erase)
             
          }
      }

      function deleteById(id) {
        
            let missionArray = JSON.parse(localStorage.getItem("missionArray"));
           //if(missionArray[i]){
          for(var i=0; i < missionArray.length; i++) {
              if (missionArray[i].index == [id]) {
                console.log(i) 
                  //missionArray[i]=false;
                  
                  delete missionArray[i];
                  console.log(missionArray)
                  //localstoring(missionArray);
                  console.log(i);
                  break;
              }//}
                  
          }
          
               
          
          
          
      }
      */

     /*function eraseNote() {

         this.parentElement.className = "fade"
         console.log(this.datanum)

         missionArray.splice(this.datanum, 1);
         if (this.datanum == missionArray.length) {
             missionArray.splice(0, 1)
         }
         console.log(this.className);
         console.log(this.datanum);
         console.log(missionArray);
         localstoring(missionArray);
     }*/


 }


 activate();
