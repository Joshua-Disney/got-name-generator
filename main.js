let stark = ['stark 1', 'stark 2', 'stark 3']
let targaryon = ['targaryon 1', 'targaryon 2', 'targaryon 3']
let tyrell = ['tyrell 1', 'tyrell 2', 'tyrell 3']
let tully = ['tully 1', 'tully 2', 'tully 3']
let arryn = ['arryn 1', 'arryn 2', 'arryn 3']
let lannister = ['lannister 1', 'lannister 2', 'lannister 3']
let barathion = ['barathion 1', 'barathion 2', 'barathion 3']
let martel = ['martel 1', 'martel 2', 'martel 3']
let grayjoy = ['grayjoy 1', 'grayjoy 2', 'grayjoy 3']

const getName = (first, last) => {
    let firstSyl = first[Math.floor(Math.random() * 3)]
    let lastSyl = last[Math.floor(Math.random() * 3)]
    console.log(firstSyl + lastSyl)
}

getName(stark, targaryon)
getName(tyrell, tully)
getName(arryn, lannister)