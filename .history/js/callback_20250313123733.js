window.addEventListener("DOMContentLoaded", ()=>{
    
    // const clickmsg= ()=>{  //화살표 함수 선언
    //     document.querySelector("#content").innerHTML += "<p>보이게</p>"
    // }

    document.querySelector(".btn").addEventListener('click',
       ()=>{
            for(let i=0; i<10; i++){
            clickmsg(매개인자);
            }
       } 
    ); //버튼 클릭하면 보이게

    // function clickmsg(){ //선언적 함수
    //     document.querySelector("#content").innerHTML += "<p>보이게</p>"
    // }
    function clickmsg(c){ //선언적 함수
        document.querySelector("#content").innerHTML += `<p>${c}</p>`
    }
    

    }


})