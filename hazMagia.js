            function hazMagia() {
                var parrafo = parseInt(document.getElementsByName("N")[0].value);
                var texto = document.getElementsByName("texto")[0].value;
                if(texto == "Molina") {
                    document.getElementsByTagName("p")[1].style.background = "maroon";
                }
                if(parrafo >= 0 || parrafo <= 4) {
                    document.getElementsByTagName("li")[parrafo - 1].innerHTML = texto;
                } else {
                    alert(parrafo + " no es válido, debe estar entre 1 y 4");
                }
            }