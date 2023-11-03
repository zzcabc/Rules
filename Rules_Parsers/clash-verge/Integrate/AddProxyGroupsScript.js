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
    return params;
  }
  