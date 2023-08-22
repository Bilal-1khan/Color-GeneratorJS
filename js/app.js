const colorGenerator =() =>{
    let randomNumber = Math.floor(Math.random()*16777125);
    let colorCode = '#' + randomNumber.toString(16); 

    document.body.style.backgroundColor = colorCode;
    document.getElementById('colrCode').innerText = colorCode;
    document.getElementById('colrCode').style.color = colorCode;
    document.getElementById('colrBtn').style.backgroundColor = colorCode; 
    navigator.clipboard.writeText(colorCode) ;
};

document.getElementById('colrBtn').addEventListener('click',colorGenerator)

colorGenerator();