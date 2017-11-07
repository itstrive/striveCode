function Watcher(vm, exp, fnCb) {
	Dep.target = this;
	this.vm = vm;
	this.exp = exp;
	this.cb = fnCb;
	this.update(); //初始化，把watcher添加到dep里面，发送通知
	Dep.target = null;
}
Watcher.prototype = {
	update: function() {
		this.cb.call(this.vm, this.vm[this.exp]);
	}
};