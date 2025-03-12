window.addEventListener("DOMContentLoaded"()=>{
    const faq = [
        {dt: "Q. 자주 묻는 질문",
         dd: "A. 질문 답변입니다."
        },
        {dt: "Q. 자주 묻는 질문",
         dd: "A. 질문 답변입니다."
        },
        {dt: "Q. 자주 묻는 질문",
         dd: "A. 질문 답변입니다."
        },
        {dt: "Q. 자주 묻는 질문",
         dd: "A. 질문 답변입니다."
        },
        {dt: "Q. 자주 묻는 질문",
         dd: "A. 질문 답변입니다."
        },
    ]

    const faqdom = document.querySelector("#faq dl");

    let faqtag = ``;
    for(x of faq){
        faqtag +=`${x.dt}${x.dd}`;
    }

    fa
})