function initialize() {
    var latlng = new google.maps.LatLng(34.7065867, 135.5021337); //緯度・経度
    var myOptions = {
        zoom: 18, //拡大倍率
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP, //地図の種類
        disableDefaultUI: true
    };
    var canvas = document.getElementById("map");
    var map = new google.maps.Map(canvas, myOptions); //地図を表示
}
