
(function() {

    var pdsGrid = (function() {

        var defaultValue = {
            width: "auto",
            height: 400,
            columns: [{
                text: "",
                columntype: "default",
                celltype: "string",
                align: "left",
                dbcolumnname: ""
            }],
            source: null,
            placeholder: ""
        };

        function pdsGrid() {
            this.width = 1000;
        }

        pdsGrid.prototype.source = function() {
            return "source push";
        }

        pdsGrid.prototype.getInstance = function() {
            return defaultValue;
        };

        pdsGrid.prototype.makeWidget = function (gridInstance) {

            var ins = gridInstance;
            var thead = document.createElement("thead"),
                tr = document.createElement("tr"),
                tbody = document.createElement("tbody"),
                td = document.createElement("td");

            var gridwrap = document.createElement("div");
            gridwrap.className = "pdsGridWrap";
            gridwrap.style.width = ins.width + "px";
            gridwrap.style.height = ins.height + "px";

            var grid = document.createElement("table");
            grid.className = "pdsGrid";
            grid.appendChild(thead);
            grid.appendChild(tbody);
            gridwrap.appendChild(grid);

            document.getElementById("pdsGrid").appendChild(gridwrap);

            return;

            // contents
            // var sourceData = this.getDataFromSource(ins.source);
            // var rowData = this.columnToRow(gridInstance.columns, sourceData);
            //
            // for (var i = 0; i < rowData.length; i++) {
            //     tr = document.createElement("tr");
            //     for (var j = 0; j < rowData[i].length; j++) {
            //         td = document.createElement("td");
            //
            //         // column 별로 style 적용한다.
            //         this.columnStyle(td, ins.columns[j], rowData[i][j]);
            //
            //         // if (isHtmlElement(this.columnStyle(ins.columns[j], rowData[i][j]))) {
            //         //   appendChild(this.columnStyle(td, ins.columns[j], rowData[i][j]));
            //         // }
            //         // else {
            //         //   innerHTML = this.columnStyle(td, ins.columns[j], rowData[i][j]);
            //         // }
            //         tr.appendChild(td);
            //     }
            //     grid.appendChild(tr);
            // }

            // var frag = document.createDocumentFragment();
            // var grid_head = "<tr><th></th></tr>";
            // var e = document.createElement("table");
            // e.innerHTML = grid_head;
            // e.className = "pdsGrid";
            //frag.appendChild(e);
        };

        pdsGrid.prototype.addColumn = function($obj, value) {
            // --------- thead
            var $table = $obj.find("table"),
                $thead = $table.find("thead"),
                $tbody = $table.find("tbody"),
                th = document.createElement("th"),
                tr = document.createElement("tr"),
                td = document.createElement("td");

            th.innerHTML = value;
            tr.appendChild(th);
            $thead.append(tr);

            // --------- tbody
            // tr 계산은 later...
            // width 계산은 later...
            // if (ins.columns[i].width) {
            //     th.width = ins.columns[i].width;
            // }
            tr = document.createElement("tr");
            tr.appendChild(td);
            $tbody.append(tr);
        };

        pdsGrid.prototype.getDataFromSource = function (source) {
            if (source) {
                var arr = [];

                for (var i = 0; i < source.length; i++) {
                    arr[source[i].columnname] = source[i].data
                }
                return arr;
            }
        };

        function createElementFromHTML(htmlString) {
            var div = document.createElement('div');
            div.innerHTML = htmlString.trim();

            // Change this to div.childNodes to support multiple top-level nodes
            return div.firstChild;
        }

        function searchStringInArray(str, arr) {
            for (var j = 0; j < arr.length; j++) {
                if (arr[j].match(str)) return j;
            }
            return -1;
        }

        return pdsGrid;
    })();

    $.fn.pdsGrid = function(args, value) {
        //$pdsGrid.pdsGrid({ width: 670 }); -- > set
        //$pdsGrid.pdsGrid("addColumn", $columnName.val()); // property, value
        //$pdsGrid.pdsGrid("source"); --> get source property value

        // prototype 하려면 constructor 여야 한다!

        console.log('call:' + args, value);

        var grid = new pdsGrid();

        // (obj) edit instance then make grid
        if ((typeof args === 'object')) {

            var gridInstance = grid.getInstance();
            $.extend(gridInstance, args);
            grid.makeWidget(gridInstance);
            return this;
        }

        // (string)
        if ((typeof args === 'string') &&
            (typeof value === 'undefined') &&
            (grid[args] !== 'undefined')) {

            return grid[args]();
        }

        // (string, value)
        if ((typeof args === 'string') &&
            (typeof value !== 'undefined') &&
            (grid[args] !== 'undefined')) {

            return grid[args](this, value);
        }

        // chaning possible
        return this;
    };
})();