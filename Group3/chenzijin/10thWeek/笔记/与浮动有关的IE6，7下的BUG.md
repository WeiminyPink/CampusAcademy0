1、**IE6下的双边距BUG**：在IE6下，块元素同时有浮动和横向     margin时，横向的margin值会被放大成两倍。
    ==解决办法==：display:inline;
2、**IE6，7下li的间**隙：在IE6，7下li本身没浮动，但li内     容有浮动的时候li下边就会产生几像素的间隙。
    ==解决办法==：1、给li加浮动。2、给li加vertical-align:top;
3、**图片下方有间隙**
    ==解决办法==：img{vertical-align:top;}