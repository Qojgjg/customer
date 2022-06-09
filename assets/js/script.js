// menu
const closeMenuBtn = document.querySelector('.close-menu')
const showmobmenu = document.querySelector('.sidemob1')
        const hamburgerIcon = document.querySelector('.hamburger-icon')
        const saye = document.querySelector('.saye')
        hamburgerIcon.addEventListener('click', () => {
            showmobmenu.classList.toggle('showmenu')
            hamburgerIcon.classList.add('change')
            saye.classList.add('fadesaye')
        })
        saye.addEventListener('click', ()=>{
            showmobmenu.classList.remove('showmenu')
            hamburgerIcon.classList.remove('change')
            saye.classList.remove('fadesaye')
        })
        closeMenuBtn.addEventListener('click' , ()=>{
            showmobmenu.classList.remove('showmenu')
            hamburgerIcon.classList.remove('change')
            saye.classList.remove('fadesaye')
        })
 

        // https://colorhunt.co/palette/fff89affc900086e7d1a5f7a