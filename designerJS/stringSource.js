var wSpace1 = "    ";
var wSpace2 = "        ";

var _html = function() {
	var sHtml = '<!DOCTYPE html>\n<html>\n'
	var eHtml = '</html>'
	var html = sHtml.concat(_head(), eHtml);
	return html;
}
var _head = function() {
	var sHead = '<head>\n<title> realgridDesignerVer0.6 </title>\n<meta charset="utf-8">\n';
	var eHead = '</head>\n'
	var head = sHead.concat(eHead, _body());
	return head;
}
var _body = function() {
	var sBody = '<body>\n<div id=' + '"' + document.getElementById('divId').value + '"' + ' style="width:100%; height:100%;"></div>\n'
	var eBody ='</body>\n'
	var body = sBody.concat(_jsImport(), _script(), eBody);
	return body;
}
var _jsImport = function() {
	var jquery = '<script type="text/javascript" src="' + document.getElementById('libraryRoot').value + 'jquery-1.11.2.min.js"></script' + '>\n'
	var lic = '<script type="text/javascript" src="' + document.getElementById('libraryRoot').value + 'realgridjs-lic.js"></script' + '>\n'
	var eval = '<script type="text/javascript" src="' + document.getElementById('libraryRoot').value + 'realgridjs_eval.' + document.getElementById('jsVersion').value + '.min.js"' + "></script" + '>\n'
	var api = '<script type="text/javascript" src="' + document.getElementById('libraryRoot').value + 'realgridjs-api.' + document.getElementById('jsVersion').value +'.js"></script' + '>\n'
	var jszip = '<script type="text/javascript" src="' + document.getElementById('libraryRoot').value + 'jszip.min.js"></script' + '>\n'
	var jsImport = jquery + lic + eval + api + jszip;
	return jsImport;
}
var _script = function() {
	var sScript = "<script>\n"
	var eScript = '</' + 'script>\n'
	var mainScript = sScript.concat(_docReady(), _createFields(), _createColumns(), eScript);
	return mainScript; 
}
var _docReady = function() {
	var ready = 'var gridView;\nvar dataProvider;\n\n' + 
	'$(document).ready( function() {\n' +
	wSpace1 + 'RealGridJS.setTrace(false);\n' + 
	wSpace1 + 'RealGridJS.setRootContext("' + document.getElementById('libraryRoot').value + '");\n' +
	wSpace1 + 'dataProvider = new RealGridJS.LocalDataProvider();\n' +
	wSpace1 + 'gridView = new RealGridJS.GridView("' + document.getElementById('divId').value + '");\n' +
	wSpace1 + 'gridView.setDataSource(dataProvider);\n\n' +
	wSpace1 + 'setFields(dataProvider);\n' +
	wSpace1 + 'setColumns(gridView);\n' +
	'})\n\n'
	return ready;
}
var _createFields = function() {
	var itemCount = gridView.getItemCount();
	var fields = dataProvider.getFieldValues("field1")
	var dataType = dataProvider.getFieldValues("field5")
	var addFields = 'function setFields(provider) {\n' +
	wSpace1 + 'var fields = ['
	for (var i = 0; i < itemCount; i++){
		if(i < itemCount -1){
			if (dataType[i] == "dropdown"){
				addFields += '{\n' +
				wSpace2 + 'fieldName: "' + fields[i] + '"\n' +
				wSpace1 + '},'
			}else{
				addFields += '{\n' +
				wSpace2 + 'fieldName: "' + fields[i] + '",\n' + 
				wSpace2 + 'dataType: "' + dataType[i] + '"\n' +
				wSpace1 + '},'
			}
		}
		if(i === itemCount-1){
			if (dataType[i] == "dropdown"){
				addFields += '{\n' +
				wSpace2 + 'fieldName: "' + fields[i] + '"\n' +
				wSpace1 + '}'
			}else{
				addFields += '{\n' +
				wSpace2 + 'fieldName: "' + fields[i] + '",\n' + 
				wSpace2 + 'dataType: "' + dataType[i] + '"\n' +
				wSpace1 + '}'
			}
		}
	}
	addFields += '];\n\n' +
		wSpace1 + 'provider.setFields(fields);\n' +
		'}\n\n'
	return addFields;
}
var _createColumns = function() {
	var itemCount = gridView.getItemCount();
	var fields = dataProvider.getFieldValues("field1");
	var columns = dataProvider.getFieldValues("field2");
	var colWidth = dataProvider.getFieldValues("field3");
	var headText = dataProvider.getFieldValues("field4");
	var dataType = dataProvider.getFieldValues("field5");
	var editor = dataProvider.getFieldValues("field6");
	var style = dataProvider.getFieldValues("field7");
	var values = dataProvider.getFieldValues("field8");
	var background = dataProvider.getFieldValues("field9");
	var textAlignment = dataProvider.getFieldValues("field10");
	var addColumns = 'function setColumns(grid) {\n    var columns = ['
	for (var i = 0; i < itemCount; i++){
		if(i < itemCount -1){
			addColumns += '{\n' +
			wSpace2 + 'name: "' + columns[i] + '",\n' +
			wSpace2 + 'fieldName: "' + fields[i] + '",\n' +
			wSpace2 + 'header: {\n' +
			wSpace1 + wSpace2 + 'text: "' + headText[i] + '"\n' +
			wSpace2 + '},\n'
			if(dataType[i]){
				if (dataType[i] == "boolean"){
					addColumns += wSpace2 + 'editor: {\n' +
					wSpace1 + wSpace2 + 'booleanFormat: "' + editor[i] + '"\n' +
					wSpace2 + '},\n' +
					wSpace2 + 'styles: {\n'
					if (background[i]){
						addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
					}
					if (textAlignment[i]){
						addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '",\n' 
					}
					addColumns += wSpace1 + wSpace2 + 'booleanFormat: "' + style[i] + '"\n' +
					wSpace2 + '},\n'
				}
				if (dataType[i] == "number"){
					addColumns += wSpace2 + 'editor: {\n' +
					wSpace1 + wSpace2 + 'type: "number"\n' +
					wSpace2 + '},\n' +
					wSpace2 + 'styles: {\n'
					if (background[i]){
						addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
					}
					if (textAlignment[i]){
						addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '",\n' 
					}
					addColumns += wSpace1 + wSpace2 + 'numberFormat: "' + style[i] + '"\n' +
					wSpace2 + '},\n'
				}
				if (dataType[i] == "datetime"){
					addColumns += wSpace2 + 'editor: {\n' +
					wSpace1 + wSpace2 + 'datetimeFormat: "' + editor[i] + '"\n' +
					wSpace2 + '},\n' +
					wSpace2 + 'styles: {\n'
					if (background[i]){
						addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
					}
					if (textAlignment[i]){
						addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '",\n' 
					}
					addColumns += wSpace1 + wSpace2 + 'datetimeFormat: "' + style[i] + '"\n' +
					wSpace2 + '},\n'
				}
				if (dataType[i] == "dropdown"){
					addColumns += wSpace2 + 'editor: {\n' +
					wSpace1 + wSpace2 + 'type: "dropDown",\n' +
					wSpace1 + wSpace2 + "dropDownCount: 4,\n" +
					wSpace1 + wSpace2 + "values: " + JSON.stringify(editor[i].split(",")) + ",\n" +
					wSpace1 + wSpace2 + "labels: " + JSON.stringify(values[i].split(",")) + "\n" +
					wSpace2 + '},\n' +
					wSpace2 + 'styles: {\n'
					if (background[i]){
						addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
					}
					if (textAlignment[i]){
						addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '"\n' 
					}
					addColumns += wSpace2 + '},\n'
				}
				if (dataType[i] == "text"){
					if (gridView.getValue(i,8) || gridView.getValue(i,9)){
						addColumns += wSpace2 + 'styles: {\n'
						if (background[i]){
							addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
						}
						if (textAlignment[i]){
							addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '"\n' 
						}
						addColumns += wSpace2 + '},\n'
					}
				}
			}
			addColumns += wSpace2 + 'width: "' + colWidth[i] + '"\n    },'
		}
		if(i === itemCount -1){
			addColumns += '{\n' +
			wSpace2 + 'name: "' + columns[i] + '",\n' +
			wSpace2 + 'fieldName: "' + fields[i] + '",\n' +
			wSpace2 + 'header: {\n' +
			wSpace1 + wSpace2 + 'text: "' + headText[i] + '"\n' +
			wSpace2 + '},\n' 
			if(dataType[i]){ //컬럼 시작
				if (dataType[i] == "boolean"){
					addColumns += wSpace2 + 'editor: {\n' +
					wSpace1 + wSpace2 + 'booleanFormat: "' + editor[i] + '"\n' +
					wSpace2 + '},\n' +
					wSpace2 + 'styles: {\n'
					if (background[i]){
						addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
					}
					if (textAlignment[i]){
						addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '",\n' 
					}
					addColumns += wSpace1 + wSpace2 + 'booleanFormat: "' + style[i] + '"\n' +
					wSpace2 + '},\n'
				}
				if (dataType[i] == "number"){
					addColumns += wSpace2 + 'editor: {\n' +
					wSpace1 + wSpace2 + 'type: "number"\n' +
					wSpace2 + '},\n' +
					wSpace2 + 'styles: {\n'
					if (background[i]){
						addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
					}
					if (textAlignment[i]){
						addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '",\n' 
					}
					addColumns += wSpace1 + wSpace2 + 'numberFormat: "' + style[i] + '"\n' +
					wSpace2 + '},\n'
				}
				if (dataType[i] == "datetime"){
					addColumns += wSpace2 + 'editor: {\n' +
					wSpace1 + wSpace2 + 'datetimeFormat: "' + editor[i] + '"\n' +
					wSpace2 + '},\n' +
					wSpace2 + 'styles: {\n'
					if (background[i]){
						addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
					}
					if (textAlignment[i]){
						addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '",\n' 
					}
					addColumns += wSpace1 + wSpace2 + 'datetimeFormat: "' + style[i] + '"\n' +
					wSpace2 + '},\n'
				}
				if (dataType[i] == "dropdown"){
					addColumns += wSpace2 + 'editor: {\n' +
					wSpace1 + wSpace2 + 'type: "dropDown",\n' +
					wSpace1 + wSpace2 + "dropDownCount: 4,\n" +
					wSpace1 + wSpace2 + "values: " + JSON.stringify(editor[i].split(",")) + ",\n" +
					wSpace1 + wSpace2 + "labels: " + JSON.stringify(values[i].split(",")) + "\n" +
					wSpace2 + '},\n' +
					wSpace2 + 'styles: {\n'
					if (background[i]){
						addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
					}
					if (textAlignment[i]){
						addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '"\n' 
					}
					addColumns += wSpace2 + '},\n'
				}
				if (dataType[i] == "text"){
					if (gridView.getValue(i,8) || gridView.getValue(i,9)){
						addColumns += wSpace2 + 'styles: {\n'
						if (background[i]){
							addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
						}
						if (textAlignment[i]){
							addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '"\n' 
						}
						addColumns += wSpace2 + '},\n'
					}
				}
			}
			addColumns += wSpace2 + 'width: "' + colWidth[i] + '"\n    }'
		}
	}
	addColumns += ']\n\n' +
	wSpace1 + 'grid.setColumns(columns);\n' +
	'}\n\n'

	return addColumns;
}

//tab sourceCode
var htmlCode = function() {
	var sHtml = '<!DOCTYPE html>\n<html>\n'
	var eHtml = '</html>'
	var html = sHtml.concat(headCode(), eHtml);
	return html;
}
var headCode = function() {
	var sHead = '<head>\n<title> realgridDesignerVer0.1 </title>\n<meta charset="utf-8">\n';
	var eHead = '</head>\n'
	var head = sHead.concat(eHead, bodyCode());
	return head;
}
var bodyCode = function() {
	var sBody = '<body>\n<div id=' + '"' + document.getElementById('divId').value + '"' + ' style="width:100%; height:100%;"></div>\n'
	var eBody ='</body>\n'
	var body = sBody.concat(eBody);
	return body;
}
var jsImportCode = function() {
	var jquery = '<script type="text/javascript" src="' + document.getElementById('libraryRoot').value + 'jquery-1.11.2.min.js"></script' + '>\n'
	var lic = '<script type="text/javascript" src="' + document.getElementById('libraryRoot').value + 'realgridjs-lic.js"></script' + '>\n'
	var eval = '<script type="text/javascript" src="' + document.getElementById('libraryRoot').value + 'realgridjs_eval.' + document.getElementById('jsVersion').value + '.min.js"' + "></script" + '>\n'
	var api = '<script type="text/javascript" src="' + document.getElementById('libraryRoot').value + 'realgridjs-api.' + document.getElementById('jsVersion').value +'.js"></script' + '>\n'
	var jszip = '<script type="text/javascript" src="' + document.getElementById('libraryRoot').value + 'jszip.min.js"></script' + '>\n'
	var jsImport = jquery + lic + eval + api + jszip;
	return jsImport;
}
var scriptCode = function() {
	var sScript = "<script>\n"
	var eScript = '</' + 'script>\n'
	var mainScript = sScript.concat(_docReady(), _createFields(), _createColumns(), eScript);
	return mainScript; 
}
var docReadyCode = function() {
	var ready = 'var gridView;\nvar dataProvider;\n\n' + 
	'$(document).ready( function() {\n' +
	wSpace1 + 'RealGridJS.setTrace(false);\n' + 
	wSpace1 + 'RealGridJS.setRootContext("' + document.getElementById('libraryRoot').value + '");\n' +
	wSpace1 + 'dataProvider = new RealGridJS.LocalDataProvider();\n' +
	wSpace1 + 'gridView = new RealGridJS.GridView("' + document.getElementById('divId').value + '");\n' +
	wSpace1 + 'gridView.setDataSource(dataProvider);\n\n' +
	wSpace1 + 'setFields(dataProvider);\n' +
	wSpace1 + 'setColumns(gridView);\n' +
	'})\n\n'
	return ready;
}
var createFieldsCode = function() {
	var itemCount = gridView.getItemCount();
	var fields = dataProvider.getFieldValues("field1")
	var dataType = dataProvider.getFieldValues("field5")
	var addFields = 'function setFields(provider) {\n' +
	wSpace1 + 'var fields = ['
	for (var i = 0; i < itemCount; i++){
		if(i < itemCount -1){
			if (dataType[i] == "dropdown"){
				addFields += '{\n' +
				wSpace2 + 'fieldName: "' + fields[i] + '"\n' +
				wSpace1 + '},'
			}else{
				addFields += '{\n' +
				wSpace2 + 'fieldName: "' + fields[i] + '",\n' + 
				wSpace2 + 'dataType: "' + dataType[i] + '"\n' +
				wSpace1 + '},'
			}
		}
		if(i === itemCount-1){
			if (dataType[i] == "dropdown"){
				addFields += '{\n' +
				wSpace2 + 'fieldName: "' + fields[i] + '"\n' +
				wSpace1 + '}'
			}else{
				addFields += '{\n' +
				wSpace2 + 'fieldName: "' + fields[i] + '",\n' + 
				wSpace2 + 'dataType: "' + dataType[i] + '"\n' +
				wSpace1 + '}'
			}
		}
	}
	addFields += '];\n\n' +
		wSpace1 + 'provider.setFields(fields);\n' +
		'}\n\n'
	return addFields;
}
var createColumnsCode = function() {
	var itemCount = gridView.getItemCount();
	var fields = dataProvider.getFieldValues("field1");
	var columns = dataProvider.getFieldValues("field2");
	var colWidth = dataProvider.getFieldValues("field3");
	var headText = dataProvider.getFieldValues("field4");
	var dataType = dataProvider.getFieldValues("field5");
	var editor = dataProvider.getFieldValues("field6");
	var style = dataProvider.getFieldValues("field7");
	var values = dataProvider.getFieldValues("field8");
	var background = dataProvider.getFieldValues("field9");
	var textAlignment = dataProvider.getFieldValues("field10");
	var addColumns = 'function setColumns(grid) {\n    var columns = ['
	for (var i = 0; i < itemCount; i++){
		if(i < itemCount -1){
			addColumns += '{\n' +
			wSpace2 + 'name: "' + columns[i] + '",\n' +
			wSpace2 + 'fieldName: "' + fields[i] + '",\n' +
			wSpace2 + 'header: {\n' +
			wSpace1 + wSpace2 + 'text: "' + headText[i] + '"\n' +
			wSpace2 + '},\n'
			if(dataType[i]){
				if (dataType[i] == "boolean"){
					addColumns += wSpace2 + 'editor: {\n' +
					wSpace1 + wSpace2 + 'booleanFormat: "' + editor[i] + '"\n' +
					wSpace2 + '},\n' +
					wSpace2 + 'styles: {\n'
					if (background[i]){
						addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
					}
					if (textAlignment[i]){
						addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '",\n' 
					}
					addColumns += wSpace1 + wSpace2 + 'booleanFormat: "' + style[i] + '"\n' +
					wSpace2 + '},\n'
				}
				if (dataType[i] == "number"){
					addColumns += wSpace2 + 'editor: {\n' +
					wSpace1 + wSpace2 + 'type: "number"\n' +
					wSpace2 + '},\n' +
					wSpace2 + 'styles: {\n'
					if (background[i]){
						addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
					}
					if (textAlignment[i]){
						addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '",\n' 
					}
					addColumns += wSpace1 + wSpace2 + 'numberFormat: "' + style[i] + '"\n' +
					wSpace2 + '},\n'
				}
				if (dataType[i] == "datetime"){
					addColumns += wSpace2 + 'editor: {\n' +
					wSpace1 + wSpace2 + 'datetimeFormat: "' + editor[i] + '"\n' +
					wSpace2 + '},\n' +
					wSpace2 + 'styles: {\n'
					if (background[i]){
						addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
					}
					if (textAlignment[i]){
						addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '",\n' 
					}
					addColumns += wSpace1 + wSpace2 + 'datetimeFormat: "' + style[i] + '"\n' +
					wSpace2 + '},\n'
				}
				if (dataType[i] == "dropdown"){
					addColumns += wSpace2 + 'editor: {\n' +
					wSpace1 + wSpace2 + 'type: "dropDown",\n' +
					wSpace1 + wSpace2 + "dropDownCount: 4,\n" +
					wSpace1 + wSpace2 + "values: " + JSON.stringify(editor[i].split(",")) + ",\n" +
					wSpace1 + wSpace2 + "labels: " + JSON.stringify(values[i].split(",")) + "\n" +
					wSpace2 + '},\n' +
					wSpace2 + 'styles: {\n'
					if (background[i]){
						addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
					}
					if (textAlignment[i]){
						addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '"\n' 
					}
					addColumns += wSpace2 + '},\n'
				}
				if (dataType[i] == "text"){
					if (gridView.getValue(i,8) || gridView.getValue(i,9)){
						addColumns += wSpace2 + 'styles: {\n'
						if (background[i]){
							addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
						}
						if (textAlignment[i]){
							addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '"\n' 
						}
						addColumns += wSpace2 + '},\n'
					}
				}
			}
			addColumns += wSpace2 + 'width: "' + colWidth[i] + '"\n    },'
		}
		if(i === itemCount -1){
			addColumns += '{\n' +
			wSpace2 + 'name: "' + columns[i] + '",\n' +
			wSpace2 + 'fieldName: "' + fields[i] + '",\n' +
			wSpace2 + 'header: {\n' +
			wSpace1 + wSpace2 + 'text: "' + headText[i] + '"\n' +
			wSpace2 + '},\n' 
			if(dataType[i]){ //컬럼 시작
				if (dataType[i] == "boolean"){
					addColumns += wSpace2 + 'editor: {\n' +
					wSpace1 + wSpace2 + 'booleanFormat: "' + editor[i] + '"\n' +
					wSpace2 + '},\n' +
					wSpace2 + 'styles: {\n'
					if (background[i]){
						addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
					}
					if (textAlignment[i]){
						addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '",\n' 
					}
					addColumns += wSpace1 + wSpace2 + 'booleanFormat: "' + style[i] + '"\n' +
					wSpace2 + '},\n'
				}
				if (dataType[i] == "number"){
					addColumns += wSpace2 + 'editor: {\n' +
					wSpace1 + wSpace2 + 'type: "number"\n' +
					wSpace2 + '},\n' +
					wSpace2 + 'styles: {\n'
					if (background[i]){
						addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
					}
					if (textAlignment[i]){
						addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '",\n' 
					}
					addColumns += wSpace1 + wSpace2 + 'numberFormat: "' + style[i] + '"\n' +
					wSpace2 + '},\n'
				}
				if (dataType[i] == "datetime"){
					addColumns += wSpace2 + 'editor: {\n' +
					wSpace1 + wSpace2 + 'datetimeFormat: "' + editor[i] + '"\n' +
					wSpace2 + '},\n' +
					wSpace2 + 'styles: {\n'
					if (background[i]){
						addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
					}
					if (textAlignment[i]){
						addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '",\n' 
					}
					addColumns += wSpace1 + wSpace2 + 'datetimeFormat: "' + style[i] + '"\n' +
					wSpace2 + '},\n'
				}
				if (dataType[i] == "dropdown"){
					addColumns += wSpace2 + 'editor: {\n' +
					wSpace1 + wSpace2 + 'type: "dropDown",\n' +
					wSpace1 + wSpace2 + "dropDownCount: 4,\n" +
					wSpace1 + wSpace2 + "values: " + JSON.stringify(editor[i].split(",")) + ",\n" +
					wSpace1 + wSpace2 + "labels: " + JSON.stringify(values[i].split(",")) + "\n" +
					wSpace2 + '},\n' +
					wSpace2 + 'styles: {\n'
					if (background[i]){
						addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
					}
					if (textAlignment[i]){
						addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '"\n' 
					}
					addColumns += wSpace2 + '},\n'
				}
				if (dataType[i] == "text"){
					if (gridView.getValue(i,8) || gridView.getValue(i,9)){
						addColumns += wSpace2 + 'styles: {\n'
						if (background[i]){
							addColumns += wSpace1 + wSpace2 + 'background: "' + background[i] + '",\n' 
						}
						if (textAlignment[i]){
							addColumns += wSpace1 + wSpace2 + 'textAlignment: "' + textAlignment[i] + '"\n' 
						}
						addColumns += wSpace2 + '},\n'
					}
				}
			}
			addColumns += wSpace2 + 'width: "' + colWidth[i] + '"\n    }'
		}
	}
	addColumns += ']\n\n' +
	wSpace1 + 'grid.setColumns(columns);\n' +
	'}\n\n'

	return addColumns;
}