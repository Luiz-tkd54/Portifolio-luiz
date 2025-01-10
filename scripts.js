function togglemode(){
    const html = document.documentElement

    // classlist.contains = caso tenha retorna um valor de verdadeiro ou falso
    if(html.classList.contains('light')){
        // se tiver
        html.classList.remove('light')
    }else{
        html.classList.add('light')
    }
}