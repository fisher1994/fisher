$(function(){
           $('.resourceBox ul li').mouseover(function(){
           	  $(this).find('i').eq(0).addClass('transformLi');
           }).mouseout(function(){
           	  $(this).find('i').eq(0).removeClass('transformLi');
           });


    var progress = $(".progress"),li_width = $("#b04 li").length;
    var unslider04 = $('#b04').unslider({
    dots: true,
    complete:function(index){//自己添加的，官方没有
      progress.animate({"width":(100/li_width)*(index+1)+"%"});
    }
  });

  data04 = unslider04.data('unslider');//获取unslider属性，其中值包含stop,start,next,pre
  $('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
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


	