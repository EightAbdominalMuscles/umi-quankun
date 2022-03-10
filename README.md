## 说明文档
### 框架使用说明
  https://umijs.org/zh-CN/plugins/plugin-qiankun
### 响应式布局说明
  https://github.com/evrone/postcss-px-to-viewport
  在.umi.js中修改 viewportWidth（设计图多宽就设置多大）

### 新建子应用
  1. 复制粘贴demo并修改名称为A项目
  2. A项目修改成固定端口号  .env文件中修改port值
  3. 在根文件下package.json中添加启动命令（如demo信息所示）
  4. 在main主项目 main/config/qiankun.js 中添加 子项目信息 （如demo信息所示）

### 插件引入
  https://umijs.org/zh-CN/plugins/plugin-qiankun    qiankun umi插件
  npm-run-all https://www.npmjs.com/package/npm-run-all 可以并行或顺序地运行多个npm脚本
### 配置
> 1. 配置一键启动所有 程序
  下载 npm-run-all package.json添加 
```
  "scripts": {
    "start": "npm-run-all --parallel start:*",
    "start:base": "cd base && umi dev",
    "start:app1": "cd app1 && umi dev",
  }
```
