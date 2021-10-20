

// recupero gli elementi dove mettere le celle, e gli elementi button e la selezione della difficoltà

const container = document.querySelector(".container");
const selectDifficulty = document.getElementById("select-difficulty");
const buttonPlay = document.getElementById("btn");

let bombs

// creo un eventslistener per scegliere la difficoltà sul button

selectDifficulty.addEventListener("click", function(){
    
    // qui l´utente sceglie il livello di difficoltà
    const level = selectDifficulty.value

    // qui recupero il numero delle celle in base alla difficoltà
    const numberOfCells = getNumberOfcells(level)

    // 
    generateGrid(numberOfCells)

    // numero delle bombe
    bombs = numBombs(numberOfCells, 16);

});

// creo una funziona che in base al livello di difficoltà scelto, mi genera il numero di celle necessarie
function getNumberOfcells(level){

    let result;

    switch (parseInt(level)){

        case 1:
            result = 100;
            break;
        
        case 2:
            
            result = 81;
            break;
        case 3:
            result = 49;
            break;
            
    }

    return result;

}


// creo la funzione per generare le celle

function generateGrid(numCell){

    // contenuto del container
    container.innerHTML = "";

//  numero di celle per row
    const cellRow = Math.sqrt(numCell);
//   dimensione delle celle
    const sizeRow = 100 / cellRow;


    console.log(numCell)


    // creo un ciclo per le celle 
    for (let i = 0; i < numCell; i++){

        const cell = document.createElement("div")

        cell.classList.add("square")
        cell.style.width = sizeRow + "%"
        cell.style.height = sizeRow  + "%"
        cell.innerHTML = [i + 1]
        cell.addEventListener("click", clickCell)
        container.append(cell)
    }

}


function clickCell(){
    this.classList.toggle("active")
}