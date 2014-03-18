function show_menu(){
	if($('#main').attr('class')=="nav_active"){
		$('#main').removeClass('nav_active');
		setTimeout(function(){$('#umenu_o').show();},500);
	}else{
		$('#main').addClass('nav_active');
		$('#umenu_o').hide();
	}
}
function show_umenu(){
	if($('#main').attr('class')=="unav_active"){
		$('#main').removeClass('unav_active');
		setTimeout(function(){$('#menu_o').show();},500);
	}else{
		$('#main').addClass('unav_active');
		$('#menu_o').hide();
	}
}