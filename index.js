$('#icon').click(()=>{
    if($('.navbar').attr('class')=="navbar"){
        $('.navbar').attr('class','navbar responsive');
        $('#icon').attr('src','images/icon-close.svg');
    }else{
        $('.navbar').attr('class','navbar');
        $('#icon').attr('src','images/icon-hamburger.svg');
    }
})