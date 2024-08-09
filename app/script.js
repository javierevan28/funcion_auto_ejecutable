(onLoadPage = ()=>{
    "use strict"

    const mounth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    let userMounth
    let showInformation = document.getElementById('showInformation')

    const askMounth = ()=> {
        userMounth = prompt('Introduce un mes (número)')
        userMounth = Number(userMounth)
        verifyNumber(userMounth)
    }

    const verifyNumber = (userMounth) => { 
        if(isNaN(userMounth)){
            askMounth()
        }else{
            userMounth = userMounth - 1
            season(userMounth)
        }
    }

    const season = (userMounth) => {
        switch (userMounth) {
            case 0:
            case 1:
            case 11:
                showInformation.innerHTML = `<p> El mes es <b> ${mounth[userMounth]}</b> y la estación es Invierno</p>`
                break
            case 2:
            case 3:
            case 4:
                showInformation.innerHTML = `<p> El mes es <b> ${mounth[userMounth]}</b> y la estación es Primavera</p>`
                break
            case 5:
            case 6:
            case 7:
                showInformation.innerHTML = `<p> El mes es  <b>${mounth[userMounth]}</b> y la estación es Verano</p>`
                break
            case 8:
            case 9:
            case 10:
                showInformation.innerHTML = `<p> El mes es <b>s ${mounth[userMounth]}</b> y la estación es Otroño</p>`
                break
            default:
                askMounth()
        }
    }
    askMounth()
})()