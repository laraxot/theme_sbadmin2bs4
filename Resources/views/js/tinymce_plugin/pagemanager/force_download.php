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
>>>>>>> 7acc7b40bfadbdb97addbca0d76889ee2eeeba7f
