$(function(){
    $("#save").click(function() {
        if(document.getElementById('input').value.trim()==''){
          alert("파일명을 입력하신후 저장해주세요!");
          return;
        }
          
        save_befor();
      //   this
      //   html2canvas($("#ai_image_indiv"), {
      //       dpi: 144,
      //       onrendered: function(canvas) {
      //         //   canvas.toBlob(function(blob) {
      //         //       var name = document.getElementById('input').value;
      //         //       saveAs(blob.toDataURL(), name+'.png');
      //         //   });
  
      //         canvas.toBlob(function(blob){
      //             var name = document.getElementById('input').value;
      //         saveAs(canvas.toDataURL(), name+'.png');
      //         });
      //       }
      //   });
  
  
        //문법 신형으로 다시 고치기
      html2canvas(document.querySelector("#ai_image_indiv"), {
          // dpi: 144,
          backgroundColor: 'rgba(0, 0, 0, 0)',
      }).then(canvas => {
      //     canvas.toBlob(function(blob){
      //         var name = document.getElementById('input').value;
      saveAs(canvas.toDataURL("image/png"));
      // document.body.appendChild(canvas)
      //     });
          
      
          // download(name+".png",canvas.toDataURL("image/png"));
      });
  
      save_after();
    });
    });
  
    function saveAs(uri){
      var link = document.createElement('a');
      link.style.backgroundColor="rgba(0, 0, 0, 0.0)";
      if(typeof link.download === 'string'){
          link.href = uri;
          link.download = document.getElementById("input").value+".png";
  
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }else{
          window.open(uri);
      }
    }
  
    function save_befor(){
      document.getElementById("ai_image_indiv").style.backgroundColor="rgba(0, 0, 0, 0.0)";
      document.getElementById("ai_image_indiv").style.border="1px solid rgba(198,198,198,0)";
      // document.getElementById("image").style.transform="translate(-50%,-25%)";
      // console.log("window.innerHeight : "+window.innerHeight);
      // if(window.innerHeight<720){
      //     console.log("실행");
      //     // parent.resizeTo(window.innerWidth, 720);
      //     console.log("window.innerHeight : "+window.innerHeight);
      // }
      // if(window.innerWidth<895){
      //     // window.resizeTo(895, window.innerHeight);
      // }
      // document.getElementById("ai_image_indiv").style.marginLeft="40px";
  
      // document.getElementById("image").style.marginLeft="-1px";
      document.getElementById("ac1").style.marginTop="-2px";
      document.getElementById("ac2").style.marginTop="-2px";
      document.getElementById("ac3").style.marginTop="-2px";
      document.getElementById("ac1").style.marginLeft="-2px";
      document.getElementById("ac2").style.marginLeft="-2px";
      document.getElementById("ac3").style.marginLeft="-2px";
          // window.innerHeight=700;
          // $('selector').css('height',$(window).height(700));
    }
    function save_after(){
      document.getElementById("ai_image_indiv").style.backgroundColor="#F4F8F9";
      document.getElementById("ai_image_indiv").style.border="1px solid #C6C6C6";
      // document.getElementById("image").style.transform="translate(-50%,+25%)";
  
      // document.getElementById("ai_image_indiv").style.marginLeft="45px";
  
      // document.getElementById("image").style.marginLeft="0px";
      document.getElementById("ac1").style.marginTop="0px";
      document.getElementById("ac2").style.marginTop="0px";
      document.getElementById("ac3").style.marginTop="0px";
      document.getElementById("ac1").style.marginLeft="0px";
      document.getElementById("ac2").style.marginLeft="0px";
      document.getElementById("ac3").style.marginLeft="0px";
    }
  
  //   function dog_click(){
  //     save_b();
  //     html2canvas(document.querySelector('#contents'), {}).then(function (canvas) {
  //         var name = document.getElementById('input').value;
  //         saveAs(canvas.toDataURL(), name+'.png');
  //     });    
  // }
  
  // function saveAs(uri, filename) {
  // 	var link = document.createElement('a');
  // 	if (typeof link.download === 'string') {
  // 		link.href = uri;
  // 		link.download = filename;
  // 		document.body.appendChild(link);
  // 		link.click();
  // 		document.body.removeChild(link);
  // 	} else {
  // 		window.open(uri);
  // 	}
  //     save_a();
  // }
  
  var mx1, my1;
  var on1=0;
  // 리본 / 머리핀
  //클릭시
  function move_onoff_ac1(e){
      var pop=document.getElementById("ac1");
      mx1=e.clientX-pop.offsetLeft;
      my1=e.clientY-pop.offsetTop;
      document.getElementById("ac1").style.zIndex="4";
  }
  //마우스가 움직일때
  function move_ac1(e){
      var pop=document.getElementById("ac1");
      var x=e.clientX-mx1;
      var y=e.clientY-my1;
      if(x>0)
          pop.style.left=x+"px";
      if(y>0)
          pop.style.top=y+"px";
      document.getElementById("ac1").style.zIndex="100";
  }
  
  var mx2, my2;
  var on2=0;
  function move_onoff_ac2(e){
          var pop=document.getElementById("ac2");
          mx2=e.clientX-pop.offsetLeft;
          my2=e.clientY-pop.offsetTop;
          ++on2;
          document.getElementById("ac2").style.zIndex="100";
          
  }
  function end_ac2(){
      document.getElementById("ac2").style.zIndex="2";
  }
  // 방울
  function move_ac2(e){
      var pop=document.getElementById("ac2");
      var x=e.clientX-mx2;
      var y=e.clientY-my2;
      if(x>0)
          pop.style.left=x+"px";
      if(y>0)
          pop.style.top=y+"px";
      document.getElementById("ac2").style.zIndex="100";
  }
  // 쑥스러움 / 부끄러움
  var mx3, my3;
  var on3=0;
  function move_onoff_ac3(e){
          var pop=document.getElementById("ac3");
          mx3=e.clientX-pop.offsetLeft;
          my3=e.clientY-pop.offsetTop;
          document.getElementById("ac3").style.zIndex="5";
  }
  
  function move_ac3(e){
      var pop=document.getElementById("ac3");
      var x=e.clientX-mx3;
      var y=e.clientY-my3;
      if(x>0)
          pop.style.left=x+"px";
      if(y>0)
          pop.style.top=y+"px";
      document.getElementById("ac3").style.zIndex="100";
      
  }
  
  function reset_style(){
      var window_size = document.body.clientWidth;
      window.resize="both";
      parent.resizeTo(1248, 780);
  
      //shop링크버튼
      document.getElementById("teb").style.marginRight = window_size / 15 + "px";
      document.getElementById("teb").style.marginTop = "30px";
  
      //이미지 div 마진 셋팅
      document.getElementById("ai_image_div").style.marginLeft = window_size / 8 + "px";
      document.getElementById("ai_image_div").style.marginTop =  window_size / 70 + "px";
      document.getElementById("ai_image_div").style.marginRight =  "0px";
      document.getElementById("ai_image_div").style.marginBottom =  window_size / 50 + "px";
  
      //이미지 div 크기셋팅
      document.getElementById("ai_image_div").style.width = window_size / 3 + "px";
      var div_width = parseInt(document.getElementById("ai_image_div").style.width.replace("px",""), 10);
      document.getElementById("ai_image_div").style.height = window_size / 3 + "px";
      document.getElementById("ai_image_div").style.borderRadius = div_width + 50+"px";
  
      //이미지 indiv 크기셋팅
      document.getElementById("ai_image_indiv").style.width = parseInt(div_width - (div_width/5.5))  +"px";
      document.getElementById("ai_image_indiv").style.height = parseInt(div_width - (div_width/5.5))  +"px";
      document.getElementById("ai_image_indiv").style.borderRadius = div_width + 50+"px";
  
      //이미지 indiv 마진셋팅
      var indiv_width = parseInt(document.getElementById("ai_image_indiv").style.width.replace("px",""), 10);
      document.getElementById("ai_image_indiv").style.marginLeft = "auto";
      document.getElementById("ai_image_indiv").style.marginTop = (div_width - indiv_width) / 2 + "px ";
      document.getElementById("ai_image_indiv").style.marginRight = "auto";
      document.getElementById("ai_image_indiv").style.marginBottom = document.getElementById("ai_image_indiv").style.marginTop;
  
      
      //이미지 크기 셋팅
      document.getElementById("image").style.width = indiv_width-50 +"px";
      document.getElementById("image").style.transform = "translate(-50%, "+ ((indiv_width-50)/6)+"px)";
      
      //
      document.getElementById("ac_table").style.marginTop = div_width/2-110 +"px";
      document.getElementById("ac_table").style.marginBottom = parseInt(document.getElementById("ac_table").style.marginTop, 10)/3+"px";
      
      //ac_tbody
      document.getElementById("ac_tbody").style.paddingLeft = window_size/41 + "px";
      document.getElementById("ac_tbody").style.paddingRight = window_size/41 + "px";
      document.getElementById("ac_tbody").style.paddingTop = window_size/10 + "px";
      document.getElementById("ac_tbody").style.paddingBottom = window_size/9.5 + "px";
  
      //new_ac1~6 테이블
      document.getElementById("new_ac1").style.width = window_size/12 + "px";
      document.getElementById("new_ac1").style.height = window_size/12 + "px";
      document.getElementById("new_ac2").style.width = window_size/12 + "px";
      document.getElementById("new_ac2").style.height = window_size/12 + "px";
      document.getElementById("new_ac3").style.width = window_size/12 + "px";
      document.getElementById("new_ac3").style.height = window_size/12 + "px";
      document.getElementById("new_ac4").style.width = window_size/12 + "px";
      document.getElementById("new_ac4").style.height = window_size/12 + "px";
      document.getElementById("new_ac5").style.width = window_size/12 + "px";
      document.getElementById("new_ac5").style.height = window_size/12 + "px";
      document.getElementById("new_ac6").style.width = window_size/12 + "px";
      document.getElementById("new_ac6").style.height = window_size/12 + "px";
  
  
      //악세서리 버튼 //이부분 넘어가기
      // document.getElementById("new_ac1").style.width = window_size/10 +"px";
      // document.getElementById("new_ac1").style.height = parseInt(document.getElementById("new_ac1").style.width,10) / 2 + "px";
  
      // document.getElementById("new_ac2").style.width = window_size/10 +"px";
      // document.getElementById("new_ac2").style.height = parseInt(document.getElementById("new_ac2").style.width,10) / 2 + "px";
  
      // document.getElementById("new_ac3").style.width = window_size/10 +"px";
      // document.getElementById("new_ac3").style.height = parseInt(document.getElementById("new_ac3").style.width,10) / 2 + "px";
  
      // document.getElementById("new_ac4").style.width = window_size/10 +"px";
      // document.getElementById("new_ac4").style.height = parseInt(document.getElementById("new_ac4").style.width,10) / 2 + "px";
  
      // document.getElementById("new_ac5").style.width = window_size/10 +"px";
      // document.getElementById("new_ac5").style.height = parseInt(document.getElementById("new_ac5").style.width,10) / 2 + "px";
  
      // document.getElementById("new_ac6").style.width = window_size/10 +"px";
      // document.getElementById("new_ac6").style.height = parseInt(document.getElementById("new_ac6").style.width,10) / 2 + "px";
  
      //돌아가기 완료버튼
  
      //fot 푸터
      // document.getElementById("fot").style.marginTop = document.body.clientHeight/2 +"px";
  
      //이름
      document.getElementById("text").style.top = -window_size/8+"px";
      
      document.getElementById("in_name").style.right = (window_size/4)+(window_size/20)+"px";
      document.getElementById("in_tr").style.right = window_size/20+"px";
  
      document.getElementById("in_tr").style.width = window_size/4+"px";
      document.getElementById("input").style.width = parseInt(document.getElementById("in_tr").style.width, 10)-30+"px";
  
      //
  
  
      //f_body 높이조절
      document.getElementById("f_table").style.marginTop = window_size/10+ "px";
  
      //완료버튼 누르면 나오는 4개 버튼
      document.getElementById("f_td1").style.width = window_size / 4 + "px";
      document.getElementById("f_td1").style.height = window_size / 17 + "px";
      document.getElementById("f_td2").style.width = window_size / 4 + "px";
      document.getElementById("f_td2").style.height = window_size / 17 + "px";
      document.getElementById("f_td3").style.width = window_size / 4 + "px";
      document.getElementById("f_td3").style.height = window_size / 17 + "px";
      document.getElementById("f_td4").style.width = window_size / 4 + "px";
      document.getElementById("f_td4").style.height = window_size / 17 + "px";
  
  }
  
  
  function shopopen(){
      var link = 'https://ooakiki.com/shop';
      window.open(link);
  }
  //창 사이즈가 변할때
  $(window).resize(function(){
      reset_style();
  });
  //창을 처음 열었을 때
  $(window).load(function(){
      reset_style();
  })
          
  function fotopen(){
      //푸터 오픈
      setTimeout(function(){document.getElementById('fot').style.visibility="visible";},210);
      
      //일러스트 중앙
      //document.getElementById('contents').style.float="none";
      //document.getElementById('ai_image_div').style.marginLeft="auto";
      //document.getElementById('ai_image_div').style.marginRight="auto";
  
      //콘텐츠 테이블 하이드
      setTimeout(function(){document.getElementById('ac_table').style.visibility="hidden"}, 210);
      document.getElementById('next_btn1').style.visibility="hidden";
      document.getElementById('next_btn2').style.visibility="hidden"
  }
  function divopen(){
      //푸터 하이드
      document.getElementById('fot').style.visibility="hidden";
      //일러스트 원래위치로
      //document.getElementById('contents').style.visibility="hidden"
      //document.getElementById('contents').style.float= "right";
      //document.getElementById('ai_image_div').style.marginleft="400px";
      //콘텐츠 보임
      document.getElementById('ac_table').style.visibility="visible";
      document.getElementById('next_btn1').style.visibility="visible";
      document.getElementById('next_btn2').style.visibility="visible";
  }
      function ac_1(){
          document.getElementById("ac1").style.visibility="visible";
          var widthize = parseInt(document.getElementById("image").style.width);
          //리본
          document.getElementById("ac1").style.transform="translate(-50%,-50%);"
          //중앙 맞춤
          document.getElementById("ac1").style.width = widthize/2 +"px";
          //크기조절
          document.getElementById("ac1").src = "logo&ac/ac01.png";
          //확정
      }function ac_2(){
          document.getElementById("ac1").style.visibility="visible";
          var widthize = parseInt(document.getElementById("image").style.width);
          //머리핀
          document.getElementById("ac1").style.transform="translate(-50%,-50%);"
          document.getElementById("ac1").style.width = widthize/3+"px";
          document.getElementById("ac1").src = "logo&ac/ac02.png";
      }function ac_3(){
          document.getElementById("ac3").style.visibility="visible";
          var widthize = parseInt(document.getElementById("image").style.width);
          //쑥스러움
          document.getElementById("ac3").style.transform="translate(-50%,-50%);"
          document.getElementById("ac3").style.width = widthize/1.75+"px";
          document.getElementById("ac3").src = "logo&ac/ac04.png";
      }function ac_4(){
          document.getElementById("ac3").style.visibility="visible";
          var widthize = parseInt(document.getElementById("image").style.width);
          //부끄러움
          document.getElementById("ac3").style.transform="translate(-50%,-50%);"
          document.getElementById("ac3").style.width = widthize/2+"px";
          document.getElementById("ac3").src = "logo&ac/ac03.png";
      }function ac_5(){
          document.getElementById("ac2").style.visibility="visible";
          var widthize = parseInt(document.getElementById("image").style.width);
          //방울
          document.getElementById("ac2").style.transform="translate(-50%,-50%);"
          document.getElementById("ac2").style.width = widthize/1.75+"px";
          document.getElementById("ac2").src = "logo&ac/ac05.png";
      }function ac_6(){
          var widthize = parseInt(document.getElementById("image").style.width);
          //초기화
          document.getElementById("ac1").src = "";
          document.getElementById("ac1").style.visibility="hidden";
          //리본/머리핀 초기화
          document.getElementById("ac2").src = "";
          document.getElementById("ac1").style.visibility="hidden";
          //방울 초기화
          document.getElementById("ac3").src = "";
          document.getElementById("ac1").style.visibility="hidden";
          //쑥스러움/부끄러움 초기화
      }
      function allowDrop(e){
          e.preventDefault();
      }