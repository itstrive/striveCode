import './main.scss';
import $ from 'jquery';
import 'imports-loader?jQuery=jquery!./plugin.js';

$(document).ready(function() {
	let box = document.createElement('div');
	box.innerHTML = '<h1>hello Mobile</h1>';
	document.body.appendChild(box);

	$('h1').greenify();
});