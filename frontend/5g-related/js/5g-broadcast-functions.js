// Variables


// Functions
function open5GBroadcast() {
    // Create a Pop-Up to ask whether HLS, DASH or LL DASH should be used
    // Popup --> if hls
        // location.href = "../5g-related/html/hls-local-video.html";
    //          if dash
            location.href = '../5g-related/html/dash-local-video.html';
    //          if ll dash
    //  location.href = '../5g-related/html/ldash-local-video.html';
}

function backDashStreams() {
    location.href = "../../android/player.html";
}

function changeService() {
    console.log('Start change service function');

    jQuery.ajax({
        type: "GET",
        contentType: "application/json",
        /*url:'http://localho.st/backend/5g-related/change_service/change_service.php',*/
        url:'http://localhost/backend/5g-related/change_service/change_service.php',
        data: {service: '1'},

        success: function (response) {
            alert(response);
            alert(response.data);
            alert('success');
        },
        error: function () {
            alert('failure');
        }
    });

    console.log('End change service function');
    return false;



    /*$.get('../../../backend/5g-related/change_service/change_service.php', function(data) {
        console.log(data)
    });*/
}