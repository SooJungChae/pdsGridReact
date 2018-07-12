var express = require('express');
var router = express.Router();

const sql = require('mssql');

var config = {
    server     : 'SOODIAMOND',
    user     : 'sa',
    password : 'dpf5236',
    database : 'S2Std',
    options: {
        // encrypt: true // Use this if you're on Windows Azure
        instanceName: 'SQLEXPRESS'
    }
};

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('get empName in server');

    sql.connect(config, function (err) {

        if (err) console.log(err);
        else {
            const request = new sql.Request()
            request.query('select top(5)* from employee', (err, result) => {
                if (err) {
                    console.log(err)
                    sql.close()
                }
                else {
                    //console.log(result.recordset);
                    var recordCnt = result.recordset.length;
                    var names = [];
                    var datas = {};

                    for (var i = 0; i < recordCnt; i++) {
                        names.push({
                            "empCode" : result.recordset[i].EmpCode,
                            "empName" : result.recordset[i].Name
                        });
                    }
                    console.log(names);
                    res.send(names);
                    sql.close()
                }
            })
        }
    });

    // res.json([{
    //     id: 1,
    //     username: "samsepi0l"
    // }, {
    //     id: 2,
    //     username: "D0loresH4ze"
    // }]);
  // res.send('respond with a resource');
});

module.exports = router;
