(function($) {
	$(document).HorizontalBlocks({
		parentBox: "#wrapper",
		block:"#pages>li",
		firstBlock: 1,
		scrollSpeed: "fast",
		horizontalMenu: ".home_contents > .home_contents_inner > div",
	});
	SyntaxHighlighter.all();
	$("body").css({"opacity": 1});
})(jQuery);