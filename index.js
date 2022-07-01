//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');
// MESSAGES
const messagesNotification = document.querySelector('#massage-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const colorPalette = document.querySelectorAll('.choose-color span');

//  THEME
 const theme = document.querySelector('#theme');
 const themeModal = document.querySelector('.customize-theme');

const  fontSizes =document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// remove active
const changeActiveITem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

//add active 
menuItems.forEach(item =>{
    item.addEventListener('click', () =>{
        changeActiveITem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display ='none';
        }else{
            document.querySelector('.notification-popup').style.display ='block';
            document.querySelector('#notifications .notification-count').style.display ='none';
        }
    })
})
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLocaleLowerCase();
        if(name.indexOf(val) != -1)
        {
            chat.style.display = 'flex';
        }else{
            chat.style.display ='none';
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage)
// MESSAGES
messagesNotification.addEventListener('click', () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display ='none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';

    }, 2000);
})

// THEME
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

theme.addEventListener('click', openThemeModal);
themeModal.addEventListener('click', closeThemeModal);

// FONTS
const removeSizeSelector =() =>{
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () =>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize= '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem'); 
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize= '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem'); 
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize= '16px';
            root.style.setProperty('----sticky-top-left', '5.4rem'); 
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize= '19px';
            root.style.setProperty('----sticky-top-left', '5.4rem'); 
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize= '22px';
            root.style.setProperty('----sticky-top-left', '5.4rem'); 
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }
        document.querySelector('html').style.fontSize =fontSize;
    })
})
const changeActiveColor =() =>{
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
colorPalette.forEach(color => {
    color.addEventListener('click', () =>{
        let primary;
        changeActiveColor();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


// BACKGROUND
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () =>{
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}
Bg1.addEventListener('click', () =>{
   
    Bg1.classList.add('active');

    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
});
Bg2.addEventListener('click', () =>{
    lightColorLightness ='15%';
    whiteColorLightness ='20%';
    darkColorLightness ='95%';

    Bg2.classList.add('active');

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});
Bg3.addEventListener('click', () =>{
    lightColorLightness ='0%';
    whiteColorLightness ='10%';
    darkColorLightness ='95%';

    Bg3.classList.add('active');

    Bg2.classList.remove('active');
    Bg1.classList.remove('active');
    changeBG();
});