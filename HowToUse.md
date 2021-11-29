下载 [FakeIP-Config.yaml](https://github.com/zzcabc/Rules/tree/main/FakeIP-Config.yaml) 和 [Rules-Complete](https://github.com/zzcabc/Rules/tree/main/Rules-Complete)

顺序如下：

config.yaml最上面

proxies:    这里是节点配置 

proxy-groups:    这里是分组配置

rules.yaml最下面


以Rules-Complete.yaml举例，为了方便我默认将国外流媒体均分配至GlobalTV组，如果你想把Netflix单独分组，请将rules中的 `  - RULE-SET,Netflix,GlobalTV` GlobalTV改成Netflix。

在proxy-groups:下
```yaml
- name: Netflix   # 这里是上面设置的名称，可以为任意
  type: select    # select 手动选择，
                  # url-test 自动测速，
                  # fallback 默认第一个，若第一个不可用，切换第二个
                  # load-balance 负载均衡
                  # relay 链式，你的流量从第一个，流向最后一个在访问互联网
  proxies: 
    - hk节点1      # 这些节点必须和proxies中的name一致
    - hk节点2
    - jp节点1
    - jp节点2
  url: http://www.gstatic.com/generate_204 # 除select 其他都必加
  interval: 600  # 测试间隔单位秒
```
