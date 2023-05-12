const array = ["", "", "", ""];

allowDrop = (ev) => {
    ev.preventDefault();
}


const drag = (evento) => {
    console.log('se inicio');
    let infoImagen = evento.target.id;
    evento.dataTransfer.setData("Text", infoImagen)
}

const drop = (evento) => {
    if (array[(evento.target.id)] == "") {
        let data = evento.dataTransfer.getData("text");
        array[(evento.target.id)] = data;
        evento.target.appendChild(document.getElementById(data));
        console.log(data);

    }

    if (array[0] != "" && array[1] != "" && array[2] != "" && array[3]) {
        if (array[0] == "arya0" && array[1] == "arya1" && array[2] == "arya2" && array[3] == "arya3") {
            document.querySelector("h1").innerHTML = "Correcto";
            console.log("hola");
        } else {
            document.querySelector("h1").innerHTML = "Intentalo de nuevo!";
            console.log("chau");
        }
    }
}

const reinicio = () => {
    window.location.reload();
}

