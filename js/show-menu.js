var isShow= true; 
function show(){
    if(isShow==true){
    $('#menu-item').addClass('dis-block');
    }
    if(isShow==false){
        $('#menu-item').removeClass('dis-block');
    }
    isShow = !isShow;
}