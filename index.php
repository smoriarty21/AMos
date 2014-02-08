<?php

require('php/sql_utils.php');

?>

<html>
    <head>
        <title>AMos</title>
        <link rel = "stylesheet" type = "text/css" href = "css\style.css">
    </head>
    <body>
        <div id = 'loginTopWrapper'>
            <div id = 'loginTopInnerWrapper'>
                <div id = 'loginUsername'>
                    Username:
                    <input type = 'text' size = '15' id = 'un' />
                </div>
                <div id = 'loginpwd'>
                    Password:
                    <input type = 'text' size = '20' id = 'pw' />
                </div>
            </div>
            <div id = 'loginBody' class = 'center'></div>
            <div id = 'loginfoot'></div>
        </div>
    </body>
</html>


