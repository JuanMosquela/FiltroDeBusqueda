const btn = document.querySelector('.btn');
const input = document.querySelector('.filter');
const container = document.querySelector('.container-cards');


const cards = {
    card1: {
        title:'Labrador',
        photo: "https://picsum.photos/id/237/200/300"
    },
    card2: {
        title:'Condor',
        photo: "https://picsum.photos/id/1024/200/300"
    },
    card3: {
        title:'Pug',
        photo: "https://picsum.photos/id/1025/200/300"
    },
    card4: {
        title:'Montañas',
        photo: "https://picsum.photos/id/1036/200/300"
    },
    card5: {
        title:'Auto nuevo',
        photo: "https://picsum.photos/id/1071/200/300"
    },
    card6: {
        title:'Auto viejo',
        photo: "https://picsum.photos/id/1072/200/300"
    }

}

document.addEventListener('click', (e) => {
    if(e.target.matches('.btn')){
        Object.values(cards).forEach(el => {
            const div = document.createElement('div');
            div.className = 'card';
            const h3 = document.createElement('h3');
            const img = document.createElement('img');
            h3.innerHTML = el.title;
            img.setAttribute('src', el.photo);
            div.appendChild(img);
            div.appendChild(h3);
            container.appendChild(div)           
        });        
    }


})

document.addEventListener('keyup', (e) => {
    if(e.target.matches('.filter')){

        document.querySelectorAll('.card').forEach(card => {
            if(card.innerHTML.toLowerCase().includes(e.target.value)){
                card.classList.remove('hidden')


            }else{
                card.classList.add('hidden')
            }

        })

    }
})




