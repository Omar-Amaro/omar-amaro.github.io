window.onload = function (){
    var boton= document.getElementById("btnaceptar");
    var txtUsuario = document.getElementById("txtusuario");
    var txtPassword = document.getElementById("txtPassword");
    boton.addEventListener('click', function(){
        let usuario = txtUsuario.value;
        let pass= txtPassword.value;
        let arregloUsuarios=[
            { id:1, nombre:"Ludoviquito Pluche", imagen: "ludo.jpg",username: "ludop", password: "123"},
            { id:1, nombre:"Jr Pluche", imagen: "jr.jpg",username: "Jrp", password: "123"},
            { id:1, nombre:"Federuica Pluche", imagen: "fede.jpg",username: "Fedep", password: "123"}
        ];
        let encontro =false;
        
        arregloUsuarios.forEach(fila=>{
            if(fila.username = usuario.trim() && fila.password==pass.trim()){
                encontro=true;
                localStorage.setItem("usuario",JSON.stringify(fila));
                let fecha=new Date();
                localStorage.setItem("fecha",fecha.getFullYear()+"/"+fecha.getMonth()+"/"+fecha.getDay()+" " + fecha.getHours()+":"+fecha.getMinutes());
            }
        });
        
        if(encontro){
            ///Redireccionar
            location.href="./index.html";
            

        }else {
            document.getElementById("error").innerHTML="Credenciales Incorrectas";
            txtUsuario.style.backgroundColor="#FF0000";
            txtPassword.style.backgroundColor="#FF0000";
        }
        
    });
    
}
function limpiar(){
    txtUsuario.style.backgroundColor="#FFF";
    txtPassword.style.backgroundColor="#FFF";
}