document.write("<script src='/designerJS/gridSetting.js'></script>");
document.write("<script src='/designerJS/stringSource.js'></script>");
var realGridDesigner = (function() {
	var _gridView;
	var _dataProvider;
	var num = 0;
	var _fullSource = function() {
		gridView.commit();
		dataProvider.clearRowStates();

		var full = getHtml();
		$("#sourceCode").text(full);
	}

	var _restart = function() {
        var designerView = $("#fullSource").val();
        var iframe = document.getElementById("resultGrid");
        var doc = iframe.contentDocument;

        doc.open();
        doc.write(designerView);
        doc.close();
    }

    var _saveText = function (){
		var textToWrite = document.getElementById("fullSource").value;
		var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
		var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
		var downloadLink = document.createElement("a");
		downloadLink.download = fileNameToSaveAs;
		downloadLink.innerHTML = "Download File";
		if (window.webkitURL != null){
			downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
		}else {
			downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
			downloadLink.onclick = destroyClickedElement;
			downloadLink.style.display = "none";
			document.body.appendChild(downloadLink);
		}

		downloadLink.click();
	}
//
	return  {
		gridView: _gridView,
        dataProvider: _dataProvider,
        restart: _restart,
        saveText: _saveText,
        create: function(assertPath, containerDiv) {
            RealGridJS.setRootContext(assertPath);

            dataProvider = new RealGridJS.LocalDataProvider();
            gridView = new RealGridJS.GridView(containerDiv);
            gridView.setDataSource(dataProvider);
        },
        setFields: function(provider){
			dataProvider.setFields(fields);
		},
		setColumns: function(grid){
			gridView.setColumns(columns);
		},
		setOptions: function() {
			gridView.setOptions({
				panel:{
					visible: false
				}
			})

			var options = {};
			options.enabled = false;
			gridView.setSortingOptions(options)
		},
		addColumn: function() {
			gridView.commit();
			num++;
			var row = {
				field1: "field" + num,
				field2: "column" + num,
				field3: "100",
				field4: "컬럼해더" + num,
				field5: "text",
				field6: "",
				field7: "",
				field8: "",
			}

			dataProvider.addRow(row);
		},
		delColumn: function() {
			dataProvider.setOptions({softDeleting:false});
		    dataProvider.removeRow(gridView.getCurrent().dataRow);
		},
		buidPreView: function() {
			var iframe = document.getElementById("resultGrid");
			var doc = iframe.contentDocument;

			document.getElementById("resultGrid").contentWindow.location.reload(true);

			setTimeout("restart()", 100);
		}
    }   
})();