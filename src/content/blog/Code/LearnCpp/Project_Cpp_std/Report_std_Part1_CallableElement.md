---
title: C++ 可调用对象
pubDate: 2024-09-10 00:58:44
description: 关于 C++ 中的可调用对象
image: https://raw.githubusercontent.com/shigure-no-wokka/pic_bed/main/imgs/family_code.jpg
categories:
    - Code
tags:
    - Cpp
    - CallableElement
    - std::function
    - std::bind
    - lambda
---

# 可调用对象

**可调用对象（CallableElement）**：包括普通函数、函数指针、有 `operator()` 成员函数的类对象、可转为函数指针的类对象、类成员函数指针

它们的定义方式不同，但可能存在统一的**调用特征（Call Signature）**

比如：

```Cpp
// 普通函数
int Add(int a, int b)
{
    return a + b;
}

// lambda表达式
auto Mod = [] (int a, int b)
{
    return a % b;
}

// 函数对象类
struct Divide
{
    int operator()(int denominator, int divisor)
    {
        return denominator / divisor;
    }
};
```

虽然定义形式各异，但都具有统一的调用特征：`int(int, int)`

<!--more-->

## 函数指针

类似普通的指针，函数指针就是一个指向**特定函数类型**的指针，它涉及到两个关键属性：**返回值类型**和**参数类型**

比如这个函数：`bool IsItemLocked(int InItemUID);`

函数类型为：`bool(int)`，因此对应的函数指针可以定义为：`bool (*FuncPtr)(int);`

也可以直接将函数名赋值给函数指针：`FuncPtr = IsItemLocked`，函数名会自动转换为函数指针，和`FuncPtr = &IsItemLocked`结果相同

**注意事项**：
- 不能直接将函数作为形参传递，但是函数指针可以
- `decltype(IsItemLocked)`返回的是函数类型，不是指针类型，使用`using`和`typedef`时也要注意
- 如果要返回一个函数指针，需要显式定义返回类型

```Cpp
using F = int(int*, int);       // 定义了一个函数类型
using PF = int(*)(int*, int);   // 定义了一个函数指针

F Func1(int);  // 错误
PF Func2(int); // 正确返回函数指针

int (*Func3(int))(int*, int); // 注意这个解读顺序
auto Func4(int)->int(*)(int*, int);
```

> `int (*Func3(int))(int*, int);`
> 
> 首先`Func3(int)`显然是一个函数，左侧的`*`表明返回值是一个指针
> 最右侧的`(...)`表明这是一个函数指针
> 最后，最左侧的`int`和最右侧的`(int*, int)`则表明了该函数指针指向一个的类型为：`int(int*, int)`的函数

似乎只要函数签名一致，函数指针就可以指向？

- 指向普通的全局函数或静态函数，要求函数签名一致
- 指向成员函数
  - 静态成员函数，同上
  - 非静态成员函数依赖于对象实例，即存在一个隐含的第一个参数`this`，要求保留上下文环境，硬要创建一个非静态成员函数指针，调用时需要通过某个对象实例来进行调用`void (ClassA::*FuncPtr)(int) = &ClassA::MemberFunction; ObjA.*FuncPtr(10);`
- Lambda 表达式
  - 和非静态成员函数同理，Lambda 表达式可能存在捕获上下文的情况，此时无法用函数指针指向
  - 如果不需要捕获上下文，就可以转换为一各普通的函数指针，`auto MyLambda = [](int x){ return x; }; void (*FuncPtr)(int) = MyLambda;`


**总结**
- 函数指针是一种特殊的指针类型，其类型依赖于函数的返回值类型和参数类型，即函数的调用特征
