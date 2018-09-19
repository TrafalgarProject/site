<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">
<link rel="shortcut icon" href="img/favicon.ico">
<title>FAN Сериалы - Просмотр сериалов на любой ваш вкус!!!</title>
<link rel="stylesheet" type="text/css" href="css/style-new.css">
<link rel="stylesheet" type="text/css" href="css/media.css">
<link rel="stylesheet" type="text/css" href="css/menu.css">
<link rel="stylesheet" type="text/css" href="font/fontello.css">
<script src="js/jquery-2.1.1.js"></script>
</head>
<body>
<div class="conteiner">
<?
    include "module/menu.php";
    include "module/header.htm";
?>

<div class="row row-index">
<div class="cols col-12">
<?
    include "module/recwatched.htm";
    include "module/seesoon.htm";
?>
    <div class="main-conteiner-index">
<div class="main_logo_conteiner">Новинки</div>
<div class="row content-material-body">
    <? include "module/news.htm";?>
</div><!-- .row content-material-body content-material-body2 -->
</div>
<?
    include "module/popular.htm";
    include "module/coonsity.htm";    
?>
</div><!-- .cols -->
</div><!-- .row row-body-con --> 
<div class="row">
<div class="cols col-12 footer" style="position:relative;">
<span class="footer-logo">
<img src="img/a.png">
</span><!-- .footer-logo -->
<span class="foorer-center-info">
<span class="footer-stat">
<ul>
<li>Всего онлайн: 100000</li>
<li>Пользователи: 10000000</li>
<li>Гости: 1000</li>
</ul>
</span>
<span class="footer-baner"></span>
</span><!-- .foorer-center-info -->
<span class="dis-fp transition">
<a href="#">Обратная связь</a>
</span><!-- .dis-fp -->
</div><!-- .cols footer -->
</div><!-- .row -->
</div><!-- .conteiner -->
<script src="js/jquery.scroolly.min.js" type="text/javascript"></script>
<script src="js/view-index.js" type="text/javascript"></script>
<!--<script src="js/view.js" type="text/javascript"></script>-->
<script src="js/jquery.menu-aim.js"></script>
<script src="js/main2.js"></script>
</body>
</html>