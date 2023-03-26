export default class {
  constructor() {}

  setTitle(title) {
    document.title = title;
  }
  // getHtml will be overridden by the child class
  async getHtml() {
    return "";
  }
}
