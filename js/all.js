
var oUl = document.getElementById('list'); // UL
var oAll = document.getElementById('all'); // 全选按钮
var aLi = oUl.getElementsByTagName('li');
var oP = document.getElementsByTagName('p')[0]; // 总数量及总金额
var aInput = oUl.getElementsByTagName('input'); // 单选按钮

for(var i=0; i<aLi.length; i++){
	fn(aLi[i]);
}

function fn(obj){
	var aButton = obj.getElementsByTagName('button'); // 加减按钮
	var oB = obj.getElementsByTagName('b')[0]; // 件数
	var oEm = obj.getElementsByTagName('em')[0]; // 单价
	var oStrong = obj.getElementsByTagName('strong')[0]; // 单个总价
	var oInputCheckbox = obj.getElementsByTagName('input')[0]; // 当前商品是否选中
	var val = '';
	
	
	// 减
	aButton[0].onclick = function (){
		val = oB.innerHTML;
		if(val < 2){
			val = 1;
		}else{
			val--;
		}
		changeFn();
	}
	
	// 加
	aButton[1].onclick = function (){
		val = oB.innerHTML;
		val++;
		changeFn();
	}
	
	
	function changeFn(){
		oB.innerHTML = val;
		oStrong.innerHTML = (val * oEm.innerHTML).toFixed(2);
		if(oInputCheckbox.checked){
			allFn();
		}
	}
	
	// 总件数、总金额的计算
	function allFn(){
		var num = 0;
		var sum = 0;
		var aB = document.getElementsByTagName('b');
		var aStrong = document.getElementsByTagName('strong');
		
		for(var i=0; i<aB.length; i++){
			if(aInput[i].checked){
				num += Number(aB[i].innerHTML);
				sum += Number(aStrong[i].innerHTML);
			}
		}
		oP.innerHTML = '商品合计共：'+ num +'件，共花费了：'+ sum.toFixed(2) +'元';
	}
	
	// 全选
	oAll.onclick = function (){
		for(var i=0; i<aInput.length; i++){
			aInput[i].checked = this.checked;
		}
		allFn();
	}
	
	// 单选
	for(var i=0; i<aInput.length; i++){
		aInput[i].onclick = function (){
			var count = 0;
			for(var i=0; i<aInput.length; i++){
				if(aInput[i].checked){
					count ++;
				}
			}
			oAll.checked = count === aInput.length;
			allFn();
		}
	}
	
}
				



