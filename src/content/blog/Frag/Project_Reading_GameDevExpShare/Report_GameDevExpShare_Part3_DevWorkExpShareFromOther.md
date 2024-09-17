---
title: 游戏开发经验分享 Part3 来自他人的工作总结
pubDate: 2024-09-17 01:13
description: 来自一位大佬的两年与三年的工作总结分享
image: https://raw.githubusercontent.com/shigure-no-wokka/pic_bed/main/imgs/family_frag.jpg
categories: 
    - Frag
tags:
    - GameDevelopment
    - DevelopmentWorkExperienceShare
---

CSDN 上看到的一位老哥的工作总结分享, 这里主要结合自己 3 个月工作经验思考一下自己以后的成长之路

<!--more-->

## How to Learn Programming Language

根据老哥在[文中](https://blog.csdn.net/zolo_mario/article/details/122449811)的分类我属于**已经工作**, 那么就去尝试精通一门语言

目前我的工作是 UE 客户端开发, 业务开发上主要用 UnLua, 这里则确定优先精通 Lua 这门语言, 其次是 C++


**何为精通?**
- 了解语言的各种角落和细节
- 了解语言特性背后的权衡
- 了解如何使用该语言去解决问题


**需要专注的部分:**
- 运行时
  - 语言的运行时(提升业务能力, 尤其是性能上), 可以去读 Lua 的几篇论文
  - 运行时源码(Lua 开源)
- 编译时
  - 唯一问题: 编译慢(特指 C++ -> [编译优化方向](https://tech.meituan.com/2020/12/10/apache-kylin-practice-in-meituan.html))


**编程语言的组成:**
- 内嵌语言?
- 语法
  - 基本数据类型
    - 规格: 精度, 大小
    - 默认值
    - cast
    - 比较
  - 常用集合类型
    - string, list, dict 等
    - 数据结构
    - 常用机制
  - 控制流: condition 真假, switch 等
  - 函数
    - 作用域不同的全局函数和类函数
    - lambda 闭包, 延迟, auto
    - 重载的 resolve 规则
  - 模块机制: 项目文件管理,
    - 如何分文件夹?
    - 如何保证重构(移动文件位置后)?
    - 如何连接 3rd party?
    - 如何保证 3rd party 的版本?
  - 类
    - 继承机制, 多继承, 多态的方式
    - 访问修饰符, 如何指定规范, 保证合适的权限
  - 修饰符: 配置语义, 是语言的语法特性
  - 语法糖
  - 类型系统 / data model
  - 内存管理, 变量的生命周期
    - GC
    - 无 GC, 考虑作用域等


## How to Read Tec Book

> [!IMPORTANT]
> 优先购买英文版

1. **明确需求**

在选择阅读技术书籍之前, 需要明确**自己的需求是什么**

2. **大纲 + 目录**

无论有没有明确的需求, 都可以按照以下方式进行:
- **阅读前言 + 第一章**: 书的主要内容都在这里了
- **根据目录筛选所需章节(需求, 或者兴趣)**

总之, **记住知识的索引**

根据关键点构成整本书的框架, 通过 google 这些关键点获取到更多的信息

3. **把书读薄**

将书中无关紧要的部分剔除出去

> [!NOTE]
> 原文中老哥展示了其纸质版书籍的二次加工
> 丢掉了无用部分, 将需要的部分重新装订为了类似讲义稿的形式

对于电子版书籍
- **一本原版用于保留**
- **一本删减版用于阅读和查阅**


## Learn from Other's Work Experience

**两个最重要的部分:**
- Rule No.1 到点下班
- Rule No.2 长期主义

**几个可参考的开发原则:**
- DRY = Do not Repeat Yourself
- KISS = Keep It Simple and Stupid
- GTD = Get Things Done
- Done is better than perfect

**保持成长:**
- 大量阅读, 动手实践, 总结笔记, 输出文章
- 根据[游戏程序员的成长之路](https://github.com/miloyip/game-programmer)定制的自己的成长路径 -> [游戏开发之路: 个人成长规划](../Project_GameDev_Self/Report_GameDev_Self.md)
