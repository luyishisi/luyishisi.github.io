/**
 * Created by luyi on 2015/7/24.
 */
var ar =[0,0,0,0];
ar[0]=[0,0,0,0];
ar[1]=[0,0,0,0];
ar[2]=[0,0,0,0];
ar[3]=[0,0,0,0];
var temp=[0,0,0,0,0];
var move=0;
var score=0;
var change=1;
//alert(ar[0][1]);
function shuaxin()
{   for(var i = 0 ; i < 4;i++)

    for(var j = 0;j <4;j++)
    {   var k=i*4+j+1;
        var id="in"+k;
        var x0=document.getElementById(id);
        if(ar[i][j]==0)
            x0.value=" ";
        else
        x0.value=ar[i][j];
   }
    var x0=document.getElementById("move");
    x0.value=move;
    var x0=document.getElementById("score");
    x0.value=score;
    var gameover=1;
    for(i=0;i<=3;i++)
        for(j=0;j<=3;j++)
            if(ar[i][j]==0)
                gameover=0;
   if(gameover)
   {
       alert("游戏结束"+"您的成绩是"+score);
       ar =[0,0,0,0];
       ar[0]=[0,0,0,0];
       ar[1]=[0,0,0,0];
       ar[2]=[0,0,0,0];
       ar[3]=[0,0,0,0];
        temp=[0,0,0,0,0];
        move=0;
        score=0;
        change=1;
   }
    //alert(Math.floor(Math.random()*(2-1+1)+1)*2);
}
touch.on('#target', 'touchstart', function(ev){
    ev.preventDefault();
});

var target = document.getElementById("target");
target.style.webkitTransition = 'all ease 0.2s';

touch.on(target, 'swiperight', function(ev){
    this.style.webkitTransform = "translate3d(" + rt + "px,0,0)";
    log("向右滑动.");
    alert("asd");
});

touch.on(target, 'swipeleft', function(ev){
    log("向左滑动.");
    this.style.webkitTransform = "translate3d(-" + this.offsetLeft + "px,0,0)";
});
function getKey(e){
    e = e || window.event;
    var keycode = e.which ? e.which : e.keyCode;
    var i,j;
    if(keycode == 38){
        //alert("上");j
        for(j=0;j<=3;j++)
        {
            for(i=0;i<=3;i++)
            {
                temp[i]=ar[i][j];
            }
            temp[4]=0;
            change=change+add();
            for(i=0;i<=3;i++)
            {
                ar[i][j]=temp[i];
            }
        }
        rand();
        shuaxin();
    }
    if(keycode == 37){
        //alert("左");
        for(i=0;i<=3;i++)
        {
            for(j=0;j<=3;j++)
            {
                temp[j]=ar[i][j];
            }
            temp[4]=0;
            change=change+add();
            for(j=0;j<=3;j++)
            {
                ar[i][j]=temp[j];
            }
        }
        rand();
        shuaxin();
    }
    if(keycode == 39){
        //alert("右");
        for(i=0;i<=3;i++)
        {
            for(j=0;j<=3;j++)
            {
                temp[j]=ar[i][3-j];
            }
            temp[4]=0;
            change=change+add();
            for(j=0;j<=3;j++)
            {
               ar[i][3-j]=temp[j];
            }
        }
        rand();
        shuaxin();
    }
    if(keycode == 40){
        //alert("下");
        for(j=0;j<=3;j++)
        {
            for(i=0;i<=3;i++)
            {
                temp[i]=ar[3-i][j];
            }
            temp[4]=0;
            change=change+add();
            for(i=0;i<=3;i++)
            {
                ar[3-i][j]=temp[i];
            }
        }
        rand();
        shuaxin();
    }
}

function listenKey ()
{
    if (document.addEventListener)
    {
        document.addEventListener("keyup",getKey,false);
    }
    else if (document.attachEvent)
    {
        document.attachEvent("onkeyup",getKey);
    }
    else
    {
        document.onkeyup = getKey;
    }
}

function add()
{
    var i;
    var t=0;
    var change=0;
    do
    {
        for(i=0;i<=3;i++)
        {
            if(temp[i]==0)
            {
                if(temp[i]!=temp[i+1])
                    change=1;
                temp[i]=temp[i+1];
                temp[i+1]=0;
            }
        }
        t++;
    }while(t<=3);
    for(i=1;i<=3;i++)
    {
        if(temp[i]==temp[i-1])
        {
            if(temp!=0)
            {
                change=1;
                score=score+temp[i];
            }
            temp[i-1]=temp[i-1]*2;
            temp[i]=0;
        }
    }
    do
    {
        for(i=0;i<=3;i++)
        {
            if(temp[i]==0)
            {
                temp[i]=temp[i+1];
                temp[i+1]=0;
            }
        }
        t++;
    }while(t<=3);
    return change;
}
function rand()
{
    var i,j;
    do
    {
        i=(Math.floor(Math.random()*(3-0+1)+0));
        j=(Math.floor(Math.random()*(3-0+1)+0));
    }
    while(ar[i][j]!=0);
        ar[i][j]=(Math.floor(Math.random()*(2-1+1)+1)*2);
    move++;
    //alert(i,j,a[i][j]);
}