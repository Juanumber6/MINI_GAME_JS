function clicar(){
    let conteudoinput = document.querySelector("#name").value
    document.querySelector(".name_container").style.display = 'none'
    document.querySelector("body").style.backgroundImage = "url(img/CAMINHOCASTELOSOMBRIOELUGARILUMINADO.jpg"
    document.querySelector(".waystogo").style.display = "block"

    const el = document.querySelector("#text1")
    const text1 = `Before ${conteudoinput}, there appear two divergent paths. To the left, a welcoming path seems to extend, basking in the warmth of the sun's gentle embrace, suggesting safety and familiarity. To the right, a darker, more sinister trail weaves its way through the twisted, gnarled trees, casting foreboding shadows, promising hidden mysteries and the allure of the unknown.`
    const interval = 30

    function showText(el, text1, interval){
        const char = text1.split('').reverse()

        const typer = setInterval(()=>{
            if(!char.length){
                return clearInterval(typer)
            }
            const next = char.pop()
            el.innerHTML += next
        }, interval)
    }
    showText(el,text1,interval)


}

function caminho1(){
    document.querySelector("body").style.backgroundImage = "url(img/CAMINHOCIRCOELUGARSOMBRIO.jpg"
    document.querySelector(".dialogo1").style.display = 'none'
    document.querySelector(".dialogocastelo").style.display = 'none'
    document.querySelector(".maiscaminhodialogo").style.display = 'block'
    document.querySelector("#seta1").style.display = 'none'
    document.querySelector("#seta2").style.display = 'none'
    document.querySelector("#seta3").style.display = 'block'
    document.querySelector("#seta4").style.display = 'block'
    document.querySelector("#text1").style.display = 'none'
    document.querySelector(".simbotao").style.display = "none"
    document.querySelector(".naobotao").style.display = "none"
    let conteudoinput = document.querySelector("#name").value

    const el = document.querySelector("#text4")
    const text4 = `${conteudoinput} pressed forward until darkness descended, revealing two paths. To the left, a lively circus, its lights and music beckoning with mirth. To the right, a shadowy hut, an enigmatic invitation to the unknown. A choice loomed in the obscurity, between revelry and mystery.`
    const interval = 30

    function showText(el, text4, interval){
        const char = text4.split('').reverse()

        const typer = setInterval(()=>{
            if(!char.length){
                return clearInterval(typer)
            }
            const next = char.pop()
            el.innerHTML += next
        }, interval)
    }
    showText(el,text4,interval)
}

function caminho3(){
    document.querySelector("#seta3").style.display = 'none'
    document.querySelector("#seta4").style.display = 'none'
    document.querySelector("#text4").style.display = 'none'
    document.querySelector(".maiscaminhodialogo").style.display = 'none'
    document.querySelector("body").style.backgroundImage = "url(img/DENTRODOCIRCO.jpg"
    document.querySelector("video").style.display = 'block'
    document.querySelector("#skipvideo").style.display = 'block'
}

function caminho4(){
    document.querySelector("body").style.backgroundImage = "url(img/OLHOSNAPAREDE.jpg"
    document.querySelector("#seta3").style.display = 'none'
    document.querySelector("#seta4").style.display = 'none'
    document.querySelector("#text4").style.display = 'none'
    document.querySelector(".maiscaminhodialogo").style.display = 'none'
    document.querySelector(".morte2dialogo").style.display = 'block'
    document.querySelector("#morte2").style.display = 'block'
    
    let conteudoinput = document.querySelector("#name").value

    const el = document.querySelector("#morte2")
    const morte2 = `
    An old man appeared in the gap in the old cabin's wall and invited ${conteudoinput} inside, it seemed like ${conteudoinput} didn't have much of a choice. His voice carried an air of mystery, and the dim light from within revealed a room steeped in history. Reluctantly, you stepped through the opening, curiosity mingling with caution.`
    const interval = 30

    function showText(el, morte2, interval){
        const char = morte2.split('').reverse()

        const typer = setInterval(()=>{
            if(!char.length){
                return clearInterval(typer)
            }
            const next = char.pop()
            el.innerHTML += next
        }, interval)
    }
    showText(el, morte2, interval)

    setTimeout(function(){
        document.querySelector("#entrar").style.display = "block"
    }, 2000);


}

function entrar(){
    document.querySelector("body").style.backgroundImage = "url(img/MORTENOCALDEIRAO.jpg"
    document.querySelector("#entrar").style.display = 'none'
    document.querySelector(".morte2dialogo").style.display = 'none'
    document.querySelector("#morte2").style.display = 'none'

    const el = document.querySelector("#mortecaldeirao")
    const mortecaldeirao = `GAME 
    OVER`
    const interval = 30

    function showText(el, mortecaldeirao, interval){
        const char = mortecaldeirao.split('').reverse()

        const typer = setInterval(()=>{
            if(!char.length){
                return clearInterval(typer)
            }
            const next = char.pop()
            el.innerHTML += next
        }, interval)
    }
    showText(el,mortecaldeirao,interval)
}

function pularvideo(){
    document.querySelector("body").style.backgroundImage = "url(img/CHEGOUNACASA.jpg"
    document.querySelector("video").style.display = 'none'
    document.querySelector("video").pause()
    document.querySelector("#skipvideo").style.display = 'none'
    document.querySelector(".chegounacasadialogo").style.display = 'block'
    document.querySelector("#entrounacasa").style.display = 'block'

    let conteudoinput = document.querySelector("#name").value


    const el = document.querySelector("#text5")
    const text5 = `
    After enjoying the circus, ${conteudoinput} ventured back into the dark forest, the night's shadows enveloping their path. In the distance, the comforting glow of their house emerged, a welcoming beacon in the night. As they approached, a sense of relief and nostalgia washed over them. Home, with its familiar comforts and warmth, and the character finally arrived at their destination.`
    const interval = 30

    function showText(el, text5, interval){
        const char = text5.split('').reverse()

        const typer = setInterval(()=>{
            if(!char.length){
                return clearInterval(typer)
            }
            const next = char.pop()
            el.innerHTML += next
        }, interval)
    }
    showText(el,text5,interval)
}

function entrounacasa(){
    document.querySelector("body").style.backgroundImage = "url(img/PIKACHUDANCANDO.gif"
    document.querySelector(".chegounacasadialogo").style.display = 'none'
    document.querySelector("#entrounacasa").style.display = 'none'
    document.querySelector("#text5").style.display = 'none'

    
    const el = document.querySelector("#textwin")
    const text3 = `YOU WON!`
    const interval = 30

    function showText(el, text3, interval){
        const char = text3.split('').reverse()

        const typer = setInterval(()=>{
            if(!char.length){
                return clearInterval(typer)
            }
            const next = char.pop()
            el.innerHTML += next
        }, interval)
    }
    showText(el,text3,interval)
}


function caminho2(){
    document.querySelector("body").style.backgroundImage = "url(img/CAMINHODOCASTELO.jpg"
    document.querySelector(".dialogo1").style.display = 'none'
    document.querySelector(".dialogocastelo").style.display = 'block'
    document.querySelector("#seta1").style.display = 'none'
    document.querySelector("#seta2").style.display = 'none'
    document.querySelector("#seta3").style.display = 'none'
    document.querySelector("#seta4").style.display = 'none'
    document.querySelector("#text1").style.display = 'none'
    let conteudoinput = document.querySelector("#name").value


    const el = document.querySelector("#text2")
    const text2 = `Following the path to the castle, ${conteudoinput} encountered an unusual structure. Before him, a mysterious and ethereal ghostly restaurant. A ghost approached him with a menu. With a spectral smile, the ghost asked, "Welcome to the Spirit Restaurant! Would you like to eat something?"`
    const interval = 30

    function showText(el, text2, interval){
        const char = text2.split('').reverse()

        const typer = setInterval(()=>{
            if(!char.length){
                return clearInterval(typer)
            }
            const next = char.pop()
            el.innerHTML += next
        }, interval)
    }
    showText(el,text2,interval)

    document.querySelector(".simbotao").style.display = "none"
    document.querySelector(".naobotao").style.display = "none"

    setTimeout(function(){
        document.querySelector(".naobotao").style.display = "block"
        document.querySelector(".simbotao").style.display = "block"
    }, 2000);



}
function morte1(){
    document.querySelector("body").style.backgroundImage = "url(img/FIMDOCAMINHO1.jpg"
    document.querySelector(".restaurantedialogo").style.display = "none"
    document.querySelector("#text2").style.display = "none"
    document.querySelector(".simbotao").style.display = "none"
    document.querySelector(".naobotao").style.display = "none"


    const el = document.querySelector("#text3")
    const text3 = `GAME 
    OVER`
    const interval = 30

    function showText(el, text3, interval){
        const char = text3.split('').reverse()

        const typer = setInterval(()=>{
            if(!char.length){
                return clearInterval(typer)
            }
            const next = char.pop()
            el.innerHTML += next
        }, interval)
    }
    showText(el,text3,interval)
}

function livre1(){
    document.querySelector(".simbotao").style.display = "none"
    document.querySelector(".naobotao").style.display = "none"
    document.querySelector(".restaurantedialogo").style.display = "none"
    document.querySelector("#text2").style.display = "none"
    
    let conteudoinput = document.querySelector("#name").value   
    document.querySelector(".livredialogo").style.display = 'block'
    document.querySelector("#livretext").style.display = 'block'

    const el = document.querySelector("#livretext")
    const  livretext = `The menu looked tantalizing, so ${conteudoinput} ordered a sumptuous feast. As he took the first bite, his eyes widened in disbelief. The food had no taste, like a flavorless void. He chewed, swallowed, and puzzled over the absence of any sensation on his taste buds. It was a ghostly experience that left him bewildered and longing for the real world's savory delights.`
    const interval = 30

    function showText(el, livretext, interval){
        const char = livretext.split('').reverse()

        const typer = setInterval(()=>{
            if(!char.length){
                return clearInterval(typer)
            }
            const next = char.pop()
            el.innerHTML += next
        }, interval)
    }
    showText(el,livretext,interval)

    document.querySelector("#sairdorestaurante").style.display = "none"

    setTimeout(function(){
        document.querySelector("#sairdorestaurante").style.display = "block"
    }, 2000);


}

function sairdorestaurante() {
    document.querySelector(".livredialogo").style.display = 'none'
    document.querySelector("#sairdorestaurante").style.display = 'none'
    document.querySelector("#livretext").style.display = 'none'
    document.querySelector("body").style.backgroundImage = "url(img/CHEGOUNACASA.jpg"
    document.querySelector("#skipvideo").style.display = 'none'
    document.querySelector(".chegounacasadialogo").style.display = 'block'
    document.querySelector("#entrounacasa").style.display = 'block'

    let conteudoinput = document.querySelector("#name").value


    const el = document.querySelector("#text5")
    const text5 = `After leaving the castle, he mysteriously vanished, and ${conteudoinput} continued to follow the forest path until he finally found his home. The moonlight cast an eerie glow on the dense trees, adding to the suspense. As he approached, the familiar silhouette of his house emerged, bringing both relief and curiosity. It seemed like an eternity since he had last seen it.`
    const interval = 30

    function showText(el, text5, interval){
        const char = text5.split('').reverse()

        const typer = setInterval(()=>{
            if(!char.length){
                return clearInterval(typer)
            }
            const next = char.pop()
            el.innerHTML += next
        }, interval)
    }
    showText(el,text5,interval)
}

