window.onload=function()
{
var oPlay=document.getElementById('play');
var oOl=oPlay.getElementsByTagName('ol')[0];
var aLi1=oOl.getElementsByTagName('li');
var oUl=oPlay.getElementsByTagName('ul')[0];
var aLi2=oUl.getElementsByTagName('li');
var i=iNum=direction=0;
var times=null;
var play=null;
//�һ�W liehuo.net ��ӭ����,�ܾ�����ɼ� �����������
for(i=0;i<aLi1.length;i++)
{
aLi1[i].index=i;
aLi1[i].onclick=function()
{
iNum=this.index;
show();
};
}
//��ť�������õĺ���
function show()
{
for(i=0;i<aLi1.length;i++)
{
aLi1[i].className='';
}
aLi1[iNum].className='active';
startMove(-(iNum*160));
}
//�Զ�����ת��
function autoPlay()
{
if(iNum>=aLi1.length-1)
{
direction=1;
}
else if(iNum<=0)
{
direction=0;
}
if(direction==0)
{
iNum++;
}
else if(direction==1)
{
iNum--;
}
show();
}
//�Զ�����
play=setInterval(autoPlay,3000);
//�������չʾ��ֹͣ�Զ�����
oPlay.onmouseover=function()
{
clearInterval(play);
};
//����Ƴ�չʾ�������Զ�����
oPlay.onmouseout=function()
{
play=setInterval(autoPlay,3000);
};
function startMove(iTarget)
{
clearInterval(times);
times=setInterval(function()
{
doMove(iTarget);
},30);
}
function doMove(iTarget)
{
var iSpeed=(iTarget-oUl.offsetTop)/5;
iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
if(oUl.offsetTop==iTarget)
{
clearInterval(times)
}
else
{
oUl.style.top=oUl.offsetTop+iSpeed+'px';
}
}
};