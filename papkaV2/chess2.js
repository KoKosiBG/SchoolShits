let pieces = [
  ["♖", "♘", "♗", "♕", "♔", "♙"],
  ["♜", "♞", "♝", "♛", "♚", "♟"],
];
let squares = Array.from(document.getElementsByClassName("box"));
let selectedFigure = false;
let elm1 = "";
let hod = 0;
let playerOne = document.getElementById("playerOne");
let container = document.getElementsByClassName("container")[0]
  let playerTwo = document.getElementById("playerTwo");
  var rect = container.getBoundingClientRect();
  var rectOne = playerOne.getBoundingClientRect();

    playerOne.style.left = rect.left + "px"
  playerTwo.style.left = rect.left + "px"

  // playerOne.style.top =  String((Number(rect.top) - 60)) + "px"
  // playerTwo.style.top =  String((Number(rect.bottom) - 19.7)) + "px"

  playerOne.style.top =  String((Number(rect.top) - 90)) + "px"
  playerTwo.style.top =  String((Number(rect.bottom))) + "px"

document.getElementById("startButton").addEventListener("click", () => {
  playerOne.style.display = "block";
  name1 = document.getElementById("name1").value;
  playerTwo.style.display = "block";
  name2 = document.getElementById("name2").value;
  playerOne.innerText = name1;
  playerTwo.innerText = name2;

  document.getElementById("start").style.display = "none";

});


  window.addEventListener("resize",()=>{
    
   rect = container.getBoundingClientRect();

    playerOne.style.left = rect.left + "px"
    playerTwo.style.left = rect.left + "px"
 
  // playerTwo.style.top =  String((Number(rect.bottom) - 19.7)) + "px"
  // playerOne.style.top =  String((Number(rect.top) - 60)) + "px"
  playerOne.style.top =  String((Number(rect.top) - 90)) + "px"
  playerTwo.style.top =  String((Number(rect.bottom))) + "px"


  })
// Chnaging cursot //

squares.forEach(element =>{
    element.addEventListener('mouseover', ()=>{
        if (element.innerText.length !== 0) {
            element.style.cursor = "pointer"
        }
        else{
            element.style.cursor = "default"
        }
    })

})
// 
function HodChanged() {
  if (hod % 2 !== 0) {
    playerOne.style.backgroundColor = "rgba(68, 108, 145, 1)"
    playerTwo.style.backgroundColor = "rgba(68, 108, 145, 0.6)"
    playerOne.style.opacity = "1"
    playerTwo.style.opacity = "0.7"
    
  }
  else{
    playerOne.style.backgroundColor = "rgba(68, 108, 145, 0.6)"
    playerTwo.style.backgroundColor = "rgba(68, 108, 145, 1)"
    playerOne.style.opacity = "0.7"
    playerTwo.style.opacity = "1"
  }
}

// Color function. Colors the squares and remove the dots //

function Color(from) {
  for (let index = 0; index < squares.length; index++) {
    if (squares[index].id[0] % 2 === 0) {
      if (squares[index].id % 2 === 0) {
        squares[index].style.backgroundColor = "#2c465e";
      } else {
        squares[index].style.backgroundColor = "white";
      }
    } else {
      if (squares[index].id % 2 === 0) {
        squares[index].style.backgroundColor = "white";
      } else {
        squares[index].style.backgroundColor = "#2c465e";
      }
    }
  }

  squares.forEach((element) => {
    if (element.childElementCount > 0) {
      let id = element.firstElementChild.id;
      if (from != "check") {
        element.removeChild(document.getElementById(id));
      }
    }
  });

  squares.forEach(element=>{
    if (element.innerText.length !== 0 ) {
        element.setAttribute("draggable", "true")
        
    }
    else{
        element.setAttribute("draggable", "false")
        
    }
    element.removeEventListener("dragstart",DragStartFunction)
})
dragPieces = document.querySelectorAll('[draggable = "true"]')
DragStart()
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

let overID = ""
squares.forEach((element) => {
  element.addEventListener("click", () => {
    Click(element);
  });
  element.addEventListener("dragenter",()=>{ 
    overID = element.id
})
element.addEventListener("dragend", ()=>{
    moved.style.fontSize = font
    Click(document.getElementById(overID))
    Color()
})
});



function DragStart() {
    dragPieces.forEach(element =>{
        element.addEventListener("dragstart", DragStartFunction)
    })
}

function DragStartFunction() {
    moved = this
    Click(moved)

            let backgroundColor = moved.style.backgroundColor
             font = moved.style.fontSize
             moved.style.backgroundColor = "transparent"
              moved.style.border = "none"
            
          setTimeout(() => {
                moved.style.backgroundColor = backgroundColor
                moved.style.fontSize = "0"
                
            }, 1);
}
// Check if the game ended //
function GameOver() {
  let color = 0
  if (hod % 2 === 0) {
    color = 1
  }
  if (HasMoves() === false) {
    if (IsInCheck(color) === true) {
      End("Player one won")
    }
    else{
      alert("Stale mate")
    }
  }
}
//
function End(text) {
  
  document.getElementById("start").style.display = "none";
  document.getElementsByClassName("container")[0].style.display = "none";
  document.getElementsByClassName("end")[0].style.display = "block"
  playerOne.style.display = "none"
  playerTwo.style.display = "none"
  if(playerOne.innerText === "Koceto" || playerTwo.innerText === "Koceto"){
    document.getElementsByClassName("endText")[0].innerText = "Koce ti si unikalen pedal"
  }
  else{
    document.getElementsByClassName("endText")[0].innerText = text
  }
  
  
}
// Checks if legal moves are available //
function HasMoves() {
  let color = 0
  if (hod % 2 === 0) {
    color = 1
  }
  let returner = 0
  squares.forEach(element =>{
    if (pieces[color].includes(element.innerText)) {
      ColorLegal(element)
      squares.forEach(element =>{
        if (element.childElementCount > 0) {
          returner = 1
        }
      })
      selectedFigure = false
      Color()
    }
  })
  
  
 
  if (returner === 1) {
    return true
  }
  else{
    return false
  }
}

// The Click function

function Click(element) {
  IsCastlingPosible();
  // GameOver()

  if (element.childElementCount > 0) {
    if (element.firstElementChild.className === "legal") {
      element.innerText = elm1.innerText;
      hod++;
      HodChanged()
      Array.from(squares).forEach((element3) => {
        if (element3.id[0] == 8 || element3.id[0] == 1) {
          if (element3.innerText === "♟" || element3.innerText === "♙") {
            if (element3.innerText === "♟") {
              document.getElementById("promotion").style.display = "flex";
              document.getElementById("queen").innerText = pieces[1][3];
              document.getElementById("bishop").innerText = pieces[1][2];
              document.getElementById("knight").innerText = pieces[1][1];
              document.getElementById("rook").innerText = pieces[1][0];
            } else if (element3.innerText === "♙") {
              document.getElementById("promotion").style.display = "flex";
              document.getElementById("queen").innerText = pieces[0][3];
              document.getElementById("bishop").innerText = pieces[0][2];
              document.getElementById("knight").innerText = pieces[0][1];
              document.getElementById("rook").innerText = pieces[0][0];
            }

            Array.from(document.getElementsByClassName("piece")).forEach(
              (element2) => {
                element2.addEventListener("click", () => {
                  if (
                    element3.innerText === "♟" ||
                    element3.innerText === "♙"
                  ) {
                    element3.innerText = element2.innerText;
                  }

                  document.getElementById("promotion").style.display = "none";
                });
              }
            );
          }
        }
      });
     


      elm1.innerText = "";
      selectedFigure = false;
      elm1 = "";

      Color();
    }
    if (element.firstChild.className === "castle") {
      switch (element.id) {
        case "17":
          document.getElementById("16").innerText = "♜";
          document.getElementById("17").innerText = "♚";
          document.getElementById("18").innerText = "";
          document.getElementById("15").innerText = "";
          hod++;
          HodChanged()

          break;
        case "87":
          document.getElementById("86").innerText = "♖";
          document.getElementById("87").innerText = "♔";
          document.getElementById("88").innerText = "";
          document.getElementById("85").innerText = "";
          hod++;
          HodChanged()
          break;
        case "13":
          document.getElementById("14").innerText = "♜";
          document.getElementById("13").innerText = "♚";
          document.getElementById("11").innerText = "";
          document.getElementById("15").innerText = "";
          hod++;
          HodChanged()
          break;
        case "83":
          document.getElementById("84").innerText = "♖";
          document.getElementById("83").innerText = "♔";
          document.getElementById("81").innerText = "";
          document.getElementById("85").innerText = "";
          hod++;
          HodChanged()
          break;

        default:
          break;
      }
      selectedFigure = false;
      Color();
    }
  }

  if (selectedFigure && element.childElementCount === 0) {
    Color();
    selectedFigure = false;
  }
GameOver()
  if (element.innerText.length !== 0 && !selectedFigure) {
    ColorLegal(element);
  }
  console.log(element.style.backgroundColor );

  if (element.style.backgroundColor === "rgb(92, 146, 196)" && selectedFigure) {
    console.log("vlqqam");
    elm1 = element;
  }
}

// ColorLegal function //

function ColorLegal(element,from) {
  switch (element.innerText) {
    case pieces[0][0]:
      if (hod % 2 === 1 || from === "check") {
        
        GreenRook(element, "white",from);
      }
      break;
    case pieces[1][0]:
      if (hod % 2 === 0 || from === "check") {
        GreenRook(element, "black",from);
      }
      break;
    case pieces[0][2]:
      if (hod % 2 === 1 || from === "check") {
        GreenBishop(element, "white",from);
      }
      break;
    case pieces[1][2]:
      if (hod % 2 === 0 || from === "check") {
        GreenBishop(element, "black",from);
      }
      break;
    case pieces[0][5]:
      if (hod % 2 === 1 || from === "check") {
        GreenPawn(element, "white",from);
      }
      break;
    case pieces[1][5]:
      if (hod % 2 === 0 || from === "check") {
        GreenPawn(element, "black",from);
      }
      break;
    case pieces[0][3]:
      if (hod % 2 === 1 || from === "check") {
        GreenBishop(element, "white",from);
        GreenRook(element, "white",from);
      }

      break;
    case pieces[1][3]:
      if (hod % 2 === 0 || from === "check") {
        GreenBishop(element, "black",from);
        GreenRook(element, "black",from);
      }
      break;
    case pieces[0][1]:
      if (hod % 2 === 1 || from === "check") {
        GreenKnight(element, "white",from);
      }
      break;
    case pieces[1][1]:
      if (hod % 2 === 0 || from === "check") {
        GreenKnight(element, "black",from);
      }
      break;
    case pieces[0][4]:
      if (hod % 2 === 1 || from === "check") {
        GreenKing(element, "white",from);
      }
      break;
    case pieces[1][4]:
      if (hod % 2 === 0 || from === "check") {
        GreenKing(element, "black",from);
      }
      break;

    default:
      break;
  }
}
// Creating the dot function //

function AddDiv(id) {
  let child = document.createElement("div");
  child.setAttribute("id", "d" + id);
  child.setAttribute("class", "legal");
  return child;
}
// This function remove the check class //
function CheckRemove() {
  squares.forEach(element => {
    if (element.classList.contains('check')) {
      element.classList.remove('check')
    }
  })
}

// This function check if somebody is in check //
function IsInCheck(color) {
  let returner = 0
  squares.forEach(element =>{
   
      ColorLegal(element, "check")
    
  })

  squares.forEach(element =>{
  
    if (element.innerText === pieces[color][4] && element.classList.contains('check')) {
      CheckRemove()
      returner = 1
    }
  })
  CheckRemove()
  if (returner === 1) {
    return true
  }
  else{
    return false
  }
}
// Slaps pieces and return if is in check after that //

function SwapPieces(element1, element2,color) {
  let slap = element1.innerText
  let slapTwo = element2.innerText
  
  element1.innerText = ""
  element2.innerText = slap
  if (IsInCheck(color) === true) {
    element2.innerText = slapTwo
    element1.innerText = slap
      return false
  }
  element2.innerText = slapTwo
  element1.innerText = slap
  return true
  
}

// ROOK ROOK ROOK //

function Rook(direction, element1, cl,from) {
  for (let i = 0; i < 8; i++) {
    let element2 = document.getElementById(
      (Number(element1.id) + direction + direction * i).toString()
    );
    if (element2 !== null) {
      if (element2.innerText.length === 0) {
        if (element2.childElementCount === 0) {
          if (from === "check") {
            element2.classList.add('check')
          }
          else{
            if (SwapPieces(element1,element2,cl) === true) {
              element2.appendChild(
                AddDiv(element2.id)
              );
            }
          }
        }
      } else if (pieces[cl].includes(element2.innerText)) {
        break;
      } else {
        if (element2.childElementCount === 0) {
          if (from === "check") {
            
            element2.classList.add('check')
           
          }
          else{
            if (SwapPieces(element1,element2,cl) === true) {
              element2.appendChild(
                AddDiv(element2.id)
              );
            }
          }
          
        }
        break;
      }
    } else {
      break;
    }
  }
}

function GreenRook(element1, color,from) {
  let cl = 0;
  if (color === "black") {
    cl = 1;
  }
  if (from !== "check") {
    selectedFigure = true;
  element1.style.backgroundColor = "rgb(92, 146, 196)";

  }
  


  Rook(10, element1, cl,from);
  Rook(-10, element1, cl,from);
  Rook(1, element1, cl,from);
  Rook(-1, element1, cl,from);

  if (from !== "check") {

  }
}

// BISHOP BISHOP BISHOP

function Bishop(direction, element1, cl,from) {
 
  for (let i = 0; i < 8; i++) {
    let element2 = document.getElementById(
      (Number(element1.id) + direction + direction * i).toString()
    );
    
    if (element2 !== null) {
   
      if (element2.innerText.length === 0) {
        if (element2.childElementCount === 0) {
          if (from === "check") {
            element2.classList.add('check')
          }
          else{
              if (SwapPieces(element1,element2,cl) === true) {
                element2.appendChild(AddDiv(element2.id))
              }
            
            
        }
        }
      } else if (pieces[cl].includes(element2.innerText)) {
        break;
      } else {
        if (element2.childElementCount === 0) {
          if (from === "check") {
            element2.classList.add('check')
          }
          else{
            if (SwapPieces(element1,element2,cl) === true) {
              element2.appendChild(AddDiv(element2.id))
            }
        }
        
        }
        break
      }
    } else {
      break;
    }
  }
}

function GreenBishop(element1, color,from) {
  idto = element1.id;
  let diffrence = idto[0] - idto[1];
  let sum = Number(idto[0]) + Number(idto[1]);
  let cl = 0;
  if (color === "black") {
    cl = 1;
  }
  if (from !== "check") {
    element1.style.backgroundColor = "rgb(92, 146, 196)";
  selectedFigure = true;
  }
  

  Bishop(11, element1, cl,from);
  Bishop(-11, element1, cl,from);
  Bishop(9, element1, cl,from);
  Bishop(-9, element1, cl,from);
}

// PAWN PAWN PAWN //

function GreenPawn(element, color,from) {
  if (from !== "check") {
    
    element.style.backgroundColor = "rgb(92, 146, 196)";
    selectedFigure = true;
  }
  let cl = 0
  if (color === "black") {
    cl = 1
  }
  
 let idto = element.id;

  let element1 = document.getElementById(idto - 10);
  let element2 = document.getElementById(idto - 20);

  let element3 = document.getElementById(String(Number(idto) + 10));
  let element4 = document.getElementById(String(Number(idto) + 20));

  let element5 = document.getElementById(idto - 11);
  let element6 = document.getElementById(idto - 9);

  let element7 = document.getElementById(String(Number(idto) + 11));
  let element8 = document.getElementById(String(Number(idto) + 9));

  if (element1 !== null && color === "white" && element1.innerText.length === 0) {
    if (element1.childElementCount === 0) {
      if (from === "check") {
        element1.classList.add('check')
      }
      else{
        if (SwapPieces(element,element1,cl) === true) {
          
          element1.appendChild(AddDiv(element1.id))
        }
      }
    }
    if (element2 !== null && idto[0] == 7 && element2.innerText.length === 0) {
      if (element2.childElementCount === 0) {
        if (from === "check") {
          element2.classList.add('check')
        }
        else{
          if (SwapPieces(element,element2,cl) === true) {
           
            element2.appendChild(AddDiv(element2.id));
          }
        }
        
      }
    }
  } else if (color === "white" && from !== "check") {
    Color();
    selectedFigure = false;
  }
  if (element3 !== null && color === "black" && element3.innerText.length === 0) {
    if (element3.childElementCount === 0) {
      if (from === "check") {
        element3.classList.add('check')
      }
      else{
        if (SwapPieces(element,element3,cl) === true) {
          
          element3.appendChild(AddDiv(element3.id));
        }
      }
    }

    if (element4 !== null &&idto[0] == 2 && element4.innerText.length === 0) {
      if (element4.childElementCount === 0) {
        if (from === "check") {
          
          element4.classList.add('check')
        }
        else{
          if (SwapPieces(element,element4,cl) === true) {
        
            element4.appendChild(AddDiv(element4.id));
          }
        }
      }
    }
  } else if (color === "black" && from  !== "check") {
    Color();
    selectedFigure = false;
  }
  if (element5 !== null) {
    if (color === "white" && pieces[1].includes(element5.innerText)) {
     if (from !== "check") {
        element.style.backgroundColor = "rgb(92, 146, 196)";
      } 
      
      if (element5.childElementCount === 0) {
        if (from === "check") {
          element5.classList.add('check')
        }
        else{
          if (SwapPieces(element,element5,cl) === true) {
            element5.appendChild(AddDiv(element5.id));
          }
        }
      }
      selectedFigure = true;
    }
  }

  if (element6 !== null) {
    if (color === "white" && pieces[1].includes(element6.innerText)) {
      if (from !== "check") {
        element.style.backgroundColor = "rgb(92, 146, 196)";
      } 
      if (element6.childElementCount === 0) {
        if (from === "check") {
          element6.classList.add('check')
        }
        else{
          if (SwapPieces(element,element6,cl) === true) {
            element6.appendChild(AddDiv(element6.id));
          }
        }
      }
      selectedFigure = true;
    }
  }

  if (element7 !== null) {
    if (color === "black" && pieces[0].includes(element7.innerText)) {
      if (from !== "check") {
        element.style.backgroundColor = "rgb(92, 146, 196)";
      } 
      if (element7.childElementCount === 0) {
        if (from === "check") {
          element7.classList.add('check')
        }
        else{
          if (SwapPieces(element,element7,cl) === true) {
            element7.appendChild(AddDiv(element7.id));
          }
        }
      }
      selectedFigure = true;
    }
  }
  if (element8 !== null) {
    if (color === "black" && pieces[0].includes(element8.innerText)) {
      if (from !== "check") {
        element.style.backgroundColor = "rgb(92, 146, 196)";
      } 
      if (element8.childElementCount === 0) {
        if (from === "check") {
          element8.classList.add('check')
        }
        else{
          if (SwapPieces(element,element8,cl) === true) {
            element8.appendChild(AddDiv(element8.id));
          }
        }
      }
      selectedFigure = true;
    }
  }
}

// KING KING KING //

function GreenKing(king, color,from) {
  if (from !== "check") {
    
    king.style.backgroundColor = "rgb(92, 146, 196)";
  }
  let cl = 0
  if (color === "black") {
    cl = 1
  }
//  console.log(king);
  for (let i = 0; i < squares.length; i++) {
    let ID = Number(squares[i].id);
    if (
      king.id == ID + 1 ||
      king.id == ID - 1 ||
      king.id == ID + 10 ||
      king.id == ID - 10 ||
      king.id == ID + 11 ||
      king.id == ID + 9 ||
      king.id == ID - 9 ||
      king.id == ID - 11
    ) {
      if (from !== "check") {
        selectedFigure = true;
      }
     
      if (
        (color === "white" && pieces[1].includes(squares[i].innerText)) ||
        squares[i].innerText.length === 0
      ) {
        if (squares[i].childElementCount === 0) {
          if (from === "check") {
            squares[i].classList.add('check')
          }
          else{
            if (SwapPieces(king,squares[i],cl) === true) {
              squares[i].appendChild(AddDiv(squares[i].id));
            }
          }
  
        }
      } else if (
        (color === "black" && pieces[0].includes(squares[i].innerText)) ||
        squares[i].innerText.length === 0
      ) {
        if (squares[i].childElementCount === 0) {
          if (from === "check") {
            squares[i].classList.add('check')
          }
          else{
            if (SwapPieces(king,squares[i],cl) === true) {
              squares[i].appendChild(AddDiv(squares[i].id));
            }
          }
        }

      }
      if (from !== "check") {
        let child = document.createElement("div");
      child.setAttribute("class", "castle");

      if (
        Wking === false &&
        h1Rook === false &&
        document.getElementById("16").innerText.length === 0 &&
        document.getElementById("17").innerText.length === 0 &&
        color === "black" &&
        document.getElementById("17").childElementCount === 0
      ) {
        if (document.getElementById("17").childElementCount === 0) {
          document.getElementById("17").appendChild(child);
        }
        child.setAttribute("id", "c" + document.getElementById("17").id);
      }
      if (
        Wking === false &&
        a1Rook === false &&
        document.getElementById("12").innerText.length === 0 &&
        document.getElementById("13").innerText.length === 0 &&
        document.getElementById("14").innerText.length === 0 &&
        color === "black" &&
        document.getElementById("13").childElementCount === 0
      ) {
        if (document.getElementById("13").childElementCount === 0) {
          document.getElementById("13").appendChild(child);
        }
        child.setAttribute("id", "c" + document.getElementById("13").id);
      }
      if (
        Bking === false &&
        h8Rook === false &&
        document.getElementById("86").innerText.length === 0 &&
        document.getElementById("87").innerText.length === 0 &&
        color === "white" &&
        document.getElementById("87").childElementCount === 0
      ) {
        if (document.getElementById("87").childElementCount === 0) {
          document.getElementById("87").appendChild(child);
        }
        document.getElementById("87").appendChild(child);
        child.setAttribute("id", "c" + document.getElementById("87").id);
      }
      if (
        Bking === false &&
        a8Rook === false &&
        document.getElementById("82").innerText.length === 0 &&
        document.getElementById("83").innerText.length === 0 &&
        document.getElementById("84").innerText.length === 0 &&
        color === "white" &&
        document.getElementById("83").childElementCount === 0
      ) {
        if (document.getElementById("83").childElementCount === 0) {
          document.getElementById("83").appendChild(child);
        }

        child.setAttribute("id", "c" + document.getElementById("83").id);
      }
      }
      
    }
  }
}

function GreenKnight(element, color,from) {
  if (from !== "check") {
    element.style.backgroundColor = "rgb(92, 146, 196)";
    selectedFigure = true;
  }
  
  let idto = Number(element.id);
  let colorInt = 0;
  if (color === "black") {
    colorInt = 1;
  }
  Array.from(squares).forEach((element2) => {
    let elmId = Number(element2.id);

    switch (idto) {
      case elmId + 21:
      case elmId + 19:
      case elmId + 12:
      case elmId + 8:
      case elmId - 21:
      case elmId - 19:
      case elmId - 12:
      case elmId - 8:
        if (pieces[colorInt].includes(element2.innerText) !== true) {
          if (element.childElementCount === 0) {
            if (from === "check") {
              element2.classList.add('check')
            }
            else{
              if (SwapPieces(element,element2,colorInt) === true) {
                element2.appendChild(AddDiv(element2.id));
              }
            }
            
          }
        }
        break;

      default:
        break;
    }
  });
}
