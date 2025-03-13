//선언과 실행
//실행의 시점은 이벤트 : click, load, mouseEnter ...
//addEventListner 로 연결

window.addEventListener("DOMContentLoaded", ()=>{
    document.body.innerHTML ="<button class=btn>클릭</button>"
    document.querySelector(".btn").addEventListener('click',()=>{
        document.innerHTML.body += "<p></p>"
    })
})

// document.body.innerHTML = "<button >클릭</button>"
// document.querySelector("button").classList.add("btn")
