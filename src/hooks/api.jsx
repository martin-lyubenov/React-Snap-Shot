function useApi() {
  const host = "https://api.flickr.com";

  async function request(method, url, data) {
    const options = {
      method: method,
      headers: {},
    };

    if (data) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(data);
    }

      const response = await fetch(host + url, options);

      let result;

      if (response.status != 204) {
        result = await response.json();
      }

      if (response.ok === false) {
        const error = result;
        throw error;
      }

      return result;
  
  }

  const get = request.bind(null, "GET");

  const post = request.bind(null, "POST");

  const put = request.bind(null, "PUT");

  const del = request.bind(null, "DELETE");

  return {
    get,
    post,
    put,
    del
  }

}

export default useApi;
