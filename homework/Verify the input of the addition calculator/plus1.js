function processForm(){
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let num3=parseFloat(num1);
    let num4=parseFloat(num2);
    if(isNaN(num3) || isNaN(num4)){
        console.error("请输入有效的数字")
    }
    else{
        alert(num3+num4)
    }

}