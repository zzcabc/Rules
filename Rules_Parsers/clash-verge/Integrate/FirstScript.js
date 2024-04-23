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
  return params;
}
