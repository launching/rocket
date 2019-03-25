# Rocket

# 项目启动

    //安装基础依赖
    npm install
    //启动mock数据
    npm run mock
    //启动服务
    npm run server

# 项目介绍

## mock数据介绍

启动mock后显示数据(npm run mock)

    Resources
    http://localhost:8888/base_user
    http://localhost:8888/user

直接在浏览器打开即可，详情参考[json-server](https://github.com/typicode/json-server)rest接口为更好的模拟接口访问情况，配置后端路由转换，

    http://localhost:8888/base_user //被转换成如下
    http://localhost:8888/base/user

## 文件系统介绍

components文件为rockets组件目录采用自动加载，如:

    ./components/Table.vue

将在Vue全局组册`RoTable`为名称的组件

## 服务功能

1. 用户管理

2. 角色管理

3. 权限管理

4. 字典管理

## 组件功能

1. table 表格

2. 表格


