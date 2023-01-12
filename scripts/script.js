// Sidebar
const menuItems = document.querySelectorAll('.menu-item'); //selects all the divs with the class menu-item

// Messages
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colourPalette = document.querySelectorAll('.choose-colour span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

// Coding the Messages on the Sidebar

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active'); //adds the class active to the menu-item divs.
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display ='none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// End of Coding the Messages on the Sidebar

// Coding the Messages section.

// searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    //console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
} 

// search chat
messageSearch.addEventListener('keyup', searchMessage);

// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--colour-primary)'; //when messages button is clicked add box shadow over messages section
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

// End of Coding the Messages section.

// Theme/Display Customization

// open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// close modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

// change font size

// removes active class from span or fonts size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }

        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})


// removes active class from span or colour selectors
const changeActiveColourClass = () => {
    colourPalette.forEach(colourPicker => {
        colourPicker.classList.remove('active');
    })
}

// change primary colours
colourPalette.forEach(colour => {

    colour.addEventListener('click', () => {
        let primary;
        changeActiveColourClass();

        if(colour.classList.contains('colour-1')){
            primaryHue = 252;
        } else if(colour.classList.contains('colour-2')) {
            primaryHue = 52;
        } else if(colour.classList.contains('colour-3')) {
            primaryHue = 352;
        } else if(colour.classList.contains('colour-4')) {
            primaryHue = 152;
        } else if(colour.classList.contains('colour-5')) {
            primaryHue = 202;
        }
        colour.classList.add('active');

        root.style.setProperty('--primary-colour-hue', primaryHue);
    })
})

// changing theme backgorund values
let lightColourLightness;
let whiteColourLightness;
let darkColourLightness;


// change background colour
const changeBG = () => {
    root.style.setProperty('--light-colour-lightness', lightColourLightness);
    root.style.setProperty('--white-colour-lightness', whiteColourLightness);
    root.style.setProperty('--dark-colour-lightness', darkColourLightness);
}

bg1.addEventListener('click', () => {
    // add active class
    bg1.classList.add('active');
    // remove active class from the others
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    // remove customized changes from local storage
    window.location.reload();
})


bg2.addEventListener('click', () => {
    darkColourLightness = '95%';
    whiteColourLightness = '20%';
    lightColourLightness = '15%';

    // add active class
    bg2.classList.add('active');
    // remove active class from the others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg3.addEventListener('click', () => {
    darkColourLightness = '95%';
    whiteColourLightness = '10%';
    lightColourLightness = '0%';

    // add active class
    bg3.classList.add('active');
    // remove active class from the others
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
})