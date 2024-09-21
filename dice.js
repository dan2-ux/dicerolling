function Rolling(){
    inputnum = document.getElementById("inputnum").value
    let number = []
    let dice = []
    for(let i = 0; i < inputnum; i++){
        let so = Math.floor(Math.random()*6)+1
        number.push(so)
        dice.push(` <img src="/diceimage/dice-${so}.svg">`)
    }
    document.getElementById("numberDisplayer").textContent =   `Dice : ${number.join(", ")}`
    document.getElementById("diceDisplayer").innerHTML = dice
}
