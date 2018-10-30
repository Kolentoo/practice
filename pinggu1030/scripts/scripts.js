$(function(){


    var mySwiper1 = new Swiper('.swiper-container1',{
        pagination: '.pagination',
        paginationClickable: true,
        autoplay : 3000,
        loop:true,
        autoplayDisableOnInteraction : false,
        calculateHeight:true
    })

    var mySwiper2 = new Swiper('.swiper-container2',{
        pagination: '.pag',
        paginationClickable: true,
        centeredSlides: true,
        slidesPerView: 1.4,
        watchActiveIndex: true,
        loopAdditionalSlides : 1,
        loop:true,
        cssWidthAndHeight : false,
        autoplay : 3000,
        autoplayDisableOnInteraction : false,
        calculateHeight:true
    })


    $('.btn').on('click',function(){
        check();
    })

    callphone();

    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        $('.chooseall').addClass('mac');
    } else {
        $('.chooseall').removeClass('mac');
    }

    $(window).scroll(function () {
        var w = $(window).scrollTop();
            if (w >= 1) {
                    $(".menu").addClass('menuon');
                } else {
                    $(".menu").removeClass('menuon');
                }

    }).trigger("scroll");




})

function check(){
    if($('.name').val()===''){
        
        mobilecheck('请输入名字')
        
    }else{
        $('.name').parents('.inputbox').removeClass('wrong');
        if($('.phone').val()===''){
            mobilecheck('请输入手机号');
        }else{
            if(isNaN($('.phone').val())||$('.phone').val().length<10){
                mobilecheck('请输入正确的手机号')
            }else{
                $('.phone').parents('.inputbox').removeClass('wrong');
                if($(".choose").find("option:selected").text()==='请选择'){
                    mobilecheck('请选择类型')
    
                }else{
                    $(".choose").parents('.inputbox').removeClass('wrong');
                    var nametext = $('.name').val();
                    var phonetext = $('.phone').val();
                    var choose1 = $(".choose1").find("option:selected").text();
                    var addresstext = $('.detailaddress').val();
                    var choose2 = $(".choose2").find("option:selected").text();
                    var moretext = $('.more').val();

                    var alldetail = addresstext+','+choose1+','+moretext


                    mobilecheck('提交成功');
                    $('.something').val('');
                    $('.chooseall').find('option:selected').text('请选择');
   

                    $.ajax({
                        type:'POST',//GET,POST
                        cache:'false',
                        url:'http://vanfun.com/Api/ReservationLook',
                        data:{look_remark:alldetail,look_name:nametext,look_phone:phonetext,look_area:addresstext},
                        dataType:'json',//json,jsonp,text,xml
                        success:function(res){
                            console.log(res)
                        },
                        error:function(res){
                            //alert(JSON.stringify(res));
                        },
                        complete:function(res){
                            //alert(JSON.stringify(res));
                        }    
                    });
                }
            }
            

        }
    }
}

function callphone(){
    $('.callyou').on('click',function(){
        window.location.href = "tel:6048999999";

        $('.close').on('click',function(){
            $('.pop2').addClass('hide');
        })
    })
}


function scrolltop(){
    var swiperHeight = $('.swiper1').height();
    $('.wrap').animate({scrollTop:swiperHeight},800);
}

function mobilecheck(a){
    $('.popbox').addClass('popboxon');
    $('.popbox').find('.p1').text(a);
    setTimeout(function(){
        $('.popbox').removeClass('popboxon');
    },2000)
}



