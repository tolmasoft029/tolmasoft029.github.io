"use strict";

var login, pass;

login = prompt('Кто пришел?', '');

if (login == 'Админ') {
	pass = prompt('Пароль?', '');

	if (pass == 'Черный Властелин') {
		alert('Добро пожаловать!');
	} else if (pass == null) {
		alert('Вход отменен');
	} else {
		alert('Пароль неверен');
	}
} else if (login == null) {
	alert('Вход отменен');
} else {
	alert('Я вас не знаю');
}