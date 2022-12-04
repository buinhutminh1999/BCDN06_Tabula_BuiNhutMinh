const getMyEleAll = select => 
{return document.querySelectorAll(select)}

const getMyEle = select => 
{return document.querySelector(select)}

let btn = getMyEleAll('#buttonVal')

for (let index = 0; index < 4; index++) {
   btn[index].onclick = () => { 
    if(index == 0){
        btnUpdate.innerHTML = 'EngLish'
    }else if(index == 1){
        btnUpdate.innerHTML = 'French'
    }else if(index == 2){
        btnUpdate.innerHTML = 'Spanish'
    }else if(index == 3){
        btnUpdate.innerHTML = 'German'
    }
    }
}

