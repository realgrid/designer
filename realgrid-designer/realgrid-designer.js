var realGridDesigner = (function() {
    var _container;
    var _dataProvider;
    var _gridView;







    function _addColumn() {
        _gridView.beginAppendRow();
    }








    return {
        gridView: _gridView,
        dataProvider: _dataProvider,
        create: function(assertPath, containerDiv) {
            RealGridJS.setRootContext(assertPath);

            var dataProvider = RealGridJS.LocalDataProvider();
            var gridView = RealGridJS.GridView(containerDiv);

            this._container = containerDiv;
            this._dataProvider = dataProvider;
            this._gridView = gridView;

        },
        getSourceCode: function() {
            return "<html......./html>";
        },
        addColumn: _addColumn
        // addColumn: function() {
        //     return _addColumn();
        // }
        // },
        // 컬럼추가:{
        //
        // }
        // 컬럼삭제:
        // 라이브러리경로:
        // 그리드버전:
    }
})();


//
// 객체(object)
// {
//     속성명(property): 값(value),
//     name: "value", //string
//     name2: 12, //number
//     name3: function() {
//
//     }, //function
//     name4: [....], //array
//     name5: {....}, //object
// }
