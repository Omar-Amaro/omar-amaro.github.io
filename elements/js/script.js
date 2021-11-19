window.onload = () => {
  //Cargar JSON

  let arrayElem = [];
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/jason");
  xobj.open("GET", "./js/PeriodicTableJSON.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      let json = JSON.parse(xobj.responseText);
      arrayElem = json.elements;
      let todo = "";
      arrayElem.forEach((element) => {
        if (element.name == "Hydrogen") {
          todo += `<li class="hydrogen" data-id="${element.number}" data-name="${element.name}" data-sim="${element.symbol}"  data-descr="${element.summary}" >
                    <abbr title="Hydrogen">H</abbr>
                </li>`;
        } else {
            if(element.category.startsWith("unknown")){
                todo+=`<li class="unknown" data-id="${element.number}" data-name="${element.name}" data-sim="${element.symbol}"  data-descr="${element.summary}" >
                    <abbr title="${element.name} ">${element.symbol}</abbr>
                </li>`;
            }else{
                todo+=`<li data-id="${element.number}" class="${element.category.replace(" ","-").replace(" ","")}" data-name="${element.name}" data-sim="${element.symbol}"  data-descr="${element.summary}" >
                <abbr title="${element.name} ">${element.symbol}</abbr>
            </li>`;
            }

        }
      });
      document.getElementsByClassName("periodic-table")[0].innerHTML = todo;

      let elem = document.getElementsByTagName("li");
      console.log(elem.length);
      for (let x = 0; x < elem.length; x++) {
        elem[x].addEventListener("click", (e) => {
          let nom = elem[x].getAttribute("data-name");
          let sim = elem[x].getAttribute("data-sim");
          let des = elem[x].getAttribute("data-descr");
          document.getElementById("txtElemento").innerText = nom;
          document.getElementById("txtSimbolo").innerText = sim;
          document.getElementById("txtDescr").innerText = des;
        });
      }
    }
  };
  xobj.send(null);
  //CREAR EVENTOS
};
