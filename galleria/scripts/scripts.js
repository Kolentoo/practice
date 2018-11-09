$(function(){

    submitinfo();
    scrollbottom();
    sizecheck();
    
    
    window.onresize=function(){  
        sizecheck()
        
   }  
    
})

function sizecheck(){
    var winWidth = window.innerWidth;
    if(winWidth<1460){
        $('.bj').addClass('small');
        $('.banner').addClass('small');
        $('.menucon').addClass('small');
    }else{
        $('.bj').removeClass('small');
        $('.banner').removeClass('small');
        $('.menucon').removeClass('small');
    }
}

function submitinfo(){
    $('.gobtn').on('click',function(){
        check();
    })
}

function check(){
    if($('.phone').val()===''){
        $('.phone').parents('.inputbox').addClass('wrong');
        $('.phone').parents('.inputbox').find('.tips').text('请输入手机号');
    }else{
        if(isNaN($('.phone').val())||$('.phone').val().length<11){
            $('.phone').parents('.inputbox').addClass('wrong');
            $('.phone').parents('.inputbox').find('.tips').text('请输入正确的手机号');
        }else{
            $('.phone').parents('.inputbox').removeClass('wrong');
            if($('.name').val()===''){
                $('.name').parents('.inputbox').addClass('wrong');
                $('.name').parents('.inputbox').find('.tips').text('请输入姓名');
            }else{
                $('.name').parents('.inputbox').removeClass('wrong');

                //表单验证通过
            }
        }
        

    }
}

function scrollbottom(){
    var bottomTop = $('.bottom').offset().top
    $('.bottombanner').on('click',function(){   
        $('body,html').animate({scrollTop:bottomTop},800);
    })
}





