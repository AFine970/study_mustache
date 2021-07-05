# mustache 学习笔记

## 快速开始

- 安装依赖

```bash
npm install
```

- 启动

```bash
npm run serve
```

## 概述

根据老师的思路，自己手写了一遍代码

### 项目结构

```text
|-- study_mustache
    |-- .gitignore
    |-- package-lock.json
    |-- package.json
    |-- readme.md
    |-- webpack.config.js
    |-- page
    |   |-- index.html
    |-- src
        |-- index.js 主入口（包含测试案例）
        |-- lookup.js 寻找对象中指定的值
        |-- nestedTokens.js 将一维tokens折叠为多维tokens
        |-- parseTemplateTokens.js 将template字符串转换为token
        |-- parseTokens.js 解析循环的tokens
        |-- renderTemplate.js 获得最终的template和data结合的 DOM 字符串
        |-- Scanner.js Scanner类 实现字符串扫描
```

### 新增的功能

- 循环的 tokens 支持传递对象

好好学习不会差，大家一起进步！
