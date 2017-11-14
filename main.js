function activate() {
    var i=0;
    var mission1 = document.getElementById('textzone');
    var addElement = document.getElementById("addmission")
    var date1 = document.getElementById("date");
    var hour1 = document.getElementById("hour");
    addElement.addEventListener('click', checkmission);



    function checkmission(mission, date1, hour1) {
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
            var x = new createnote(mission1, date1, hour1)
        } else {
            document.getElementById("wronghour").className = "required";
            console.log();
            return
        }
    }





    function createnote(mission1, date1, hour1) {


        this.mission1 = mission1.value,
            this.date1 = date1.value,
            this.hour1 = hour1.value

        var note = document.createElement('div');
        note.innerHTML = '<br>' + this.mission1 + '<br>' + this.date1 + '<br>' + this.hour1;
        note.className = "note";
        
        var noteplace = document.getElementById("notes");
        
        noteplace.appendChild(note);
        var but = document.createElement("button");
        but.innerHTML = "done"
        but.parentId="butt"+i
        
        
        note.appendChild(but);
        
        
        but.addEventListener("click",eraseNote);
        }
    
    function eraseNote(){
      this.parentElement.className="fade"
       console.log(this)
          
       
        
    }}

activate();
