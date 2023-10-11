export function getProvider(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          resolve(response);
        } else {
          reject(new Error("XHR request failed with status: " + xhr.status));
        }
      }
    };

    xhr.send();
  });
}
