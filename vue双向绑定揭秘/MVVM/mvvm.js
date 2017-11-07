function Vue(options) {
	this.data = options.data;
	this.methods = options.methods;
	//observer
	this.observer = new Observer(this.data, this);
	//compile
	this.compile = new Compile(options.el, this);
}