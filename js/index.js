// 最上边导航栏  文字颜色缓慢变色
$('.top-banner-cen').find($('.top-banner-cen-span')).on('mouseover', function () {
    $(this).css({
        transition: ' all 0.7s',
        color: 'rgba(255, 255, 255, .5)',
        cursor: "pointer"
    })
}).on('mouseout', function () {
    $(this).css({
        transition: ' all 0.7s',
        color: '#ffffff'
    })
})
// 1.搜索框出现
$('.nav-banner-sousuo-input-box').slideUp(1) //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$('.nav-banner-sousuo').on('mouseover', function () {
    $('.nav-banner-sousuo-input-box').slideDown(500)
}).on('mouseout', function () {
    $('.nav-banner-sousuo-input-box').slideUp(500)
})
// 微信二维码出现
$('.nav-banner-VX-Box').slideUp(1) //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$('.nav-banner-VX').on('mouseover', function () {
    $('.nav-banner-VX-Box').slideDown(500).css({
        zIndex:'99999',
        position:'absolute'
    })
}).on('mouseout', function () {
    $('.nav-banner-VX-Box').slideUp(500)
})


// 红色导航栏部分
var cenArr = ['网站首页', '关于我们', '产品中心', '新闻中心', '门店展示', '加盟服务', '我要加盟', '联系我们']
for (var index = 0; index < cenArr.length; index++) {
    $(`
    <div class="cen-span"></div>
    `).css({
        fontSize: "20px",
        color: '#ffffff',
        display: 'block',
        width: '12.5%',
        height: '60px',
        borderRight: '2px solid #ffffff',
        textAlign: 'center',
        position: 'relative'
    }).text(cenArr[index]).appendTo('.cen-banner')

    $($('.cen-span')[cenArr.length - 1]).css({
        borderRight: 'none'
    })

}
$('<div class="cen-span-line"></div>').appendTo('.cen-span')
$('.cen-span-line').css({
    width: '10%',
    height: '3px',
    backgroundColor: 'red',
    position: 'absolute',
    bottom: '0',
    left: '50%'
})
// var index = 0
$('.cen-span').on('mouseover', function () {
    // console.log($(this).index())   0-7
    // index = $(this).index()
    $(this).find($('.cen-span-line')).css({
        transition: 'all 0.5s',
        width: '60%',
        position: 'absolute',
        bottom: '0',
        left: '20%',
        zIndex:'999999'

    })
}).on('mouseout', function () {
    $(this).find($('.cen-span-line')).css({
        transition: 'all 0.5s',
        width: '0%',
        position: 'absolute',
        bottom: '0',
        left: '50%'

    })
})
var ind1Arr = ['品牌简介', '品牌故事', '品牌荣誉']
$('<div class="cen-span-1-box"></div>').appendTo('.cen-banner').css({
    width: '88px',
    padding: "0 30px",
    backgroundColor: '#D73654',
    textAlign: 'center',
    position: 'absolute',
    left: "12.5%",
    top: '60px',
    lineHeight: '35px',
    fontSize: '14px',
    color: '#ffffff',
    display: 'none'
})
for (var index = 0; index < ind1Arr.length; index++) {
    $('<span></span>').text(ind1Arr[index]).appendTo($('.cen-span-1-box')).css({
        margin: '10px',
        lineHeight: '30px'
    })
}
$($('.cen-span')[1]).on('mouseover', function () {
    $('.cen-span-1-box').css({
        transition: 'all 0.5s',
        display: 'block',
        zIndex:'999999'
    })
}).on('mouseout', function () {
    $('.cen-span-1-box').css({
        transition: 'all 0.5s',
        display: 'none'
    })
})
$('.cen-span-1-box').on('mouseover',function(){
    $(this).css({
        display:'block'
    })
}).on('mouseout',function(){
    $(this).css({
        display:'none'
    })
})
// 产品中心下拉菜单
var ind2Arr = ['混沌系列', '生煎产品', '锅贴产品', '其他产品']
$('<div class="cen-span-2-box"></div>').appendTo('.cen-banner').css({
    width: '88px',
    padding: "0 30px",
    backgroundColor: '#D73654',
    textAlign: 'center',
    position: 'absolute',
    left: "25%",
    top: '60px',
    lineHeight: '35px',
    fontSize: '14px',
    color: '#ffffff',
    display: 'none'
})
for (var index = 0; index < ind2Arr.length; index++) {
    $('<span></span>').text(ind2Arr[index]).appendTo($('.cen-span-2-box')).css({
        margin: '10px',
        lineHeight: '30px'
    })
}
$($('.cen-span')[2]).on('mouseover', function () {
    $('.cen-span-2-box').css({
        transition: 'all 0.5s',
        display: 'block',
        zIndex:'999999'
    })
}).on('mouseout', function () {
    $('.cen-span-2-box').css({
        transition: 'all 0.5s',
        display: 'none'
    })
})

$('.cen-span-2-box').on('mouseover',function(){
    $(this).css({
        display:'block'
    })
}).on('mouseout',function(){
    $(this).css({
        display:'none'
    })
})
// 新闻中心下拉菜单
var ind3Arr = ['品牌资讯', '行业动态']
$('<div class="cen-span-3-box"></div>').appendTo('.cen-banner').css({
    width: '88px',
    padding: "0 30px",
    backgroundColor: '#D73654',
    textAlign: 'center',
    position: 'absolute',
    left: "37.5%",
    top: '60px',
    lineHeight: '35px',
    fontSize: '14px',
    color: '#ffffff',
    display: 'none'
})
for (var index = 0; index < ind3Arr.length; index++) {
    $('<span></span>').text(ind3Arr[index]).appendTo($('.cen-span-3-box')).css({
        margin: '10px',
        lineHeight: '30px'
    })
}
$($('.cen-span')[3]).on('mouseover', function () {
    $('.cen-span-3-box').css({
        transition: 'all 0.5s',
        display: 'block',
        zIndex:'999999'
    })
}).on('mouseout', function () {
    $('.cen-span-3-box').css({
        transition: 'all 0.5s',
        display: 'none'
    })
})
$('.cen-span-3-box').on('mouseover',function(){
    $(this).css({
        display:'block'
    })
}).on('mouseout',function(){
    $(this).css({
        display:'none'
    })
})
// 加盟项目下拉菜单
var ind5Arr = ['投资费用', '加盟流程', '品牌支持', '团队服务', '专业培训', '培训结业']
$('<div class="cen-span-5-box"></div>').appendTo('.cen-banner').css({
    width: '88px',
    padding: "0 30px",
    backgroundColor: '#D73654',
    textAlign: 'center',
    position: 'absolute',
    left: "62.5%",
    top: '60px',
    lineHeight: '35px',
    fontSize: '14px',
    color: '#ffffff',
    display: 'none'
})
for (var index = 0; index < ind5Arr.length; index++) {
    $('<span></span>').text(ind5Arr[index]).appendTo($('.cen-span-5-box')).css({
        margin: '10px',
        lineHeight: '30px'
    })
}
$($('.cen-span')[5]).on('mouseover', function () {
    $('.cen-span-5-box').css({
        transition: 'all 0.5s',
        display: 'block',
        zIndex:'999999'
    })
}).on('mouseout', function () {
    $('.cen-span-5-box').css({
        transition: 'all 0.5s',
        display: 'none'
    })
})
$('.cen-span-5-box').on('mouseover',function(){
    $(this).css({
        display:'block'
    })
})
// 门店展示部分
var num = -30
var a =1
setInterval(function () {
    num = num + a
    if (num >20) {
        a = -a
    }
    if (num <= -30) {
        a = -a
    }
    $('.show-show-dong').css({
        transform: 'rotate(' + num + 'deg)',
    })
    $('.show-show-dong-2').css({
        transform: 'rotate(' + num + 'deg)',
    })
}, 30)


// 轮播图

var myindex = 0
var timer =setInterval(function(){
    myindex++
},4000)

setInterval(function(){
    if(myindex%2==0){
        $('.swip-pic-1').css({
            opacity:"0"
    
        })
        $('.swip-pic-2').css({
            opacity:"1"
    
        })
    }else{
        $('.swip-pic-1').css({
            opacity:"1"
        })
        $('.swip-pic-2').css({
            opacity:"0"
        })
    }
},10)
$('.swip-xiangzuo-box').on('click',function(){
    clearInterval(timer)
    myindex = myindex+1
    timer =setInterval(function(){
        myindex++
    },4000)
})
$('.swip-xiangyou-box').on('click',function(){
    clearInterval(timer)
    myindex = myindex+1
    timer =setInterval(function(){
        myindex++
    },4000)
})

// 下边的点击
$('.swip-btn').on('mouseover',function(){
    clearInterval(timer)
    myindex= $(this).attr('value')
}).on('mouseout',function(){
    timer =setInterval(function(){
        myindex++
    },4000)
})

// 产品分类
var fabricArr= ['混沌系列','生煎产品','锅贴产品','其他产品']
for(var index = 0 ; index<fabricArr.length;index++ ){
    $('<div class="fabric-top-NR"></div>').css({
        width:'180px',
        height:'40px',
        borderRadius:'40px',
        textAlign:'center',
        lineHeight:'40px',
        boxShadow:'0 0 8px #999999',
        backgroundColor:'#ffffff',
        fontSize:'14px'
    }).appendTo('.fabric-top').text(fabricArr[index])

}
$('.fabric-top-NR').on('mouseover',function(){
    $(this).css({
        backgroundColor:'#D73654',
        cursor:'pointer',
    })
}).on('mouseout',function(){
    $(this).css({
        backgroundColor:'#ffffff',
    })
})


// 产品中心轮播图
var fabricSwip = [
    {
        imageSrc:"../images/04-fabric/fabric-swp-1.jpg",
        myName:"蛋花撒汤"
    },
    {
        imageSrc:"../images/04-fabric/fabric-swp-2.jpg",
        myName:"滋补菌汤"
    },
    {
        imageSrc:"../images/04-fabric/fabric-swp-3.jpg",
        myName:"黄金酸辣汤"
    },
    {
        imageSrc:"../images/04-fabric/fabric-swp-4.jpg",
        myName:"番茄牛肉丸"
    },
    {
        imageSrc:"../images/04-fabric/fabric-swp-5.jpg",
        myName:"鲜肉小笼包"
    },
    {
        imageSrc:"../images/04-fabric/fabric-swp-6.jpg",
        myName:"飘香五花肉面"
    },
    {
        imageSrc:"../images/04-fabric/fabric-swp-7.jpg",
        myName:"御品私房牛肉面"
    },
    {
        imageSrc:"../images/04-fabric/fabric-swp-8.jpg",
        myName:"凉拌带丝"
    },
    {
        imageSrc:"../images/04-fabric/fabric-swp-9.jpg",
        myName:"四川泡菜"
    },
    {
        imageSrc:"../images/04-fabric/fabric-swp-10.jpg",
        myName:"笋尖泡菜"
    },
]

for(var index= 0;index <fabricSwip.length;index++){
    $(`<div class="fabric-swip-box-Xbox">
        <img src = `+fabricSwip[index].imageSrc +` class="fabric-swip-box-Xbox-img">
        <span class="fabric-swip-box-Xbox-span1">`+fabricSwip[index].myName+`</span>
        <div class = "fabric-swip-box-Xbox-div">
            <div class="fabric-swip-box-Xbox-div-i-box">
                <i class="iconfont icon-duihao1 fabric-swip-box-Xbox-div-i"></i>
            </div>
            <span class="fabric-swip-box-Xbox-div-tel">在线咨询</span>
        </div>
    </div>`).css({
        width:'275px',
        height:'100%',
        backgroundColor:'green',
        float:"left",
        margin:'0 15px'
    }).appendTo('.fabric-swip-box')
}

$('.fabric-swip-box-Xbox').css({
    borderRadius:'10px',
    overFlow:"hidden",
    backgroundColor:'#ffffff',
    position:'relative'
})

$('.fabric-swip-box-Xbox-img').css({
    width:'100%',
    height:'279px',
    borderRadius:'10px 10px 0 0 ',
})
$('.fabric-swip-box-Xbox-span1').css({
    fontSize:'16px',
    color:'#333333',
    display:'block',
    height:'65px',
    lineHeight:'65px',
    padding:'0 20px',
    float:'left'
})
$('.fabric-swip-box-Xbox-div').css({
    width:'110px',
    height:'30px',
    border:"1px solid #d73654",
    float:"right",
    margin:"15px 5px",
    borderRadius:'23px',
    // lineHeight:'30px 
    position:'relative'
})
$('.fabric-swip-box-Xbox-div-i').css({
    fontSize:'12px',
})
$('.fabric-swip-box-Xbox-div-i-box').css({
    position:'absolute',
    left:'10px',
    top:'50%',
    transform:'translateY(-50%)'
})
$('.fabric-swip-box-Xbox-div-tel').css({
    position:'absolute',
    right:'10px',
    top:'50%',
    transform:'translateY(-50%)'
})

$('.fabric-swip-box-Xbox').on('mouseover',function() {
    $(this).find('.fabric-swip-box-Xbox-div').css({
        transition:'all .5s',
        backgroundColor:'#D73654'
    })
    $(this).find('.fabric-swip-box-Xbox-div-i-box').css({
        transition:'all .5s',
        backgroundColor:'#ffffff'
    })
    $(this).find('.fabric-swip-box-Xbox-div-i').css({
        transition:'all .5s',
        color:'#D73654'
    })
    // $('<div></div>').css({
    //     width:'100%',
    //     height:'279px',
    //     backgroundColor:'rgba(0,0,0,0.2)',
    //     position:'absolute',
    //     top:'0',
    //     left:'0'
    // }).appendTo($(this))
}).on('mouseout',function() {
    $(this).find('.fabric-swip-box-Xbox-div').css({
        backgroundColor:'#ffffff'
    })
    $(this).find('.fabric-swip-box-Xbox-div-i-box').css({
        backgroundColor:'purple'
    })
    $(this).find('.fabric-swip-box-Xbox-div-i').css({
        color:'#ffffff'
    })
})
// 黑色透明背景
$('.fabric-swip-box-Xbox').on('mouseenter',function(){
    clearInterval(fabricSwip)
        $(`<div class="fabric-bg">
        <div class="fabric-2WM-box">
        <span class="fabric-2WM-box-span">扫码咨询</span>
        <img src='../images/04-fabric/fabric-2WM.png' class="fabric-2WM">
        </div>
        </div>`).css({
        width:'100%',
        // display:'none',
        height:'279px',
        backgroundColor:'rgba(0,0,0,0.2)',
        position:'absolute',
        top:'0',
        left:'0',
        cursor:'pointer'
    }).appendTo($(this))
    $(this).find('.fabric-2WM').css({
        width:'80%',
        height:'80%',
        position:'absolute',
        top:'30px',
        left:'50%',
        transform:'translateX(-50%)'
    })
    $(this).find('.fabric-2WM-box').css({
        width:'70%',
        height:'70%',
        backgroundColor:'#ffffff',
        position:'absolute',
        top:'30px',
        left:'50%',
        transform:'translateX(-50%)',
        borderRadius:'10px'
    })
    $(this).find('.fabric-2WM-box-span').css({ 
        position:'absolute',
        top:'10px',
        left:'50%',
        transform:'translateX(-50%)',
    })
}).on('mouseleave',function(){
    fabricSwip =setInterval(function(){
        myIndex--
    },3000)
    $(this).find('.fabric-bg').remove()
})

var myIndex = 0
var fabricSwip =setInterval(function(){
    myIndex--
},3000)

setInterval(function(){

        $('.fabric-swip-box-Xbox').css({
        transition:'all 0.5s',
        transform:'translateX('+myIndex*305+'px)'
    })
    if(myIndex == -6){
        myIndex=0
    }
    if(myIndex==1){
        myIndex=-5
    }
},10)


// 轮播图两边的按钮

$('.fabric-fangxaing').on('mouseover',function(){
    clearInterval(fabricSwip)
}).on('mouseout',function(){
    fabricSwip =setInterval(function(){
        myIndex--
    },3000)
})

$('.fabric-xiangzuo').on('click',function(){
    myindex = myIndex--
})
$('.fabric-xiangyou').on('click',function(){
    myindex = myIndex++
})

// 红色联系我们
$('.touch-banner-right-left-ZL').on('mouseover',function(){
    $(".touch-banner-right-left-ZL-Txt").css({
        transition:'all 0.5s',
        marginRight:'20px'
    })
    $('.touch-banner-right-left-2WM').css({
        transition:'all 0.5s',
        right:'20px'
    })
}).on('mouseout',function(){
    $(".touch-banner-right-left-ZL-Txt").css({
        marginRight:'0'
    })
    $('.touch-banner-right-left-2WM').css({
        right:'0px'
    })
})
// 四大特色
$('.item-Nr-box-box').on('mouseover',function(){
    $(this).find('.item-Nr-box-box-div').css({
        marginTop:"15px",
        transition:'all 0.5s'
    })
}).on('mouseout',function(){
    $(this).find('.item-Nr-box-box-div').css({
        marginTop:"20px"
    })
})

// 轮播图
var myNum = 0
var myNumtimer = setInterval(function() {
    myNum--
},3000)
setInterval(function(){
    $('.shop-banner-box').css({
        transition:'all 0.5s',
        transform:'translateX('+myNum*300+'px)'
    })
    if(myNum==-3){
        myNum = 0
    }else if(myNum==1){
        myNum=-2
    }
},10)


// 左右按钮
$('.shop-xiangzuo').on('mouseover',function(){
    clearInterval(myNumtimer)
    $(this).css({
        backgroundColor:'#D73654',
        cursor:'pointer',
    })
}).on('mouseout',function(){
    $(this).css({
        backgroundColor:'#999999',
    })
    myNumtimer = setInterval(function() {
        myNum--
    },3000)
})

$('.shop-xiangzuo').on('click',function(){
  myNum--
})
$('.shop-xiangyou').on('mouseover',function(){
    clearInterval(myNumtimer)
    $(this).css({
        backgroundColor:'#D73654',
        cursor:'pointer'
    })
}).on('mouseout',function(){
    $(this).css({
        backgroundColor:'#999999',
    })
    myNumtimer = setInterval(function() {
        myNum--
    },3000)
})

$('.shop-xiangyou').on('click',function(){
  myNum++
})


// 新闻中心

var num1 = -1
var myNum1 = setInterval(function(){
    num1++
    $('.news-bot-swip-img-box').css({
        opacity:'0'
    })
    $('.news-bot-swip-dian').css({
        backgroundColor:'#ffffff'
    })
    // console.log(num1%5)
    $($('.news-bot-swip-img-box')[num1%5]).css({
        transition:'all 0.5s',
        opacity:'1'
    })
    $($('.news-bot-swip-dian')[num1%5]).css({
        backgroundColor:'#555555'
    })
},3000)
$('.news-bot-swip-dian').on('mouseover',function(){
    clearInterval(myNum1)
    $('.news-bot-swip-img-box').css({
        opacity:'0'
    })
    $('.news-bot-swip-dian').css({
        backgroundColor:'#ffffff'
    })
    $($('.news-bot-swip-img-box')[$(this).attr('value')]).css({
        transition:'all 0.5s',
        opacity:'1'
    })
    $($('.news-bot-swip-dian')[$(this).attr('value')]).css({
       backgroundColor:'#555555'
    })
}).on('mouseout',function(){
    myNum1 = setInterval(function(){
        num1++
        $('.news-bot-swip-img-box').css({
            opacity:'0'
        })
        $('.news-bot-swip-dian').css({
            backgroundColor:'#ffffff'
        })
        console.log(num1%5)
        $($('.news-bot-swip-img-box')[num1%5]).css({
            transition:'all 0.5s',
            opacity:'1'
        })
        $($('.news-bot-swip-dian')[num1%5]).css({
            backgroundColor:'#555555'
        })
    },3000)
})




$('.news-bot-right-NR').on('mouseover',function(){
    $(this).css({
        borderBottom:'1px solid #000000',
        transition:'all 0.5s'
    })
}).on('mouseout',function(){
    $(this).css({
        borderBottom:'1px solid #e9dbdb',

    })
})










$('.cen-span').on('click',function(){
    // console.log($(this).index())
    if($(this).index()==0){
        window.location.href="../demo/01-index.html"
    }else if($(this).index()==1){
        window.location.href="../demo/02-aboutOur-1.html"
    }else if($(this).index()==2){
        window.location.href="../demo/03-products-1-2.html"
    }else if($(this).index()==3){
        window.location.href="../demo/04-news.html"
    }else if($(this).index()==4){
        window.location.href="../demo/05-show.html"
    }else if($(this).index()==5){
        window.location.href="../demo/06-service.html"
    }else if($(this).index()==6){
        window.location.href="../demo/07-join.html"
    }else if($(this).index()==7){
        window.location.href="../demo/08-tel.html"
    }
})