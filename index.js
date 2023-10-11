function paint(color) {
    const circle = document.getElementById('circleID');
    circle.style = `background-color:${color}`;
}

function texty(number) {

    switch (number) {
        case 1:
            document.getElementById('replace-me').innerText = 'Ich dich auch!';
            document.getElementById("replace-me").style.color = 'red';
            document.getElementById("replace-me").style.fontSize = '20px';
            document.getElementById("replace-me").style.marginLeft = '30%';
            break;
        case 2:
            document.getElementById('replace-me').innerText = 'Ein Bofel!';
            document.getElementById("replace-me").style.color = 'purple';
            document.getElementById("replace-me").style.fontSize = '40px';
            document.getElementById("replace-me").style.marginLeft = '20%';
            document.getElementById("replace-me").style.marginTop = '-75%';
            break;
        case 3:
            document.getElementById('replace-me').innerText = 'Finde ich auch ... :)';
            document.getElementById("replace-me").style.color = 'blue';
            document.getElementById("replace-me").style.fontSize = '20px';
            document.getElementById("replace-me").style.marginLeft = '20%';
            document.getElementById("replace-me").style.marginTop = '-75%';
            break;
        default:
            answer = "c";
    } 
    
}
