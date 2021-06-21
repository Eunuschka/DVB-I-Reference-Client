// Variables


// Functions
function open5GBroadcast() {
    // location.href = "../5g-related/html/3gpp_broadcast_player.html";
    // location.href = "../5g-related/html/bc_player_2.html";
    // location.href = "../5g-related/html/bc_player_2.html";
    // location.href = "../5g-related/html/bc_player_kabisch_2.html";
    location.href = '../5g-related/html/bc_player_kabisch_3.html';
    return;
}

function backP2PStreams() {
    location.href = "player.html";
    return;
}

function changeService() {
    let jQuery;
    jQuery.ajax({
        type: "POST",
        url: 'change_service/change_service.php',
        dataType: 'json',
        data: {functionname: 'change_service.php', arguments: [1, 2]},

        success: function (obj, textstatus) {
            if( !('error' in obj) ) {
                yourVariable = obj.result;
            }
            else {
                console.log(obj.error);
            }
        }
    });

}