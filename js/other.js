

// // 右边介绍信息
// // $('<span></span>').text(myshowName).appendTo('.show-right-tit')
// $('.show-right-tit-right-2').text($('.show-show-show').text())
// $('.show-right-tit-right-3').text($('.show-right-tit').text())
// setInterval(function(){
//     $('.show-right-tit-right-3').text('>'+ myshowName)
// },10)

// // 产品中心
// var myArrs1 =['彩色拼盘锅贴','虾仁锅贴','老豆腐锅贴','双菇锅贴','荠菜锅贴','招牌鲜肉生煎']
// var myArrs2 =['蛋花撒汤','滋补菌菇汤','黄金酸辣汤','番茄牛肉丸','鲜肉小笼包','飘香五花面']
// function myDongTu(myArr,myindexK,yeshu){
//     for(var index = 1;index<myArr.length+1;index++){
//         $(`<div class="produce-box">
//             <img src = "../images/11-produce/produce-`+myindexK+`-`+index+`.jpg" class="produce-Xbox-img">
//             <div class="produce-Xbox-botBox">
//             <span class="produce-Xbox-botBox-left">`+myArr[index-1]+`</span>
//             <div class="produce-Xbox-botBox-right">
//             <div class="produce-Xbox-botBox-right-dui-box">
//             <i class="iconfont icon-duihao1"></i>
//             </div>
//             <span class="produce-Xbox-botBox-right-dui-ZX">在线咨询</span>
//             </div>
//             </div>
//             </div>`).css({
//             width:'280px',
//             height:'350px',
//             margin:'10px',
//             float:'left',
//             borderRadius:'10px',
//             overflow:'hidden',
//             position:'relative'
//         }).appendTo('.produce')
//     }
//     $('.produce-Xbox-img').css({
//         width:'280px',
//         height:'280px',
//         marginBottom:'-5px'
//     })
//     $('.produce-Xbox-botBox').css({
//         width:'240px',
//         height:'70px',
//         backgroundColor:'yellow',
//         lineHeight:'70px',
//         padding:'0 20px',
//         position:'relative'
//     })
//     $('.produce-Xbox-botBox-left').css({
//         float:'left'
//     })
//     $('.produce-Xbox-botBox-right').css({
//         // float:'right',
//         width:'90px',
//         height:'30px',
//         border:'1px solid #D73654',
//         position:'absolute',
//         right:'20px',
//         top:"50%",
//         transform: 'translateY(-50%)',
//         // textAlign:'center',
//         padding:'0 10px',
//         lineHeight:'30px',
//         borderRadius:'25px'
//     })
//     $('.produce-Xbox-botBox-right-dui-box').css({
//         width:'20px',
//         height:'20px',
//         borderRadius:'50%',
//         backgroundColor:'#cc00ff',
//         lineHeight:'20px',
//         textAlign:'center',
//         position: 'absolute',
//         top:'50%',
//         transform: 'translateY(-50%)',
//         color:'#ffffff'
//     })
//     $('.produce-Xbox-botBox-right-dui-ZX').css({
//         float:'right'
//     })
//     // $('.produce-box').on('mouseenter',function(){
//     //     console.log(12)
//     //     // $(`<div></div>`).css({
//     //     //     width:'280px',
//     //     //     height:'280px',
//     //     //     backgroundColor:'blue',
//     //     //     position:'absolute',
//     //     //     top:'0',
//     //     //     left:'0'
//     //     // })
//     // }).appendTo($(this))
//     $('.produce-box').on('mouseenter',function(){
//         $(`<div class="produce-box-bg">
//             <div class="produce-box-bg-2WM-box">
//                 <p class="produce-box-bg-2WM-name">扫码咨询</p>
//                 <img src="../images/04-fabric/fabric-2WM.png" class="produce-box-bg-2WM">
                
//             </div>
//         </div>`).css({
//             width:'240px',
//             height:'240px',
//             backgroundColor:'rgba(0,0,0,0.2)',
//             position:'absolute',
//             top:'0',
//             left:'0',
//             zIndex:'999',
//             transition:'all 0.5s',
//             padding:"20px"
//         }).appendTo($(this))
//         $('.produce-box-bg-2WM-box').css({
//             width:'160px',
//             height:'200px',
//             backgroundColor:'#ffffff',
//             position:'absolute',
//             left:"50%",
//             top:'50%',
//             transform: 'translate(-50%,-50%)',
//             zIndex:'9999999999',
//             borderRadius:'10px',
//             padding:'20px'
//         })
//         $('.produce-box-bg-2WM').css({
//             width:'160px',
//             height:'160px'
//         })
//         $('.produce-box-bg-2WM-name').css({
//             fontSize:'16px',
//             color:'#333333',
//             textAlign:'center',
//             margin:'0'
//         })
//         $('.')
//     }).on('mouseleave',function(){
//         $(this).find('.produce-box-bg').remove()
//     })
    
    
    
//     // 翻页按钮
//     // function myBtn(yeshu){
//     for(var index= 1 ;index<=yeshu;index++){
//         $('<div class="produce-clibut-cen-xAN"></div>').css({
//             width:'60px',
//             height:'40px',
//             margin:'0 10px',
//             float:'left',
//             textAlign:'center',
//             lineHeight:"40px"
//         }).text(index).appendTo('.produce-clibut-cen')
//     }
//     var mywidth = yeshu*80+2*80+4
//     $('.produce-clibut').css({
//         width:mywidth
//     })
//     // }
//     // var yeshu =4
//     // for(var index= 1 ;index<=yeshu;index++){
//     //     $('<div class="produce-clibut-cen-xAN"></div>').css({
//     //         width:'60px',
//     //         height:'40px',
//     //         // backgroundColor:'yellow',
//     //         margin:'0 10px',
//     //         float:'left',
//     //         textAlign:'center',
//     //         lineHeight:"40px"
//     //     }).text(index).appendTo('.produce-clibut-cen')
//     // }
//     // var mywidth = yeshu*80+2*80+4
//     // $('.produce-clibut').css({
//     //     width:mywidth
//     // })
    
    
    
//     // 对按钮设置点击效果
//     $($('.produce-clibut-cen-xAN')[0]).css({
//         backgroundColor:'#d73654',
//         color:'#ffffff'
//     })
//     var myIndex1 = 0
//     $('.produce-clibut-cen-xAN').on('click',function(){
//         myIndex1 = $(this).index()+1
//         console.log(myIndex1)
//         $('.produce').remove()
//         $(`<div class="produce">
//         <div class="produce-clibut">
//         <div class="produce-clibut-tou">
//                 首页
//         </div>
//         <div class="produce-clibut-cen">
    
//         </div>
//         <div class="produce-clibut-tou">
//                 末页
//         </div>
//     </div>
//         </div>`).appendTo($('.produce-boxB'))
//         for(var index= 1 ;index<=yeshu;index++){
//             $('<div class="produce-clibut-cen-xAN"></div>').css({
//                 width:'60px',
//                 height:'40px',
//                 margin:'0 10px',
//                 float:'left',
//                 textAlign:'center',
//                 lineHeight:"40px"
//             }).text(index).appendTo('.produce-clibut-cen')
//         }
//         var mywidth = yeshu*80+2*80+4
//         $('.produce-clibut').css({
//             width:mywidth
//         })
//         console.log('myArrs'+myIndex1)
//         myDongTu(myArr.eq,myIndex1)
//         $('.produce-clibut-cen-xAN').css({
//             backgroundColor:'#ffffff',
//             color:'#666666'
//         })
//         $(this).css({
//             backgroundColor:'#d73654',
//             color:'#ffffff',
//         })
//         $(this).on('mouseout',function(){
//             $(this).css({
//                 backgroundColor:'#d73654',
//             color:'#ffffff',
//             })
//         })
//     })
//     // 对按钮设置放上效果
//     $('.produce-clibut-cen-xAN').on('mouseover',function(){
//         $('.produce-clibut-cen-xAN').css({
//             backgroundColor:'#ffffff',
//             color:'#666666'
//         })
//         $($('.produce-clibut-cen-xAN')[myIndex1]).css({
//             backgroundColor:'#d73654',
//             color:'#ffffff'
//         })
//         $(this).css({
//             backgroundColor:'#d73654',
//             color:'#ffffff',
//             cursor:'pointer'
//         })
//     }).on('mouseout',function(){
//         $(this).css({
//             backgroundColor:'#ffffff',
//             color:'#666666',
//         })
//     })
    
// }
// myDongTu(['蛋花撒汤','滋补菌菇汤','黄金酸辣汤','番茄牛肉丸','鲜肉小笼包','飘香五花面'],1,4)




// // 左边可动菜单
// // 鼠标点击事件
// var inedx =0
// var myshowName = ""
// $('.show-show-XL-but').on('click',function(){
//     $('.produce').remove()
//     $(`<div class="produce">
//     <div class="produce-clibut">
//     <div class="produce-clibut-tou">
//             首页
//     </div>
//     <div class="produce-clibut-cen">

//     </div>
//     <div class="produce-clibut-tou">
//             末页
//     </div>
// </div>
//     </div>`).appendTo($('.produce-boxB'))
//     index = $(this).index()
//     console.log(index+1)
//     // myDongTu([],index+1)   调用换内容函数
//     // 右边内容
//     $('.show-right-tit').text($(this).find('.show-show-XL-but-but').text())
//     myshowName = $(this).find('.show-show-XL-but-but').text()
//     $('.show-show-XL-but').css({
//         backgroundColor:'#ffffff',
//         color:'#333333'
//     })
//     $(this).on('mouseout',function(){
//        $(this).css({
//         backgroundColor:'#f15673',
//         color:'#ffffff'
//        })
//     })
//     $(this).css({
//         backgroundColor:'#f15673',
//         color:'#ffffff'
//     })
// })
// $('.show-show-XL-but').on('mouseover',function(){
//     $('.show-show-XL-but').on('mouseout',function(){
//         $('.show-show-XL-but').css({
//          backgroundColor:'#ffffff',
//          color:'#333333'
//         })
//         $($('.show-show-XL-but')[index]).css({
//          backgroundColor:'#f15673',
//          color:'#ffffff'
//         })

//      })
//     $('.show-show-XL-but').css({
//         backgroundColor:'#ffffff',
//         color:'#333333'
//     })
//     $($('.show-show-XL-but')[index]).css({
//         backgroundColor:'#f15673',
//         color:'#ffffff'
//     })
//     $(this).css({
//         backgroundColor:'#f15673',
//         color:'#ffffff'
//     })
// }).on('mouseout',function(){
//     $(this).css({
//         backgroundColor:'#ffffff',
//         color:'#333333'
//     })
// })




