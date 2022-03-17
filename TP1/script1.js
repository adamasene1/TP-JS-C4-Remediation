const btn = document.querySelectorAll('button')
const conteneur = document.getElementById('conteneur');
setTimeout(() => {
    conteneur
}, 1000);


btn[0].addEventListener('click', function() {
    let ndiv = document.createElement('div');
    ndiv.setAttribute('class', 'cont');
    ndiv.style.backgroundColor = "rgb(0, 104, 0)";
    ndiv.textContent = "Success";
    conteneur.appendChild(ndiv);
    setTimeout(() => {
        ndiv.remove();
    }, 2000);


})
btn[1].addEventListener('click', function() {
    let ndiv = document.createElement('div');
    ndiv.setAttribute('class', 'cont');
    ndiv.style.backgroundColor = "rgb(192, 0, 0)";
    ndiv.textContent = "Dangers";
    conteneur.appendChild(ndiv);
    setTimeout(() => {
        ndiv.remove();
    }, 2000);


})

btn[2].addEventListener('click', function() {
    let ndiv = document.createElement('div');
    ndiv.setAttribute('class', 'cont');
    ndiv.style.backgroundColor = "rgba(251, 176, 36, 0.911";
    ndiv.textContent = "waming";
    conteneur.appendChild(ndiv);
    setTimeout(() => {
        ndiv.remove();
    }, 2000);


})
btn[3].addEventListener('click', function() {
        let ndiv = document.createElement('div');
        ndiv.setAttribute('class', 'cont');
        ndiv.style.backgroundColor = "rgb(0, 177, 177)";
        ndiv.textContent = "infos";
        conteneur.appendChild(ndiv);
        setTimeout(() => {
            ndiv.remove();
        }, 2000);


    })
    // btn[2].addEventListener('click', function() {
    //     let ndiv = document.createElement('div');
    //     ndiv.setAttribute('class', 'cont');
    //     ndiv.style.backgroundColor = "rgba(251, 176, 36, 0.911)";
    //     ndiv.textContent = '';
    //     conteneur.appendChild(ndiv);
    //     setTimeout(() => {
    //         ndiv.remove();
    //     }), 2000;
    // })
    // btn[3].addEventListener('click', function() {
    //     let ndiv = document.createElement('div');
    //     ndiv.setAttribute('class', 'cont');
    //     ndiv.style.backgroundColor = " rgb(0, 177, 177)";
    //     ndiv.textContent = 'Waming';
    //     conteneur.appendChild(ndiv);
    //     setTimeout(() => {
    //         ndiv.remove();
    //     }), 2000;
    // })