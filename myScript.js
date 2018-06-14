var flash=0

function lightning()
{flash=flash+1;
if(flash==1){document.body.style.backgroundColor='white'; setTimeout("lightning()",100);}
if(flash==2){document.body.style.backgroundColor='red'; setTimeout("lightning()",90);}
if(flash==3){document.body.style.backgroundColor='white'; setTimeout("lightning()",85);}
if(flash==4){document.body.style.backgroundColor='red'; setTimeout("lightning()",80);}
if(flash==5){document.body.style.backgroundColor='white'; setTimeout("lightning()",75);}
if(flash==6){document.body.style.backgroundColor='red'; setTimeout("lightning()",70);}
if(flash==7){document.body.style.backgroundColor='white'; setTimeout("lightning()",65);}
if(flash==8){document.body.style.backgroundColor='red'; setTimeout("lightning()",60);}
if(flash==9){document.body.style.backgroundColor='white'; setTimeout("lightning()",50);}
if(flash==10){document.body.style.backgroundColor='red'; setTimeout("lightning()",40);}
if(flash==11){document.body.style.backgroundColor='white'; setTimeout("lightning()",30);}
if(flash==12){document.body.style.backgroundColor='red'; setTimeout("lightning()",25);}
if(flash==13){document.body.style.backgroundColor='white'; setTimeout("lightning()",20);}
if(flash==14){document.body.style.backgroundColor='blue'; setTimeout("lightning()",10);}
if(flash==15){document.body.style.backgroundColor='purple'; setTimeout("lightning()",5);}
if(flash==16){document.body.style.backgroundColor='white'; setTimeout("lightning()",1);}
if(flash==17){document.body.style.backgroundColor='black'; setTimeout("lightning()",1);}
if(flash==18){document.body.style.backgroundColor='blue'; setTimeout("lightning()",1);}
if(flash==19){document.body.style.backgroundColor='purple'; setTimeout("lightning()",1);}
if(flash==20){flash=0; setTimeout("lightning()",100);}
}


setTimeout("lightning()",60000);





