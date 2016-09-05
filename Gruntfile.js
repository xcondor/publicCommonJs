/**
 * Created by xingyucheng@jd.com on 2016/8/24.
 * @Use
 */
module.exports = function(grunt) {
      var version = "v20160903";
    var concat = {};
    var json = grunt.file.readJSON("jsconcat.json");
    for (var key in json) {
        concat["dist/" + version + "/" + key] = json[key];
    }
      var jsmin = {};
      var cssmin = {};
    for (var key in concat) {
        if (key.indexOf(".js") > -1) {
            jsmin[key.replace(".js", "-min.js")] = [key];
        }
        else if (key.indexOf(".css") > -1) {
            cssmin[key.replace(".css", "-min.css")] = [key];
        }
    }
     grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: concat,
        uglify: jsmin,
        copy: {
             main: {
                 expand: true,
                 cwd: 'images',
                 src: ['img/*','skin/i/*','js/kindeditor-4.1.7/*','js/laydate/*','js/pagination/*','js/pagination/lib/*'],
                 dest: 'dist/'+version
             }
        },
        cssmin: {
             compress: {
                 files: cssmin
             }
        },
        imagemin: {
            static: {
                files:[
                    {
                        expand:true,
                        cwd:'images',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'dist/'+version+'/images/'
                    }
                ]
            }
//            dynamic: {
//                files: [{
//                    expand: true,
//                    cwd: 'v20160831/img/',
//                    src: ['**/*.{png,jpg,gif}'],
//                    dest: 'dist/'+version+'/img/'
//                }]
//            }
        }
    });


   //grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-concat');
   //grunt.loadNpmTasks('grunt-contrib-qunit');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-imagemin');
   //grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.registerTask('default', [ 'concat','cssmin','uglify','copy','imagemin']);
};
