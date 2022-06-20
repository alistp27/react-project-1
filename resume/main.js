window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('windowscroll',window.scrollY > 400)
})

const faqs = document.querySelectorAll('.faqs__container')
faqs.forEach(x => {
    x.addEventListener('click',()=>{
        x.classList.toggle('open')

        const icx = x.querySelector('.faq__icon i')
	console.log(icx)
        if(icx.className === "uil uil-plus") {
            icx.className="uil uil-minus"
        }else{
            icx.className="uil uil-plus"
        }

    })
});
