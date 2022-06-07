let data = new Date()
let ano = data.getFullYear()
let faixas = []
function verificarIdade() {
    let fano = document.getElementById('txtano')
    let idade = ano - Number(fano.value)
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
        return
    }
    console.log(idade)
    if (idade <= 6) {
        faixas = ['Branca', 'Cinza']
        updateElement(faixas)
    }
    else if (idade < 10) {
        faixas = ['Branca', 'Cinza', 'Amarela']
        updateElement(faixas)
    } else if (idade < 13) {
        faixas = ['Branca', 'Cinza', 'Amarela', 'Laranja ']
        updateElement(faixas)
    } else if (idade < 16) {
        faixas = ['Branca', 'Cinza', 'Amarela', 'Laranja', 'Verde']
        updateElement(faixas)
    } else if (idade < 18) {
        faixas = ['Branca', 'Azul', 'Roxa']
        updateElement(faixas)
    }
    else {
        faixas = ['Branca', 'Azul', 'Roxa', 'Marrom', 'Preta']
        updateElement(faixas)
    }
}
function updateElement(faixas) {
    let selectFaixas = document.getElementById('faixa1')
    while (selectFaixas.firstChild)
        selectFaixas.removeChild(selectFaixas.firstChild)
    faixas.map(item => {
        let opcao = document.createElement('option')
        opcao.textContent = item
        selectFaixas.appendChild(opcao)
    })
}
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var fx1 = document.getElementById('faixa1').value
    var pesot = document.getElementById('pso1')
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    if (pesot.value == '' || pesot.value <= -1) {
        alert('[ERRO] Peso invalido.')
        return
    }
    if (Number(fano.value) < 4 || Number(fano.value) <= -1 || idade>100) {
        alert('[ERRO] Idade invalida.')
        return
    }
    if (fsex[0].checked) {
        gênero = 'Masculino'

        switch (idade) {
            case 4:
                //pre-mirim 1  
                idade = 'pre-mirim 1'
                if (pesot.value <= 14.7) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 18) {
                    pesot = 'PENA'
                } else if (pesot.value <= 21) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 24) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 27) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 30.2) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 33.2) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 5:
                //Pre-mirim 2
                idade = 'pre-mirim 2'
                if (pesot.value <= 17.9) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 20) {
                    pesot = 'PENA'
                } else if (pesot.value <= 23) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 26) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 29) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 32) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 35) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 6:
                //pre-mirim 3
                idade = 'pre-mirim 3'
                if (pesot.value <= 18.9) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 22) {
                    pesot = 'PENA'
                } else if (pesot.value <= 25) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 28) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 31.2) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 34.2) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 37.2) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 7:
                //Mirim 1
                idade = 'Mirim 1'
                if (pesot.value <= 21) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 24) {
                    pesot = 'PENA'
                } else if (pesot.value <= 27.2) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 30.2) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 33.2) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 36.2) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 39.3) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 8:
                //Mirim 2
                idade = 'Mirim 2'
                if (pesot.value <= 24) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 27) {
                    pesot = 'PENA'
                } else if (pesot.value <= 30.2) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 33.2) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 36.2) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 39.3) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 42.3) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 9:
                //Mirim 3
                idade = 'Mirim 3'
                if (pesot.value <= 27) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 30.2) {
                    pesot = 'PENA'
                } else if (pesot.value <= 33.2) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 36.2) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 39.3) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 42.3) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 45.3) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 10:
                //Infantil 1
                idade = 'Infantil 1'
                if (pesot.value <= 27) {
                    pesot = 'GALO'
                } else if (pesot.value <= 30.2) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 33.2) {
                    pesot = 'PENA'
                } else if (pesot.value <= 36.2) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 39.3) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 42.3) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 45.3) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 48.3) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 11:
                //Infantil 2
                idade = 'Infantil 2'
                if (pesot.value <= 30.2) {
                    pesot = 'GALO'
                } else if (pesot.value <= 33.2) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 36.2) {
                    pesot = 'PENA'
                } else if (pesot.value <= 39.3) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 42.3) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 45.3) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 48.3) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 51.5) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 12:
                //Infantil 3
                idade = 'Infantil 3'
                if (pesot.value <= 32.2) {
                    pesot = 'GALO'
                } else if (pesot.value <= 36.2) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 40.3) {
                    pesot = 'PENA'
                } else if (pesot.value <= 44.3) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 48.3) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 52.5) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 56.5) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 60.5) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 13:
                //Infanto 1
                idade = 'Infanto Juvenil 1'
                if (pesot.value <= 36.2) {
                    pesot = 'GALO'
                } else if (pesot.value <= 40.3) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 44.3) {
                    pesot = 'PENA'
                } else if (pesot.value <= 48.3) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 52.5) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 56.5) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 60.5) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 65) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 14:
                //Infanto 2
                idade = 'Infanto Juvenil 2'
                if (pesot.value <= 40.3) {
                    pesot = 'GALO'
                } else if (pesot.value <= 44.3) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 48.3) {
                    pesot = 'PENA'
                } else if (pesot.value <= 52.5) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 56.5) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 60.5) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 65) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 69) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 15://Infanto 3
                console.log(idade)
                idade = 'Infanto Juvenil 3'
                if (pesot.value <= 44.3) {
                    pesot = 'GALO'
                } else if (pesot.value <= 48.3) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 52.5) {
                    pesot = 'PENA'
                } else if (pesot.value <= 56.5) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 60.5) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 65) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 69) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 73) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 16: //Juvenil 1
                console.log(idade)
                idade = 'Juvenil 1'
                if (pesot.value <= 48.5) {
                    pesot = 'GALO'
                } else if (pesot.value <= 53.5) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 58.5) {
                    pesot = 'PENA'
                } else if (pesot.value <= 64) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 69) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 74) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 79.3) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 84.3) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 17://Juvenil 2 
                idade = 'Juvenil 2'
                if (pesot.value <= 53.5) {
                    pesot = 'GALO'
                } else if (pesot.value <= 58.5) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 64) {
                    pesot = 'PENA'
                } else if (pesot.value <= 69) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 74) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 79.3) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 84.3) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 89.3) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            default:

                if (idade < 30) {
                    idade = 'adulto'
                    //Adulto 


                } else if (idade >= 30 && idade < 40) {
                    idade = 'Master'
                    //Master 

                }
                else {
                    idade = 'Senior'
                    //Senior
                }
                if (pesot.value <= 57.5) {
                    pesot = 'GALO'
                } else if (pesot.value <= 64) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 70) {
                    pesot = 'PENA'
                } else if (pesot.value <= 76) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 82.3) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 88.3) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 94.3) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 100.5) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
        }
    }
    if (fsex[1].checked) {
        gênero = 'Feminino'

        switch (idade) {
            case 4:
                //pre-mirim 1  
                idade = 'pre-mirim 1'
                if (pesot.value <= 14.7) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 18) {
                    pesot = 'PENA'
                } else if (pesot.value <= 21) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 24) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 27) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 30.2) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 33.2) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }

                break
            case 5:
                //Pre-mirim 2
                idade = 'pre-mirim 2'
                if (pesot.value <= 17.9) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 20) {
                    pesot = 'PENA'
                } else if (pesot.value <= 23) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 26) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 29) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 32) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 35) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 6:
                //pre-mirim 3
                idade = 'pre-mirim 3'
                if (pesot.value <= 18.9) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 22) {
                    pesot = 'PENA'
                } else if (pesot.value <= 25) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 28) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 31.2) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 34.2) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 37.2) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 7:
                //Mirim 1
                idade = 'Mirim 1'
                if (pesot.value <= 21) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 24) {
                    pesot = 'PENA'
                } else if (pesot.value <= 27.2) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 30.2) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 33.2) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 36.2) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 39.3) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 8:
                //Mirim 2
                idade = 'Mirim 2'
                if (pesot.value <= 24) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 27) {
                    pesot = 'PENA'
                } else if (pesot.value <= 30.2) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 33.2) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 36.2) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 39.3) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 42.3) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 9:
                //Mirim 3
                idade = 'Mirim 3'
                if (pesot.value <= 27) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 30.2) {
                    pesot = 'PENA'
                } else if (pesot.value <= 33.2) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 36.2) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 39.3) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 42.3) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 45.3) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 10:
                //Infantil 1
                idade = 'Infantil 1'
                if (pesot.value <= 27) {
                    pesot = 'GALO'
                } else if (pesot.value <= 30.2) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 33.2) {
                    pesot = 'PENA'
                } else if (pesot.value <= 36.2) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 39.3) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 42.3) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 45.3) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 48.3) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 11:
                //Infantil 2
                idade = 'Infantil 2'
                if (pesot.value <= 30.2) {
                    pesot = 'GALO'
                } else if (pesot.value <= 33.2) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 36.2) {
                    pesot = 'PENA'
                } else if (pesot.value <= 39.3) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 42.3) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 45.3) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 48.3) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 51.5) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 12:
                //Infantil 3
                idade = 'Infantil 3'
                if (pesot.value <= 32.2) {
                    pesot = 'GALO'
                } else if (pesot.value <= 36.2) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 40.3) {
                    pesot = 'PENA'
                } else if (pesot.value <= 44.3) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 48.3) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 52.5) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 56.5) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 60.5) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 13:
                //Infanto 1
                idade = 'Infanto Juvenil 1'
                if (pesot.value <= 36.2) {
                    pesot = 'GALO'
                } else if (pesot.value <= 40.3) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 44.3) {
                    pesot = 'PENA'
                } else if (pesot.value <= 48.3) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 52.5) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 56.5) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 60.5) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 65) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 14:
                //Infanto 2
                idade = 'Infanto Juvenil 2'
                if (pesot.value <= 40.3) {
                    pesot = 'GALO'
                } else if (pesot.value <= 44.3) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 48.3) {
                    pesot = 'PENA'
                } else if (pesot.value <= 52.5) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 56.5) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 60.5) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 65) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 69) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 15://Infanto 3               
                idade = 'Infanto Juvenil 3'
                if (pesot.value <= 44.3) {
                    pesot = 'GALO'
                } else if (pesot.value <= 48.3) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 52.5) {
                    pesot = 'PENA'
                } else if (pesot.value <= 56.5) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 60.5) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 65) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 69) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 73) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 16: //Juvenil 1 e 2
                idade = 'Juvenil'
                if (pesot.value <= 44.3) {
                    pesot = 'GALO'
                } else if (pesot.value <= 48.3) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 52.5) {
                    pesot = 'PENA'
                } else if (pesot.value <= 56.5) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 60.5) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 65) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 69) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 73) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            case 17://Juvenil 2 
                console.log(idade)
                idade = 'Juvenil'
                if (pesot.value <= 44.3) {
                    pesot = 'GALO'
                } else if (pesot.value <= 48.3) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 52.5) {
                    pesot = 'PENA'
                } else if (pesot.value <= 56.5) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 60.5) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 65) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 69) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 73) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
                break
            default:
                if (idade < 30) {
                    idade = 'Adulto'
                    //Adulto 
                } else if (idade >= 30 && idade < 40) {
                    idade = 'Master'
                    //Master 
                }
                else {
                    //Senior
                    idade = 'Senior'
                }
                if (pesot.value <= 48.5) {
                    pesot = 'GALO'
                } else if (pesot.value <= 53.5) {
                    pesot = 'PLUMA'
                } else if (pesot.value <= 58.5) {
                    pesot = 'PENA'
                } else if (pesot.value <= 64) {
                    pesot = 'LEVE'
                } else if (pesot.value <= 69) {
                    pesot = 'MEDIO'
                } else if (pesot.value <= 74) {
                    pesot = 'MEIO PESADO'
                } else if (pesot.value <= 79.3) {
                    pesot = 'PESADO'
                } else if (pesot.value <= 84.3) {
                    pesot = 'SUPERPESADO'
                } else {
                    pesot = 'PESADISSIMO'
                }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Sua categoria é:<br>${gênero}, ${idade}, Peso: ${pesot}, Faixa: ${fx1} .`

}

