function FindProxyForURL(url, host) {
  if (isPlainHostName(host)|| dnsDomainIs(host, "mitm.it") || dnsDomainIs(host, ".mihoyo.com") || dnsDomainIs(host, ".hoyoverse.com") || dnsDomainIs(host, ".yuanshen.com")) {
    return "PROXY 1.casks.me:8899";
  } else {
    return "DIRECT";
  }
}
