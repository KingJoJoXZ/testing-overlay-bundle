const nameInput = document.getElementById('name')
const nickInput = document.getElementById('nickname')

function update(){
    const data = {name: nameInput.value, nickname: nickInput.value}
    nodecg.sendMessage('showLowerThird', data);
}