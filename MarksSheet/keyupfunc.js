function engGradeFunc() {
    if (typeof (parseInt(document.querySelector("#engMarks").value) == 'number')){
    // if (parseInt(document.querySelector("#engMarks").value) !== "") {
        let engTotNum = parseInt(document.querySelector("#engTotMarks").value);
        let engNum = parseInt(document.querySelector("#engMarks").value);
        let engPerc = engNum / engTotNum * 100
            if (engPerc >= 80){
                document.querySelector("#engGrade").innerHTML='A1'; 
            } else if (engPerc < 80 && engPerc >=70){
                document.querySelector("#engGrade").innerHTML='A';
            } else if (engPerc < 70 && engPerc >=60){
                document.querySelector("#engGrade").innerHTML='B';
            } else if (engPerc < 60 && engPerc >=50){
                document.querySelector("#engGrade").innerHTML='C';
            } else if (engPerc < 50 ){
                document.querySelector("#engGrade").innerHTML='Failed';
            }
            document.querySelector("#engPerc").innerHTML=`${engPerc}%`;               
    }else {
        alert("number required");
    }
}