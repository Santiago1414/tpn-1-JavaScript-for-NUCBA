//...............TRABAJO PRÁCTICO N° 1 SANTIAGO SÁNCHEZ......................

//.................................CREACIÓN DE OBJETOS MANUAL..................


let pizzas = [{
    id:1,
    nombre: "muzza",
    ingredientes: [`Muzzarella`, `aceitunas`, `Masa a la piedra`],
    precio: 550,
  
  },{
  id:2,
  nombre: "Jamón y morrones",
  ingredientes: [`Jamón y morrones`, `aceitunas`, `Masa a la piedra`],
  precio: 1700,
  
  },{
    id:3,
    nombre: "Anchoas",
    ingredientes: [`Anchoas`, `aceitunas`, `Masa a la piedra`],
    precio: 1200,
    },{
  id:4,
  nombre: "Pepperoni",
  ingredientes: [`Pepperoni`, `aceitunas`, `Masa a la piedra`],
  precio: 1400,
  },{
  id:5,
  nombre: "4 quesos",
  ingredientes: [`4 quesos`, `aceitunas`, `Masa a la piedra`],
  precio: 400,
  },{
  id:6,
  nombre: "rúcula y jamón crudo",
  ingredientes: [`Rúcula y jamón crudo`, `aceitunas`, `Masa a la piedra`],
  precio: 1800,
  }
  
  ]
  

  
  
  //................CREACIÓN DE OBJETO CON CONSTRUCTOR...........................................

  
  
  /* class Pizza {
    constructor (nombre, ingredientes, precio, id){
    this.nombre = nombre;
    this.ingredientes= ingredientes;
    this.precio = precio;
    this.id = id;
  }
  }
  
  const pizzas = [
   new Pizza ("Comunacha", ["Muzzarella", "Aceitunas", "Maza a la piedra"], 500, 1),
  
   new Pizza ("Gloriosa", ["Muzzarella y salchicas", "Aceitunas", "Maza a la piedra"], 550, 2),
   
   new Pizza ("Clásica", ["Jamón y morrones", "Aceitunas", "Maza a la piedra"], 500, 3),
  
  new Pizza ("Carlos monzón", ["Jamón y bacon", "Aceitunas", "Maza a la piedra"], 500, 4),
  
  new Pizza ("Vacaciones", ["Jamón y ananá", "Aceitunas", "Maza a la piedra"], 500, 5),
  
  new Pizza ("Veggie", ["Rúcula y tomates disecados", "Aceitunas", "Maza a la piedra"], 500, 6),
  ] */
  
  
  
  
  
  
  
  
  
  //.............A--..MOSTRAR LAS PIZZAS QUE TENGAN UN ID IMPAR.............................
  
  
/*   function idImpar () {
    for (let i = 0; i < pizzas.lenght; i++) {
      if (i%2==0){
        console.log(`Los ids impares corresponden a las siguientes pizzas: ${pizzas[i].nombre}`);
      }
    }
    
  }
  
  idImpar(); */
  
  
  
  
  
  
  
    //..........EJERCICIO A-....pizzas con id impar con forEach.....OK.........



  function pizzasIdImpar () {
  pizzas.forEach((pizza) => {
     if (pizza.id % 2 !==0){
      console.log (`La pizza ${pizza.nombre} tiene un id impar`);
    } 
  })
}
pizzasIdImpar();





  
  
  //...EJERCICIO A-............MOSTRAR LAS PIZZAS QUE TENGAN UN ID IMPAR.............NO FUNCIONA................
  
/*   function idImpar () {
    for (let i = 0; i < pizzas.lenght; i++) {
      if (i%2 !==0){
        console.log(pizzas[i].nombre);  
      } 
    }
    
  }
  
  idImpar(); */
  
  
  



   ///...EJERCICIO A-....................................id impar ...CON ERROR............


   
 /*  const idImpar = pizzas.filter ( (e) => {
    return e.id %2 !=0
  }) */

  //console.log (`La pizza que  tienen un id impar son: ${pizzas.nombre}`) // no me sale el mensaje user friendly.
  //console.log (`Las pizzas que tienen un id impar son: ${}`);
  
  
  
  
  
//..EJERCICIO A-.............................NO LO PUEOD LOGEAR..............................................



  
//  pizzas.id %2 !==0 ? console.log (`La pizza ${pizzas.nombre} tiene un id impar `) : null;                    // es como hacer un if.
  
  



//....EJERCICIO A-....................... numeros impares con acumulador.  ERROR EN LA SINTAXIS  ............


  
/*   const pizzasImpar = pizzas.reduce ((acumulador , pizza ) => {
    pizza.id % 2 !==0 ? acumulador.push (pizza) : null ;
    return acumulador
  })
  
  } , [] ); */
  
  
  
  
  
 //......EJERCICIO B-..........MOSTRAR LAS PIZZAS QUE VALEN MENOS DE 600$..CON FRIENDLY MESSAGE,PERO NO ES BOOLEANO ...........................
  
  
 function pizzaMenosDe600 () {
    for (i=0; i< pizzas.length; i++) {
        if (pizzas[i].precio < 600){
          console.log (`Dentro de la pizzas más baratas está la de: ${pizzas[i].nombre} y sale ${pizzas[i].precio} $.`)
        }
    }
  }
  
  pizzaMenosDe600();
    


  
  
  //....EJERCICIO B-...MOSTRAR LAS PIZZAS QUE VALEN MENOS DE 600$..NO LOGRÉ EL FRIENDLY MESSAGE ...........................
  
  
/*   let pizzaMenosDe600 = () => {
    return pizzas.filter((pizzas) => {
    if (pizzas.precio < 600 ) return true
  })
  }
  
  console.log (pizzaMenosDe600());
  console.log(`Si, hay pizzas por menos de 600$ y son las siguientes: ` + pizzaMenosDe600()); //no logro el friendly message */
  
  
  
  
  

  
  
  
  
 
  
  
  
  
  
  
  
  //...EJERCICIO B-..................MOSTRAR LAS PIZZAS QUE VALEN MENOS DE 600$.....NO ME SALE EL FRIENDLY MESSAGE.............
  
  
/*   const pizzaMenorA600 = pizzas.some ((e) => e.precio < 600);
  console.log (pizzaMenorA600); //true */
  
  
  
  

  
  
  
  //......EJERCICIO C-...................MOSTRAR EL NOMBRE DE CADA PIZZA CON SU RESPECTIVO PRECIO...............................
  


  
/*   function listaDePizzas () {
    for (let i = 0; i < pizzas.length; i++) {
        console.log(`Opción de pizza: ${pizzas[i].nombre} y vale:  ${pizzas[i].precio} $.`);
    
    }
    
  }
  
  listaDePizzas(); */
  
  
  
  
  //...EJERCICIO C-.....MOSTRAR EL NOMBRE DE CADA PIZZA CON SU RESPECTIVO PRECIO........CON FOREACH NO ME SALE EL FRIENDLY MESSAGE....................
  
  

  
/*   const nombrePizzaPrecio = pizzas.map ((pizza) =>{
    return {
      nombre: pizza.nombre,
      precio: pizza.precio,
    }
  })
  
  console.log (nombrePizzaPrecio);
  console.log (`La lista de pizzas disponibles es la siguiente: ` + nombrePizzaPrecio); */

  
  


  
  //.....EJERCICIO C-......MOSTRAR EL NOMBRE DE CADA PIZZA CON SU RESPECTIVO PRECIO...........CON FOREACH OK....................

  
  function mostrarNombreYPrecio () {
   pizzas.forEach((e)=> console.log (`La ${e.nombre} tiene un valor de ${e.precio} $`))  
}

mostrarNombreYPrecio();
   


  
   //....EJERCICIO D-.....TODOS LOS INGREDIENTES CON FOREACH.... OK.......
  
   function mostrarIngredientes () {
    pizzas.forEach ((pizzas) => {
      console.log ('la pizza ' + pizzas.nombre + ' tiene los siguientes ingredientes :')
    
      pizzas.ingredientes.forEach ((ingredientes) => {
        console.log (`* ${ingredientes}`)
      })
    }) }
  
    mostrarIngredientes();
  
  
  
  //.......EJERCICIO D-........TODOS LOS INGREDIENTES DE CADA PIZZA..........OK PERO SIN LISTA.........................
  
  
/*   function mostrarIngredientes () {
    for (let i = 0; i  < pizzas.length; i++ ){
      console.log (`La pizza ${pizzas[i].nombre} tiene los siguientes ingredientes: ${pizzas[i].ingredientes}`)
    }
  }
  
  mostrarIngredientes(); */



  
  
  //....EJERCICIO D-..............TODOS LOS INGREDIENTES CON MAP. .............. SIN FRIENDLY MESSAGE..........


  
  /* const mostrarIngredientes = pizzas.map ((pizza) => {
    return {
      nombre: pizza.nombre,
      ingredientes: pizza.ingredientes
    }
  })
  
  console.log (mostrarIngredientes); */
  



  
  //...EJERCICIO D-......TODOS LOS INGREDIENTES CON FOREACH....OK PERO SIN LISTA.......
  
  
/*   pizzas.forEach ((pizzas) => {
    console.log ('las pizza ' + pizzas.nombre + ' lleva los siguientres ingredientes ' + pizzas.ingredientes)
  }) */
  
  
  
  
 
   
  
  