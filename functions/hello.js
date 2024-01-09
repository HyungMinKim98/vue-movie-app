exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'HEROPY',
      age: 85,
      email: 'tiger0622@naver.com'
    })
  }
}