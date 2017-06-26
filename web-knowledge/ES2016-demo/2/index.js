class Foo {
	static bar = 'hello';

	static show() {
		alert(this.bar);
	}
}

console.log(Foo.bar);
Foo.show();