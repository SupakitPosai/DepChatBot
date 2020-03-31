(function(){

     // Initialize Firebase
     var config = {
        apiKey: "AIzaSyChiX1_xuO5Q2KSpoN90WOl9DIYUTHpGaU",
        authDomain: "test-eb250.firebaseapp.com",
        databaseURL: "https://test-eb250.firebaseio.com",
        projectId: "test-eb250",
        storageBucket: "test-eb250.appspot.com",
        messagingSenderId: "155076782149"
    };
    firebase.initializeApp(config);


     const preObject = document.getElementById('object');
     const dbRefObject = firebase.database().ref().child('Chatbot/message'); 
     const dbRefObject1 = firebase.database().ref().child('Chatbot'); 
     // const dbRefObject2 = firebase.database().ref().child('Chatbot/quiz'); 

     var score1 = 0;
     var quiz2 = "0";
     var ttt = 0;

    

     dbRefObject.on('value', snap =>{
          console.log(snap.val());
          var fruits = snap.val();
         var name = fruits.substr(2, 4) ;
        //  fruits = fruits.slice(9,-2);
          console.log(name);
          //  fruits.toString();
          // document.getElementById("demo").innerHTML = fruits;
          if (name == "user") {
               
              var message = fruits.slice(9,-2);
              console.log(message);
              Function1(message);
               // Ans(message);
           }else if(name == "name"){
               var message = fruits.slice(9,-2);
              console.log(message);
             
              name1(message);
           } 

           
           
     });

     // dbRefObject2.on('value', snap =>{
     //      console.log(snap.val());
     //      var fruits = snap.val();
     //      var name = fruits.substr(2, 4) ;
     //      console.log(name);
     //      var message = fruits.slice(9,-2);
     //      console.log(message);

     // });

     function name1(n){
          sendmessage("สวัสดีคุณ  "+n+"  ยินดีต้อนรับสู่ห้องแชทที่จะทำให้คุณหายเศร้า","","","","");
          sendmessage("คุณต้องการที่จะให้เราช่วยอะไรครับ","","","","");
          sendmessage("ประเมินความเศร้า หรือ ช่วยให้หายเศร้า","ประเมินความเศร้า","ช่วยให้หายเศร้า","","");
          quiz2 = "0";
          score1 = 0;
     }

     function sendmessage(sm,an1,an2,an3,an4 ,sm2){
          dbRefObject1.set({
               Ans:"[\"ans1\",\""+an1+"\",\""+an2+"\",\""+an3+"\",\""+an4+"\"]",
               message: "[\"bott\",\""+sm+"\",\""+sm2+"\"]" 
          }, function(error) {
               if (error) {
                    console.log("error");  
               } else {
                    console.log("Data saved successfully!");  
               }
             });
     }

     

     function Function1(a1) {
          switch(true) {
               case /ประเมิน/.test(a1):
               sendmessage("ยินดีต้อนรับสู่การทำแบบประเมินความเศร้า","","","","","") ;
               sendmessage("เริ่มกันเลย","","","","","") ;
               sendmessage("ช่วงนี้คุณเบื่อไม่สนใจอยากจะทำอะไรบ่อยแค่ใหน","ไม่เลย","บางครั้ง","บ่อยครั้ง","ทุกครั้ง","") ;
               score1 = 0;
               quiz2 = "1";
               ttt = 1;
                    break;

               case /หายเศร้า/.test(a1):
               sendmessage("งานอดิเรกคุณชอบ ดูหนัง ดูละคร ฟังเพลง หรือ เล่นเกมส์ครับ","ดูหนัง","ดูละคร","ฟังเพลง","เล่นเกมส์","") ;
               quiz2 = "0";
               score1 = 0 ;
                    break;

               case /ไม่/.test(a1):
                    score1 = score1 + 0;
                    quiz();
               break;

               case /บาง/.test(a1):
                    score1 = score1 + 1;
                    quiz();
                    break;

               case /บ่อย/.test(a1):
                    score1 = score1 + 2;
                    quiz();
                    break;

               case /ทุก/.test(a1):
                    score1 = score1 + 3;
                    quiz();
                    break;
               case /ดูหนัง/.test(a1):
                     sendmessage("คุณชอบดูหนังแนวใหน","หนังโรแมนติก","หนังแอคชั่น","หนังคอมมาดี้","","");
               break;
               case /หนังโรแมนติก/.test(a1):
                    sendmessage("https://www.youtube.com/embed/OPp2CoLdXcc","","","","","1");
                    sendmessage("งานอดิเรกคุณชอบ ดูหนัง ดูละคร ฟังเพลง หรือ เล่นเกมส์ครับ","ดูหนัง","ดูละคร","ฟังเพลง","เล่นเกมส์","") ;
               break;
               case /หนังแอคชั่น/.test(a1):
                    sendmessage("https://www.youtube.com/embed/KCSNFZKbhZE","","","","","1");
                    sendmessage("งานอดิเรกคุณชอบ ดูหนัง ดูละคร ฟังเพลง หรือ เล่นเกมส์ครับ","ดูหนัง","ดูละคร","ฟังเพลง","เล่นเกมส์","") ;
               break;
               case /หนังคอมมาดี้/.test(a1):
                    sendmessage("https://www.youtube.com/embed/3RINveuqkCg","","","","","1");
                    sendmessage("งานอดิเรกคุณชอบ ดูหนัง ดูละคร ฟังเพลง หรือ เล่นเกมส์ครับ","ดูหนัง","ดูละคร","ฟังเพลง","เล่นเกมส์","") ;
               break;
               case /ดูละคร/.test(a1):
                     sendmessage("คุณชอบดูละครแนวใหน","ละครโรแมนติก","ละครแอคชั่น","ละครคอมมาดี้","","");
               break;
               case /ละครคอมมาดี้/.test(a1):
                    sendmessage("https://www.youtube.com/embed/_Z_eQED7JTA","","","","","1");
                    sendmessage("งานอดิเรกคุณชอบ ดูหนัง ดูละคร ฟังเพลง หรือ เล่นเกมส์ครับ","ดูหนัง","ดูละคร","ฟังเพลง","เล่นเกมส์","") ;
               break;
               case /ละครโรแมนติก/.test(a1):
                    sendmessage("https://www.youtube.com/embed/k-jQgrGP8ps","","","","","1");
                    sendmessage("งานอดิเรกคุณชอบ ดูหนัง ดูละคร ฟังเพลง หรือ เล่นเกมส์ครับ","ดูหนัง","ดูละคร","ฟังเพลง","เล่นเกมส์","") ;
               break;
               case /ละครแอคชั่น/.test(a1):
                    sendmessage("https://www.youtube.com/embed/0v7mpayn8g0","","","","","1");
                    sendmessage("งานอดิเรกคุณชอบ ดูหนัง ดูละคร ฟังเพลง หรือ เล่นเกมส์ครับ","ดูหนัง","ดูละคร","ฟังเพลง","เล่นเกมส์","") ;
               break;
               case /ฟังเพลง/.test(a1):
                    sendmessage("คุณชอบฟังเพลงไทย หรือ สากล","เพลงไทย","เพลงสากล","","","");
               break;
               case /เพลงไทย/.test(a1):
                    sendmessage("https://www.youtube.com/embed/QlKhs9uhZ1E","","","","","1");
                    sendmessage("งานอดิเรกคุณชอบ ดูหนัง ดูละคร ฟังเพลง หรือ เล่นเกมส์ครับ","ดูหนัง","ดูละคร","ฟังเพลง","เล่นเกมส์","") ;

               break;
               case /เพลงสากล/.test(a1):
                    sendmessage("https://www.youtube.com/embed/ysg8aPYSgMM","","","","","1");
                    sendmessage("งานอดิเรกคุณชอบ ดูหนัง ดูละคร ฟังเพลง หรือ เล่นเกมส์ครับ","ดูหนัง","ดูละคร","ฟังเพลง","เล่นเกมส์","") ;

               break;
               case /เกมส์/.test(a1):
               sendmessage("คุณชอบเล่นเกมส์ ออนไลน์ หรือ ออฟไลน์","ออฟไลน์","ออนไลน์","","","");
               break;
               case /ออฟ/.test(a1):
                    sendmessage("sim.jpg","","","","","2");
                    sendmessage("งานอดิเรกคุณชอบ ดูหนัง ดูละคร ฟังเพลง หรือ เล่นเกมส์ครับ","ดูหนัง","ดูละคร","ฟังเพลง","เล่นเกมส์","") ;

               break;
               case /ออน/.test(a1):
                    sendmessage("rov.jpg","","","","","2");
                    sendmessage("งานอดิเรกคุณชอบ ดูหนัง ดูละคร ฟังเพลง หรือ เล่นเกมส์ครับ","ดูหนัง","ดูละคร","ฟังเพลง","เล่นเกมส์","") ;
               break;
               default:
               if(quiz2 == "0" && ttt != 1 ){
                    sendmessage("คุณต้องการประเมินความเศร้า หรือ ช่วยให้หายเศร้า","ประเมินความเศร้า","ช่วยให้หายเศร้า","","","");
                    quiz2 = "0";
                    score1 = 0;

               }else if(quiz2 != "0" && score1>0){
                    sendmessage("คุณต้องการประเมินความเศร้า หรือ ช่วยให้หายเศร้า","ประเมินความเศร้า","ช่วยให้หายเศร้า","","","");
                    quiz2 = "0";
                    score1 = 0;
                    
               }else if(quiz2 != "0" && ttt != 1 ){
                    sendmessage("คุณต้องการประเมินความเศร้า หรือ ช่วยให้หายเศร้า","ประเมินความเศร้า","ช่วยให้หายเศร้า","","","");
                    quiz2 = "0";
                    score1 = 0;
               }
             }    
      }
      
     // function Ans(a1){
     //      switch(true) {
               
     //           default:
               

     //      }
     //  }



     function quiz(){
          switch(quiz2) {
               case "1":
               sendmessage("ช่วงนี้คุณรู้สึกไม่สบายใจ ซึมเศร้า หรือท้อแท้บ่อยแค่ใหน","ไม่เลย","บางครั้ง","บ่อยครั้ง","ทุกครั้ง","") ;
               quiz2 = "2";
               ttt = 0;
               break;
               case "2":
               sendmessage("ช่วงนี้คุณหลับมากไป หลับๆตื่นๆ หรือหลับยากบ่อยแค่ใหน","ไม่เลย","บางครั้ง","บ่อยครั้ง","ทุกครั้ง","") ;
               quiz2 = "3";
               ttt = 0;
                    break;
               case "3":
               sendmessage("ช่วงนี้คุณรู้สึกเหนื่อยง่าย หรือไม่มีแรงบ่อยแค่ใหน","ไม่เลย","บางครั้ง","บ่อยครั้ง","ทุกครั้ง","") ;
               quiz2 = "4";
               ttt = 0;
                    break;
               case "4":
               sendmessage("ช่วงนี้คุณเบื่ออาหาร หรือกินเยอะเกินไปบ่อยแค่ใหน","ไม่เลย","บางครั้ง","บ่อยครั้ง","ทุกครั้ง","") ;
               quiz2 = "5";
               ttt = 0;
                    break;
               case "5":
               sendmessage("ช่วงนี้คุณรู้สึกไม่ดีกับตัวเอง รู้สึกทำอะไรก็ล้มเหลว หรือทำให้ครอบครัวผิดหวังบ่อยแค่ใหน","ไม่เลย","บางครั้ง","บ่อยครั้ง","ทุกครั้ง","") ;
               quiz2 = "6";
               ttt = 0;
                    break;
               case "6":
               sendmessage("ช่วงนี้คุณสมาธิไม่ดีเวลาที่จะทำงานที่ต้องใช้ความตั้งใจบ่อยแค่ใหน","ไม่เลย","บางครั้ง","บ่อยครั้ง","ทุกครั้ง","") ;
               quiz2 = "7";
               ttt = 0;
                    break;
               case "7":
               sendmessage("ช่วงนี้คุณรู้สึกพูดช้าทำอะไรช้า หรืออยู่นิ่งไม่ได้บ่อยแค่ใหน","ไม่เลย","บางครั้ง","บ่อยครั้ง","ทุกครั้ง","") ;
               quiz2 = "8";
               ttt = 0;
                    break;
               case "8":
               sendmessage("ช่วงนี้คุณมีความคิดที่จะทำร้ายตัวเอง หรือคิดว่าถ้าตายไปได้คงดีบ่อยแค่ใหน","ไม่เลย","บางครั้ง","บ่อยครั้ง","ทุกครั้ง","") ;
               quiz2 = "9";
               ttt = 0;
                    break;
               case "9":
                    score2();
                     break;
               default:
             }    
         

     }

     function score2(){
          quiz2 = "0";

          if (score1 < 5 ){
               sendmessage("https://test-eb250.firebaseapp.com/P1.png","","","","","2") ;
               sendmessage("คุณต้องการประเมินความเศร้า หรือ ช่วยให้หายเศร้า","ประเมินความเศร้า","ช่วยให้หายเศร้า","","","");
          }else if(score1 < 9 ){
               sendmessage("https://test-eb250.firebaseapp.com/P2.png","","","","","2") ;
               sendmessage("คุณต้องการประเมินความเศร้า หรือ ช่วยให้หายเศร้า","ประเมินความเศร้า","ช่วยให้หายเศร้า","","","");

          }else if(score1 < 15 ){
               sendmessage("https://test-eb250.firebaseapp.com/P3.png","","","","","2") ;
               sendmessage("คุณต้องการประเมินความเศร้า หรือ ช่วยให้หายเศร้า","ประเมินความเศร้า","ช่วยให้หายเศร้า","","","");

          }else if(score1 < 20 ){
               sendmessage("https://test-eb250.firebaseapp.com/P4.png","","","","","2") ;
               sendmessage("คุณต้องการประเมินความเศร้า หรือ ช่วยให้หายเศร้า","ประเมินความเศร้า","ช่วยให้หายเศร้า","","","");

          }else if(score1 > 20 ){
               sendmessage("https://test-eb250.firebaseapp.com/P5.png","","","","","2") ;
               sendmessage("คุณต้องการประเมินความเศร้า หรือ ช่วยให้หายเศร้า","ประเมินความเศร้า","ช่วยให้หายเศร้า","","","");
               quiz2 = "0";


          }
          score1 = 0;
          ttt = 0;

     }

    
}());
           

          
