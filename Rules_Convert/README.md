# 订阅转换文本

Complete是详细规则

Integrate是合并规则

## 订阅转换内容具体描述

```ini
; 文件头不要动
[custom]

; 取 http://example.com/example ，作为AdBlock的文件并取名规则集叫AdBlock，
; 更新时间是86400秒，class-classic是clash的一种规则类型
; 类似下面的情况，但是大多数不使用规则集
;  Reject:
;    behavior: classical
;    interval: 86400
;    path: ./Rules/Reject
;    type: http
;    url: "https://endpoint.fastgit.org/https://github.com/zzcabc/Rules/blob/master/Rules_Provider/Complete/Other/Reject.yaml"
ruleset=AdBlock,clash-classic:https://endpoint.fastgit.org/https://github.com/zzcabc/Rules/blob/master/Rules_Provider/Integrate/Reject.yaml,86400

; 取一个分流组的名称叫Proxy，对一个clash的select，第一个节点是Fallback的分流组，剩下的是全部的节点
; 类似下面的情况
;  - name: Proxy
;    type: select
;    proxies:
;      - Fallback
;      - xxx
custom_proxy_group=Proxy`select`[]Fallback`.*

```
