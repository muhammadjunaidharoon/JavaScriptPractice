function calculate() {
    let engTotNum = parseFloat(document.querySelector("#engTotMarks").value);
    let engNum = parseFloat(document.querySelector("#engMarks").value);
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

    let urduTotNum = parseFloat(document.querySelector("#urduTotMarks").value);
    let urduNum = parseFloat(document.querySelector("#urduMarks").value);
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

    let mathTotNum = parseFloat(document.querySelector("#mathTotMarks").value);
    let mathNum =  parseFloat(document.querySelector("#mathMarks").value);
    let mathPerc  = mathNum / mathTotNum * 100;
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


    let totNumber = urduTotNum + engTotNum + mathTotNum
    let numberObtained = urduNum+engNum+mathNum;
    let result = parseFloat(numberObtained / totNumber * 100);

    document.querySelector("#engPerc").innerHTML=`${engPerc}%`;
    document.querySelector("#mathPerc").innerHTML=`${mathPerc}%`;
    document.querySelector("#urduPerc").innerHTML=`${urduPerc}%`;


    document.querySelector("#totalMarks").innerHTML=`Total Marks: ${totNumber}`;
    document.querySelector("#marksObatained").innerHTML=`Total Marks Obtained: ${numberObtained}`;
    document.querySelector("#marksPerc").innerHTML=`Your Percentage is ${result}%`;

    if (result >= 80){
        document.querySelector("#marksGrade").innerHTML='Congratulation!!! You have A1 Grade... You are awsome'; 
    } else if (result < 80 && result >=70){
        document.querySelector("#marksGrade").innerHTML='Congratulation!!! You have A Grade... You are Excellent';
    } else if (result < 70 && result >=60){
        document.querySelector("#marksGrade").innerHTML='Congratulation!!! You have B Grade.... Great! Keep it up';
    } else if (result < 60 && result >=50){
        document.querySelector("#marksGrade").innerHTML='Congratulation!!! You have C Grade.... Work More';
    } else if (result < 50 ){
        document.querySelector("#marksGrade").innerHTML='I am Sorry!!! You are Failed.... :(';
    }
}
