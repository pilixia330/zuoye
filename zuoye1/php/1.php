<?php
$a=$_POST["user"];
$b=$_POST["pas"];
$arr=array("1805rcy");
$arr2=array("1805rcy"=>"121212");
if(in_array($a,$arr)){
    if($arr2[$a]==$b){   
        echo '{"code":2}';
    }else{
        echo '{"code":1}';
    }
}else{
  echo '{"code":0}';
}
?>