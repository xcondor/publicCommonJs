var obj = {};
Object.defineProperties(obj, {
	name: {
		configurable: true,
		set: function(newValue) {
			name = newValue;
			console.log('你修改了name的值：'+name)
		}
	}
})