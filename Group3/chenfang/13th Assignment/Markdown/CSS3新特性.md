# 坎帕斯前端学院 
***
## 学习笔记
### 通信与信息工程学院  谌放  2016210574

* QQ：575923486 
* 邮箱：[**@小丑的独角戏台**](https://mail.qq.com/cgi-bin/frame_html?sid=3cMc4wafMGNvDix1&r=db865c2e4d244aa94e56a0ca229d3f9c)
* Github：[**@C-Fun**](https://github.com/C-Fun)

***

### CSS3

### CSS3伪类选择器之"nth-child()"

**语法：**

**:nth-child(an+b)**

* 简单数字序号写法
  * :nth-child(number)

直接匹配第number个元素。参数number必须为大于0的整数。
	
	例子：
	li:nth-child(3){background:orange;}/*把第3个LI的背景设为橙色*/

* 倍数写法
 * :nth-child(an)
 
匹配所有倍数为a的元素。其中参数an中的字母n不可缺省，它是倍数写法的标志，如3n、5n。

	例子：
	
	li:nth-child(3n){background:orange;}/*把第3、第6、第9、…、所有3的倍数的LI的背景设为橙色*/

* 倍数分组匹配
 * :nth-child(an+b) 与 :nth-child(an-b)
 
先对元素进行分组，每组有a个，b为组内成员的序号，其中字母n和加号+不可缺省，位置不可调换，这是该写法的标志，其中a,b均为正整数或0。如3n+1、5n+1。但加号可以变为负号，此时匹配组内的第a-b个。（其实an前面也可以是负号，但留给下一部分讲。）

	例子：
	
	li:nth-child(3n+1){background:orange;}/*匹配第1、第4、第7、…、每3个为一组的第1个LI*/
	
	li:nth-child(3n+5){background:orange;}/*匹配第5、第8、第11、…、从第5个开始每3个为一组的第1个LI*/
	
	li:nth-child(5n-1){background:orange;}/*匹配第5-1=4、第10-1=9、…、第5的倍数减1个LI*/
	
	li:nth-child(3n±0){background:orange;}/*相当于(3n)*/
	
	li:nth-child(±0n+3){background:orange;}/*相当于(3)*/

* 反向倍数分组匹配
 * :nth-child(-an+b)

此处一负一正，均不可缺省，否则无意义。这时与:nth-child(an+1)相似，都是匹配第1个，但不同的是它是倒着算的，从第b个开始往回算，所以它所匹配的最多也不会超过b个。

	例子：
	
	li:nth-child(-3n+8){background:orange;}/*匹配第8、第5和第2个LI*/
	
	li:nth-child(-1n+8){background:orange;}/*或(-n+8)，匹配前8个（包括第8个）LI，这个较为实用点，用来限定前面N个匹配常会用到*/
* 奇偶匹配
 * :nth-child(odd) 与 :nth-child(even)

分别匹配序号为奇数与偶数的元素。奇数(odd)与(2n+1)结果一样；偶数(even)与(2n+0)及(2n)结果一样。


**表格奇偶数行定义样式就可以写成
.table > tr:nth-child(even) > td {background-color: #ccc;}  （偶数行）
.table > tr:nth-child(odd) > td {background-color: #ccc;}  （奇数行）**



### CSS3 transition属性以及focus伪类

transition属性和伪类共同使用可以实现鼠标响应时内容大小的逐渐变化

	.box
	{
		width:100px;
		transition: width 2s;
		-moz-transition: width 2s; /* Firefox 4 */
		-webkit-transition: width 2s; /* Safari 和 Chrome */
		-o-transition: width 2s; /* Opera */
	}
	
	.box:hover{
		width:300px;
	}


focus伪类控制文本输入input在鼠标点击之后的样式

	input{
		width:100px;
		transition: width 2s;
		-moz-transition: width 2s; /* Firefox 4 */
		-webkit-transition: width 2s; /* Safari 和 Chrome */
		-o-transition: width 2s; /* Opera */
	}

	input:focus{
		width:300px;
	}


### CSS :target伪类选择器

target伪类选择器可以用来选择当前活动的元素

例如一个a标签的href="#box"，那么#box:target则是控制当点击该a标签时id为box的div的样式

