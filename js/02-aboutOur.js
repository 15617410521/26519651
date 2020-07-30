$('.dishes-Xbox').on('mouseover',function(){
    $(this).css({
        boxShadow:'0 2px 1px #999999'
    })
    $(this).find('.dishes-bg-box').css({
        display:'block'
    })
    $(this).find('.dishes-Xbox-bot-zixun-box').css({
        backgroundColor:'#D73654',
        color:'#ffffff'
    })
    $(this).find('.dishes-Xbox-bot-zixun-TB').css({
        backgroundColor:'#ffffff'
    })
    $(this).find('.dishes-Xbox-bot-zixun-TB-TB').css({
        color:'#D73654'
    })
}).on('mouseout',function(){
    $(this).css({
        boxShadow:'none'
    })
    $(this).find('.dishes-bg-box').css({
        display:'none'
    })
    $(this).find('.dishes-Xbox-bot-zixun-box').css({
        backgroundColor:'#ffffff',
        color:'#666666'
    })
    $(this).find('.dishes-Xbox-bot-zixun-TB').css({
        backgroundColor:'#cc00ff'
    })
    $(this).find('.dishes-Xbox-bot-zixun-TB-TB').css({
        color:'#ffffff'
    })
})

// 点击事件
var DJnum = 0
$('.dishes-Btn-Xbtn').on('click',function(){
    DJnum = $(this).text()
    // console.log(DJnum)
    $('.dishes-Btn-Xbtn').css({
        backgroundColor:'#ffffff',
        color:'#666666'
    })
    $(this).css({
        backgroundColor:'#D73654',
        color:'#ffffff'
    }).on('mouseout',function(){
      $(this).css({
        backgroundColor:'#D73654',
        color:'#ffffff'
      })
    })
})
// 翻页按钮样式设置
$('.dishes-Btn-Xbtn').on('mouseover',function(){
    // console.log(DJnum)
    $('.dishes-Btn-Xbtn').css({
        backgroundColor:'#ffffff',
        color:'#666666'
    })
    console.log(DJnum)
    $($('.dishes-Btn-Xbtn')[DJnum-1]).css({
        backgroundColor:'#D73654',
        color:'#ffffff'
    })
    $(this).css({
        backgroundColor:'#D73654',
        color:'#ffffff'
    })
}).on('mouseout',function(){
    $(this).css({
        backgroundColor:'#ffffff',
        color:'#666666'
    })
})

