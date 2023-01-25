import React, { useEffect, useState } from "react";
import "./Page1.css";
// import { ReactDOM } from "react";


const Page1=()=>{

//     var [anoop,setAnoop]=useState(0);
//     const cak=function(){
//         setAnoop(anoop+1);
//     }

//   function st(){
// // for(let i=0;i<7;i++){
//   cak();

//       F1();
      
// }

// const ak=function() {
// var divs = document.getElementById("1coloumn").childNodes[anoop];
// divs.style.backgroundColor="Red";
// console.log(anoop);


// F1();

// }
//    function F1(){
//     setTimeout(ak, 1000)
//  }
////////////////////////////////////////This is not working means useState is not updating
/// its value /////////


 function check(i,j){
    if(i>7){
        return ;
    }
//     // let temp1=document.getElementById("div2").childNodes[0].childNodes[i];
//     // let val=temp1.textContent;
//     // if(val==" "){
//     //     if(i!=6){
//     //       temp1.style.backgroundColor="red";
//     //       setTimeout(()=>{
//     //         var temp= document.getElementById("1coloumn").childNodes[i];
//     //         temp.style.backgroundColor = "white"
//     //        },100 );
          
//     //         check(i+1,j)
//     //     }else {
//     //     temp1.style.backgroundColor="red";
//     //     }
//     // }
//     // else {
//     //     let temp2=document.getElementById("div2").childNodes[0].childNodes[i+1];
//     //     temp2.style.backgroundColor="red";
//     // }


 }


function aa(){
    for (let i=0; i<7; i++) {
        task(i);
     }
       
     function task(i) {
       setTimeout(function() {
  
           var temp= document.getElementById("1coloumn").childNodes[i];
            console.log(i);
        
               
               temp.style.backgroundColor = "red"
               if(i!==6){
                check(i,0)
              setTimeout(()=>{
                var temp= document.getElementById("1coloumn").childNodes[i];
                temp.style.backgroundColor = "white"
               },100 );
            }


               
       
    
       }, 90 * i);
     }
    }















    return <>
      
  <div className="div1">


<div className="div2" id="div2">

<div className="1coloumn" id="1coloumn">
<div className="div3"> </div>
<div className="div4"> </div>
<div className="div5"> </div>
<div className="div6"> </div>
<div className="div7">e</div>
<div className="div8">s</div>
<div className="div9">a</div>
</div>

<div className="2coloumn">
<div className="div32"></div>
<div className="div42"></div>
<div className="div52"></div>
<div className="div62"></div>
<div className="div72"></div>
<div className="div82"></div>
<div className="div92"></div>
</div>

<div className="3coloumn">
<div className="div33"></div>
<div className="div43"></div>
<div className="div53"></div>
<div className="div63"></div>
<div className="div73"></div>
<div className="div83"></div>
<div className="div93"></div>
</div>

<div className="4coloumn">
<div className="div34"></div>
<div className="div44"></div>
<div className="div54"></div>
<div className="div64"></div>
<div className="div74"></div>
<div className="div84"></div>
<div className="div94"></div>
</div>

<div className="5coloumn">
<div className="div35"></div>
<div className="div45"></div>
<div className="div55"></div>
<div className="div65"></div>
<div className="div75"></div>
<div className="div85"></div>
<div className="div95"></div>
</div>

</div>


<button  onClick={aa}> clicl  </button>

{/* <button  onClick={aa}> clicl  </button>

<button  onClick={aa}> clicl  </button>

<button  onClick={aa}> clicl  </button>

<button  onClick={aa}> clicl  </button> */}










  </div>
    </>
}
export default Page1;