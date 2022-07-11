function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mihoyo.com") || dnsDomainIs(host, ".hoyoverse.com") || dnsDomainIs(host, ".yuanshen.com")) {
    return "PROXY 192.168.0.19:8080";
  } else {
    return "DIRECT";
  }
}
