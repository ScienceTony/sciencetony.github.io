<?php
define('ISITSAFETORUN', TRUE);
error_reporting(E_ALL);
ini_set('display_errors', 1);
date_default_timezone_set('Etc/UTC');

$stylesheet = '';
$javascript = '';
$mycss      = '';
$pagetitle  = 'Welcome to Tony McDonald\'s page';
require 'head.php';
?>

<?php
require 'tail.php';
?>
