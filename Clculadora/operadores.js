//Modulos sirve para ordenar el codigo
 const suma = (v1,v2) => v1 + v2;

 const resta = (v1, v2) => v1 - v2;
const mul = (v1, v2) => v1 * v2;

 const div = (v1, v2) => {
 if (v2 == 0)
  return "Division imposible";
 else
  return v1 / v2;
}

const porcentaje = (v1, v2) => (v1 / v2) * 100;

const cuadrado=(v1,v2)=>(Math.pow(v1,2));

const raiz=(v1)=>(Math.sqrt(v1));

//de esta manera tambien se puede exportar sin poner exportar en todos los elementos
export {suma,resta,mul,div as Division,porcentaje,cuadrado,raiz};//asi se pone un alias
