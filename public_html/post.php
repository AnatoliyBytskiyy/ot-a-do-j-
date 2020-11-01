<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="translate.nata@i.ua";  // e-mail админа 
 
 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="http://site.ru/index.html";  // На какую страничку переходит после отправки письма 
 

// Принимаем данные с формы и конвертируем их в нужную кодировку
/*$name=iconv("utf-8", "Windows-1251", $_POST['name']);
 
$phone = iconv("utf-8", "Windows-1251", $_POST['phone']);*/

$name=$_POST['name'];
 
$phone = $_POST['phone'];
 
// создание сообщения
//$msg="Заявка\n\Имя: $name  \Телефон: $phone";

$msg = iconv("Windows-1251", "utf-8", "<p>Имя: ").$name."</p>".iconv("Windows-1251", "utf-8", "<p>Телефон: ").$phone."</p>";
 
 // Отправляем письмо админу  
//$msg = iconv("Windows-1251", "utf-8", $msg);
 
mail("$adminemail", iconv("Windows-1251", "utf-8", "Новая заявка ")."$date $time", $msg, "Content-Type: text/html; charset=\"utf-8\""); 

echo "<script type='text/javascript'>alert('Заявка успешно отправлена'); location='контакты'; </script>";

//header('Location: http://genrydqk.beget.tech/%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%8B/');

//print "
//<script language='Javascript'> 
    //location = \"http://genrydqk.beget.tech/\"; 
//</script>"

exit;

?>