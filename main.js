 function activate() {
     console.log(missionArray);
     var missionArray = JSON.parse(localStorage.getItem("missionArray", missionArray));
     console.log(missionArray);
     //localstoring(missionArray);

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
              return active();
         } else {
             document.getElementById("textmissing").className = "";
            
         }
         if (/^([1-9]|0[1-9]|[12][0-9]|3[01])[- /.]([1-9]|0[1-9]|1[012])[- /.](19|20)\d\d$/.test(date1.value)) {
             document.getElementById("wrongdate").className = "";

             console.log("true")
         } else {
             document.getElementById("wrongdate").className = "required";
             console.log("false");
             return active();
             
         }
         if (/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(hour1.value)) {
             document.getElementById("wronghour").className = "";
             console.log("true")
             noteList(mission1, date1, hour1)

         } else {
             document.getElementById("wronghour").className = "required";
             console.log();
             return active();
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
         console.log(missionArray);
         missionArray.push(listObj);
         
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
         for (let k = 0; k < missionArray.length; k++) {
             //if (missionArray[i]) 
             d = new createnote(missionArray[k].mis, missionArray[k].date, missionArray[k].hour, missionArray[k].index);
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
         var buto = document.createElement("span");
        buto.innerHTML = "<i class='fa fa-trash' ></i>"
        //buto.setAttribute('href',"#");
         //buto.innerHTML = "done";
         buto.dataset.id = this.index;
         //buto.className = "fa fa-trash";
         buto.id="trash";
        buto.style="cursor:pointer"

         console.log(buto.dataset.id)


         note.appendChild(buto);
         var updateButton = document.createElement("span");
         updateButton.innerHTML = "<i class='fa fa-pencil' ></i>";
         updateButton.style.textDecoration = 'none';
         updateButton.dataset.id = this.index;
         updateButton.setAttribute('href',"#");
         
         updateButton.id="j";
         updateButton.style="cursor:pointer";
         note.appendChild(updateButton);

         console.log(buto.dataset.id)


         note.appendChild(buto);


         eraseNote(missionArray);
         update(missionArray);
     }

     function update(missionArray) {
         a = document.querySelectorAll("#j");
         console.log(a)
         for (var i = 0; i < a.length; i++) {
             a[i].addEventListener('click', envokeupdate)
             a[i].addEventListener('click', erase)
         }
     }

     function envokeupdate() {
         console.log(this)
         prepareForUpdate(this.dataset.id)
         deleteById(this.dataset.id)
     }

     function prepareForUpdate(id) {

         var mission1 = document.getElementById('textzone');
         var addElement = document.getElementById("addmission")
         var date1 = document.getElementById("date");
         var hour1 = document.getElementById("hour");
         console.log(id);
         
         for (var i = 0; i < missionArray.length; i++) {
             //console.log(missionArray[i])
             if (missionArray[i] !== null && typeof missionArray[i] === 'object') {
                 if (missionArray[i].index == id) {

                     mission1.value = missionArray[i].mis
                     date1.value = missionArray[i].date
                     hour1.value = missionArray[i].hour
                     missionArray.splice(i, 1)
                     localstoring(missionArray)
                     console.log(missionArray);
                     
                 }

             }
         }
     }

     function eraseNote(missionArray, y) {
         a = document.querySelectorAll("#trash");
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

                 //missionArray.splice(i);
                 //localstoring(missionArray)
             }

         }



     }


     function erase() {
         deleteById(this.dataset.id);

         note = this.parentElement
         note.className = "fade";

         console.log(note)
         setTimeout(function () {
             note.parentElement.removeChild(note);
         }, 2000);






     }


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
