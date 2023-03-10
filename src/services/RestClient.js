import axios from 'axios';

export async function get(url, headers = {}) {
  if (localStorage.getItem('token') != undefined) {
    headers = {
      ...headers,
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
  }
  return await axios.get(url, {
    ...headers,
    headers: { ...headers?.headers, 'Access-Control-Allow-Origin': '*' },
  });
}

export async function post(url, body, headers = {}) {
  if (localStorage.getItem('token') != undefined) {
    headers = {
      ...headers,
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
  }
  return await axios.post(url, body, {
    ...headers,
    headers: { ...headers?.headers, 'Access-Control-Allow-Origin': '*' },
  });
}

export async function update(url, body, headers = {}) {
  if (localStorage.getItem('token') != undefined) {
    headers = {
      ...headers,
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
  }
  return await axios.put(url, body, {
    ...headers,
    headers: { ...headers?.headers, 'Access-Control-Allow-Origin': '*' },
  });
}

export async function distory(url, body, headers = {}) {
  if (localStorage.getItem('token') != undefined) {
    headers = {
      ...headers,
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
  }
  return await axios.delete(url, {
    ...headers,
    headers: { ...headers?.headers, 'Access-Control-Allow-Origin': '*' },
    data: body,
  });
}
