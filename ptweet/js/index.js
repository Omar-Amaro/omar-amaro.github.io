window.onload=()=>{
    let usuario=JSON.parse(localStorage.getItem("usuario"));
    document.getElementById("imgUser").attributes.src="./imagenes/"+usuario.img;
    let arrayTw=[];
    var xobj= new XMLHttpRequest();
    xobj.overrideMimeType("application/jason");
    xobj.open('GET','./js/tweets.json',true);
    xobj.onreadystatechange=function(){
        if(xobj.readyState == 4 && xobj.status =='200'){
            arrayTw=JSON.parse(xobj.responseText);
            console.log(arrayTw);
            crearPost();
        }
    }
    xobj.send(null);
    
    //console.log(usuario);
    //document.getElementById("usuario").innerHTML="Hola "+ usuario.nombre;
    let txtTweet = document.getElementById("txtTweet");
    let btnTweet = document.getElementById("btnTweet")
    btnTweet.addEventListener('click',(evt)=>{
        //console.log(txtTweet.value);
        if(txtTweet.value.trim() != ""){
            let obj ={
                img:usuario.imagen,
                nombre:usuario.nombre,
                mensaje:txtTweet.value,
                username:usuario.username,

            };
            arrayTw.push(obj);
            crearPost();
            txtTweet.value="";
        }
    });
    txtTweet.addEventListener('keyup',(evt)=>{

    });

    function crearPost() {
        var todo = "";
        arrayTw.forEach(tweet => {
            comentarios = "";
            tweet.comentarios.forEach(comment => {
                comentarios += `<div class="comment">
            <div>
                <img src="img/${comment.img}" alt="" class="imgUser">
            </div>
            <div>
                <h2> 
                    <span>${comment.nombre}</span>
                    <span>@${comment.username}</span>
                </h2>
                <div class="textTweet">
                    ${comment.comentarios}
                </div>
            </div>
        </div>`;
            });
            todo += `<div class="post">
            <div>
                <img src="img/${tweet.img}" alt="" class="imgUser">
            </div>
            <div>
                <h2> 
                    <span>${tweet.nombre}</span>
                    <span>@${tweet.username}</span>
                </h2>
                <div class="textTweet">
                    ${tweet.mensaje}
                </div>
                <div class="likeRetweet">
                    <h2>
                        <span>
                            <i class="far fa-heart"></i>
                            ${tweet.likes}
                        </span>
                    </h2>
                    <h2>
                        <span>
                            <i class="fas fa-share"></i>
                            ${tweet.retweets}
                        </span>
                    </h2>
                </div>
                <div class="comments">
                    ${comentarios}
                </div>
            </div>
        </div>`;
        });
        document.getElementById("posts").innerHTML = todo;
    }
};