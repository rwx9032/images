function FindProxyForURL(url, host) {
  if (isPlainHostName(host)|| dnsDomainIs(host, "mitm.it") || dnsDomainIs(host, ".mihoyo.com") || dnsDomainIs(host, ".hoyoverse.com") || dnsDomainIs(host, ".yuanshen.com")) {
    return "PROXY 192.168.1.10:54321";
  } else {
    return "DIRECT";
  }
}
