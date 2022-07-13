export const cookieData = {
  content:
    "By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. ",
  primaryTitle: "Reject All",
  secondaryTitle: "Accept All Cookies",
  notification: "cookie",
};
export function getStartedData(browserWidth) {
  return {
    content:
      "we are currently working on this feature and will be launching soon. In the meantime, you can try resizing the browser window to find out the width of the browser window. ",
    primaryTitle: "See you soon😃.",
    subContent: `your current browser width ${browserWidth}`,
  };
}
