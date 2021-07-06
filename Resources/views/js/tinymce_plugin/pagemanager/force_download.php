<<<<<<< HEAD
<?php

$path = $_POST['path'];
$name = $_POST['name'];

header('Pragma: private');
header('Cache-control: private, must-revalidate');
header('Content-Type: application/octet-stream');
header('Content-Length: '.(string) (filesize($path)));
header('Content-Disposition: attachment; filename="'.($name).'"');
readfile($path);
exit;
=======
<?php

$path = $_POST['path'];
$name = $_POST['name'];

header('Pragma: private');
header('Cache-control: private, must-revalidate');
header('Content-Type: application/octet-stream');
header('Content-Length: '.(string) (filesize($path)));
header('Content-Disposition: attachment; filename="'.($name).'"');
readfile($path);
exit;
>>>>>>> 612f709d5ca91aa61f7acaba002247d278c20ee9
