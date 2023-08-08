const getColor = () => {
    //Generate HexaDecimal Number
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;

    //Print HexaDecimal Number
    document.getElementById("color-code").innerText = randomCode
    //Copy Number
    navigator.clipboard.writeText(randomCode);
    console.log(randomCode)
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)
getColor();