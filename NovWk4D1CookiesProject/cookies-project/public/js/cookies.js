function setCookie(name, value) {
  document.cookie = `${name}=${value}`
}

let getCookies = () => {
  return document.cookie.split("; ")
};

let getCookieValue = name => {
  let cookies = document.cookie.split("; ")
  for (i = 0; i < cookies.length; i++) {
    let value = cookies[i].split("=")
    if (value[0] === name)
      return value[1];
  }
  return null;
}

let deleteCookie = name => {
  if (getCookieValue(name)) {
    document.cookie = `${name}=; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
  } else {
    return "Sorry, your cookie is not available and probably never will be!  Please don't check back later!"
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  document.cookie = "monster_name=cookie";
  setCookie("Basille", "Mint")
  setCookie("Vanilla", "Fbombs")
  setCookie("RoastBeef", "Tacos")
  setCookie("Mint", "ScoutGirls")
  
  window.alert(document.cookie)

  // let randomNumGen = () => {
  //   let maxLimit = 100
  //   return randomNum = Math.floor(Math.random() * maxLimit)
  // }

  // setCookie("randomNum", randomNumGen);
  // const randomNumCookie = getCookieValue("randomNum")

  // let newWindow = window.open(
  //   "https://e.ggtimer.com/",
  //   "e.ggtimer",
  //   "width=175, height=175"
  // )
  // newWindow.resizeTo(randomNumCookie, randomNumCookie)

  let cookieMaker = document.getElementById("create-cookie");

  let cookieButtonMaker = () => {
    setCookie(document.getElementById("cookie-name").val, document.getElementById("cookie-value").val)
    document.getElementById("cookie-name").val = "";
    document.getElementById("cookie-value").val = "";
    console.log(getCookies());
  };

  cookieMaker.addEventListener("click", cookieButtonMaker);
});
