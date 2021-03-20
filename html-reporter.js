var fs = require('fs'),
	path = require('path'),
	handlebars = require('handlebars'),
	_fnEnsureExists = function(path, cb) { // function to create folder if it does not exist
		var mask = 0777;
		fs.mkdir(path, mask, function(err) {
			if (err) {
				if (err.code == 'EEXIST') cb(null); // ignore the error if the folder already exists
				else cb(err); // something else went wrong
			} else cb(null); // successfully created folder
		});
	};

module.exports = {
  write : function(results, options, done) {
    var reportFilename = options.filename_prefix + (Math.floor(Date.now() / 1000)) + '.html';
    var reportFilePath = path.join(__dirname, options.output_folder, reportFilename);
	
	if(process.argv.indexOf('-t') > -1){
		var testIndx = process.argv.indexOf('-t'),
			testFile = process.argv[testIndx+1],
			delimiter = testFile.indexOf('/') >-1 ? '/' : "\\",
			testFileArr = testFile.split(delimiter),
			outputFile,
			_inc=0, 
			_path;
			testFileArr.pop();
			testFileArr.shift();
			outputFile = testFileArr.join('/');
			_path = testFileArr[_inc];

		//create folders recursively if does not exist for a particular test file
		function _fnCreateFolders(){
			if(_inc < testFileArr.length){
				_fnEnsureExists(path.join(__dirname, options.output_folder, _path), function(err) {
					if (err) throw err;
					else{
						_path += '/' + testFileArr[_inc+1];
						_inc++;
						_fnCreateFolders();
					}
				});
			}else{
				reportFilePath = path.join(__dirname, options.output_folder, outputFile, reportFilename);
			}
		}
		_fnCreateFolders();
	}

    // read the html template
    fs.readFile('html-reporter.hbs', function(err, data) {
      if (err) throw err;

      var template = data.toString();

      // merge the template with the test results data
      var html = handlebars.compile(template)({
        results   : results,
        options   : options,
        timestamp : new Date().toString(),
        browser   : options.filename_prefix.split('_').join(' ')
      });
	  
      // write the html to a file
      fs.writeFile(reportFilePath, html, function(err) {
        if (err) throw err;
        //console.log('Report generated: ' + reportFilePath);
		done();
      });
    });
  }
};