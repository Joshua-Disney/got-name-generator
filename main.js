let stark = {first: ['Bran', 'Edd', 'Rick'], last: ['kon', 'don', 'ard']}
let targaryon = {first: ['Aeg', 'Dae', 'Vys'], last: ['ys', 'eon', 'gar']}
let tyrell = {first: ['tyrell 1', 'tyrell 2', 'tyrell 3'], last: ['tyrell 4', 'tyrell 5', 'tyrell 6']}
let tully = {first: ['tully 1', 'tully 2', 'tully 3'], last: ['tully 4', 'tully 5', 'tully 6']}
let arryn = {first: ['arryn 1', 'arryn 2', 'arryn 3'], last: ['arryn 4', 'arryn 5', 'arryn 6']}
let lannister = {first: ['lannister 1', 'lannister 2', 'lannister 3'], last: ['lannister 4', 'lannister 5', 'lannister 6']}
let barathion = {first: ['barathion 1', 'barathion 2', 'barathion 3'], last: ['barathion 4', 'barathion 5', 'barathion 6']}
let martel = {first: ['martel 1', 'martel 2', 'martel 3'], last: ['martel 4', 'martel 5', 'martel 6']}
let grayjoy = {first: ['grayjoy 1', 'grayjoy 2', 'grayjoy 3'], last: ['grayjoy 4', 'grayjoy 5', 'grayjoy 6']}

const getName = (father, mother) => {

    let ran = Math.floor(Math.random() * 2)
    let first
    let last
    if (ran > 0) {
        first = mother
        last = father
    } else {
        first = father
        last = mother
    }
    let firstSyl = first.first[Math.floor(Math.random() * 3)]
    let lastSyl = last.last[Math.floor(Math.random() * 3)]
    console.log(firstSyl + lastSyl)
}

getName(stark, targaryon)
getName(stark, targaryon)
getName(stark, targaryon)
getName(stark, targaryon)
getName(stark, targaryon)
getName(stark, targaryon)
getName(stark, targaryon)
getName(stark, targaryon)
getName(stark, targaryon)
getName(stark, targaryon)
getName(tyrell, tully)
getName(tyrell, tully)
getName(tyrell, tully)
getName(tyrell, tully)
getName(tyrell, tully)
getName(tyrell, tully)
getName(tyrell, tully)
getName(tyrell, tully)
getName(tyrell, tully)
getName(tyrell, tully)
getName(arryn, lannister)
getName(arryn, lannister)
getName(arryn, lannister)
getName(arryn, lannister)
getName(arryn, lannister)
getName(arryn, lannister)
getName(arryn, lannister)
getName(arryn, lannister)
getName(arryn, lannister)
getName(arryn, lannister)