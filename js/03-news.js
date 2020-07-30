$('.news-box-Xbox').on('mouseover',function(){
    console.log(1111)
    $(this).find('.news-box-myNR').css({
        transition: 'all 0.5s',
        right:'18px',
        cursor:'pointer'
    })
}).on('mouseout',function(){
    console.log(1111)
    $(this).find('.news-box-myNR').css({
        right:'10px'
    })
})