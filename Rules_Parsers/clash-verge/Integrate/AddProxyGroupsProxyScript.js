// Define the `main` function

function main(params) {
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
    return params;
  }
  