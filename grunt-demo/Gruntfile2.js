module.exports=function(grunt){
	grunt.registerTask('eat',function(name,age){
		console.log(name+'=>'+age);
	});
};
// grunt eat:strive:30