<? 
// ----------------------------������������-------------------------- // 
 
$adminemail="translate.nata@i.ua";  // e-mail ������ 
 
 
$date=date("d.m.y"); // �����.�����.��� 
 
$time=date("H:i"); // ����:������:������� 
 
$backurl="http://site.ru/index.html";  // �� ����� ��������� ��������� ����� �������� ������ 
 

// ��������� ������ � ����� � ������������ �� � ������ ���������
/*$name=iconv("utf-8", "Windows-1251", $_POST['name']);
 
$phone = iconv("utf-8", "Windows-1251", $_POST['phone']);*/

$name=$_POST['name'];
 
$phone = $_POST['phone'];
 
// �������� ���������
//$msg="������\n\���: $name  \�������: $phone";

$msg = iconv("Windows-1251", "utf-8", "<p>���: ").$name."</p>".iconv("Windows-1251", "utf-8", "<p>�������: ").$phone."</p>";
 
 // ���������� ������ ������  
//$msg = iconv("Windows-1251", "utf-8", $msg);
 
mail("$adminemail", iconv("Windows-1251", "utf-8", "����� ������ ")."$date $time", $msg, "Content-Type: text/html; charset=\"utf-8\""); 

echo "<script type='text/javascript'>alert('������ ������� ����������'); location='��������'; </script>";

//header('Location: http://genrydqk.beget.tech/%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%8B/');

//print "
//<script language='Javascript'> 
    //location = \"http://genrydqk.beget.tech/\"; 
//</script>"

exit;

?>