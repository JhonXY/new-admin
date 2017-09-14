import fetch from '@/utils/fetch'

// export function login(username, password) {
//   return fetch ({
//     url: '/api/login',
//     method: 'post',
//     data: {
//       username,
//       password
//     }
//   })
// }
//
// export function getInfo(token) {
//   return fetch ({
//     url: '/api/info',
//     method: 'get',
//     params: { token }
//   })
// }
//
// export function logout() {
//   return fetch ({
//     url: '/api/logout',
//     method: 'post'
//   })
// }

export function login(username, password) {
  return fetch({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'post'
  })
}
