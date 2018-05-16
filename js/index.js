$(function(){
           $('.resourceBox ul li').mouseover(function(){
           	  $(this).find('i').eq(0).addClass('transformLi');
           }).mouseout(function(){
           	  $(this).find('i').eq(0).removeClass('transformLi');
           });

           
      //查看更多按钮功能实现
      // var slideHeight=550;
      // var defHeight=$('#Contents').height();
      // if(defHeight >= slideHeight){
      //   $('#Contents').css('height',slideHeight+'px');
      //   $('#read-more').click(function(){
      //     var curHeight=$('#Contents').height();
      //     if(curHeight==slideHeight){
      //       $('#Contents').animate({
      //         height:defHeight
      //       },"normal");
      //       $('#read-more').html('点击收起');
      //     }else{
      //       $('#Contents').animate({
      //         height:slideHeight
      //       },"normal");
      //       $('#read-more').html('查看更多');
      //     }
      //     return false;
      //   });
      // }
})


	