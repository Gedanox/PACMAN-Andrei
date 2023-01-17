var mapp = mapp || {

    Maping : class{
        constructor(){
            this.mapeado = [
                [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
                [9, 1, 1, 1, 1, 1, 1, 1, 1, 9],
                [9, 1, 9, 9, 1, 1, 9, 9, 1, 9],
                [9, 1, 1, 1, 1, 1, 1, 1, 1, 9],
                [9, 1, 9, 1, 9, 9, 1, 9, 1, 9],
                [9, 1, 9, 1, 9, 9, 1, 9, 1, 9],
                [9, 1, 1, 1, 1, 1, 1, 1, 1, 9],
                [9, 1, 9, 9, 1, 1, 9, 9, 1, 9],
                [9, 1, 1, 1, 1, 1, 1, 1, 1, 9],
                [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
            ];
            this.div = document.getElementById('tablero');
        }

        printMapa(){

            this.div.textContent = ""

            let tabla = document.createElement('table');

            for(let i = 0; i < 10; i++){
                let row = document.createElement('tr');
                for(let j = 0; j < 10; j++){
                    let celda = document.createElement('td')

                    if(this.mapeado[i][j] != 9){
                        if(this.mapeado[i][j] == 0){
                            celda.setAttribute('style', 'background-image: url(src/pacman.png);background-position: center;background-repeat: no-repeat;background-size: contain;width: 2px;')
                        }else if(this.mapeado[i][j] == 1){
                            celda.setAttribute('style', 'background-image: url(src/cherry.png);background-position: center;background-repeat: no-repeat;background-size: contain;width: 2px;')
                        }else if(this.mapeado[i][j] == 2){
                            celda.setAttribute('style', 'background-image: url(src/ghost.png);background-position: center;background-repeat: no-repeat;background-size: contain;width: 2px;')
                        }
                        //celda.textContent = " " + this.mapeado[i][j];
                    }else{
                        celda.setAttribute('style', 'background-color: green; width:10px; height:10px;')
                    }

                    row.appendChild(celda);
                }
                tabla.appendChild(row);
            }
            this.div.appendChild(tabla);
        }

        //Jugador => 0, fantasma => 2, casilla con moneda => 1 muro => 9 casillaVacia => 3
        addObject(number, x, y){
            let introducido = false;

            //Compruebo que no sea una pared y coloco la ficha
            if(this.mapeado[x][y] != 9){
                this.mapeado[x][y] = number;
                introducido = true;
            }

            //Compruebo si es gameOver y si lo es ejecuto la funciÃ³n del index
            if(number == 0){
                if(this.mapeado[x][y] == this.mapeado[index.fantasma.xAxis][index.fantasma.yAxis]){
                    index.gameOver();
                }
            }else if(number == 2){
                if(this.mapeado[x][y] == this.mapeado[index.jugador.xAxis][index.jugador.yAxis]){
                    index.gameOver();
                }
            }

            return introducido;
        }

        borrarObjeto(x, y){
            this.mapeado[x][y] = 3;
        }
    }
}