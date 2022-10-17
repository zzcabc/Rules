# Clash For Windows 预处理

预处理可以在原本的配置中添加新的配置

在Clash For Windows(一下简称CFW)中的Settings中进行设置

> Settings
>
> > Profiles
> >
> > > Parsers

加入`Prasers.yaml`的代码

```yaml
parsers: # array
    - reg: https://patriot.ninja//index.+$
      file: "data/Parsers/CleanContent.yaml"
    #- reg: 
    #  file: "data/Parsers/AddProxyNodeUdp.yaml" 
    - reg: 
      file: "data/Parsers/AddMixObject.yaml" 
    - reg: 
      file: "data/Parsers/AddRules.yaml"
    - reg: 
      file: "data/Parsers/AddProxyGroups.yaml"
    - reg: 
      file: "data/Parsers/AddProxyGroupsNode.yaml"
    - reg: 
      file: "data/Parsers/AddRuleProviders.yaml"
```

reg后面需要填写订阅地址，比如订阅地址是`https://www.baidu.com/xxxxxx/xxxx`的格式，你只需要使用`reg: https://www.baidu.com.+$` 即可预处理此订阅，也可以使用`url: https://www.baidu.com/xxxxxx/xxxx` 这样去处理


然后在CFW的根目录创建`data/Parsers`目录 data是开启CFW便携版的方式将需要的yaml文件放入即可


处理时会按从上往下依次进行处理

1. 第一步 CleanContent 清除原有的所有配置(根据自己选择保留还是删除)

```yaml
commands:
  - port-                   #删除自带的port
  - socks-port-             #删除自带的socks-port
  - allow-lan-              #删除自带的allow-lan
  - mode-                   #删除自带的mode
  - log-level-              #删除自带的log-level
  - external-controller-    #删除自带的external-controller
  - secret-                 #删除自带的secret
  - rules-                  #删除自带的规则
  - proxy-providers-        #删除自带的规则集
  - proxy-groups-           #删除自带的删除分流列表
```
```yaml
  - proxy-groups.0-         #删除分流列表的第一个
```

2. 第二步 AddProxyNodeUdp 给节点添加 udp 的支持(根据节点，选择，**非必要**)
```yaml
commands:
  - proxies.0.udp=true
  - proxies.1.udp=true
  - proxies.2.udp=true
  - proxies.3.udp=true
  - proxies.4.udp=true
  - proxies.5.udp=true
  - proxies.6.udp=true
  - proxies.7.udp=true
  - proxies.8.udp=true
  - proxies.9.udp=true
  - proxies.10.udp=true
  - proxies.11.udp=true
```

给 第一个到第十二个节点 添加udp


3. 第三步 AddMixObject 添加通用规则(可以任意的对通用部分进行修改)
```yaml
mix-object:
  mixed-port: 7890
  allow-lan: true
  bind-address: "*"
  mode: rule
  log-level: silent
  experimental:
    ignore-resolve-fail: true
  profile:
    store-fake-ip: true
    store-selected: true
  cfw-conn-break-strategy:
    proxy: all
    profile: true
    mode: true
# ...等等规则
```

4. 第四步 AddRules 添加规则(你可以对最后的比如`AppleAndMicrosoft`进行修改)

```yaml
prepend-rules:
  - RULE-SET,Reject,AdBlock
  - RULE-SET,Special,DIRECT
  - RULE-SET,LAN,DIRECT
  - RULE-SET,Apple,AppleAndMicrosoft
  - RULE-SET,Microsoft,AppleAndMicrosoft
  - RULE-SET,PayPal,GameAndPayPal
  - RULE-SET,Game,GameAndPayPal
  - RULE-SET,Speedtest,Speedtest
  - RULE-SET,Netflix,GlobalTV
  - RULE-SET,Spotify,GlobalTV
  - RULE-SET,YouTube,YouTube
  - RULE-SET,Disney Plus,GlobalTV
  - RULE-SET,Bilibili,AsianTV
  - RULE-SET,iQiyi,AsianTV
  - RULE-SET,Letv,AsianTV
  - RULE-SET,Netease Music,AsianTV
  - RULE-SET,Tencent Video,AsianTV
  - RULE-SET,WeTV,AsianTV
  - RULE-SET,Youku,AsianTV
  - RULE-SET,ABC,GlobalTV
  - RULE-SET,Abema TV,GlobalTV
  - RULE-SET,Amazon,GlobalTV
  - RULE-SET,Apple News,GlobalTV
  - RULE-SET,Apple TV,GlobalTV
  - RULE-SET,BBC iPlayer,GlobalTV
  - RULE-SET,DAZN,GlobalTV
  - RULE-SET,Disney Plus,GlobalTV
  - RULE-SET,encoreTVB,GlobalTV
  - RULE-SET,Fox Now,GlobalTV
  - RULE-SET,Fox+,GlobalTV
  - RULE-SET,HBO,GlobalTV
  - RULE-SET,Hulu,GlobalTV
  - RULE-SET,Japonx,GlobalTV
  - RULE-SET,JOOX,GlobalTV
  - RULE-SET,Line TV,GlobalTV
  - RULE-SET,myTV SUPER,GlobalTV
  - RULE-SET,Niconico,GlobalTV
  - RULE-SET,Pandora,GlobalTV
  - RULE-SET,PBS,GlobalTV
  - RULE-SET,Pornhub,GlobalTV
  - RULE-SET,Soundcloud,GlobalTV
  - RULE-SET,Twitch,GlobalTV
  - RULE-SET,ViuTV,GlobalTV
  - RULE-SET,Bahamut,GlobalTV
  - RULE-SET,KKBOX,GlobalTV
  - RULE-SET,KKTV,GlobalTV
  - RULE-SET,Developer,Proxy
  - RULE-SET,EHantai,Proxy
  - RULE-SET,Google,Proxy
  - RULE-SET,PROXY,Proxy
  - RULE-SET,Scholar,Proxy
  - RULE-SET,Telegram,Proxy
  - RULE-SET,Domestic,Domestic
  - GEOIP,CN,DIRECT
  - MATCH,Others
```

5. 第五步 AddProxyGroups 添加相应的分流组(这里的`name` 必须和第三步中的比如`AppleAndMicrosoft`对应起来，也可以添加不在第三步的名称)
```yaml
prepend-proxy-groups:
  - name: Proxy
    type: select
    proxies:
     - DIRECT
    url: http://cp.cloudflare.com/generate_204
    interval: 600
  - name: AdBlock
    type: select
    proxies:
      - REJECT
      - DIRECT
      - Proxy
    url: http://cp.cloudflare.com/generate_204
    interval: 600
  - name: Domestic
    type: select
    proxies:
      - DIRECT
      - Proxy
    url: http://cp.cloudflare.com/generate_204
    interval: 600
  - name: Others
    type: select
    proxies:
      - Proxy
      - DIRECT
    url: http://cp.cloudflare.com/generate_204
    interval: 600
  - name: AsianTV
    type: select
    proxies:
      - DIRECT
    url: http://cp.cloudflare.com/generate_204
    interval: 600
  - name: YouTube
    type: select
    proxies:
      - GlobalTV
    url: http://cp.cloudflare.com/generate_204
    interval: 600
  - name: GlobalTV
    type: select
    proxies:
      - Proxy
    url: http://cp.cloudflare.com/generate_204
    interval: 600
  - name: AppleAndMicrosoft
    type: select
    proxies:
      - DIRECT
      - Proxy
    url: http://cp.cloudflare.com/generate_204
    interval: 600
  - name: GameAndPayPal
    type: select
    proxies:
      - DIRECT
      - Proxy
    url: http://cp.cloudflare.com/generate_204
    interval: 600
  - name: Speedtest
    type: select
    proxies:
      - DIRECT
      - Proxy
    url: http://cp.cloudflare.com/generate_204
    interval: 600
  - name: Fallback
    type: fallback
    proxies:
    url: http://cp.cloudflare.com/generate_204
    interval: 600
```

6. 第六步 AddProxyGroupsNode 对第四步的添加对应的节点
```yaml
commands:
# Fallback组
  - proxy-groups.Fallback.proxies+[]groupNames|select
# Proxy组第一个为Fallback分组
  - proxy-groups.Proxy.proxies+[]groupNames|Fallback
# Proxy组之后为每组的select分组
  - proxy-groups.Proxy.proxies.1+[]groupNames|select
# Proxy组的select节点之后为节点名称
  - proxy-groups.Proxy.proxies.14+[]proxyNames|-
# AsianTV组，第一个是直连，之后为香港，台湾的组
  - proxy-groups.AsianTV.proxies.1+[]groupNames|TW-Detour-select|IEPL-HK-select|HKT-Detour-select
# AsianTV组，细致的节点
  - proxy-groups.AsianTV.proxies.4+[]proxyNames|TW|HK
# YouTube组第一个为GlobalTV组，之后为各个selest组
  - proxy-groups.YouTube.proxies.1+[]groupNames|select
# GlobalTV组第一个为Proxy组，之后为各个selest组
  - proxy-groups.GlobalTV.proxies.1+[]groupNames|select
```

说明

- `- proxy-groups.Fallback.proxies+[]groupNames|select` 对proxy-groups的Fallback的分流组添加名称含有select的分流组

- `- proxy-groups.Proxy.proxies+[]groupNames|Fallback` 对proxy-groups的Proxy分流组添加Fallback的分流组

- `- proxy-groups.Proxy.proxies.14+[]proxyNames|-` 对proxy-groups的Proxy分流组的第15个节点之后添加含有-的节点名称


7. 第七步 AddRuleProviders 添加规则集

```yaml
mix-rule-providers:
  ABC:
    behavior: classical
    interval: 86400
    path: ./Rules/Media/GlobalTV/ABC
    type: http
    url: 'https://endpoint.fastgit.org/https://github.com/zzcabc/Rules/blob/main/Rules-Complete/Provider/Media/GlobalTV/ABC.yaml'
  # .....
```