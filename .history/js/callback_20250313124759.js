window.addEventListener("DOMContentLoaded", ()=>{
    
    document.querySelector(".btn").addEventListener('click',
       ()=>{
            for(let i=0; i<10; i++){
            clickmsg(`매개인자${i}`);
            }
       } 
    ); //버튼 클릭하면 보이게

    document.querySelector(".del").addEventListener('click',
        ()=>{
             document.querySelector("#content").innerHTML = ''
        } 
     );

    

    function clickmsg(c){ //선언적 함수
        document.querySelector("#content").innerHTML += `<p>${c}</p>`
        }
        }


})