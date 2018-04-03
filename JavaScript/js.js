function init()
{
	var v1 = 1;
	var v2 = 3.14;
	var v3 = "PI";
	var v4 = null;
	alert("OK");

	function f_add(a,b)
	{
		return a+b;
	}
	alert(v1+v2);

	// 类似于C语言中函数指针
	var f1 = function f_add2(a,b)
	{
		return a+b;
	}

}