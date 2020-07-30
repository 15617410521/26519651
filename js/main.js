// 左边可动菜单
// 鼠标点击事件
var inedx =0
var myshowName = ""
$('.show-show-XL-but').on('click',function(){
    index = $(this).index()
    console.log(index)
    $('.dishes').css({
        display:'none'
    })
    $($('.dishes')[index+1]).css({
        display:'block'
    })
    // 右边内容
    $('.show-right-tit').text($(this).find('.show-show-XL-but-but').text())
    myshowName = $(this).find('.show-show-XL-but-but').text()
    $('.show-show-XL-but').css({
        backgroundColor:'#ffffff',
        color:'#333333'
    })
    $(this).on('mouseout',function(){
       $(this).css({
        backgroundColor:'#f15673',
        color:'#ffffff'
       })
    })
    $(this).css({
        backgroundColor:'#f15673',
        color:'#ffffff'
    })
})
$('.show-show-XL-but').on('mouseover',function(){
    $('.show-show-XL-but').on('mouseout',function(){
        $('.show-show-XL-but').css({
         backgroundColor:'#ffffff',
         color:'#333333'
        })
        $($('.show-show-XL-but')[index]).css({
         backgroundColor:'#f15673',
         color:'#ffffff'
        })

     })
    $('.show-show-XL-but').css({
        backgroundColor:'#ffffff',
        color:'#333333'
    })
    $($('.show-show-XL-but')[index]).css({
        backgroundColor:'#f15673',
        color:'#ffffff'
    })
    $(this).css({
        backgroundColor:'#f15673',
        color:'#ffffff'
    })
}).on('mouseout',function(){
    $(this).css({
        backgroundColor:'#ffffff',
        color:'#333333'
    })
})



// 右边介绍信息
// $('<span></span>').text(myshowName).appendTo('.show-right-tit')
$('.show-right-tit-right-2').text($('.show-show-show').text())
$('.show-right-tit-right-3').text($('.show-right-tit').text())
setInterval(function(){
    $('.show-right-tit-right-3').text('>'+ myshowName)
},10)