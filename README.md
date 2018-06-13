#Common js
Some common js plugin or methods.

热更新命令：
>browser-sync start --server --files *

#闭包的理解
避免变量污染
函数作用域是产生闭包的原因
[在程序语言范畴内的“闭包”指的是函数把其中的变量作用域都“包”在该函数的作用域内，形成一个“包”，外部函数无法访问内部变量。所以严格意义上来说，JavaScript 中的函数都是闭包。但我们常说的闭包，通常是指为了让外部函数访问到内部函数中变量，使内部函数返回一个函数，在其中操作内部变量。]

#性能优化
除YAHOO 寻找最短链路（用户到美国服务器），缓存大有可为（服务器端）
缓存大有可为、服务端

#promise


#如何优化 DOM 操作的性能

不要反复使用 DOM 查询操作，应该用变量缓存
避免大量使用会造成重绘的 DOM 操作
多使用 id 选择器

#影响页面重绘的操作
改变 width height、offset 等值
JS动画 换做css动画

#前端渲染和后端渲染的优缺点
前端渲染不利于 seo，可能会增加HTTP请求
后端当一分钟访问量几百万对服务器有压力

#RESTful 的操作名
应该是 GET, POST, DELETE 等

#var a=["a","b","c","d"] 每过 1 秒 alert 一下数组中的值

for(var j = 0; j < 4; j++) {
    (function(i) {
        setTimeout(function() {
            alert(i);  
        }, (i + 1) * 1000);
    })(j);
}
