/**
 * Created by Administrator on 2016/6/20.
 */

window.onload=function(){
    //ȫѡ
   /*var checkall=document.getElementById("checkall");
    checkall.onclick=function(){
        //ȡ�����еĲ�Ʒ��ѡ��
      box=document.getElementsByName("box");
        //����ȫѡ
       for(i=0;i<box.length;i++)
      {
            //���û��ѡ�У�������Ϊѡ��״̬
            if(!box[i].checked)
            {
                box[i].checked=true;
            }else//����������Ϊδѡ��״̬
            {
              box[i].checked=false;
            }
       }
   }*/
    var num=document.getElementsByName("num");
    for(i=0;i<num.length;i++)
    {
        //alert(num[i]);
        total(num[i]);
    }
    //�����ܼ�
    alltotal();
    //�����+����-���ı�����
    var addbtns=document.getElementsByName("add");
    var subbtns=document.getElementsByName("sub");
    for(var i=0;i<addbtns.length;i++)
    {
        addbtns[i].alt=i;
        subbtns[i].alt=i;
        //����Ӱ�ť
        addbtns[i].onclick=function(){
            var oldvalue=this.previousElementSibling.value;         //��ȡ��ǰ�ؼ���ǰһ��Ԫ�أ��ھӽڵ㣩
            this.previousElementSibling.value=parseInt(oldvalue)+1;
            //���㵥����Ʒ�ļ۸�
            total(this.previousElementSibling);
            //�����ܼ�
              alltotal();

        }
        //�������ť
        subbtns[i].onclick=function(){
            var oldvalue=this.nextElementSibling.value;//��ȡ��ǰ�ؼ��ĺ�һ��Ԫ�أ��ھӽڵ㣩
            if((parseInt(oldvalue)-1)<0)
            {
                alert("�����ټ���");
            }else
            {
                this.nextElementSibling.value=parseInt(oldvalue)-1;
                //���㵥����Ʒ�ļ۸�
                total(this.nextElementSibling);
                //�����ܼ�
                alltotal();
            }
        }
    }
}

//ɾ��������Ʒ
function deleteobj()
{
    //�ҵ������¼�����
    //var obj=document.getElementById("num_1")
    var obj=event.target;//ie�������������
    var rowindex=obj.parentNode.parentNode.rowIndex;
    //alert(rowindex)
    var tab=document.getElementById("tbpro");
    tab.deleteRow(rowindex);
}
//����С��
    function total(obj)
    {
    var price=obj.parentNode.previousElementSibling.innerText;//��ȡ����
        //alert(price);
    var total=price*obj.value;//���㵥����Ʒ�ܼ�
        //alert(total)
    obj.parentNode.nextElementSibling.innerText=total.toFixed(2);//����Ԫ��ֵ
    }
//�ܼ�
function alltotal()
{
    var total=document.getElementsByClassName("w80");//ȡ�����е�С�Ƽ۸�
    var totalall=0.00;//��ʼ�ܼ�0
    for(var i=0;i<total.length;i++)
    {
        totalall=parseFloat(totalall)+parseFloat(total[i].innerText);
    }
    //�ܼ۸�ֵ
    document.getElementById("shopend").innerText=totalall.toFixed(2);
}



