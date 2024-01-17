//inportamos
import {suma,resta,mul,Division,porcentaje,cuadrado,raiz} from "/operadores.js";



var display=document.querySelector(".pantalla");

var btn=document.querySelectorAll(".a1");



//creamos un forreach

const fn=btn.forEach(e=>{
  e.addEventListener("click", ()=>{
    //crea una variable
    const btnApretado=e.textContent;

    //delete all
    if(e.id==="c"){
      display.textContent="0";
      return;//este es como un break 
    }

    //delete one
    if(e.id==="borrar"){
      if(display.textContent.length===1 || display.textContent==="Error!"){
        display.textContent="0";
      }
      else{
        display.textContent=display.textContent.slice(0,-1);
      }
      return;
    }


  
    if (e.id === "igual") {
      try {
        // Dividimos el contenido 
        const operadores = display.textContent.split(/(\+|\-|\*|\/|%|x2|√)/);


        switch (operadores[1]) {
          case "+":
            display.textContent = suma(Number(operadores[0]), Number(operadores[2]));
            break;
          case "-":
            display.textContent = resta(Number(operadores[0]), Number(operadores[2]));
            break;
          case "*":
            display.textContent = mul(Number(operadores[0]), Number(operadores[2]));
            break;
          case "/":
            display.textContent = Division(Number(operadores[0]), Number(operadores[2]));
            break;
          case "/":
            display.textContent = Division(Number(operadores[0]), Number(operadores[2]));
            break;
          case "%":
            display.textContent = porcentaje(Number(operadores[0]), Number(operadores[2]));
            break;
          case "x2":
            display.textContent = cuadrado(Number(operadores[0]));
            break;
          case "√":
            display.textContent = raiz( Number(operadores[2]));
            break;
          default:
            throw new Error("Operador no reconocido");
        }
      } catch (error) {
        display.textContent = "Error!";
      }
      return;
    }

    if(display.textContent==="0" || display.textContent==="Error!"){
      display.textContent=btnApretado;
    }
    else{
      display.textContent+=btnApretado;
    }
    
  
  }
  
  
  )

})




//esto es cuando pulsamos igual
   

  
    // if(e.id==="igual"){
    //   try{
    //     display.textContent=eval(display.textContent );

    //   }
    //   catch{
    //     display.textContent="Error!";

    //   }
    //   return;
    // }
// const n1=()=>{
//  if(display.textContent=="0"){
//   display.textContent="1";
//  }
//  else
//  display.textContent+="1";
// }

// const n2=()=>{
//  if(display.textContent=="0"){
//   display.textContent="2";
//  }
//  else
//  display.textContent+="2";
// }

// const n3=()=>{
//  if(display.textContent=="0"){
//   display.textContent="3";
//  }
//  else
//  display.textContent+="3";
// }

// const n4=()=>{
//  if(display.textContent=="0"){
//   display.textContent="4";
//  }
//  else
//  display.textContent+="4";
// }

// const n5=()=>{
//  if(display.textContent=="0"){
//   display.textContent="5";
//  }
//  else
//  display.textContent+="5";
// }


// const n6=()=>{
//  if(display.textContent=="0"){
//   display.textContent="6";
//  }
//  else
//  display.textContent+="6";
// }

// const n7=()=>{
//  if(display.textContent=="0"){
//   display.textContent="7";
//  }
//  else
//  display.textContent+="7";
// }


// const n8=()=>{
//  if(display.textContent=="0"){
//   display.textContent="8";
//  }
//  else
//  display.textContent+="8";
// }

// const n9=()=>{
 
//  if(display.textContent=="0"){
//   display.textContent="9";
//  }
//  else
//  display.textContent+="9";
// }

// const n0=()=>{
//  if(display.textContent>0 || display.textContent=="0.")
//  {
//  display.textContent+="0";
//  }
// else 
// display.textContent="0";
// }

// const pnt=()=>{
//  if(display.co)

//   display.textContent+=".";
 
// }