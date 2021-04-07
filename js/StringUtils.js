class StringUtils {
  strTool01(str) {
    let c = 0;

    for (let l of str) {
      if (l === "a") {
        c++;
      } else if (l === "e") {
        c++;
      } else if (l === "i") {
        c++;
      } else if (l === "o") {
        c++;
      } else if (l === "u") {
        c++;
      }
    }

    return c;
  }

  strTool02(str) {
    let s = "";

    let a = str.split(" ");

    for (let i = 0; i < a.length; i++) {
      let wl = a[i][0].toUpperCase();
      let wr = a[i].substring(1);

      a[i] = wl + wr;
    }

    s = a.join(" ");

    return s;
  }
}

module.exports = StringUtils;
