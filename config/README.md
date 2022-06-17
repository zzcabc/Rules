# 订阅转换的文件

|名称|时候启用CDN|注意|
|:--:|:--:|:--:|
|FAST_GITHUB_Full_AdblockPlus|fast的cdn|去广告的，广告规则众多，可能卡顿|
|FAST_GITHUB_Full_No_AdblockPlus|fast的cdn|无广告|
|GITHUB_Full_AdblockPlus|GitHub的源|去广告的，广告规则众多，可能卡顿|
|GITHUB_Full_AdblockPlus|GitHub的源|无广告|

你可以随意对ini文件进行编辑


# 代码解释

## 规则组代码解释
`ruleset=AppleAndMicrosoft,clash-classic:https://endpoint.fastgit.org/https://github.com/zzcabc/Rules/blob/main/Rules-Complete/Provider/Apple.yaml,86400`

格式`Group name,[type:]URL[,interval]`

`ruleset=`是标准规则

`AppleAndMicrosoft`是规则分组名称

`clash-classic:` 是clash的规则组的一种情况

支持的type（类型）包括：surge, quanx, clash-domain, clash-ipcidr, clash-classic，type留空时默认为surge类型的规则

`https://endpoint.fastgit.org/https://github.com/zzcabc/Rules/blob/main/Rules-Complete/Provider/Apple.yaml`

表示引用 `https://endpoint.fastgit.org/https://github.com/zzcabc/Rules/blob/main/Rules-Complete/Provider/Apple.yaml` 规则


`86400`
规则更新间隔为86400秒

## 添加分组解释

```custom_proxy_group=Proxy`select`[]auto-test`.*```

`Proxy`就是上面的的规则分组名称

`select`是该组的选择情况 具体可以看 [HowToUse](https://github.com/zzcabc/Rules/tree/main/HowToUse.md)

`[]auto-test` 代表第一个节点是名字叫做auto-test的组

`.*` 表示添加全部的节点

```custom_proxy_group=auto-test`url-test`.*`http://www.gstatic.com/generate_204`300,,50```

就是下面的样子
```yaml
  - name: auto-test
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    tolerance: 50
    proxies:
```

```custom_proxy_group=AsianTV`select`[]DIRECT`[]Proxy`(HGC|HKBN|PCCW|HKT|深台|彰化|新北|台|HK|hk|tw|TW)```

`(HGC|HKBN|PCCW|HKT|深台|彰化|新北|台|HK|hk|tw|TW)`
 添加含有 例PCCW名称的节点



 `clash_rule_base=url` 添加url的通用规则