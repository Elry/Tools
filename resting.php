<?php
// headers
header("Access-Control-Max-Age: 300");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: text/html; charset=UTF-8");
header("Access-Control-Allow-Origin: [origin]");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// headers;

error_reporting(E_ALL);
ini_set('display_errors', true);
ini_set('default_charset', 'utf-8');
 
try{
   // code  
   http_response_code(200);
 }catch(Exception $e){
   echo $e->getMessage();
   http_response_code(400);
 }
?>
