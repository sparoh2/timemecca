var jQuery = $;
$(function(){
	$(document).HorizontalBlocks({
		parentBox: "#wrapper",
		block:"#pages > li",
		firstBlock: 1,
		scrollSpeed: "fast",
		horizontalMenu: ".home_contents > .home_contents_inner > div",
		start: function() {
			console.log('sdadsads');
		}
	});
	$("body").css({"opacity": 1});
});