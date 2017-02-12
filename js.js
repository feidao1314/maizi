/**
 * Created by Administrator on 2016/6/20.
 */

window.onload=function(){
    //全选
   /*var checkall=document.getElementById("checkall");
    checkall.onclick=function(){
        //取出所有的产品复选框
      box=document.getElementsByName("box");
        //设置全选
       for(i=0;i<box.length;i++)
      {
            //如果没有选中，则设置为选中状态
            if(!box[i].checked)
            {
                box[i].checked=true;
            }else//否则，则设置为未选中状态
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
    //计算总价
    alltotal();
    //点击“+”“-”改变数字
    var addbtns=document.getElementsByName("add");
    var subbtns=document.getElementsByName("sub");
    for(var i=0;i<addbtns.length;i++)
    {
        addbtns[i].alt=i;
        subbtns[i].alt=i;
        //点击加按钮
        addbtns[i].onclick=function(){
            var oldvalue=this.previousElementSibling.value;         //获取当前控件的前一个元素（邻居节点）
            this.previousElementSibling.value=parseInt(oldvalue)+1;
            //计算单个商品的价格
            total(this.previousElementSibling);
            //计算总价
              alltotal();

        }
        //点击减按钮
        subbtns[i].onclick=function(){
            var oldvalue=this.nextElementSibling.value;//获取当前控件的后一个元素（邻居节点）
            if((parseInt(oldvalue)-1)<0)
            {
                alert("不能再减了");
            }else
            {
                this.nextElementSibling.value=parseInt(oldvalue)-1;
                //计算单个商品的价格
                total(this.nextElementSibling);
                //计算总价
                alltotal();
            }
        }
    }
}

//删除单个产品
function deleteobj()
{
    //找到触发事件对象
    //var obj=document.getElementById("num_1")
    var obj=event.target;//ie，火狐兼容问题
    var rowindex=obj.parentNode.parentNode.rowIndex;
    //alert(rowindex)
    var tab=document.getElementById("tbpro");
    tab.deleteRow(rowindex);
}
//单个小计
    function total(obj)
    {
    var price=obj.parentNode.previousElementSibling.innerText;//获取单价
        //alert(price);
    var total=price*obj.value;//计算单个商品总价
        //alert(total)
    obj.parentNode.nextElementSibling.innerText=total.toFixed(2);//给单元格赋值
    }
//总计
function alltotal()
{
    var total=document.getElementsByClassName("w80");//取出所有的小计价格
    var totalall=0.00;//初始总价0
    for(var i=0;i<total.length;i++)
    {
        totalall=parseFloat(totalall)+parseFloat(total[i].innerText);
    }
    //总价赋值
    document.getElementById("shopend").innerText=totalall.toFixed(2);
}



