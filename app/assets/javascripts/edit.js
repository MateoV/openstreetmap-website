function maximiseMap() {
  $("#left").hide();
  $("#greeting").hide();
  $("#tabnav").hide();

  $("#content").css("top", "0px");
  if ($("html").attr("dir") == "ltr") {
    $("#content").css("left", "0px");
  } else {
    $("#content").css("right", "0px");
  }

  handleResize();
}

function minimiseMap() {
  $("#left").show();
  $("#greeting").show();
  $("#tabnav").show();

  $("#content").css("top", "30px");
  if ($("html").attr("dir") == "ltr") {
    $("#content").css("left", "185px");
  } else {
    $("#content").css("right", "185px");
  }

  handleResize();
}

$(document).ready(function () {
  $(window).resize(handleResize);
  handleResize();

  $("#search_form").submit(function () {
    $("#sidebar_title").html(I18n.t('site.sidebar.search_results'));
    $("#sidebar_content").load($(this).attr("action"), {
      query: $("#query").val()
    }, openSidebar);

    return false;
  });
});
