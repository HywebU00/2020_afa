// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    // $('.mpSlider').slick({
    //     mobileFirst: true,
    //     dots: true,
    //     arrow: true,
    //     infinite: true,
    //     speed: 500,
    //     autoplay: true,
    //     fade: true,
    //     lazyLoaded: true,
    //     lazyLoad: 'ondemand',
    //     ease: 'ease'
    // });

    // 申請驗證 項目輪播
    $('.itemSlider').slick({
        mobileFirst: true,
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        fade: false,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
    // 
    $('.cppic_slider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        // pauseOnHover: true,
        // pauseOnFocus: true,
        // focusOnSelect: true,
        // accessibility: true,
        // lazyLoad: 'ondemand',
        // ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });

    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });

    // 開關
    $('.switch').click(function(event) {
        $(this).next('.info_box').slideToggle(300);
    });

    $('.modal a.switch').click(function(event) {
        $(this).parents('tr').next('tr.sub_info').slideToggle(300);
    });



    /*-----------------------------------*/
    /////////////modal設定/////////////
    /*-----------------------------------*/
    $(function() {
        $('#modal').hide();                                                                //先隱藏視窗
        $('.modal').after('<div class="modal_overlay"></div>');                             //新增透明底
        $('.modal').prepend('<button type="button" class="close">關閉</button>');           //新增關閉按鈕
        $('.modal_overlay').hide();                                                         //隱藏透明底
        //按鈕動作
        $('#openModal').click(function(e) {
            $('.modal_overlay').fadeIn(100);
            $('.modal').fadeIn(100);
            $('body').addClass('noscroll');
            e.preventDefault();
        });
        //關閉function
        function closeModal(){
            $('#modal').hide();
            $('.modal_overlay').hide();
            $('body').removeClass('noscroll');
        }
        //點選關閉按鈕及透明底都可關閉
        $('.modal_overlay').click(closeModal);
        $('.modal .close').click(closeModal);
    });
});

// SuperCMS
$(function() {
    if ($('.tag').length > 0) {
        $('.tag').each(function(index, el) {
            $(this).find('a').off().click(function(e) {
                $(this).parent().siblings('li').removeClass('active');
                $(this).parent('li').addClass('active');
                e.preventDefault();
            });
        });
    }

    var subStatus = false;
    $('.now_edit').find('.btn_change').off().click(function(e) {
        if (!subStatus) {
            $('.sub_nav').addClass('show_subNav');
            subStatus = true;
        } else {
            $('.sub_nav').removeClass('show_subNav');
            subStatus = false;
        }
        e.preventDefault();
    });
    $('.sub_nav').find('.close').off().click(function(e) {
        $('.sub_nav').removeClass('show_subNav');
        subStatus = false;
        e.preventDefault();
    });
    $(window).on('load scroll', function() {
        // var HEIGHT = $(window).scrollTop() + $('.title').innerHeight();
        var windowH = $(window).height(),
            intDis = Math.floor($('.content_block').offset()),
            contentH = windowH - intDis,
            // scrollDis = Math.floor($(window).scrollTop() - $('.title').offset().top + 10),
            scrollDis = Math.floor($(window).scrollTop() - $('.title').offset()),
            blockHeight = Math.floor($('.publish_block').height());
        // console.log(windowH+','+scrollDis+','+blockHeight);
        if ($(window).scrollTop() + contentH > blockHeight && blockHeight > contentH) {
            $(".publish_block").stop().stop().delay(200).animate({ top: $(window).scrollTop() + contentH - blockHeight }, 800, 'easeOutQuint');
        } else if ($(window).scrollTop() + contentH > blockHeight && blockHeight < contentH && $(window).scrollTop() > 100) {
            $(".publish_block").stop().stop().delay(200).animate({ top: scrollDis }, 400, 'easeOutQuint');
        } else {
            $(".publish_block").stop().stop().delay(200).animate({ top: 'auto' }, 400, 'easeOutQuint').removeAttr('style');
        }
    });
    // password_toggle
    var passShow = false;
    $('.password_toggle').each(function(index, el) {
        $(this).find('.btn-icon').off().click(function(e) {
            if (!passShow) {
                $(this).children('i').removeClass().addClass('i_show');
                $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
                passShow = true;
                // console.log(passShow);
            } else {
                $(this).children('i').removeClass().addClass('i_hide');
                $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
                passShow = false;
                // console.log(passShow);
            }
            e.preventDefault();
        });
    });
    // sortable
    $('.sortable_list').each(function(index, el) {
        $(this).find('.btn-dropdown').off().click(function(e) {
            e.preventDefault();
            $(this).siblings('.dropdown-content').toggleClass('show');
            $(this).blur();
            e.preventDefault();
        });
    });
    // hot_tag
    $('.hot_tag .btn').off().click(function(e) {
        $(this).toggleClass('active');
        e.preventDefault();
    });
    //upload
    $('.upload_content').hide();
    $('.btn-addfile').off().click(function(e) {
        $('.upload_content').stop().slideDown('400', 'easeOutQuint');
        e.preventDefault();
    });
    $('.upload_content').find('a.close').off().click(function(e) {
        $('.upload_content').stop().hide();
        e.preventDefault();
    });
    // photo_list
    $('.photo_list').find('.item').each(function(index, el) {
        $(this).find('input[type="checkbox"]').click(function() {
            if ($(this).prop("checked") == true) {
                $(this).parents('.item').find('.img-container').addClass('active');
                $(this).parents('.check_grp').addClass('show');
            } else if ($(this).prop("checked") == false) {
                $(this).parents('.item').find('.img-container').removeClass('active');
                $(this).parents('.check_grp').removeClass('show');
            }
        });
    });
    // folder_list
    $('.folder_list ul ul').hide();
    $('.folder_list ul li').each(function(index, el) {
        if ($(this).children('ul').length > 0) {
            $(this).addClass('li_hasChild');
        }
    });
    var lihasChildStatus = false;
    $('.li_hasChild>a').each(function(index, el) {
        $(this).off().click(function(e) {
            if (!lihasChildStatus) {
                $(this).parent('li').addClass('active open');
                $(this).next('ul').stop(true, true).slideDown('400', 'easeOutQuint');
                lihasChildStatus = true;
            } else {
                $(this).parent('li').removeClass('active open');
                $(this).next('ul').stop(true, true).slideUp('400', 'easeOutQuint');
                lihasChildStatus = false;
            }
            e.preventDefault();
        });
    });
    var folderStatus = false;
    $('.toggleOpen').off().click(function(e) {
        if (!folderStatus) {
            $(this).text('收合所有分類');
            $('.folder_list').find('.li_hasChild>a').next('ul').stop(true, true).slideDown('400', 'easeOutQuint');
            folderStatus = true;
        } else {
            $(this).text('展開所有分類');
            $('.folder_list').find('.li_hasChild>a').next('ul').stop(true, true).slideUp('400', 'easeOutQuint');
            folderStatus = false;
        }
        e.preventDefault();
    });
    //
    $('input[type="text"]').each(function(index, el) {
        if ($(this).val() !== '') {
            $(this).addClass('used');
        }
    });
    $('textarea').each(function(index, el) {
        if ($(this).val() !== '') {
            $(this).addClass('used');
        }
    });
    $('.flex-form .error').each(function(index, el) {
        $(this).find('input').addClass('used');
        $(this).find('textarea').addClass('used');
    });
    // form style
    function _labelAni(obj) {
        var $this = $(obj);
        if ($this.val()) $this.addClass('used');
        else $this.removeClass('used');
    }
    $('input').blur(function() {
        _labelAni($(this));
    });
    $('textarea').blur(function() {
        _labelAni($(this));
    });
    $('textarea').focus(function() {
        if ($(this).parents('.error').length > 0) {
            $(this).parents('.error').removeClass('error');
        }
    });
    $('.labelEffect').each(function(index, el) {
        $(this).find('select').blur(function() {
            var $this = $(this);
            $(this).find('option').first().attr('disabled', 'true');
            if ($(this).find(':selected').val() != '') {
                $this.addClass('used');
            } else {
                $this.removeClass('used');
                $(this).find(':selected').text('');
            }
        });
        $(this).find('select').focus(function() {
            var item = $(this).find('option').first();
            $(item).text('請選擇');
            $(item).removeAttr('disabled');
            $(this).removeClass('used');
        });
    });
    $(window, document, undefined).ready(function() {
        var $ripples = $('.ripples');
        $ripples.on('click.Ripples', function(e) {
            var $this = $(this);
            var $offset = $this.parent().offset();
            var $circle = $this.find('.ripplesCircle');
            var x = e.pageX - $offset.left;
            var y = e.pageY - $offset.top;
            $circle.css({
                top: y + 'px',
                left: x + 'px'
            });
            $this.addClass('is-active');
        });
        $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
            $(this).removeClass('is-active');
        });
    });
    // adv_search
    if ($('.adv_search').length > 0) {
        $('.adv_search').hide();
        $('.btn-adv').off().click(function(e) {
            $('.adv_search').stop().Toggle(400, 'easeOutCubic');
            e.preventDefault();
        });
    }
    // ripple
    // var links = document.querySelectorAll('.btn');
    // for (var i = 0, len = links.length; i < len; i++) {
    //     links[i].addEventListener('click', function(e) {
    //         var targetEl = e.target;
    //         var inkEl = targetEl.querySelector('.ink');
    //         if (inkEl) {
    //             inkEl.classList.remove('animate');
    //         } else {
    //             inkEl = document.createElement('span');
    //             inkEl.classList.add('ink');
    //             inkEl.style.width = inkEl.style.height = Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + 'px';
    //             targetEl.appendChild(inkEl);
    //         }
    //         inkEl.style.left = (e.offsetX - inkEl.offsetWidth / 2) + 'px';
    //         inkEl.style.top = (e.offsetY - inkEl.offsetHeight / 2) + 'px';
    //         inkEl.classList.add('animate');
    //     }, false);
    // }
    // var menulis = document.querySelectorAll('nav ul li a');
    // for (var i = 0, len = menulis.length; i < len; i++) {
    //     menulis[i].addEventListener('click', function(e) {
    //         var targetEl = e.target;
    //         var inkEl = targetEl.querySelector('.ink');
    //         if (inkEl) {
    //             inkEl.classList.remove('animate');
    //         } else {
    //             inkEl = document.createElement('span');
    //             inkEl.classList.add('ink');
    //             inkEl.style.width = inkEl.style.height = Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + 'px';
    //             targetEl.appendChild(inkEl);
    //         }
    //         inkEl.style.left = (e.offsetX - inkEl.offsetWidth / 2) + 'px';
    //         inkEl.style.top = (e.offsetY - inkEl.offsetHeight / 2) + 'px';
    //         inkEl.classList.add('animate');
    //     }, false);
    // }
    //----------------------------------------------------------版頭-----//
    var dropdownStatus = false;
    $('.dropdown-btn').each(function(index, el) {
        $(this).click(function(e) {
            $(this).siblings('.dropdown-content').addClass('show');
            dropdownStatus = true;
            $(this).blur();
            e.preventDefault();
        });
    });
    $(document).mouseup(function(e) {
        var target = e.target,
            container = $('.dropdown-content');
        if ((!container.is(e.target) && container.has(e.target).length === 0) && (!$('.dropdown-btn').is(e.target) || !$('.btn-dropdown').is(e.target))) {
            if (!(($('.dropdown-btn').is(e.target) || $('.btn-dropdown').is(e.target)) && ($(target).siblings('.show').length > 0))) {
                container.removeClass('show');
            }
        }
    });
    //----------------------------------------------------------選單控制-----//
    // 手機版關閉左側選單
    function _CLOSEMENU() {
        $('header').removeClass('full');
        $('aside').removeClass('open');
        $('aside').removeClass('hidden');
        $('.content').removeClass('full');
        $('.overlay').removeClass('show');
        $('.wrapper').removeClass('noscroll');
        $(this).blur();
    }
    //
    $('body').append('<div class="overlay"></div>');
    // $('.toggle_menu_btn').off().click(function(e) {
    //     $('aside').toggleClass('open');
    //     $('.overlay').toggleClass('show');
    //     $('.wrapper').toggleClass('noscroll');
    //     $(this).blur();
    //     e.preventDefault();
    // });

    // $('.overlay').off().click(function(e) {
    //     _CLOSEMENU();
    //     e.preventDefault();
    // });

    // var sideStatus = false;
    // $('header').find('.toggle_menu_btn').off().click(function(e) {
    //     if (!sideStatus) {
    //         $('aside').addClass('hidden');
    //         $('header').addClass('full');
    //         $('.content').addClass('full');
    //         sideStatus = true;
    //     } else {
    //         $('aside').removeClass('hidden');
    //         $('header').removeClass('full');
    //         $('.content').removeClass('full');
    //         sideStatus = false;
    //     }
    //     if (subStatus = -true) {
    //         $('.sub_nav').removeClass('show_subNav');
    //         subStatus = false;
    //     }
    //     $('.li_hasChild>a').find('.ink').remove();
    //     $(this).blur();
    //     e.preventDefault();
    // });
    //----------------------------------------------------------選單控制-----//
    $('aside').prepend('<a href="#" class="close_btn"></a>');
    // $('aside').find('.close_btn').off().click(function(e) {
    //     _CLOSEMENU();
    //     $(this).parents('aside').siblings('header').removeClass('full');
    //     e.preventDefault();
    // });
    // 選單控制下拉
    $('aside nav ul li').each(function(index, el) {
        if ($(this).children('ul').length > 0) {
            $(this).addClass('li_hasChild');
        }
    });
    $('aside nav ul ul').hide();
    // 設定有副選單的a
    $('.li_hasChild>a').each(function(index, el) {
        $(this).off().click(function(e) {
            $(this).parent('li').toggleClass('active open');
            $(this).parents('li').siblings().find('.ink').remove();
            $(this).parents('li').siblings().removeClass('active open').find('ul').stop(true, true).slideUp('800', 'easeOutQuint');
            $(this).next('ul').stop(true, true).slideToggle('800', 'easeOutQuint');
            e.preventDefault();
        });
    });

    // 測試 ------------------------------------------
    // 手機版
    enquire.register("screen and (max-width:991px)", {
        // 則在註冊處理程序時觸發一次。
        setup : function() {
            $('.toggle_menu_btn').off().click(function(e) {
                $('aside').addClass('open');
                $('.overlay').addClass('show');
                $('.wrapper').addClass('noscroll');
                $(this).blur();
                e.preventDefault();
            });

            $('.overlay').off().click(function(e) {
                _CLOSEMENU();
                e.preventDefault();
            });

            //
            $('aside').find('.close_btn').off().click(function(e) {
                _CLOSEMENU();
                $(this).parents('aside').siblings('header').removeClass('full');
                e.preventDefault();
            });
        },
        
        // 在媒體查詢匹配時觸發。
        match : function() {
            $('.toggle_menu_btn').off().click(function(e) {
                $('aside').addClass('open');
                $('.overlay').addClass('show');
                $('.wrapper').addClass('noscroll');
                $(this).blur();
                e.preventDefault();
            });

            $('.overlay').off().click(function(e) {
                _CLOSEMENU();
                e.preventDefault();
            });
        },

        // 在媒體查詢轉換時觸發（從匹配狀態到不匹配狀態）
        unmatch : function() {
            var sideStatus = false;
            $('header').find('.toggle_menu_btn').off().click(function(e) {
                if (!sideStatus) {
                    $('aside').addClass('hidden');
                    $('header').addClass('full');
                    $('.content').addClass('full');
                    sideStatus = true;
                } else {
                    $('aside').removeClass('hidden');
                    $('header').removeClass('full');
                    $('.content').removeClass('full');
                    sideStatus = false;
                }
                if (subStatus = -true) {
                    $('.sub_nav').removeClass('show_subNav');
                    subStatus = false;
                }
                $('.li_hasChild>a').find('.ink').remove();
                $(this).blur();
                e.preventDefault();
            });
        }
    });
    // 桌機版
    enquire.register("screen and (min-width:992px)", {
        // 則在註冊處理程序時觸發一次。
        setup : function() {
            var sideStatus = false;
            $('header').find('.toggle_menu_btn').off().click(function(e) {
                if (!sideStatus) {
                    $('aside').addClass('hidden');
                    $('header').addClass('full');
                    $('.content').addClass('full');
                    $(this).parents('header').siblings('.btn_panel').addClass('full');
                    sideStatus = true;
                } else {
                    $('aside').removeClass('hidden');
                    $('header').removeClass('full');
                    $('.content').removeClass('full');
                    $(this).parents('header').siblings('.btn_panel').removeClass('full');
                    sideStatus = false;
                }
                if (subStatus = -true) {
                    $('.sub_nav').removeClass('show_subNav');
                    subStatus = false;
                }
                $('.li_hasChild>a').find('.ink').remove();
                $(this).blur();
                e.preventDefault();
            });
        },
        
        // 在媒體查詢匹配時觸發。
        match : function() {
            var sideStatus = false;
            $('header').find('.toggle_menu_btn').off().click(function(e) {
                if (!sideStatus) {
                    $('aside').addClass('hidden');
                    $('header').addClass('full');
                    $('.content').addClass('full');
                    $(this).parents('header').siblings('.btn_panel').addClass('full');
                    sideStatus = true;
                } else {
                    $('aside').removeClass('hidden');
                    $('header').removeClass('full');
                    $('.content').removeClass('full');
                    $(this).parents('header').siblings('.btn_panel').removeClass('full');
                    sideStatus = false;
                }
                if (subStatus = -true) {
                    $('.sub_nav').removeClass('show_subNav');
                    subStatus = false;
                }
                $('.li_hasChild>a').find('.ink').remove();
                $(this).blur();
                e.preventDefault();
            });
        },

        // 在媒體查詢轉換時觸發（從匹配狀態到不匹配狀態）
        unmatch : function() {
            _CLOSEMENU();

            $('.toggle_menu_btn').off().click(function(e) {
                $('aside').addClass('open');
                $('.overlay').addClass('show');
                $('.wrapper').addClass('noscroll');
                $(this).blur();
                e.preventDefault();
            });

            $('.overlay').off().click(function(e) {
                _CLOSEMENU();
                e.preventDefault();
            });
        }
    });
});

$(function() {
    $('.mp_widget .counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        }, {
            duration: 5000,
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
    });
});

//tab
// $(function() {
//     // Variables
//     var clickedTab = $(".tab_items > .active");
//     var tabWrapper = $(".tab__content");
//     var activeTab = tabWrapper.find(".active");
//     var activeTabHeight = activeTab.outerHeight();
//     activeTab.show();
//     tabWrapper.height(activeTabHeight);
//     // 按鈕事件
//     $(".tab_items > button").on("click", function() {
//         $(".tab_items > button").removeClass("active");
//         $(this).addClass("active");
//         clickedTab = $(".tab_items .active");
//         activeTab.fadeOut(100, function() {
//             $(".tab__content > div").removeClass("active");
//             var clickedTabIndex = clickedTab.index();
//             $(".tab__content > div").eq(clickedTabIndex).addClass("active");
//             activeTab = $(".tab__content > .active");
//             activeTabHeight = activeTab.outerHeight();
//             tabWrapper.stop().delay(0).animate({ height: activeTabHeight }, 500, function() {
//                 activeTab.stop().delay(50).fadeIn(100);
//             });
//         });
//     });
//     if ($('.right_sidebar').length > 0) {
//         $('.btn-module-choose').off().click(function(e) {
//             $('.right_sidebar').removeClass('show');
//             $('.template_choose').addClass('show');
//             e.preventDefault();
//         });
//         $('.btn-grid-choose').off().click(function(e) {
//             $('.right_sidebar').removeClass('show');
//             $('.grid_choose').addClass('show');
//             e.preventDefault();
//         });
//         $('.right_sidebar').find('._head a.close').off().click(function(e) {
//             $(this).parents('.right_sidebar').removeClass('show');
//             e.preventDefault();
//         });
//     }
// });

$('.tabs').find('h4:first-child').addClass('active');
$('.tabs').find('.box:first-child').addClass('show');

$('.tabItem h4').on('click', function(){
    if(!$(this).hasClass('active')){
        $(this).siblings('h4').removeClass('active');
        $(this).addClass('active');
    }

    if(!$(this).parent().next('.tabContent').find('.box').eq($(this).index()).hasClass('show')) {
        $(this).parent().next('.tabContent').find('.box').removeClass('show');
    } 
    $(this).parent().next('.tabContent').find('.box').eq($(this).index()).addClass('show');
});