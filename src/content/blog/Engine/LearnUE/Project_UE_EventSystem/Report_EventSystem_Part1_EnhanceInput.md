---
title: UE 事件系统 Part1 增强输入
pubDate: 2024-08-28 00:29
description: 增强输入模块的一些使用注意
image: https://raw.githubusercontent.com/shigure-no-wokka/pic_bed/main/imgs/family_engine.jpg
categories:
    - Engine
tags:
    - UnrealEngine
    - EventSystem
    - EnhanceInput
---


<!--more-->


相关头文件为：
![](Assets/EnhanceInput_HeaderFile.png)

要在构建文件中添加相关的模块
![](Assets/EnhanceInput_AddModuleName.png)

- [UE5 入门学习笔记（五）——增强输入（Enhanced Input）\_ue5 增强输入-CSDN 博客](https://blog.csdn.net/qq_45523399/article/details/133592212)


![](Assets/Pasted_image_20240827003445.png)
内部设置如下，和直接在项目设置中添加映射方式一样
![](Assets/Pasted_image_20240827003534.png)

只是这里将每一种映射封装成了一个类（？）
![](Assets/Pasted_image_20240827003459.png)
![](Assets/Pasted_image_20240827003511.png)

打开角色蓝图，可以直接在角色蓝图中设置这些键位映射
![](Assets/Pasted_image_20240827003646.png)




