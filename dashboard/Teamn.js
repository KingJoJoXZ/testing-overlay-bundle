const team1Input= document.getElementById('Team1')
const team2Input= document.getElementById('Team2')

function update(){
	const data = {name:team1Input.value, Nickname: team2Input.value}
    nodecg.sendMessage('showLowerThird', data);
}

//function scoreTeam2(){
    //	team2Rep.value++;
//}