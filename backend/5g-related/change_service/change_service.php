<?php
    print "Run change service script." . "<br>";
    flush();

    // Arguments
    if (PHP_SAPI === 'cli') {
        $Service_number = $argv[1];
    }
    else {
        if(isset($_GET['service'])) {
            $Service_number = $_GET['service'];
        } else {
            echo "No service number has been provided as argument!" . "<br>";
        }
    }

    $dir = getcwd();
    /* echo $dir . "<br>";
    echo "cmd /c START ". $dir . "\change_service.bat" . " " . $Service_number . " "; */

    echo "Launch batch script!" . "<br>";

    exec("cmd /c START ". $dir . "\change_service.bat" . " " . $Service_number . " ");
    // system("cmd " . $dir . "\change_service.bat");

    echo "Batch script ended!" . "<br>";
?>