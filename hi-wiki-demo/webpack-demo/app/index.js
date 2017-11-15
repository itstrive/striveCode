require('./main.scss');
//let $ = require('jquery');
import $ from 'jquery';
//import './plugin.js'
import 'imports-loader?jQuery=jquery!./plugin.js';

//let moment = require('moment');
import moment from 'moment';

//let fnCreatedNode = require('./a');
import fnCreatedNode from './a';

let oDiv = document.createElement('div');
oDiv.innerHTML = '<div>welcome webpack</div>';
oDiv.appendChild(fnCreatedNode());
document.body.appendChild(oDiv);
$('<button>按钮</button>').appendTo('body').on('click', function() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'joke?type=text', true);
	xhr.send();
	xhr.onload = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log('成功了')
		}
	};
	xhr.onerror = function() {
		console.log('发生错误了')
	};
});
$('body').append(`<p>时间为:${moment().format()}</p>`);

$('p').greenify();