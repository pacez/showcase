
##学以致用
本项目属于学习性质，基于自己构建的angular-template开发单页面应用。

功能点:
<ol>
  <li>search检索。</li>
  <li>关键字高亮。</li>
</ol>

分析：
<ol>
  <li>利用内置filter完成内容检索。</li>
  <li>自己扩展filter:hightLightStr完成关键字高亮。</li>
  <li>利用$sce服务的trustAsHtml方法，插入包含html代码的数据。</li>
  <li>结合materialize进行响应式开发，添加css3动态效果</li>
</ol>

可优化点：
<ol>
  <li>检索性能，目前输入字符长度 > 1 即发生fitler行为，更为优秀的方案我认为是输入结束一定时间后触发filter。</li>
  <li>大数据分段加载</li>
</ol>


访问地址：<a href="http://pacez.github.io/showcase/build/web/index.html">http://pacez.github.io/showcase/build/web/index.html</a>
