const counters = document.querySelectorAll('h1')


counters.forEach(h1 => {


    const update = ()=>{
        const target = +h1.getAttribute('data-target')
        const c = +h1.innerText

        const value = target / 200
        if(c < target){
            h1.innerText = `${c + value}`
            setTimeout(update, 1)
        }
        
    }

    update()
})


