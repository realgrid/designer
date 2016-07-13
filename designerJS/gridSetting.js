var fields = [{
				fieldName: "field1"
			}, {
				fieldName: "field2"
			}, {
				fieldName: "field3",
				dataType: "number"
			}, {
				fieldName: "field4"
			}, {
				fieldName: "field5"
			}, {
				fieldName: "field6"
			}, {
				fieldName: "field7"
			}, {
				fieldName: "field8"
			}, {
				fieldName: "field9"
			}, {
				fieldName: "field10"
			}, {
				fieldName: "field11"
			}];

var columns = [{
				name: "col1",
				fieldName: "field1",
				header: {
					text: "필드"
				},
				width: 100
			},{
				name: "col2",
				fieldName: "field2",
				header: {
					text: "컬럼"
				},
				width: 100
			}, {
				name: "col3",
				fieldName: "field3",
				header: {
					text: "width"
				},
				editor: {
					type: "number"
				},
				width: 66
			}, {
				name: "col4",
				fieldName: "field4",
				header: {
					text: "head.text"
				},
				width: 100
			}, {
				name: "col5",
				fieldName: "field5",
				header: {
					text: "type"
				},
				lookupDisplay: true,
		        values: ["text", "boolean", "number", "datetime", "dropdown"],
				editor: {
		            type: "dropDown",
		            dropDownCount: 4,
		            textReadOnly: true
		        },
				width: 100
			}, {
				name: "col6",
				fieldName: "field6",
				header: {
					text: "option"
				},
				visible:false,
				width: 100
			}, {
				name: "col7",
				fieldName: "field7",
				header: {
					text: "option"
				},
				button: "action",
				buttonVisibility: "always",
				readOnly: true,
				editable:false,
				width: 100
			}, {
				name: "col8",
				fieldName: "field8",
				header: {
					text: "labels"
				},
				visible: false,
				width: 50
			}, {
				name: "col9",
				fieldName: "field9",
				header: {
					text: "background"
				},
				visible: false,
				width: 50
			}, {
				name: "col10",
				fieldName: "field10",
				header: {
					text: "textAlignment"
				},
				visible: false,
				width: 50
			}, {
				name: "col11",
				fieldName: "field11",
				header: {
					text: "data"
				},
		        editor: {
		            "type": "dropDown",
		            "dropDownCount": 6
		        },
				width: 100
			}];