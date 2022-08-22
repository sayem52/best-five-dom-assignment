  
  const btn1=document.getElementById("hak-sel");
  btn1.addEventListener("click", function(){
            
        let addName=getName("hakimi");
        let fiveList=document.getElementById("five-list");
        
        const li=document.createElement('li');
        li.innerText=addName;    
        fiveList.appendChild(li);
        disableButton("hak-sel");
    
        });

const btn2=document.getElementById("ney-sel");
btn2.addEventListener("click", function(){
                 
    let addName=getName("neymar");
    let fiveList=document.getElementById("five-list");
                
    const li=document.createElement('li');
    li.innerText=addName;    
    fiveList.appendChild(li);
    disableButton("ney-sel");
         
     });

const btn3=document.getElementById("mes-sel");
btn3.addEventListener("click", function(){
                
    let addName3=getName("messi");
    let fiveList=document.getElementById("five-list");
                
    const li=document.createElement('li');
    li.innerText=addName3;    
    fiveList.appendChild(li);
    disableButton("mes-sel");
        
    });

const btn4=document.getElementById("ica-sel");
btn4.addEventListener("click", function(){
                 
    let addName=getName("icardi");
    let fiveList=document.getElementById("five-list");
                
    const li=document.createElement('li');
    li.innerText=addName;    
    fiveList.appendChild(li);
    disableButton("ica-sel");
         
     });

const btn5=document.getElementById("kim-sel");
btn5.addEventListener("click", function(){
                 
    let addName=getName("kim");
    let fiveList=document.getElementById("five-list");
                
    const li=document.createElement('li');
    li.innerText=addName;    
    fiveList.appendChild(li);
    disableButton("kim-sel");
         
     });


const btn6=document.getElementById("mar-sel");
btn6.addEventListener("click", function(){
                 
    let addName=getName("mar");
    let fiveList=document.getElementById("five-list");
                
    const li=document.createElement('li');
    li.innerText=addName;    
    fiveList.appendChild(li);
    disableButton("mar-sel");
         
     });


const btn7=document.getElementById("nav-sel");
btn7.addEventListener("click", function(){
                 
    let addName=getName("navas");
    let fiveList=document.getElementById("five-list");
                
    const li=document.createElement('li');
    li.innerText=addName;    
    fiveList.appendChild(li);
    disableButton("nav-sel");
         
     });

const btn8=document.getElementById("ser-sel");
btn8.addEventListener("click", function(){
                 
    let addName=getName("ser");
    let fiveList=document.getElementById("five-list");
                
    const li=document.createElement('li');
    li.innerText=addName;    
    fiveList.appendChild(li);
    disableButton("ser-sel");
         
     });


const btn9=document.getElementById("ver-sel");
btn9.addEventListener("click", function(){
                 
    let addName=getName("ver");
    let fiveList=document.getElementById("five-list");
                
    const li=document.createElement('li');
    li.innerText=addName;    
    fiveList.appendChild(li);
    disableButton("ver-sel");
         
     });


const cal=document.getElementById("calculate");
cal.addEventListener("click", function(){

    let pricePlayer=inputTOInt("per-price");
    let totalExpenses = document.getElementById("playerEx");
    
    let calPlayer = pricePlayer * 5 ;
    
    totalExpenses.innerText= calPlayer;


    document.getElementById("per-price").value="";
         
     });


const allTotal=document.getElementById("all-total");
allTotal.addEventListener("click", function(){

    let priceMana=inputTOInt("manager-salary");
    let priceCoa=inputTOInt("coach-salary");
   
    let expenses= textTOInt("playerEx");

    let total= priceMana + priceCoa + expenses ;

    document.getElementById("total-end").innerText= total;


    document.getElementById("manager-salary").value="";

    document.getElementById("coach-salary").value="";
        
    });


function getName(id){
    const getPlayerName=document.getElementById(id);
    let playerName=getPlayerName.innerText;

    return playerName;
}



function disableButton(id){
    const disableB=document.getElementById(id);

    return disableB.disabled = true;
    
}



// Function for input convert to number
function inputTOInt(id){
    let perPrice=document.getElementById(id).value;

  
        const priceInt=parseInt(perPrice);

        return priceInt;

    
}


//  // Function total
function textTOInt(id){
    const Amount=document.getElementById(id).innerText;
    const balanceNumber=parseInt(Amount);

    return balanceNumber;

}