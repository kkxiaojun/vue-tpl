# OA
## 使用方法
进入项目运行
```
npm i
或者
yarn install
```

代码提交：会对提交的文案进行规范化，可以使用以下命令提交或者通过其他工具提交，前提是文案描述要符合规范

https://open.leancloud.cn/git-commit-message/
```
npm run commitAll  // 提交所有，会自动add .再提交
npm run commit   // 可以自己手动add需要的文件，再提交
```

本地开发
```
npm run dev

// 可通过env参数切换不同的环境配置
npm run dev -- --env=test
```
打包
```
build-prod 生产线上
build-dev 开发环境
build-test 测试环境
build-grey 灰度测试
build-pre 预发布
```

## 注意事项：
- 尽量提高代码的复用性
- 全局数据放到store里
- 重复性的组件可抽离到src/components
- 重复性的模块可抽离到src/modules
- 重复性的util可抽离到src/utils
- 单个页面的直接在views/xxx/components


