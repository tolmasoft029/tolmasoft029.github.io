/*

 http://flapps.ru/forum - форум о создании приложений
 
*/
 
$(document).ready(function(){
    VK.init(function() {
    // выполняем запрос получения списка друзей
    VK.api("friends.get", {fields:"online,photo"}, function(data) {
		// узнаем количество друзей
		var frCount = data.response.length;

		var onlineCount = 0;
		var offlineCount = 0;
		
		var onlineStr = ''; // html код списка друзей Online
		var offlineStr = ''; // html код списка друзей Offline

		for (var i=0; i<frCount; i++) {
			if (data.response[i].online == 1) { // если онлайн
				onlineCount++; // прибавляем счетчик онлайн пользователей
				onlineStr += '<a href="http://vkontakte.ru/id' + data.response[i].uid + '" title="' + data.response[i].first_name + ' ' + data.response[i].last_name + '"><img src="' + data.response[i].photo + '" /></a>';
			}
			else {
				offlineCount++;
				offlineStr += '<a href="http://vkontakte.ru/id' + data.response[i].uid + '" title="' + data.response[i].first_name + ' ' + data.response[i].last_name + '"><img src="' + data.response[i].photo + '" /></a>';
			}
		}

		$("#totalCount").html('У вас ' + frCount + ' ' + num_ending(frCount));
		$("#onCount").html(onlineCount + ' ' + num_ending(onlineCount) + ' онлайн');
		$("#online").html(onlineStr);
		$("#offCount").html(offlineCount + ' ' + num_ending(offlineCount) + ' оффлайн');
		$("#offline").html(offlineStr);
		
		// скрываем прелоадер
		$('#loader').fadeOut(1000);
    });
    });
});


function num_ending(number) {
    var endings = ['друзей','друг','друга'];
    var num100 = number % 100;
    var num10 = number % 10;
    if (num100 >= 5 && num100 <= 20) {
        return endings[0];
    } else if (num10 == 0) {
        return endings[0];
    } else if (num10 == 1) {
        return endings[1];
    } else if (num10 >= 2 && num10 <= 4) {
        return endings[2];
    } else if (num10 >= 5 && num10 <= 9) {
        return endings[0];
    } else {
        return endings[2];
    }
}

/* flapps.ru */