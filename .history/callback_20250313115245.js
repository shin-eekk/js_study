//선언과 실행
//실행의 시점은 이벤트 : click, load, mouseEnter ...
//addEventListner 로 연결

window.addEventListener("DOMContentLoaded", ()=>{
    document.body.innerHTML ="<button class='btn'>클릭</button>";

    const clickmsg= ()=>{  //선언
        document.body.innerHTML += "<p>보이게</p>"
    }

    document.querySelector(".btn").addEventListener('click')
})

// document.body.innerHTML = "<button >클릭</button>"
// document.querySelector("button").classList.add("btn")
