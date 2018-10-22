$(function(){
    var subject = $('.subject');
    var navigation = $('#j-nav');
    var nav = navigation.find('.nav-list');
    var conBox = subject.find('.cont-box');
    var navTop = $('.navigation').offset().top;
    var sw = screen.width;

    
    nav.on('click',function(){
        var t = $(this);
        var ts = t.siblings('li');
        t.find('.nav-bj').addClass('on');
        ts.find('.nav-bj').removeClass('on');
        var tindex = t.index();
        var section = conBox.eq(tindex);
        var stop = section.offset().top;
        $('body,html').animate({scrollTop:stop},800);
    });

    $('.back').on('click',function(){
        $('body,html').animate({scrollTop:0},800);
    })

    $(window).scroll(function () {
        var w = $(window).scrollTop();

        if (w >= 600) {
            $(".navigation").addClass('nav-on');
        } else {
            $(".navigation").removeClass('nav-on');
        }


    }).trigger("scroll");

    showroom();
    submitinfo();

})

function submitinfo(){
    $('.gobtn').on('click',function(){
        check();
    })
}


function showroom(){
    $('.roomlist').on('click',function(){
        var imgsrc = $(this).find('img').attr('src');
        $('.bigroom').find('.bigpic').attr('src',imgsrc);
        console.log(imgsrc);
    });

    $('.bigroom').on('click',function(){
        var thissrc = $(this).find('img').attr('src');
        $('.pop-box').find('img').attr('src',thissrc);
        $('.pop-box').removeClass('hide');
        $('.mask').removeClass('maskoff');

        $('.mask').on('click',function(){
            $('.pop-box').addClass('hide');
            $('.mask').addClass('maskoff');
        })
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




