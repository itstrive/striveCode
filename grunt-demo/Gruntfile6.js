module.exports=function(grunt){
	//创建一个目录
	grunt.registerTask('create',function(){
		grunt.file.mkdir('test');	
	});
	
	//删除一个目录
	grunt.registerTask('delete',function(){
		grunt.file.delete('test');	
	});
};
//grunt create
//grunt delete
