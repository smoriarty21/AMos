<?php
/**
 * Created by PhpStorm.
 * User: smoriarty
 * Date: 2/8/14
 * Time: 1:42 AM
 */
$server = "localhost:3306";
$sql_user = "root";
$sql_password = "@H3yTh3r3!";
$db = "amos";

$connect = mysql_connect($server, $sql_user, $sql_password, $db);


if(!connect) {
    die('SQL Error: '. mysql_error());
}
//echo "Connected!";
