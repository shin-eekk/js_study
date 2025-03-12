window.addEventListener("DOMContentLoaded",()=>{
    const faq = [
        {
        dt: "1. 제품이 문제가 있을 때 해결 방법입니다", 
        dd: "이렇게 저렇게 요렇게 이렇게 저렇게 | 요렇게이렇게 저렇게 요렇게 |이렇게 저렇게 요렇게하세요"
        },
        {
        dt: "2. 배송에 문제가 생겼어요", 
        dd: "이렇게 저렇게 요렇게 이렇게 저렇게 | 요렇게이렇게 저렇게 요렇게 |이렇게 저렇게 요렇게하세요"
        },
        {
        dt: "3. 제품을 교환/환불하고 싶어요", 
        dd: "이렇게 저렇게 요렇게 이렇게 저렇게 | 요렇게이렇게 저렇게 요렇게 |이렇게 저렇게 요렇게하세요"
        },
        {
        dt: "4. 제품이 문제가 있을 때 해결 방법입니다", 
        dd: "이렇게 저렇게 요렇게 이렇게 저렇게 | 요렇게이렇게 저렇게 요렇게 |이렇게 저렇게 요렇게하세요"
        },
        {
        dt: "5. 제품이 문제가 있을 때 해결 방법입니다", 
        dd: "이렇게 저렇게 요렇게 이렇게 저렇게 | 요렇게이렇게 저렇게 요렇게 |이렇게 저렇게 요렇게하세요"
        },
    ]

    const faqdom = document.querySelector("#faq dl");  //정적개체는 위치 자유

    let faqtag = `<dt class="border-top py-3 d-flex justify-content-between">
                    <strong>${faq[0].dt}</strong>
                    <i class="bi bi-chevron-down"></i>
                </dt>
                <dd class="border-bottom py-3 bg-light">${faq[0]["dd"]}</dd>`;
   
    faqdom.innerHTML = faqtag;
    //출력완료
})
