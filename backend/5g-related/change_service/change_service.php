<?php
    echo "Run change service script." . "<br>";

    // Arguments
    if (PHP_SAPI === 'cli') {
        $Service_number = $argv[1];
    }
    else {
        $Service_number = $_GET['service'];
    }

    $dir = getcwd();

    echo $dir . "<br>";

    echo "cmd /c START ". $dir . "\change_service.bat" . " " . $Service_number . " ";

    exec("cmd /c START ". $dir . "\change_service.bat" . " " . $Service_number . " ");
    // system("cmd " . $dir . "\change_service.bat");
?>