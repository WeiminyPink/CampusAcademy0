/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var cityInput = document.getElementById('aqi-city-input');
var valueInput = document.getElementById('aqi-value-input');
var addBtn = document.getElementById('add-btn');
var table = document.getElementById('aqi-table');
var delBtn = table.getElementsByTagName('button');
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	//获取输入内容
	//trim()去首尾空格
	var city = cityInput.value.trim();
	var value = valueInput.value.trim();

	//标识，当都为真时才能进行添加条件
	var cityflag = false;
	var valueflag = false;

	//正则匹配城市名称(匹配任意汉字)
	var regCity = /^[a-zA-Z\u4E00-\u9FA5]+$/ ;
	//正则匹配空气质量（整数）
    var regValue = /[\d*]/;

    //匹配城市
    if (!regCity.test(city))
    {
    	alert("城市名称必须是中英文字符！");
    	cityInput.value = '';//清除数据
    }
    else cityflag = true;

    //匹配空气质量指数
    if(!regValue.test(value))
    {
    	alert("空气质量指数必须为整数！");
    	valueInput.value = '';
    }
   else valueflag = true;

    if(cityflag && valueflag)
    {
    	aqiData[city] = value;
    }

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var tr = '<tr>'+'<td>'+''+'</td>'+'<td>'+''+'</td>'+'<td>'+''+'</td>'+'</tr>';
	for ( var x in aqiData)
	{
		tr += '<tr>'+'<td>'+x+'</td>'+'<td>'+aqiData[x]+'</td>'+'<td>'+"<button onclick='delBtnHandle(\""+x+"\")'>"+'删除'+'</button>'+'</td>'+'</tr>';
	}
	table.innerHTML = tr;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  delete aqiData[city];
  renderAqiList();
}


window.onload = function () {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  addBtn.addEventListener('click',addBtnHandle);
}


