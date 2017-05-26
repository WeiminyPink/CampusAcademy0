

- display:flex多栏多列布局 ：Flexbox（弹性盒布局模型）：适应不同大小的浏览器尺寸和显示设备类型，是响应式布局的一种技术。主要是提供一种更加高效的方式来对容器中的items进行布局，对齐和分配空间。这种布局方式可以是动态的（在items尺寸未知或者大框尺寸未知时）


- 浏览器支持情况：火狐直接支持W3C无前缀写法，谷歌和opera支持-webkit-前缀写法，比较适合移动端开发使用


- Flexbox布局：由一个伸缩容器(flex containers)和在这个容器里的伸缩项目(flex items)组成。在伸缩容器中的所有子元素都会自动变成伸缩项目

- 比如一个三列布局的例子：![](http://i.imgur.com/dukdEZV.png)

- 设置这个伸缩容器：`.container{display:flex;}`伸缩方向与换行（`flex-flow`)


- css属性`flex-flow`用来决定伸缩项目的布局方式


- `flex-flow:row;`伸缩项目排列由左向右排列：![](http://i.imgur.com/eTMIv9x.png)


- `flex-flow:column;`

- 排列由上至下：![](http://i.imgur.com/DJDobTw.png)


- 伸缩项目在一行显示：![](http://i.imgur.com/UHLeLuR.png)


- 定义伸缩项目尺寸：![](http://i.imgur.com/KX82R6y.png)



- 容器可选择属性：![](http://i.imgur.com/jj6Ep7O.png)
- 
- 条目可选属性![](http://i.imgur.com/qT7labN.png)