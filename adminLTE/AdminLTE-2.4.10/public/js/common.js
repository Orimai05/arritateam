

function dispLoading(){
	$('#wrap').hide();
	$('#loading').show();
}

function goNext(page){

	switch(page){
		case 'home' :
			location.href= './home.html';
			break;
		case 'register' :
			location.href= './register.html';
			break;
		case 'register_complete' :
			location.href= './register_complete.html';
			break;
		case 'contents' :
			location.href= './contents.html';
			break;
		deafult :
			break;
	}
	
}



