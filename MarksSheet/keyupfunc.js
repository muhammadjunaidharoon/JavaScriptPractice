function engGradeFunc() {
    if ((parseInt(document.querySelector("#engMarks").value) != NaN)){
        // if (typeof (parseInt(document.querySelector("#engMarks").value) === 'number')){
    // if (parseInt(document.querySelector("#engMarks").value) !== "") {
        let engTotNum = parseInt(document.querySelector("#engTotMarks").value);
        let engNum = parseInt(document.querySelector("#engMarks").value);
        let engPerc = parseInt(engNum / engTotNum * 100)
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

function mathGradeFunc() {
    if ((parseInt(document.querySelector("#mathMarks").value) != NaN)){

        let mathTotNum = parseInt(document.querySelector("#mathTotMarks").value);
        let mathNum =  parseInt(document.querySelector("#mathMarks").value);
        let mathPerc  = parseInt(mathNum / mathTotNum * 100);
        if (mathPerc >= 80){
                    document.querySelector("#mathGrade").innerHTML='A1'; 
                } else if (mathPerc < 80 && mathPerc >=70){
                    document.querySelector("#mathGrade").innerHTML='A';
                } else if (mathPerc < 70 && mathPerc >=60){
                    document.querySelector("#mathGrade").innerHTML='B';
                } else if (mathPerc < 60 && mathPerc >=50){
                    document.querySelector("#mathGrade").innerHTML='C';
                } else if (mathPerc < 50 ){
                    document.querySelector("#mathGrade").innerHTML='Failed';
                }
                document.querySelector("#mathPerc").innerHTML=`${mathPerc}%`;               

    }else {
    alert("number required");
    }
}

function urduGradeFunc() {
    if ((parseInt(document.querySelector("#urduMarks").value) != NaN)){

        let urduTotNum = parseInt(document.querySelector("#urduTotMarks").value);
        let urduNum = parseInt(document.querySelector("#urduMarks").value);
            let urduPerc = urduNum / urduTotNum * 100
            if (urduPerc >= 80){
                    document.querySelector("#urduGrade").innerHTML='A1'; 
                } else if (urduPerc < 80 && urduPerc >=70){
                    document.querySelector("#urduGrade").innerHTML='A';
                } else if (urduPerc < 70 && urduPerc >=60){
                    document.querySelector("#urduGrade").innerHTML='B';
                } else if (urduPerc < 60 && urduPerc >=50){
                    document.querySelector("#urduGrade").innerHTML='C';
                } else if (urduPerc < 50 ){
                    document.querySelector("#urduGrade").innerHTML='Failed';
                }
                    document.querySelector("#urduPerc").innerHTML=`${urduPerc}%`;               

    }else {
    alert("number required");
    }
}