const gulp = require('gulp')
const nodemon = require('nodemon')

gulp.task('default', ()=>{
	nodemon({
		script: "app.js",
		ext: "js",
		env: {PORT: 3210},
		ignore: ["/node_modules/**"]
	})
	.on('restart', ()=>{
		console.log('Restarting.....')
	})
})