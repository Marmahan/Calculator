var btns=document.querySelectorAll(".btn");
var myresult=document.getElementById("result");
var lmemory;
var newnumber=0;
var operation;
var num1,num2;

//add event listener to buttons
for(var i=0;i<btns.length;i++){
        btns[i].addEventListener("click",clicked);
}                     

function clicked(e){
    if(this.id.length==1){  //we are pressing a number
        if(newnumber==1){//new number so clear the screen
            myresult.setAttribute("value","");

        }  
        if(myresult.getAttribute("value")){//there's already a number
            var oldresult=myresult.getAttribute("value");
            myresult.setAttribute("value",oldresult + this.id);
        }  
        else{
            myresult.setAttribute("value",this.id);
        }
        newnumber=0;//another number maybe pressed so don't clear the screen
    }
    switch(this.id){
        case "clear"://clear
        myresult.setAttribute("value","");
        newnumber=1; //clear the text
        break;
        case "power"://power
        var num=myresult.getAttribute("value");
        num=parseFloat(num);
        num*=num;
        myresult.setAttribute("value",num);
        newnumber=1; //clear the text
        break;
        case "sqr"://square
        var num=myresult.getAttribute("value");
        num=parseFloat(num);
        num=Math.sqrt(num);
        myresult.setAttribute("value",num);
        newnumber=1; //clear the text
        break;
        case "del"://square
        var num=myresult.getAttribute("value");
        num.toString();
        num=num.substr(0,num.length-1);
        num=parseFloat(num);
        myresult.setAttribute("value",num);
        break;
        case "frbtn"://fraction
            newnumber=0;
            var oldresult=myresult.getAttribute("value");
            myresult.setAttribute("value",oldresult + ".");
        break;
        case "sumbtn"://sum
            lmemory=parseFloat(myresult.getAttribute("value"));
            newnumber=1; //clear the text
            operation='+';
        break;
        case "mulbtn"://multiplying
            lmemory=parseFloat(myresult.getAttribute("value"));
            newnumber=1; //clear the text
            operation='*';
        break;
        case "divbtn"://multiplying
            lmemory=parseFloat(myresult.getAttribute("value"));
            newnumber=1; //clear the text
            operation='/';
        break;
        case "eqbtn"://equal
            newnumber=1;//any number pressed after that should clear the screen and start from the beginning
            num2=parseFloat(myresult.getAttribute("value"));
            num1=lmemory;
            if(operation=='+'){
                myresult.setAttribute("value",num1+num2);
            }
            else if(operation=='*'){
                myresult.setAttribute("value",num1*num2);
            }
            else if(operation=='/'){
                myresult.setAttribute("value",(num1/num2));
            }
        break;
    }
}