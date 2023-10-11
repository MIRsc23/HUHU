function paint(color) {
    const circle = document.getElementById('circleID');
    circle.style = `background-color:${color}`;
}

function texty(number) {

    switch (number) {
        case 1:
            document.getElementById('replace-me').innerText = 'Ich dich auch!';
            break;
        case 2:
            answer = "b";
            break;
        default:
            answer = "c";
    } 
    
}
