$(document).ready(function () {
  $("#open_map_key").click(function (e) {
    var url = $(this).attr('href'),
        title = $(this).text();

    function updateMapKey() {
      var mapLayer = map.baseLayer.keyid,
          mapZoom = map.getZoom();

      $(".mapkey-table-entry").each(function () {
        var data = $(this).data();

        if (mapLayer == data.layer &&
            mapZoom >= data.zoomMin && mapZoom <= data.zoomMax) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }

    $("#sidebar_content").load(url, updateMapKey);

    openSidebar({ title: title });

    $("#sidebar").one("closed", function () {
      map.events.unregister("zoomend", map, updateMapKey);
      map.events.unregister("changelayer", map, updateMapKey);
    });

    map.events.register("zoomend", map, updateMapKey);
    map.events.register("changelayer", map, updateMapKey);

    e.preventDefault();
  });
});
