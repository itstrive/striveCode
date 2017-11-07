function Observer(data, vm) {
	this.data = data;
	this.vm = vm;
	this.init();
}
Observer.prototype = {
	init: function() {
		Object.keys(this.data).forEach(key => { //数据劫持
			this._proxyData(key)
		});
	},
	_proxyData: function(key) {
		let dep = new Dep();

		let vm = this.vm;
		Object.defineProperty(vm, key, {
			get: function() {
				Dep.target && dep.addSub(Dep.target);
				return vm.data[key];
			},
			set: function(newVal) {
				vm.data[key] = newVal;

				dep.notify();
			}
		});
	}
};

function Dep() {
	this.subs = [];
}
Dep.prototype = {
	addSub: function(sub) {
		this.subs.push(sub);
	},
	notify: function() {
		this.subs.forEach(sub => {
			sub.update();
		});
	}
};