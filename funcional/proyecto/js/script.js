window.onload = ()=>{
  let data="";
    axios.get('https://restcountries.com/v3.1/all')
  .then(function (response) {
    // handle success
        data=response.data;
        print(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  
  let print=(data)=>{
    var todo="";
    console.log(data[0]);
    data.forEach(element=> {

      todo+=`<button  class="btn btn-outline-primary " onclick="search2()" value="${element.name.common}">${element.name.common}  </button>`;
    });
    document.getElementById("countries").innerHTML=todo;
    
  };
    search=()=>{
      let txt= document.getElementById("search").value;
      let found=data.find((pais)=> pais.name.common == txt)
      
      
      console.log(found);
      var lenguas= [];
      
      if(found != null){
        document.getElementById("nameCountry").innerHTML=found.name.official;
        document.getElementById("imgCountry").src=found.flags.png;
        document.getElementById("lenguaje").innerHTML=lengua(found.languages);
        document.getElementById("continente").innerHTML=conts(found.continents);
        document.getElementById("mapa").innerHTML=`<a href="${found.maps.googleMaps}">Ver Mapa </a>`;
        
        
        

        
      }
      
  }

  search2=()=>{
    var boton= window.event.target;
    let txt= boton.innerText;
    let found=data.find((pais)=> pais.name.common == txt)
    
    
    console.log(found);
    var lenguas= [];
    
    if(found != null){
      document.getElementById("nameCountry").innerHTML=found.name.official;
      document.getElementById("imgCountry").src=found.flags.png;
      document.getElementById("lenguaje").innerHTML=lengua(found.languages);
      document.getElementById("continente").innerHTML=conts(found.continents);
      document.getElementById("mapa").innerHTML=`<a href="${found.maps.googleMaps}">Ver Mapa </a>`;
      
      

      
    }
    
}
  
  const conts=(list)=>{
    var cadena="";
    list.forEach((item)=>{
      cadena+=item;
    });
    return cadena;
  };
  const lengua= (lista)=>{
    var cadena = "";
    for(const prop in lista){
      cadena+=lista[prop]+", ";
      
    }
    cadena=cadena.trim().substring(0,cadena.length-2);
    return cadena;
  };
}//llave load