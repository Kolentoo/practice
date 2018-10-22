$(function(){
    var wheight = $(window).height()


    $('.bj').css('height',wheight+'px');
    $('.wrap').css('height',wheight+'px');



    var mySwiper1 = new Swiper('.swiper-container1',{
        pagination: '.pagination',
        paginationClickable: true,
        autoplay : 3000,
        loop:true,
        autoplayDisableOnInteraction : false
    })

    var mySwiper2 = new Swiper('.swiper-container2',{
        pagination: '.pag',
        paginationClickable: true,
        centeredSlides: true,
        slidesPerView: 1.4,
        watchActiveIndex: true,
        loop:true,
        cssWidthAndHeight : false,
        autoplay : 0,
        autoplayDisableOnInteraction : false
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

    $('.titlepic').on('mouseenter',function(){
        $('.callyou').attr('src','./images/title2.png');
    });

    $('.titlepic').on('mouseleave',function(){
        $('.callyou').attr('src','./images/title.png');
    })


})

function check(){
    if($('.name').val()===''){
        
        if(pcormobile()==='pc'){
            $('.name').parents('.inputbox').addClass('wrong');
            scrolltop();
        }else{
            mobilecheck('请输入名字')
        }
        
    }else{
        $('.name').parents('.inputbox').removeClass('wrong');
        if($('.phone').val()===''){
            if(pcormobile()==='pc'){
                $('.phone').parents('.inputbox').addClass('wrong');
                $('.phone').parents('.inputbox').find('.tips').text('请输入手机号');
                scrolltop();
            }else{
                mobilecheck('请输入手机号');
            }
        }else{
            if(isNaN($('.phone').val())||$('.phone').val().length<11){
                if(pcormobile()==='pc'){
                    $('.phone').parents('.inputbox').addClass('wrong');
                    $('.phone').parents('.inputbox').find('.tips').text('请输入正确的手机号');
                    scrolltop();
                }else{
                    mobilecheck('请输入正确的手机号')
                }
            }else{
                $('.phone').parents('.inputbox').removeClass('wrong');
                if($(".choose").find("option:selected").text()==='请选择'){
                    if(pcormobile()==='pc'){
                        $(".choose").parents('.inputbox').addClass('wrong');
                        scrolltop();
                    }else{
                        mobilecheck('请选择类型')
                    }
    
                }else{
                    $(".choose").parents('.inputbox').removeClass('wrong');
                    var nametext = $('.name').val();
                    var phonetext = $('.phone').val();
                    var choose1 = $(".choose1").find("option:selected").text();
                    var addresstext = $('.detailaddress').val();
                    var choose2 = $(".choose2").find("option:selected").text();
                    var moretext = $('.more').val();

                    var alldetail = addresstext+','+choose1+','+moretext
                    console.log(alldetail)
                    console.log(nametext)
                    console.log(phonetext)
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
        if(pcormobile()==='pc'){
            $('.pop2').removeClass('hide');
        }else{
            window.location.href = "tel:6048999999";
        }

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

function pcormobile(){
    var isPc=true;
    var userAgentInfo = navigator.userAgent;//获取游览器请求的用户代理头的值
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];//定义移动设备数组
    for (var v = 0; v < Agents.length; v++) {
    //判断是否是移动设备
        if (userAgentInfo.indexOf(Agents[v]) > 0) {    
        isPc= false;
        break;
        }
    }
    if(isPc){
        return 'pc'
    }else{
        return 'mobile'
    }
}

