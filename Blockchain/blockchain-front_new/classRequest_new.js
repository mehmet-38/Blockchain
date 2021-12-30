class Request {
  constructor(url) {
    this.url = url;
  }

  async get(getWithIndexNumber) {
    const response = await fetch(this.url + "/" + getWithIndexNumber);
    const responseData = await response.json();
    return responseData;
  }

  async post(data) {
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const responseData = await response.json();
    return responseData;
  }

  async patch(hash, data, updateWithIndexNumber) {
    const response = await fetch(
      this.url + "/" + hash + "/" + updateWithIndexNumber,
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    );
    const responseData = await response.json();
    return responseData;
  }
}
