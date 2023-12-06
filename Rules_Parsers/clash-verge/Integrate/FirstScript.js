// Define the `main` function

function main(params) {
    let deleteFieds = [
      "port",
      "socks-port",
      "redir-port",
      "mixed-port",
      "allow-lan",
      "mode",
      "log-level",
      "ipv6",
      "external-controller",
      "clash-for-android",
      "profile",
      "experimental",
      "dns",
      "proxy-groups",
      "rules"
    ]
    deleteFieds.forEach(field => {
      delete params[field];
    })
    params["mixed-port"] = 7890
    params["allow-lan"] = true
    params["ipv6"] = true
    params["unified-delay"] = false
    params["tcp-concurrent"] = true
    params["bind-address"] = "*"
    params["mode"] = "rule";
    params["log-leve"] = "silent"
  
    params["geodata-mode"] = true
    params["geox-url"] = {
      "geoip": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.dat",
      "geosite": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat",
      "mmdb": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/country.mmdb"
    }
  
    params["find-process-mode"] = "strict"
  
    params.profile = {
      "store-fake-ip": true,
      "store-selected": true
    }
  
    params.sniffer = {
      "enable": true,
      "sniff": {
        "TLS": {"ports":[443,8443]},
        "HTTP": {
          "ports": [80,8080,8880],
          "override-destination": true
        }
      }
    }
  
    params.dns = {
      "enable": true,
      "ipv6": true,
      "listen": "0.0.0.0:53",
      "default-nameserver": [
        '114.114.114.114',
        '180.76.76.76',
        '1.2.4.8',
        '8.8.8.8',
        '8.8.4.4',
        '1.1.1.1',
        '1.0.0.1',
        '4.2.2.1',
        '4.2.2.2',
       // "[2400:3200:baba::1]:53"
      ],
      "enhanced-mode": "redir-host",
      "use-hosts": true,
      "nameserver": [
        'udp://223.5.5.5',
        'udp://180.76.76.76',
        'udp://1.2.4.8',
        'udp://210.2.4.8',
        'tcp://114.114.114.114',
        'tls://1.12.12.12',
        'tls://120.53.53.53',
        'tls://dns.alidns.com',
        'tls://dot.pub',
        'tls://dot.360.cn',
        'https://223.5.5.5/dns-query',
        'https://223.6.6.6/dns-query',
        'https://dns.alidns.com/dns-query',
        'https://doh.pub/dns-query',
        'https://1.12.12.12/dns-query',
        'https://120.53.53.53/dns-query',
        'https://doh.360.cn/dns-query',
        //"[2400:3200::1]:53",
        //"[2400:3200:baba::1]:53",
        //'https://2400:3200::1/dns-query',
        //'https://2400:3200:baba::1/dns-query',
        //"[2402:4e00::]:53",
        //"[2400:da00::6666]:53",
        //"[2001:dc7:1000::1]:53",
        //"[240C::6666]:53",
        //"[240C::6644]:53",
        //'tls://dns.ipv6dns.com',
        //'https://dns.ipv6dns.com/dns-query',
        //"[2001:cc0:2fff:1::6666]:53",
        //"[2001:cc0:2fff:2::6]:53",
        //"[2001:da8::666]:53",
        //"[2001:da8:8000:1:202:120:2:101]:53",
        //"[2001:da8:202:10::36]:53",
        //"[2001:da8:202:10::37]:53",
        //"[2001:da8:208:10::6]:53",
        //"[2001:da8::666]:53"
      ],
      "fallback": [
        'tls://dns.google',
        'tls://dns.adguard.com',
        'tls://dns-family.adguard.com',
        'tls://dot.sb',
        'tls://1dot1dot1dot1.cloudflare-dns.com',
        'tls://one.one.one.one',
        'https://dns.google/dns-query',
        'https://dns.google/resolve',
        'https://dns.quad9.net/dns-query',
        'https://doh.opendns.com/dns-query',
        'https://1.1.1.1/dns-query',
        'https://1.0.0.1/dns-query',
        'https://cloudflare-dns.com/dns-query',
        'https://dns.adguard.com/dns-query',
        'https://doh.dns.sb/dns-query',
        'https://doh.sb/dns-query',
        'https://public.dns.iij.jp/dns-query',
        'https://doh-jp.blahdns.com/dns-query',
        //'https://[2001:4860:4860::64]/dns-query',
        //'https://[2001:4860:4860::6464]/dns-query',
        //'https://[2606:4700:4700::1111]/dns-query',
        //'https://[2606:4700:4700::1001]/dns-query',
        //'https://[2606:4700:4700::64]/dns-query',
        //'https://[2606:4700:4700::6464]/dns-query',
        'https://dns.quad9.net/dns-query',
        'https://dns11.quad9.net/dns-query'
      ],
      "proxy-server-nameserver": [
        "https://doh.pub/dns-query",
        "https://dns.google/dns-query"
      ],
      "nameserver-policy": {
        "geosite:private": [
          "https://doh.pub/dns-query",
          "https://dns.alidns.com/dns-query"
        ],
        "geosite:geolocation-!cn": [
          "https://dns.cloudflare.com/dns-query",
          "https://dns.google/dns-query"
        ]
      },
      "fake-ip-filter": [
        "*.lan",
        "*.localdomain",
        "*.example",
        "*.invalid",
        "*.localhost",
        "*.test",
        "*.local",
        "*.home.arpa",
        'time.*.com',
        'time.*.gov',
        'time.*.edu.cn',
        'time.*.apple.com',
        'time1.*.com',
        'time2.*.com',
        'time3.*.com',
        'time4.*.com',
        'time5.*.com',
        'time6.*.com',
        'time7.*.com',
        'ntp.*.com',
        'ntp1.*.com',
        'ntp2.*.com',
        'ntp3.*.com',
        'ntp4.*.com',
        'ntp5.*.com',
        'ntp6.*.com',
        'ntp7.*.com',
        "*.time.edu.cn",
        "*.ntp.org.cn",
        "+.pool.ntp.org",
        'music.163.com',
        "*.music.163.com",
        "*.126.net",
        'musicapi.taihe.com',
        'music.taihe.com',
        'songsearch.kugou.com',
        'trackercdn.kugou.com',
        "*.kuwo.cn",
        'api-jooxtt.sanook.com',
        'api.joox.com',
        'joox.com',
        'y.qq.com',
        "*.y.qq.com",
        'streamoc.music.tc.qq.com',
        'mobileoc.music.tc.qq.com',
        'isure.stream.qqmusic.qq.com',
        'dl.stream.qqmusic.qq.com',
        'aqqmusic.tc.qq.com',
        'amobile.music.tc.qq.com',
        "*.xiami.com",
        "*.music.migu.cn",
        'music.migu.cn',
        "*.msftconnecttest.com",
        "*.msftncsi.com",
        'msftconnecttest.com',
        'msftncsi.com',
        'localhost.ptlogin2.qq.com',
        'localhost.sec.qq.com',
        "+.srv.nintendo.net",
        "+.stun.playstation.net",
        'xbox.*.microsoft.com',
        'xnotify.xboxlive.com',
        "+.battlenet.com.cn",
        "+.wotgame.cn",
        "+.wggames.cn",
        "+.wowsgame.cn",
        "+.wargaming.net",
        'proxy.golang.org',
        'stun.*.*',
        'stun.*.*.*',
        "+.stun.*.*",
        "+.stun.*.*.*",
        "+.stun.*.*.*.*",
        'heartbeat.belkin.com',
        "*.linksys.com",
        "*.linksyssmartwifi.com",
        "*.router.asus.com",
        'mesu.apple.com',
        'swscan.apple.com',
        'swquery.apple.com',
        'swdownload.apple.com',
        'swcdn.apple.com',
        'swdist.apple.com',
        'lens.l.google.com',
        'stun.l.google.com',
        "+.nflxvideo.net",
        "*.square-enix.com",
        "*.finalfantasyxiv.com",
        "*.ffxiv.com"
      ],
      "fallback-filter": {
        "geoip": true,
        "getip-code": "CN",
        "ipcidr": [
          '0.0.0.0/8',
          '10.0.0.0/8',
          '100.64.0.0/10',
          '127.0.0.0/8',
          '169.254.0.0/16',
          '172.16.0.0/12',
          '192.0.0.0/24',
          '192.0.2.0/24',
          '192.168.0.0/16',
          '192.88.99.0/24',
          '198.18.0.0/15',
          '198.51.100.0/24',
          '203.0.113.0/24',
          '224.0.0.0/4',
          '240.0.0.0/4',
          '255.255.255.255/32'
        ],
        "domain": [
          "+.facebook.com",
          "+.githubusercontent.com",
          "+.google.com",
          "+.youtube.com"
        ]
      }
    }
  
    params["proxy-groups"] = [
      {
        "name": "Proxy",
        "type": "select",
        "proxies": ["DIRECT"],
        "url": "http://cp.cloudflare.com/generate_204",
        "interval": 600
      },
      {
        "name": "AdBlock",
        "type": "select",
        "proxies": ["REJECT", "DIRECT", "Proxy"],
        "url": "http://cp.cloudflare.com/generate_204",
        "interval": 600
      },
      {
        "name": "Domestic",
        "type": "select",
        "proxies": ["DIRECT", "Proxy"],
        "url": "http://cp.cloudflare.com/generate_204",
        "interval": 600
      },
      {
        "name": "Others",
        "type": "select",
        "proxies": ["Proxy", "DIRECT"],
        "url": "http://cp.cloudflare.com/generate_204",
        "interval": 600
      },
      {
        "name": "Bilibili",
        "type": "select",
        "proxies": ["DIRECT"],
        "url": "http://cp.cloudflare.com/generate_204",
        "interval": 600
      },
      {
        "name": "GlobalMedia",
        "type": "select",
        "proxies": ["Proxy"],
        "url": "http://cp.cloudflare.com/generate_204",
        "interval": 600
      },
      {
        "name": "OpenAI",
        "type": "select",
        "proxies": ["Proxy"],
        "url": "http://cp.cloudflare.com/generate_204",
        "interval": 600
      },
      {
        "name": "AppleAndMicrosoft",
        "type": "select",
        "proxies": ["DIRECT", "Proxy"],
        "url": "http://cp.cloudflare.com/generate_204",
        "interval": 600
      },
      {
        "name": "GameAndPayPal",
        "type": "select",
        "proxies": ["DIRECT", "Proxy"],
        "url": "http://cp.cloudflare.com/generate_204",
        "interval": 600
      },
      {
        "name": "Speedtest",
        "type": "select",
        "proxies": ["DIRECT", "Proxy"],
        "url": "http://cp.cloudflare.com/generate_204",
        "interval": 600
      }
    ]
    const proxyGroups = params["proxy-groups"];
    const allProxy = params.proxies.map((proxy) => proxy.name);
    const nameProxy = proxyGroups.filter((group) => "Proxy" === group.name );
    if(nameProxy) {
      nameProxy[0].proxies = allProxy;
    }
  
    const nameGlobalMedia = proxyGroups.filter((group) => "GlobalMedia" === group.name );
    if(nameGlobalMedia){
      nameGlobalMedia[0].proxies = nameGlobalMedia[0].proxies.concat(allProxy);
    }
  
    const nameOpenAI = proxyGroups.filter((group) => "OpenAI" === group.name );
    if(nameOpenAI){
      nameOpenAI[0].proxies = nameOpenAI[0].proxies.concat(allProxy);
    }
    const nameAppleAndMicrosoft = proxyGroups.filter((group) => "AppleAndMicrosoft" === group.name );
    if(nameAppleAndMicrosoft){
      nameAppleAndMicrosoft[0].proxies = nameAppleAndMicrosoft[0].proxies.concat(allProxy);
    }
  
    const nameGameAndPayPal = proxyGroups.filter((group) => "GameAndPayPal" === group.name );
    if(nameGameAndPayPal){
      nameGameAndPayPal[0].proxies = nameGameAndPayPal[0].proxies.concat(allProxy);
    }
  
    const bilibiliRegex = /港|HK|hk|Hong Kong|HongKong|hongkong|台|臺灣|新北|彰化|TW|Taiwan|澳门|澳門/
    const bilibiliProxies = params.proxies.filter((e) => bilibiliRegex.test(e.name)).map((e) => e.name);
    const nameBilibili = proxyGroups.filter((group) => "Bilibili" === group.name );
    if(nameBilibili){
      nameBilibili[0].proxies = nameBilibili[0].proxies.concat(bilibiliProxies);
    }
  
  
    console.log(params);
    return params;
  }
  