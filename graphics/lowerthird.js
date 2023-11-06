import {gsap} from '../node_modules/gsap/index.js';

const nameplateEl = document.getElementById('nameplate')
const nameEl = document.getElementById('name')
const twitterEl = document.getElementById('nickname')

nodecg.listenFor('showLowerthird', (newVal) => {
	nameEl.innerHTML = newVal.name;
	twitterEl.innerHTML = newVal.nickname;

	const tl = gsap.timeline();

	tl.from([nameplateEl, nameEl, nicknameEl], 1, {width: 0});

	tl.to([nameplateEl, nameEl, nicknameElEl], 1, {width: 0}, "+=4");

	tl.call(() => {
		nameEl.innerHTML = "";
		twitterEl.innerHTML = "";
	})
	tl.set([nameplateEl, nameEl, nicknameEl], {width: ""})
})