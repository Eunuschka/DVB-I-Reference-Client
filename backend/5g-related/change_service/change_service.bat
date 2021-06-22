@ECHO OFF

REM Script parameter
set serviceNumber=%1

if %serviceNumber% == 1 (
    set service=rtp://232.1.1.120:40020/video.mp4?pkt_size=1316
) else (
    IF %serviceNumber% == 2 (
        set service=rtp://232.1.1.121:40021/video.mp4?pkt_size=1316
    ) ELSE (
        echo "The service number is not 1 and not 2."
        echo "The service number is "
        echo %serviceNumber%
        REM exit
    )
)

start cmd /k cd /d C:\Users\hoyer\Videos ^&^& ffmpeg -re -stream_loop -1 -i movie.mp4 -c:v libx264 -f rtp_mpegts %service%

REM start "" ffplay rtp://232.1.1.120:40020

REM exit

