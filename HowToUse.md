下载 [FakeIP-Config.yaml](https://github.com/zzcabc/Rules/tree/main/FakeIP-Config.yaml) 或 [RedirHost-Config.yaml](https://github.com/zzcabc/Rules/tree/main/RedirHost-Config.yaml) 和 [Rules-Complete](https://github.com/zzcabc/Rules/tree/main/Rules-Complete)

顺序如下： **在一个yaml中放置**

FakeIP-Config.yaml 或者 RedirHost-Config.yaml 在最上面这里是通用配置格式，根据自己需求更改，默认不启动ipv6

proxies:    这里是节点配置 根据你节点类型执行填写

proxy-groups:    这里是分组配置

rules.yaml最下面 你可以直接复制[Rule-CDN.yaml](https://github.com/zzcabc/Rules/blob/main/Rules-Complete/Rule%20CDN.yaml) 使用，也可以根据需求更改


以Rules-Complete.yaml举例，为了方便我默认将国外流媒体均分配至GlobalTV组，如果你想把Netflix单独分组，请将rules中的 `  - RULE-SET,Netflix,GlobalTV` GlobalTV改成Netflix。

在proxy-groups:下
```yaml
- name: Netflix   # 这里为rules最后面的名称，有几种rule就有几个group name
                  # - RULE-SET,Netflix,GlobalTV 这里有GlobalTV， proxy-groups就要有GlobalTV 
  type: select    # select 手动选择，
                  # url-test 自动测速，
                  # fallback 默认第一个，若第一个不可用，切换第二个
                  # load-balance 负载均衡
                  # relay 链式，你的流量从第一个，流向最后一个在访问互联网
                  # 流量从hk节点1，流向hk节点2，直到jp节点2，最后访问到互联网
  proxies: 
    - hk节点1      # 这些节点必须和proxies中的name一致
    - hk节点2
    - jp节点1
    - jp节点2
  url: http://www.gstatic.com/generate_204 # 除select 其他都必加
  interval: 600  # 测试间隔单位秒
```
