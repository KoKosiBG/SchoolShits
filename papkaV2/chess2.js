let pieces = [["♖","♘","♗","♕","♔","♙"],["♜","♞","♝","♛","♚","♟"]]
let squares = Array.from(document.getElementsByClassName("box"));
let selectedFigure = false;
let elm1 = ""; 
let hod = 0;
document.getElementById("startButton").addEventListener('click', () =>{
    let playerOne = document.getElementById("playerTwo")
    let playerTwo = document.getElementById("playerTwo")
    playerOne.style.display = "block";
    name1 = document.getElementById("name1").value;
    playerTwo.style.display = "block";
    name2 = document.getElementById("name2").value;
    playerOne.innerText = name1
    playerTwo.innerText = name2
    document.getElementById("start").style.display = "none"

})

// Color function. Colors the squares and remove the dots //


function Color(from){
    for (let index = 0; index < squares.length; index++) {
        
       if(squares[index].id[0] % 2 === 0){
        if(squares[index].id % 2 === 0){
            squares[index].style.backgroundColor = "#786037";
        }
        else{
            squares[index].style.backgroundColor = "white";
        }
       }
       else{
        if(squares[index].id % 2 === 0){
            squares[index].style.backgroundColor = "white";
        }
        else{
            squares[index].style.backgroundColor = "#786037";
        }
       }
        
    }
}
Color();


// Is castling posible //

let h1Rook = false;
let a1Rook = false;
let a8Rook = false;
let h8Rook = false;
let Wking = false;
let Bking = false;
function IsCastlingPosible() {
    if (document.getElementById("11").innerText !== "♜") {
        a1Rook = true;
    }
    if (document.getElementById("81").innerText !== "♖") {
        a8Rook = true;
    }
    if (document.getElementById("18").innerText !== "♜") {
        h1Rook = true;
    }
    if (document.getElementById("88").innerText !== "♖") {
        h8Rook = true;
    }
    if (document.getElementById("15").innerText !== "♚") {
        
        Wking = true;
    }
    if (document.getElementById("85").innerText !== "♔") {
        Bking = true;
    }
}

// The eventlisteners 

squares.forEach(element =>{
    element.addEventListener('click', ()=>{
        Click(element)
    })
})

// The Click function


function Click(element) {
    IsCastlingPosible()
   
        if (element.childElementCount > 0) {
           
            if (element.firstElementChild.className === "legal") {
                
               
                    
                    element.innerText = elm1.innerText;
                    hod++;
                   Array.from(squares).forEach(element3 =>{
                    if(element3.id[0] == 8 || element3.id[0] == 1){
                        if (element3.innerText === "♟" || element3.innerText === "♙") {
                            
                            if (element3.innerText === "♟") {
                                document.getElementById("promotion").style.display = "flex";
                                document.getElementById("queen").innerText = pieces[1][3];
                                document.getElementById("bishop").innerText = pieces[1][2];
                                document.getElementById("knight").innerText = pieces[1][1];
                                document.getElementById("rook").innerText = pieces[1][0];
                            }else if (element3.innerText === "♙") {
                                document.getElementById("promotion").style.display = "flex";
                                document.getElementById("queen").innerText = pieces[0][3];
                                document.getElementById("bishop").innerText = pieces[0][2];
                                document.getElementById("knight").innerText = pieces[0][1];
                                document.getElementById("rook").innerText = pieces[0][0];
                            }
                            
                            Array.from(document.getElementsByClassName("piece")).forEach(element2 =>{
                                element2.addEventListener('click', ()=>{
                                    if (element3.innerText === "♟" || element3.innerText === "♙") {
                                        element3.innerText = element2.innerText;
                                    }
                                    
                                    document.getElementById("promotion").style.display = "none";
                                    
            
                                    
                                })
                            })
                        }
                       
                    }
                })
                
                    elm1.innerText = "";
                    selectedFigure = false;
                    elm1 = ""
                    
                    
                    Color();
                        
            } 
            if (element.firstChild.className === "castle") {
                
                switch (element.id) {
                    case "17":
                        
                        document.getElementById("16").innerText = "♜"; 
                        document.getElementById("17").innerText = "♚";
                        document.getElementById("18").innerText = "";
                        document.getElementById("15").innerText = "";
                        hod++
                        
                        break;
                    case "87":
                       
                        document.getElementById("86").innerText = "♖"; 
                        document.getElementById("87").innerText = "♔";
                        document.getElementById("88").innerText = "";
                        document.getElementById("85").innerText = "";
                        hod++
                        break;
                    case "13":
                        
                        document.getElementById("14").innerText = "♜"; 
                        document.getElementById("13").innerText = "♚";
                        document.getElementById("11").innerText = "";
                        document.getElementById("15").innerText = "";
                        hod++
                        break;
                    case "83":
                        
                        document.getElementById("84").innerText = "♖"; 
                        document.getElementById("83").innerText = "♔";
                        document.getElementById("81").innerText = "";
                        document.getElementById("85").innerText = "";
                        hod++
                        break;
                
                    default:
                        
                        break;
                }
                selectedFigure = false;
                Color();
            }
        }    
       
            if(selectedFigure && element.childElementCount === 0){
                Color();
                selectedFigure = false;
            }
        
        
        
        if(element.innerText.length !== 0 && !selectedFigure){
            ColorLegal(element)
           
        }
        
        if (element.style.backgroundColor === "pink" && selectedFigure) {
            elm1 = element
        }
}

// ColorLegal function //

function ColorLegal(element) {
        switch (element.innerText) {
            case pieces[0][0]:
                if (hod%2 === 1) {
                    GreenRook(element, "white");
                }                 
                break;
            case pieces[1][0]:
                if (hod%2 === 0) {
                    GreenRook(element, "black");
                }      
                break;
            case pieces[0][2]:
                if (hod%2 === 1) {
                    GreenBishop(element, "white");
                }
                break;
            case pieces[1][2]:
                if (hod%2 === 0) {
                    GreenBishop(element, "black");
                }   
                break; 
            case pieces[0][5]:
                if (hod%2 === 1) {
                    GreenPawn(element, "white");
                } 
                break;
            case pieces[1][5]:
                if (hod%2 === 0) {
                    GreenPawn(element, "black");
                }   
                break; 
            case pieces[0][3]:
                if (hod%2 === 1) {
                    GreenBishop(element, "white");
                    GreenRook(element, "white");
                }
                 
                break;
            case pieces[1][3]:
                if (hod%2 === 0) {
                    GreenBishop(element, "black");
                    GreenRook(element, "black");
                }  
                break; 
            case pieces[0][1]:
                if (hod%2 === 1) {
                    GreenKnight(element, "white");
                }  
                break;
            case pieces[1][1]:
                if (hod%2 === 0) {
                    GreenKnight(element, "black");
                }          
                break; 
                case pieces[0][4]:
                    if (hod%2 === 1) {
                        GreenKing(element, "white");
                    }    
                break;
            case pieces[1][4]:
                if (hod%2 === 0) {
                    GreenKing(element, "black");
                }            
                break;
        
            default:
                break;
        }
}
// Creating the dot function //

function AddDiv(id){
    let child = document.createElement('div');
    child.setAttribute("id", 'd' + id);
    child.setAttribute("class", "legal");
    return child
}
// ROOK ROOK ROOK //

function Rook(direction, element1, cl){
    for (let i = 0; i < 8; i++) {
       let  element2 = document.getElementById((Number(element1.id) +direction+(direction*i)).toString())
        if (element2 !== null) {
            if (element2.innerText.length === 0) {
                if (element2.childElementCount === 0) {
                    element2.appendChild(AddDiv((Number(element1.id) +direction+(direction*i)).toString()));
                }
                
            }
            else if(pieces[cl].includes(element2.innerText)){
                break;
            }else{
                if (element2.childElementCount === 0) {
                    element2.appendChild(AddDiv((Number(element1.id)+direction+(direction*i)).toString()));
                }
                break;
            }
        }
        else{
            break;
        }
    }
}

function GreenRook(element1, color) {
    let cl = 0
    if (color === "black") {
        cl = 1
    }
    selectedFigure = true
    element1.style.backgroundColor = "pink"

    Rook(10, element1,cl)
    Rook(-10, element1,cl)
    Rook(1, element1,cl)
    Rook(-10, element1,cl)
        
}

// BISHOP BISHOP BISHOP

function Bishop(direction, element1, cl) {
    for (let i = 0; i < 8; i++) {
        let element2 = document.getElementById((Number(idto) +direction+(direction*i)).toString())
        if (element2 !== null) {

            if (element2.innerText.length === 0) {

                if (element2.childElementCount === 0) {
                    element2.appendChild(AddDiv(element2.id));
                }

            }
            else if(pieces[cl].includes(element1.innerText)){
                break;
            }else{
                if (element2.childElementCount === 0) {
                    element2.appendChild(AddDiv(element2.id));
                }
                break;
            }
        }
        else{
            break;
        }
    }
}

function GreenBishop(element1, color) {
    idto = element1.id
    let diffrence  = idto[0] - idto[1];
    let sum  = Number(idto[0]) + Number(idto[1]);
    selectedFigure = true
    let cl = 0
    if (color === "black") {
        cl = 1
    }
    element1.style.backgroundColor = "pink"

    Bishop(11,element1,cl)
    Bishop(-11,element1,cl)
    Bishop(9,element1,cl)
    Bishop(-9,element1,cl)
    
}

// PAWN PAWN PAWN //

function GreenPawn(element, color) {
    
    element.style.backgroundColor = "pink"
    selectedFigure = true;
    idto = element.id

    let element1 = document.getElementById(idto - 10)
    let element2 = document.getElementById(idto - 20)

    let element3 = document.getElementById(String(Number(idto) + 10))
    let element4 = document.getElementById(String(Number(idto) + 10))

    let element5 = document.getElementById(idto - 11)
    let element6 = document.getElementById(idto - 9)

    let element7 = document.getElementById(String(Number(idto) + 11))
    let element8 = document.getElementById(String(Number(idto) + 9))

    if (color === "white" && element1.innerText.length === 0 ) {
                if (element1.childElementCount === 0) {
                   element1.appendChild(AddDiv(element1.id));
                }
        if (idto[0] == 7 && element2.innerText.length === 0) {
                if (element2.childElementCount === 0) {
                    element2.appendChild(AddDiv(element2.id));
                }

        }
    }else if(color === "white"){
        Color();
        selectedFigure = false;
    }
    if (color === "black" && element3.innerText.length === 0) {
                if (element3.childElementCount === 0) {
                    element3.appendChild(AddDiv(element3.id));
                }

        if (idto[0] == 2 && element4.innerText.length === 0) {
                if (element4.childElementCount === 0) {
                    element4.appendChild(AddDiv(element4.id));
                }
        }
    }
    else if(color === "black"){
        Color();
        selectedFigure = false;
    }
    if (element5 !== null) {
        if (color === "white" && pieces[1].includes(element5.innerText)) {
            element.style.backgroundColor = "pink"
                if (element5.childElementCount === 0) {
                    element5.appendChild(AddDiv(element5.id));
                }
            selectedFigure = true;
        }
    }
    
    if (element6 !== null) {
        if (color === "white" && pieces[1].includes(element6.innerText)) {
            element.style.backgroundColor = "pink"
                if (element6.childElementCount === 0) {
                    element6.appendChild(AddDiv(element6.id));
                }
            selectedFigure = true;
        }
    }
    
    if (element7 !== null) {
        if (color === "black" && pieces[0].includes(element7.innerText)) {
            element.style.backgroundColor = "pink"
                if (element7.childElementCount === 0) {
                    element7.appendChild(AddDiv(element7.id));
                }
            selectedFigure = true;
        }
    }
    if (element8 !== null) {
        if (color === "black" && pieces[0].includes(element8.innerText)) {
            element.style.backgroundColor = "pink"
                if (element8.childElementCount === 0) {
                    element8.appendChild(AddDiv(element8.id));
                }
            selectedFigure = true;
        }
    }
    
}

// KING KING KING //

function GreenKing(king, color) {
    let king = document.getElementById(idto)
    king.style.backgroundColor = "pink"
    for (let i = 0; i < squares.length; i++) {
        let ID = Number(squares[i].id);
        if (king.id == ID + 1 || king.id == ID -1 || king.id == ID + 10  || king.id == ID - 10 || king.id == ID + 11 || king.id == ID + 9 || king.id == ID -9 || king.id == ID - 11) {
            selectedFigure = true;
            if (color === "white" && pieces[1].includes(squares[i].innerText) || squares[i].innerText.length === 0) {
                if (squares[i].childElementCount === 0) {
                    squares[i].appendChild(AddDiv(ID));
                }
            }
            else if (color === "black" && pieces[0].includes(squares[i].innerText) || squares[i].innerText.length === 0) {
                if (squares[i].childElementCount === 0) {
                    squares[i].appendChild(ID);
                }
               
                
                // squares[i].style.backgroundColor = legalColor
            }
            let child = document.createElement('div');
                child.setAttribute("class", "castle");
                
            if (Wking === false && h1Rook === false && document.getElementById("16").innerText.length === 0 && document.getElementById("17").innerText.length === 0 && color === "black" && document.getElementById("17").childElementCount === 0) {
                if (document.getElementById("17").childElementCount === 0) {
                    document.getElementById("17").appendChild(child);
                }
                child.setAttribute("id", "c" + document.getElementById("17").id)
            }
            if (Wking === false && a1Rook === false && document.getElementById("12").innerText.length === 0 && document.getElementById("13").innerText.length === 0 &&document.getElementById("14").innerText.length === 0 && color === "black" && document.getElementById("13").childElementCount === 0) {
                if (document.getElementById("13").childElementCount === 0) {
                    document.getElementById("13").appendChild(child);
                }
                child.setAttribute("id", "c" + document.getElementById("13").id)
            }
            if (Bking === false && h8Rook === false && document.getElementById("86").innerText.length === 0 && document.getElementById("87").innerText.length === 0 && color === "white" && document.getElementById("87").childElementCount === 0) {
                if (document.getElementById("87").childElementCount === 0) {
                    document.getElementById("87").appendChild(child);
                }
                document.getElementById("87").appendChild(child)
                child.setAttribute("id", "c" + document.getElementById("87").id)
            }
            if (Bking === false && a8Rook === false && document.getElementById("82").innerText.length === 0 && document.getElementById("83").innerText.length === 0 &&document.getElementById("84").innerText.length === 0 && color === "white" && document.getElementById("83").childElementCount === 0) {
                if (document.getElementById("83").childElementCount === 0) {
                    document.getElementById("83").appendChild(child);
                }
                
                child.setAttribute("id", "c" + document.getElementById("83").id)
            }
        }
        
    }
}

function GreenKnight(idto, color) {
    idto = Number(idto);
    document.getElementById(idto).style.backgroundColor = "pink"
    selectedFigure = true;
    let colorInt = 0;
    if(color === "black"){
        colorInt = 1;
    }
    Array.from(squares).forEach(element =>{
        let elmId = Number(element.id)
        
        switch (idto) {

            case elmId + 21:
                case elmId  + 19:
                    case elmId  + 12:
                        case elmId  + 8:
                            case elmId - 21:
                                case elmId  - 19:
                                    case elmId  - 12:
                                        case elmId - 8:
                if (pieces[colorInt].includes(element.innerText) !== true) {
                if (element.childElementCount === 0) {
                    element.appendChild(AddDiv(element.id));
                }
                }              
                break;
                
        
            default:
                break;
        }

    })
    
}
