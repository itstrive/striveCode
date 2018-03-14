import './css/index.css'
import './less/index.less'
import './sass/index.scss'
import fn from './js/a.js'
import json from '../config.json'
console.log(json);
//import $ from 'jquery'
let imgSrc = require('./images/404.jpg');

let oImg =new Image();

oImg.src=imgSrc;

oImg.onload=function(){
    document.body.appendChild(oImg);
};

class Person{
    constructor(name){
        this.name = name;
    }
    showName(){
        return `我的名字为${this.name}`;
    }
}
let p1 = new Person('Strive');

//document.write(`输出 ${p1.showName()}, ${fn}`);

// let str=`<h1>welcome to China</h1>`;

// $(str).append('body');

