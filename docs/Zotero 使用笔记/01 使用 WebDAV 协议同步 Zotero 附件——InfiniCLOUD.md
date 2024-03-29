---
tags:
  - Zotero
date: 2024-03-28
---

# 01 使用 WebDAV 协议同步 Zotero 附件——InfiniCLOUD

## 简介

Zotero 的附件同步方案有很多种类型，早期比较主流的是借助 Zotfile 把所有附件都保存在一个文件夹中，就可以使用各大网盘的文件夹同步功能进行同步，但是这种方案已经不被推荐。

还可以使用官网同步服务来同步文件，对于不喜欢折腾和不差钱的人来说是最优解，Zotero 官方同步价格如下：

| Storage Limit | Cost (USD)                          |
| ------------- | ----------------------------------- |
| 300 MB        | Free                                |
| 2 GB          | $20/year (equal to $1.67 per month) |
| 6 GB          | $60/year (equal to $5 per month)    |
| Unlimited     | $120/year (equal to $10 per month)  |

可以发现，这个价格很贵，所以大多数人不会考虑使用官方服务。

第三种方法就是使用 WebDAV 协议来同步附件，这也是目前最推荐、最主流的选择。

## WebDAV 方案对比

目前市场上支持 WebDAV 的服务主要有坚果云和 InfiniCLOUD 两家。

当然也可以自己购买云服务器搭建 WebDAV 服务，但是云服务器一般需要 400 元/年（学生优惠除外），并且云服务的带宽很贵，这个价位一般在 4Mbps，只能说勉强够用，同步一篇 20MB 的学位论文需要 40 秒，显然是体验不佳的，这个价位可能还不如直接买官方的同步服务。

但是如果自己手里正好有一个带宽比较大，并且比较便宜的云服务器，确实可以顺手开启 WebDAV 服务给 Zotero 用。

### 坚果云

坚果云(NutsCloud)是一家提供云存储和云协作服务的科技公司,成立于 2012 年,总部位于广州。

坚果云支持 WebDAV 协议，所以可以用于 Zotero 的文件同步，但是免费版的坚果云每个月只有 1G 的上传流量和 3G 的下载流量，并且空间也是受限于上传流量，也就是不能保存超过 1G 的文件，很显然这是不够用的。

因此，如果要使用坚果云，那么意味着必须购买专业版，专业版的价格是 199.9 元/年，42G 空间，高级专业版是 399.9 元/年，96G 空间，显然，这个价格也略贵。

![](Pasted%20image%2020240328203708.png)
![](Pasted%20image%2020240328211256.png)
![](Pasted%20image%2020240329144158.png)

### InfiniCLOUD

InfiniCLOUD（之前也叫 teracloud）是一个面向企业的云计算服务平台,由一家总部位于美国的公司 Infini 提供。它旨在为企业提供灵活、可扩展和高性能的云资源,以满足不同规模企业的各种 IT 需求。

InfiniCLOUD 支持 WebDAV 协议，拥有永久免费的 15GB 存储空间。有时候填写问卷还能额外获得 1G 的空间，有效期 1 年，问卷每隔几个月就会有，会发送到注册的邮箱。

因此，使用 InfiniCLOUD 来存储 Zotero 附件是一个很好的选择，但是 InfiniCLOUD 毕竟是一个国外的网盘服务，因此在国内使用网速比较慢，最好能配合 🪜 使用。

## 使用 InfiniCLOUD 同步 Zotero 文件

1. 点击下方链接进入官网，注册账号

   [InfiniCLOUD (infini-cloud.net)](https://infini-cloud.net/en/)

2. 进入`My Page`页面，记下 WebDAV 连接网址，账号，密码
   ![](Pasted%20image%2020240328212035.png)
3. 打开 Zotero，在`Edit -> Settings -> Sync`中选择同步方式为 WebDAV，填入以下信息
   ![](Pasted%20image%2020240328204620.png)
4. 点击`Verify Server`验证服务器是否能够连接
   成功连接后，进入 InfiniCLOUD 的文件管理器[InfiniCLOUD File Browser (teracloud.jp)](https://ise.teracloud.jp/browser/)
   可以看到有一个 zotero 文件夹，里面保存了 Zotero 的附件
   ![](Pasted%20image%2020240328211930.png)
