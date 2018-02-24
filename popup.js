function goToPlace(place) {
  chrome.tabs.create({ url: 'http://www.google.com/maps/place/'+place })
}

function findDir(source, destination) {
    chrome.tabs.create({ url: 'http://www.google.com/maps/dir/'+source+'/'+destination })
}

document.addEventListener('DOMContentLoaded', () => {
    var button = document.getElementById('button');
    button.addEventListener('click', () => {
        const inp = document.getElementById('place').value
        if(inp){
            goToPlace(inp)
        }
    });
    var button1 = document.getElementById('button2');
    button1.addEventListener('click', () => {
        const inp1 = document.getElementById('place1').value
        const inp2 = document.getElementById('place2').value
        if(inp1 && inp2){
            findDir(inp1, inp2)
        }
    });

    var button2 = document.getElementById('showOne');
    button2.addEventListener('click', () => {
        document.getElementById('one').style.display = "block";
        document.getElementById('two').style.display = "none";
    });
    var button3 = document.getElementById('showTwo');
    button3.addEventListener('click', () => {
        document.getElementById('two').style.display = "block";
        document.getElementById('one').style.display = "none";
    });
});
