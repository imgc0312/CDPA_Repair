// JavaScript Document
/***
	此js為搭配forget.html 之使用
    1.0		190129		by imgc	
	require jquery.js
***/
const DESCRIPTION = {
	EN : '\
		<p>Re-registering your new password. The account and email address you use should be the same as the original one.</p>\
	',
	ZH : '\
		<p>此處將協助您重新註冊新密碼，您所使用的帳號與信箱應與原始帳號相同</p>\
	',
	ERR : 'lang is unexpected'
}

var pra = location.search;
var pattern = /lang=[^&#]*/i;
var lang = pattern.exec(pra);
if(lang == null){
	lang = "lang=zh";
}

if(lang == "lang=zh"){
	document.getElementById('description').innerHTML = DESCRIPTION.ZH;
}
else if (lang == "lang=en"){
	document.getElementById('description').innerHTML = DESCRIPTION.EN;
}
else{
	document.getElementById('description').innerHTML = DESCRIPTION.ERR + lang;
}

