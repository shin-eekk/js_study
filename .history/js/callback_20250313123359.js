window.addEventListener("DOMContentLoaded", ()=>{
    // document.body.innerHTML ="<button class='btn'>클릭</button>";

    // const clickmsg= ()=>{  //선언
    //     document.body.innerHTML += "<p>보이게</p>"
    // }

    const clickmsg= ()=>{  //선언
        document.querySelector("#content").innerHTML += "<p>보이게</p>"
    }

    // document.querySelector(".btn").addEventListener('click', clickmsg);
    //화면 열리면 : DOMContentLoaded // 보이게 : addEventListner
  
    
    document.querySelector(".btn").addEventListener('click',
       ()=>{
            for(let i=0; i<10; i++){
            clickmsg();
            }
       } 
    ); //버튼 클릭하면 보이게

    function clickmsg(){
        document.querySelector("#content").innerHTML += ""
    }


})