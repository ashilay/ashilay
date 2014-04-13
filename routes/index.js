
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', {
        title: 'Express'
        ,reasons: [
            "Razor Syntax"
            ,"Still HTML"
            ,"You can macro your macros into your macros, if you want"
        ]
    });


    /*var pg = require('pg');
    var conString = "postgres://postgres@localhost:5432/ResumeLocal";

    var client = new pg.Client(conString);
    client.connect();

    var query = client.query('SELECT "Name" FROM contact WHERE "Id" = 1');
    query.on("row", function (row, result) {
        result.addRow(row);
    });
    query.on("end", function (result) {
        console.log(JSON.stringify(result.rows, null, "    "));
        client.end();
        res.send(JSON.stringify(result.rows, null, "    "));
    });*/

};

