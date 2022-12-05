const getMyEleAll = select => { return document.querySelectorAll(select) }

const getMyEle = select => { return document.querySelector(select) }

let btn = getMyEleAll('#buttonVal')


for (let index = 0; index < 4; index++) {
    btn[index].onclick = () => {
        if (index == 0) {
            getMyEle('#btnUpdate').innerHTML = 'English'
        } else if (index == 1) {
            getMyEle('#btnUpdate').innerHTML = 'French'
        } else if (index == 2) {
            getMyEle('#btnUpdate').innerHTML = 'Spanish'
        } else if (index == 3) {
            getMyEle('#btnUpdate').innerHTML = 'German'
        }
    }
}

let menuHeader = getMyEle('header')
let menuheaderRight = getMyEle('.header__right')
let menuLogo = getMyEle('.logo')
let menuHeadercontent = getMyEle('.header__content')
let carousel = getMyEle('.carousel').scrollTop
console.log(carousel)

window.onscroll = () => {
    if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 0) {
        menuHeader.style = 'position:fixed;background:#fff;'
        menuheaderRight.style = 'align-items: center;height: 48px;'
        menuLogo.style.display = 'none'
        menuHeadercontent.style = 'justify-content: flex-end;'
    } else {
        menuheaderRight.style = ''
        menuLogo.style.display = 'block'
        menuHeadercontent.style = 'justify-content: space-between;'
        menuHeader.style = 'position:fixed;background:  '
    }
}

let checkInput = () => {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let check = getMyEle('#check').value
    if (check.match(pattern)) {
        getMyEle('.validation__email').style = 'display:none'
        return true
    }else{
        getMyEle('.validation__email').style = 'display:block'
        getMyEle('.validation__email').innerHTML = 'The e-mail address entered is invalid.'
        return false
    }
}

let checkEmail = () => {
    let checkName = checkInput()
    if (checkName) {
        getMyEle('.txtNofica').style = 'border-color: #dc3232;margin: 2em 0.5em 1em;padding: 0.2em 1em;border: 2px solid #dc3232;'
        getMyEle('.txtNofica').innerHTML = `There was an error trying to send your message. Please try again later.`
        return true
    }
        getMyEle('.txtNofica').style = 'border-color: #dc3232;margin: 2em 0.5em 1em;padding: 0.2em 1em;border: 2px solid #dc3232;'
        getMyEle('.txtNofica').innerHTML = `One or more fields have an error. Please check and try again.`
        return false
}
