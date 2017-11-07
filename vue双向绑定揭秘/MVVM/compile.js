function Compile(el, vm) {
	this.vm = vm;
	this.el = document.querySelector(el) || document.body;

	if (this.el) {
		this.fragment = this.node2Fragment(this.el); //把节点装进 fragment里面

		this.init(); //编译

		this.el.appendChild(this.fragment);
	}
}
Compile.prototype = {
	node2Fragment: function(el) {
		var fragment = document.createDocumentFragment();
		var child;
		while (child = el.firstChild) {
			fragment.appendChild(child);
		}
		return fragment;
	},
	init: function() {
		this.compileCore(this.fragment);
	},
	compileCore: function(el) {
		let childNodes = el.childNodes;
		[...childNodes].forEach(node => {
			let text = node.textContent;
			let reg = /\{\{(.*)\}\}/;

			if (this.isElementNode(node)) {
				this.compileElement(node);
			} else if (this.isTextNode(node) && reg.test(text)) {
				this.compileText(node, RegExp.$1);
			}

			if (node.childNodes && node.childNodes.length) {
				this.compileCore(node);
			}
		});
	},
	compileElement: function(node) {
		let attrs = node.attributes;
		[...attrs].forEach(attr => {
			let attrName = attr.name; // type  v-model
			if (this.isDirective(attrName)) {
				let value = attr.value;
				let name = attrName.substring(2);
				if (this.isEventDrective(name)) {
					this.eventHandler(node, this.vm, value, name);
				} else {
					this.bind(node, this.vm, value, 'model');

					node.addEventListener('input', (ev) => {
						let newVal = ev.target.value;
						this._setVMVal(this.vm, value, newVal);
					}, false);
				}
			}
			//事件简写  @click="xxx"
			if (this.isEventDrective2(attrName)) {
				this.eventHandler(node, this.vm, attr.value, attr.name);
			}
		});
	},
	compileText: function(node, exp) { //文本  {{text}}
		this.bind(node, this.vm, exp, 'text');
	},
	eventHandler: function(node, vm, fnName, eventName) {
		//eventName  on:click  @click
		let eventType = eventName.split(/:|@/)[1];
		let fn = vm.methods && vm.methods[fnName];

		if (eventType && fn) {
			node.addEventListener(eventType, fn.bind(vm), false);
		}
	},
	bind: function(node, vm, exp, sig) {
		let updaterFn = this.updater[sig + 'Updater'];

		updaterFn && updaterFn(node, this._getVMVal(vm, exp));

		new Watcher(vm, exp, (value) => {
			updaterFn && updaterFn(node, value);
		});
	},
	_setVMVal: function(vm, exp, newVal) {
		vm[exp] = newVal;
	},
	_getVMVal: function(vm, exp) {
		return vm[exp];
	},
	updater: {
		textUpdater: function(node, val) {
			node.textContent = val;
		},
		modelUpdater: function(node, val) {
			node.value = val;
		}
	},
	isEventDrective2: function(attr) {
		return attr.indexOf('@') == 0;
	},
	isDirective: function(attr) {
		return attr.indexOf('v-') == 0;
	},
	isEventDrective: function(name) {
		return name.indexOf('on') == 0;
	},
	isElementNode: function(node) {
		return node.nodeType == 1;
	},
	isTextNode: function(node) {
		return node.nodeType == 3;
	}
};