let pieces = [["♖","♘","♗","♕","♔","♙"],["♜","♞","♝","♛","♚","♟"]]
let squares = document.getElementsByClassName("box");
let selectedFigure = false;
let hod = 0;
let legalColor = "brown";
let dragPieces
let name1 = "";
let name2 = "";
let elm1 = "";
let elm1ID = "";
let pawnW = {

}
for (let i = 0; i < 8; i++) {
   pawnW[`${i}`] = {
      position: i + 1,
      moved: false
   }
    
}
let pawnB = {

}
for (let i = 0; i < 8; i++) {
   pawnB[`${i}`] = {
      position: i + 1,
      moved: false
   }
    
}
document.getElementById("startButton").addEventListener('click', () =>{
    document.getElementById("playerTwo").style.display = "block";
    name1 = document.getElementById("name1").value;
    document.getElementById("playerOne").style.display = "block";
    name2 = document.getElementById("name2").value;
    
    document.getElementById("playerOne").innerText = name1
    document.getElementById("playerTwo").innerText = name2
    document.getElementById("start").style.display = "none"

})
function Color(){
    let boxes = document.getElementsByClassName("box")
    boxes = Array.from(boxes);
    // setTimeout(() => {
    for (let index = 0; index < boxes.length; index++) {
        
       if(boxes[index].id[0] % 2 === 0){
        if(boxes[index].id % 2 === 0){
            boxes[index].style.backgroundColor = "#786037";
        }
        else{
            boxes[index].style.backgroundColor = "white";
        }
       }
       else{
        if(boxes[index].id % 2 === 0){
            boxes[index].style.backgroundColor = "white";
        }
        else{
            boxes[index].style.backgroundColor = "#786037";
        }
       }
        
    }
        Array.from(boxes).forEach(element =>{
            if (element.childElementCount > 0) {
                
                    let id = element.firstElementChild.id
                    
                element.removeChild(document.getElementById(id))
                
                
                
            }
            
        })
        boxes.forEach(element=>{
            if (element.innerText.length !== 0 ) {
                element.setAttribute("draggable", "true")
            }
            else{
                element.setAttribute("draggable", "false")
            }
        })
        dragPieces = document.querySelectorAll('[draggable = "true"]')
        DragStart()
    

}
Color();
let h1Rook = false;
let a1Rook = false;
let a8Rook = false;
let h8Rook = false;
let Wking = false;
let Bking = false;
function IsCastlingPosible() {
    squares = Array.from(squares)
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
function IsTheGameOver() {
    Array.from(squares).forEach(element =>{
        
    })

    
}
Array.from(squares).forEach(element =>{
        element.addEventListener('mouseover', ()=>{
            if (element.innerText.length !== 0) {
                element.style.cursor = "pointer"
            }
        })
    
})
let overID = ""
Array.from(document.getElementsByClassName("box")).forEach(element => {
    element.addEventListener('click', () =>{
        Click(element)    
    })
    element.addEventListener("dragenter",()=>{
        
        overID = element.id
       

    })
    element.addEventListener("dragend", ()=>{
        moved.style.fontSize = font
        
        Click(document.getElementById(overID))
        
        Color()
    })
});

let moved
let font
function DragStart(params) {
    dragPieces.forEach(element =>{
        element.addEventListener("dragstart", ()=>{
            
            moved = element
            Click(element)
            let backgroundColor = element.style.backgroundColor
             font = element.style.fontSize
             element.style.fontSize = "95"
            element.style.backgroundColor = "transparent"
            
            setTimeout(() => {
                element.style.backgroundColor = backgroundColor
                element.style.fontSize = "0"
            }, 1);
        })
    })
}


function Click(element) {
    IsCastlingPosible()
        if (element.childElementCount > 0) {
           
            if (element.firstElementChild.className === "legal") {
                
               
                    
                    element.innerText = elm1;
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
                
                    document.getElementById(elm1ID).innerText = "";
                    selectedFigure = false;
                    elm1 = ""
                    elm1ID = ""
                    
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
            
           
            switch (element.innerText) {
                case pieces[0][0]:
                    if (hod%2 === 1) {
                        GreenRook(element.id, "white");
                    }                 
                    break;
                case pieces[1][0]:
                    if (hod%2 === 0) {
                        GreenRook(element.id, "black");
                    }      
                    break;
                case pieces[0][2]:
                    if (hod%2 === 1) {
                        GreenBishop(element.id, "white");
                    }
                    break;
                case pieces[1][2]:
                    if (hod%2 === 0) {
                        GreenBishop(element.id, "black");
                    }   
                    break; 
                case pieces[0][5]:
                    if (hod%2 === 1) {
                        GreenPawn(element.id, "white");
                    } 
                    break;
                case pieces[1][5]:
                    if (hod%2 === 0) {
                        GreenPawn(element.id, "black");
                    }   
                    break; 
                case pieces[0][3]:
                    if (hod%2 === 1) {
                        GreenBishop(element.id, "white");
                        GreenRook(element.id, "white");
                    }
                     
                    break;
                case pieces[1][3]:
                    if (hod%2 === 0) {
                        GreenBishop(element.id, "black");
                        GreenRook(element.id, "black");
                    }  
                    break; 
                case pieces[0][1]:
                    if (hod%2 === 1) {
                        GreenKnight(element.id, "white");
                    }  
                    break;
                case pieces[1][1]:
                    if (hod%2 === 0) {
                        GreenKnight(element.id, "black");
                    }          
                    break; 
                    case pieces[0][4]:
                        if (hod%2 === 1) {
                            GreenKing(element.id, "white");
                        }    
                    break;
                case pieces[1][4]:
                    if (hod%2 === 0) {
                        GreenKing(element.id, "black");
                    }            
                    break;
            
                default:
                    break;
            }
        }
        
        if (element.style.backgroundColor === "pink" && selectedFigure) {
            elm1 = element.innerText;
            elm1ID = element.id;
            
        }
}
function GreenRook(idto, color) {
    
    squares = Array.from(squares);
    let cl = 0
    if (color === "black") {
        cl = 1
    }
    
    selectedFigure = true
    document.getElementById(idto).style.backgroundColor = "pink"
    for (let i = 0; i < 8; i++) {
        
        if (document.getElementById((Number(idto) +10+(10*i)).toString()) !== null) {
            if (document.getElementById((Number(idto) +10+(10*i)).toString()).innerText.length === 0) {
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) +10+(10*i)).toString());
                child.setAttribute("class", "legal");
                document.getElementById((Number(idto) +10+(10*i)).toString()).appendChild(child);
                // document.getElementById((Number(idto) +10+(10*i)).toString()).style.backgroundColor = legalColor
                
            }
            else if(pieces[cl].includes(document.getElementById((Number(idto) +10+(10*i)).toString()).innerText)){
                break;
            }else{
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) +10+(10*i)).toString());
                child.setAttribute("class", "legal");
                document.getElementById((Number(idto) +10+(10*i)).toString()).appendChild(child);
                // document.getElementById((Number(idto) +10+(10*i)).toString()).style.backgroundColor = legalColor
                break;
            }
        }
        else{
            break;
        }
    }
    for (let i = 0; i < 8; i++) {
        
        if (document.getElementById((Number(idto) -10-(10*i)).toString()) !== null) {
            if (document.getElementById((Number(idto) -10-(10*i)).toString()).innerText.length === 0) {
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) -10-(10*i)).toString());
                child.setAttribute("class", "legal");
                document.getElementById((Number(idto) -10-(10*i)).toString()).appendChild(child);
                // document.getElementById((Number(idto) -10-(10*i)).toString()).style.backgroundColor = legalColor
            }
            else if(pieces[cl].includes(document.getElementById((Number(idto) -10-(10*i)).toString()).innerText)){
                break;
            }else{
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) -10-(10*i)).toString());
                child.setAttribute("class", "legal");
                document.getElementById((Number(idto) -10-(10*i)).toString()).appendChild(child);
                // document.getElementById((Number(idto) -10-(10*i)).toString()).style.backgroundColor = legalColor
                break;
            }
        }
        else{
            break;
        }
        
    }
    for (let i = 0; i < 8; i++) {
        
        
        if (document.getElementById((Number(idto) +i+1).toString()) !== null) {
            if (document.getElementById((Number(idto) +i+1).toString()).innerText.length === 0) {
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) + i+1).toString());
                child.setAttribute("class", "legal");
                document.getElementById((Number(idto) + i+1).toString()).appendChild(child);
                // document.getElementById((Number(idto) + i+1).toString()).style.backgroundColor = legalColor
            }
            else if(pieces[cl].includes(document.getElementById((Number(idto) +1+i).toString()).innerText)){
                break;
            }else{
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) + i+1).toString());
                child.setAttribute("class", "legal");
                document.getElementById((Number(idto) + i+1).toString()).appendChild(child);
                // document.getElementById((Number(idto) +1+i).toString()).style.backgroundColor = legalColor
                break;
            }
        }
        else{
            break;
        }
        
    }
    for (let i = 0; i <= 8; i++) {
        
        if (document.getElementById((Number(idto) -i-1).toString()) !== null) {
            if (document.getElementById((Number(idto) -i-1).toString()).innerText.length === 0) {
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) - i-1).toString());
                child.setAttribute("class", "legal");
                document.getElementById((Number(idto) - i-1).toString()).appendChild(child);
                // document.getElementById((Number(idto) - i-1).toString()).style.backgroundColor = legalColor
            }
            else if(pieces[cl].includes(document.getElementById((Number(idto) -1-(1*i)).toString()).innerText)){
                break;
            }else{
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) - i-1).toString());
                child.setAttribute("class", "legal");
                document.getElementById((Number(idto) - i-1).toString()).appendChild(child);
                // document.getElementById((Number(idto) -1-(1*i)).toString()).style.backgroundColor = legalColor
                break;
            }
        }
        else{
            break;
        }

        
    }
    
    // for (let i = 0; i < Up-2; i++) {
        
    //     if (document.getElementById((Number(idto) +10+(10*i)).toString()).innerText.length === 0) {
    //         document.getElementById((Number(idto)+ 10 + (10*i)).toString()).style.backgroundColor = legalColor
    //     }
        
    // }
    // for (let i = 0; i < Up-2; i++) {
        
    //     if (document.getElementById((Number(idto) +10+(10*i)).toString()).innerText.length === 0) {
    //         document.getElementById((Number(idto)+ 10 + (10*i)).toString()).style.backgroundColor = legalColor
    //     }
        
    // }
    for (let i = 0; i < squares.length; i++) {
        
        
       
        // if (squares[i].id[1] === idto[1] && color === "white") {
            
        //     if (pieces[1].includes(squares[i].innerText) || squares[i].innerText.length === 0) {
        //         squares[i].style.backgroundColor = legalColor
        //     }
        // }
        // if (squares[i].id[1] === idto[1] && color === "black") {
        //     if (pieces[0].includes(squares[i].innerText) || squares[i].innerText.length === 0) {
        //         squares[i].style.backgroundColor = legalColor
        //     }
        // }
        // if (squares[i].id[0] === idto[0] && color === "black") {
        //     if (pieces[0].includes(squares[i].innerText) || squares[i].innerText.length === 0) {
        //         squares[i].style.backgroundColor = legalColor
        //     }
        // }
        // if (squares[i].id[0] === idto[0] && color === "white") {
            
        //     if (pieces[1].includes(squares[i].innerText) || squares[i].innerText.length === 0) {
        //         squares[i].style.backgroundColor = legalColor
        //     }
        // }
        // // if (squares[i].id[0] === idto[0] && squares[i].innerText.length === 0) {
        // //     squares[i].style.backgroundColor = legalColor
        // // }
        // if (squares[i].id === idto) {
        //     squares[i].style.backgroundColor = "pink";
        //     selectedFigure = true;
        // }
        
        
    }
    
}
function GreenBishop(idto, color) {
    let diffrence  = idto[0] - idto[1];
    let sum  = Number(idto[0]) + Number(idto[1]);
    selectedFigure = true
    let cl = 0
    if (color === "black") {
        cl = 1
    }
    document.getElementById(idto).style.backgroundColor = "pink"
    for (let i = 0; i < 8; i++) {
        
        if (document.getElementById((Number(idto) +11+(11*i)).toString()) !== null) {
            if (document.getElementById((Number(idto) +11+(11*i)).toString()).innerText.length === 0) {
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) +11+(11*i)).toString());
                child.setAttribute("class", "legal");
                document.getElementById((Number(idto) +11+(11*i)).toString()).appendChild(child);
                // document.getElementById((Number(idto) +11+(11*i)).toString()).style.backgroundColor = legalColor
            }
            else if(pieces[cl].includes(document.getElementById((Number(idto) +11+(11*i)).toString()).innerText)){
                break;
            }else{
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) +11+(11*i)).toString());
                child.setAttribute("class", "legal");
                document.getElementById((Number(idto) +11+(11*i)).toString()).appendChild(child);
                // document.getElementById((Number(idto) +11+(11*i)).toString()).style.backgroundColor = legalColor
                break;
            }
        }
        else{
            break;
        }
    }
    for (let i = 0; i < 8; i++) {
        
        if (document.getElementById((Number(idto) -11-(11*i)).toString()) !== null) {
            if (document.getElementById((Number(idto) -11-(11*i)).toString()).innerText.length === 0) {
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) -11-(11*i)).toString());
                child.setAttribute("class", "legal");
                document.getElementById((Number(idto) -11-(11*i)).toString()).appendChild(child);
                // document.getElementById((Number(idto) -11-(11*i)).toString()).style.backgroundColor = legalColor
            }
            else if(pieces[cl].includes(document.getElementById((Number(idto) -11-(11*i)).toString()).innerText)){
                break;
            }else{
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) -11-(11*i)).toString());
                child.setAttribute("class", "legal");
                document.getElementById((Number(idto) -11-(11*i)).toString()).appendChild(child);
                // document.getElementById((Number(idto) -11-(11*i)).toString()).style.backgroundColor = legalColor
                break;
            }
        }
        else{
            break;
        }
        
    }
    for (let i = 0; i < 8; i++) {
       
        
        if (document.getElementById((Number(idto) +9+(i*9)).toString()) !== null) {
            if (document.getElementById((Number(idto)  +9+(i*9)).toString()).innerText.length === 0) {
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) +9+(i*9)).toString());
                child.setAttribute("class", "legal");
                document.getElementById((Number(idto) +9+(i*9)).toString()).appendChild(child);
                // document.getElementById((Number(idto) +9+(i*9)).toString()).style.backgroundColor = legalColor
            }
            else if(pieces[cl].includes(document.getElementById((Number(idto) +9+(i*9)).toString()).innerText)){
                break;
            }else{
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) +9+(i*9)).toString());
                child.setAttribute("class", "legal");
                document.getElementById((Number(idto) +9+(i*9)).toString()).appendChild(child);
                // document.getElementById((Number(idto) +9+(i*9)).toString()).style.backgroundColor = legalColor
                break;
            }
        }
        else{
            break;
        }
        
    }
    for (let i = 0; i <= 8; i++) {
        
        if (document.getElementById((Number(idto)-9-(i*9)).toString()) !== null) {
            if (document.getElementById((Number(idto)  -9-(i*9)).toString()).innerText.length === 0) {
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) -9-(i*9)).toString());
                child.setAttribute("class", "legal");
                document.getElementById((Number(idto) -9-(i*9)).toString()).appendChild(child);
                // document.getElementById((Number(idto) -9-(i*9)).toString()).style.backgroundColor = legalColor
            }
            else if(pieces[cl].includes(document.getElementById((Number(idto) -9-(i*9)).toString()).innerText)){
                break;
            }else{
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) -9-(i*9)).toString());
                child.setAttribute("class", "legal");
                document.getElementById((Number(idto) -9-(i*9)).toString()).appendChild(child);
                // document.getElementById((Number(idto) -9-(i*9)).toString()).style.backgroundColor = legalColor
                break;
            }
        }
        else{
            break;
        }

        
    }


    // console.legalColor(document.getElementById(idto).innerText);
    // squares = Array.from(squares);
    // for (let i = 0; i < squares.length; i++) {
        
    //     if (diffrence === squares[i].id[0] - squares[i].id[1] && color === "white") {
    //         if (pieces[1].includes(squares[i].innerText) || squares[i].innerText.length === 0) {
    //             squares[i].style.backgroundColor = legalColor
    //         }
    //     }
    //     if (diffrence === squares[i].id[0] - squares[i].id[1] && color === "black") {
    //         if (pieces[0].includes(squares[i].innerText) || squares[i].innerText.length === 0) {
    //             squares[i].style.backgroundColor = legalColor
    //         }
    //     }
    //     if (sum === Number(squares[i].id[0]) + Number(squares[i].id[1]) && color === "white") {
    //         if (pieces[1].includes(squares[i].innerText) || squares[i].innerText.length === 0) {
    //             squares[i].style.backgroundColor = legalColor
    //         }
    //     }
    //     if (sum === Number(squares[i].id[0]) + Number(squares[i].id[1]) && color === "black") {
    //         if (pieces[0].includes(squares[i].innerText) || squares[i].innerText.length === 0) {
    //             squares[i].style.backgroundColor = legalColor
    //         }
    //     }
        
    //     // if (sum === Number(squares[i].id[0]) + Number(squares[i].id[1]) && squares[i].innerText.length === 0) {
    //     //     squares[i].style.backgroundColor = legalColor
    //     // }
    //     if (squares[i].id === idto) {
    //         squares[i].style.backgroundColor = "pink";
    //         selectedFigure = true;
    //     }
        
    // }
}
function GreenPawn(idto, color) {
    squares = Array.from(squares);
    
    document.getElementById(idto).style.backgroundColor = "pink"
    selectedFigure = true;
    if (color === "white" && document.getElementById(idto - 10).innerText.length === 0 ) {
        let child = document.createElement('div');
                child.setAttribute("id", 'd' + (idto - 10));
                child.setAttribute("class", "legal");
                document.getElementById(idto - 10).appendChild(child);
        // document.getElementById(idto - 10).style.backgroundColor = legalColor;
        if (idto[0] == 7 && document.getElementById(idto - 20).innerText.length === 0) {
            let child = document.createElement('div');
                child.setAttribute("id", 'd' + (idto - 20));
                child.setAttribute("class", "legal");
                document.getElementById(idto - 20).appendChild(child);
            // document.getElementById(idto - 20).style.backgroundColor = legalColor;
        }
    }else if(color === "white"){
        Color();
        selectedFigure = false;
    }
    if (color === "black" && document.getElementById(Number(idto) + 10).innerText.length === 0) {
        let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) + 10));
                child.setAttribute("class", "legal");
                document.getElementById(Number(idto) + 10).appendChild(child);
        // document.getElementById(Number(idto) + 10).style.backgroundColor = legalColor;
        if (idto[0] == 2 && document.getElementById(Number(idto) + 20).innerText.length === 0) {
            let child = document.createElement('div');
                child.setAttribute("id", 'd' + (Number(idto) + 20));
                child.setAttribute("class", "legal");
                document.getElementById(Number(idto) + 20).appendChild(child);
            // document.getElementById(Number(idto) + 20).style.backgroundColor = legalColor;
        }
    }
    else if(color === "black"){
        Color();
        selectedFigure = false;
    }
    if (document.getElementById(String(Number(idto) - 11)) !== null) {
        if (color === "white" && pieces[1].includes(document.getElementById(String(Number(idto) - 11)).innerText)) {
            document.getElementById(idto).style.backgroundColor = "pink"
            let child = document.createElement('div');
                child.setAttribute("id", 'd' + String(Number(idto) - 11));
                child.setAttribute("class", "legal");
                document.getElementById(String(Number(idto) - 11)).appendChild(child);
            // document.getElementById(String(Number(idto) - 11)).style.backgroundColor = legalColor
            selectedFigure = true;
        }
    }
    
    if ((document.getElementById(String(Number(idto) - 9)) !== null)) {
        if (color === "white" && pieces[1].includes(document.getElementById(String(Number(idto) - 9)).innerText)) {
            document.getElementById(idto).style.backgroundColor = "pink"
            let child = document.createElement('div');
                child.setAttribute("id", 'd' + String(Number(idto) - 9));
                child.setAttribute("class", "legal");
                document.getElementById(String(Number(idto) - 9)).appendChild(child);
            // document.getElementById(String(Number(idto) - 9)).style.backgroundColor = legalColor
            selectedFigure = true;
        }
    }
    
    if (document.getElementById(String(Number(idto) + 11)) !== null) {
        if (color === "black" && pieces[0].includes(document.getElementById(String(Number(idto) + 11)).innerText)) {
            document.getElementById(idto).style.backgroundColor = "pink"
            let child = document.createElement('div');
                child.setAttribute("id", 'd' + String(Number(idto) + 11));
                child.setAttribute("class", "legal");
                document.getElementById(String(Number(idto) + 11)).appendChild(child);
            // document.getElementById(String(Number(idto) + 11)).style.backgroundColor = legalColor
            selectedFigure = true;
        }
    }
    if ((document.getElementById(String(Number(idto) + 9)) !== null)) {
        if (color === "black" && pieces[0].includes(document.getElementById(String(Number(idto) + 9)).innerText)) {
            document.getElementById(idto).style.backgroundColor = "pink"
            let child = document.createElement('div');
                child.setAttribute("id", 'd' + String(Number(idto) + 9));
                child.setAttribute("class", "legal");
                document.getElementById(String(Number(idto) + 9)).appendChild(child);
            // document.getElementById(String(Number(idto) + 9)).style.backgroundColor = legalColor
            selectedFigure = true;
        }
    }
    
    
            
    
}

// Array.from(squares).forEach(element =>{
//     element.addEventListener('click', () =>{
//         let elm1 = element.innerText;
//             let elm1ID = element.id;

//             // DragShit()
            
//         if (element.style.backgroundColor === "pink" && selectedFigure) {
//             Array.from(squares).forEach(element2 =>{
//                 element2.addEventListener('click', () =>{
                    
//                         if (element2.style.backgroundColor === legalColor) {
//                             element2.innerHTML = elm1;
                           
//                             console.legalColor(elm1ID);
//                             document.getElementById(elm1ID).innerText = "";
//                             selectedFigure = false;
//                             elm1 = ""
//                             elm1ID = ""
//                             Color();
                            
//                         }
                    
                    
//                 })
//             })
//         }

//     })
//     }
// )
function GameOver(params) {
    
}
function GreenKing(idto, color) {
    squares = Array.from(squares)
    let king = document.getElementById(idto)
    king.style.backgroundColor = "pink"
    for (let i = 0; i < squares.length; i++) {
        let ID = Number(squares[i].id);
        if (king.id == ID + 1 || king.id == ID -1 || king.id == ID + 10  || king.id == ID - 10 || king.id == ID + 11 || king.id == ID + 9 || king.id == ID -9 || king.id == ID - 11) {
            selectedFigure = true;
            if (color === "white" && pieces[1].includes(squares[i].innerText) || squares[i].innerText.length === 0) {
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + squares[i].id);
                child.setAttribute("class", "legal");
                squares[i].appendChild(child);
                
                // squares[i].style.backgroundColor = legalColor
            }
            else if (color === "black" && pieces[0].includes(squares[i].innerText) || squares[i].innerText.length === 0) {
                let child = document.createElement('div');
                child.setAttribute("id", 'd' + squares[i].id);
                child.setAttribute("class", "legal");
                squares[i].appendChild(child);
                
                // squares[i].style.backgroundColor = legalColor
            }
            let child = document.createElement('div');
                child.setAttribute("class", "castle");
                
            if (Wking === false && h1Rook === false && document.getElementById("16").innerText.length === 0 && document.getElementById("17").innerText.length === 0 && color === "black" && document.getElementById("17").childElementCount === 0) {
                document.getElementById("17").appendChild(child)
                child.setAttribute("id", "c" + document.getElementById("17").id)
            }
            if (Wking === false && a1Rook === false && document.getElementById("12").innerText.length === 0 && document.getElementById("13").innerText.length === 0 &&document.getElementById("14").innerText.length === 0 && color === "black" && document.getElementById("13").childElementCount === 0) {
                document.getElementById("13").appendChild(child)
                child.setAttribute("id", "c" + document.getElementById("13").id)
            }
            if (Bking === false && h8Rook === false && document.getElementById("86").innerText.length === 0 && document.getElementById("87").innerText.length === 0 && color === "white" && document.getElementById("87").childElementCount === 0) {
                document.getElementById("87").appendChild(child)
                child.setAttribute("id", "c" + document.getElementById("87").id)
            }
            if (Bking === false && a8Rook === false && document.getElementById("82").innerText.length === 0 && document.getElementById("83").innerText.length === 0 &&document.getElementById("84").innerText.length === 0 && color === "white" && document.getElementById("83").childElementCount === 0) {
                document.getElementById("83").appendChild(child)
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
                    let child = document.createElement('div');
                child.setAttribute("id", 'd' + element.id);
                child.setAttribute("class", "legal");
                element.appendChild(child);
                    // element.style.backgroundColor = legalColor
                }              
                break;
                
        
            default:
                break;
        }

    })
    
}

Array.from(squares).forEach(element =>{
    element.addEventListener('click', () =>{
    //     if(selectedFigure && element.childElementCount === 0 && element.style.backgroundColor !== "yellow" && element.innerText.length === 0){
    //         Color();
    //         selectedFigure = false;
    //     }
    //     if (element.style.backgroundColor === "pink" && selectedFigure) {
    //         elm1 = element.innerText;
    //         elm1ID = element.id;
            
    //     }
        
    //     if (element.childElementCount > 0) {
    //         console.log("vlizam1");
            
    //             console.log("vlizam2");
    //             element.innerText = elm1;
    //            hod++;
    //            Array.from(squares).forEach(element3 =>{
    //             if(element3.id[0] == 8 || element3.id[0] == 1){
    //                 if (element3.innerText === "♟" || element3.innerText === "♙") {
                        
    //                     if (element3.innerText === "♟") {
    //                         document.getElementById("promotion").style.display = "flex";
    //                         document.getElementById("queen").innerText = pieces[1][3];
    //                         document.getElementById("bishop").innerText = pieces[1][2];
    //                         document.getElementById("knight").innerText = pieces[1][1];
    //                         document.getElementById("rook").innerText = pieces[1][0];
    //                     }else if (element3.innerText === "♙") {
    //                         document.getElementById("promotion").style.display = "flex";
    //                         document.getElementById("queen").innerText = pieces[0][3];
    //                         document.getElementById("bishop").innerText = pieces[0][2];
    //                         document.getElementById("knight").innerText = pieces[0][1];
    //                         document.getElementById("rook").innerText = pieces[0][0];
    //                     }
                        
    //                     Array.from(document.getElementsByClassName("piece")).forEach(element2 =>{
    //                         element2.addEventListener('click', ()=>{
    //                             if (element3.innerText === "♟" || element3.innerText === "♙") {
    //                                 element3.innerText = element2.innerText;
    //                             }
                                
    //                             document.getElementById("promotion").style.display = "none";
                                
        
                                
    //                         })
    //                     })
    //                 }
                   
    //             }
    //         })
    //             document.getElementById(elm1ID).innerText = "";
    //             selectedFigure = false;
    //             elm1 = ""
    //             elm1ID = ""
                
    //             Color();
                
            
    //     }
        
    //     if (element.style.backgroundColor === "yellow") {
            
    //         switch (element.id) {
    //             case "17":
                    
    //                 document.getElementById("16").innerText = "♜"; 
    //                 document.getElementById("17").innerText = "♚";
    //                 document.getElementById("18").innerText = "";
    //                 document.getElementById("15").innerText = "";
    //                 hod++
                    
    //                 break;
    //             case "87":
                   
    //                 document.getElementById("86").innerText = "♖"; 
    //                 document.getElementById("87").innerText = "♔";
    //                 document.getElementById("88").innerText = "";
    //                 document.getElementById("85").innerText = "";
    //                 hod++
    //                 break;
    //             case "13":
                    
    //                 document.getElementById("14").innerText = "♜"; 
    //                 document.getElementById("13").innerText = "♚";
    //                 document.getElementById("11").innerText = "";
    //                 document.getElementById("15").innerText = "";
    //                 hod++
    //                 break;
    //             case "83":
                    
    //                 document.getElementById("84").innerText = "♖"; 
    //                 document.getElementById("83").innerText = "♔";
    //                 document.getElementById("81").innerText = "";
    //                 document.getElementById("85").innerText = "";
    //                 hod++
    //                 break;
            
    //             default:
                    
    //                 break;
    //         }
    //         selectedFigure = false;
    //         Color();
    //     }
    //     // Array.from(squares).forEach(element3 =>{
    //     //     if(element3.id[0] == 8 || element3.id[0] == 1){
    //     //         if (element3.innerText === "♟" || element3.innerText === "♙") {
    //     //             console.legalColor(element.innerText);
    //     //             if (element3.innerText === "♟") {
    //     //                 document.getElementById("promotion").style.display = "flex";
    //     //                 document.getElementById("queen").innerText = pieces[1][3];
    //     //                 document.getElementById("bishop").innerText = pieces[1][2];
    //     //                 document.getElementById("knight").innerText = pieces[1][1];
    //     //                 document.getElementById("rook").innerText = pieces[1][0];
    //     //             }else if (element3.innerText === "♙") {
    //     //                 document.getElementById("promotion").style.display = "flex";
    //     //                 document.getElementById("queen").innerText = pieces[0][3];
    //     //                 document.getElementById("bishop").innerText = pieces[0][2];
    //     //                 document.getElementById("knight").innerText = pieces[0][1];
    //     //                 document.getElementById("rook").innerText = pieces[0][0];
    //     //             }
                    
    //     //             Array.from(document.getElementsByClassName("piece")).forEach(element2 =>{
    //     //                 element2.addEventListener('click', ()=>{
                            
    //     //                     element.innerText = element2.innerText;
    //     //                     document.getElementById("promotion").style.display = "none";
                            
    
                            
    //     //                 })
    //     //             })
    //     //         }
               
    //     //     }
    //     // })
        
    })
    
})



// function DragShit() {
//     $('#draggable').bind('dragstart', function (e){

//         $('#draggable').css({width: "50px"})

      
//         setTimeout(function(){
//             $(this).removeClass("change-drag");
//         }, 1);
      
//     });

//     $(".box").draggable({
//         helper: "clone",
//         appendTo: "body",
//         scroll: true,
//         revertDuration: 0,
//         revert: "invalid",
//         start: function(event, ui) {
//             // var ItemData = $(this).data("AttachmentData");
//             $(this).addClass("weapon-dragging-class");
//             $(this).addClass("change-drag");
//             // AttachmentDraggingData = ItemData;
//         },
//         stop: function() {
//             $(this).removeClass("weapon-dragging-class");
//             $(this).removeClass("change-drag");
//         },
//     });
// }

