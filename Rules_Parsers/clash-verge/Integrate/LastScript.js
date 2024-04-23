// Define the `main` function

function main(params) {
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
        "name": "YouTube",
        "type": "select",
        "proxies": ["GlobalMedia"],
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
        "name": "SpeedTest",
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
  
    const nameYouTube = proxyGroups.filter((group) => "YouTube" === group.name );
    if(nameGlobalMedia){
      nameYouTube[0].proxies = nameYouTube[0].proxies.concat(allProxy);
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
    const rules = [
      "RULE-SET,Direct,DIRECT",
      "GEOSITE,tracker,DIRECT",
      "RULE-SET,Reject,AdBlock",
      "GEOSITE,category-ads-all,AdBlock",
      "GEOSITE,openai,OpenAI",
      "RULE-SET,OpenAI,OpenAI",
      "RULE-SET,Apple,AppleAndMicrosoft",
      "RULE-SET,Microsoft,AppleAndMicrosoft",
      "GEOSITE,paypal,GameAndPayPal",
      "RULE-SET,PayPal,GameAndPayPal",
      "RULE-SET,Game,GameAndPayPal",
      "RULE-SET,YouTube,YouTube",
      "GEOSITE,youtube,YouTube",
      "RULE-SET,GlobalMedia,GlobalMedia",
      "RULE-SET,Bilibili,Bilibili",
      "GEOSITE,bilibili,Bilibili",
      "GEOSITE,biliintl,Bilibili",
      "DOMAIN-SUFFIX,cnbeta.com.tw,Proxy",
      "DOMAIN,cnbeta.com.tw,Proxy",
      "RULE-SET,PROXY,Proxy",
      "GEOSITE,geolocation-!cn,Proxy",
      "GEOSITE,apple,AppleAndMicrosoft",
      "GEOSITE,microsoft,AppleAndMicrosoft",
      "RULE-SET,SpeedTest,SpeedTest",
      "RULE-SET,Domestic,Domestic",
      "RULE-SET,MainlandMedia,Domestic",
      "GEOSITE,CN,Domestic",
      "GEOIP,CN,Domestic",
      "MATCH,Others"
    ];
    params["rules"] = rules;
    console.log(params);
    return params;
  }
  