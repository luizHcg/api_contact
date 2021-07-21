import Mail from '@controllers/Mail'

test('Conferindo "sendEmail.verifyContent()" esperando receber esperando receber false', function () {
  const sendEmail = new Mail(
    'luizaozaik69@gmail.com',
    'TESTE de envio',
    'Isso e apenas um teste de desenvolvimento.',
    'Luiz Henrique',
    ''
  )

  expect(sendEmail.verifyContent()).toBeFalsy()
})

test('Conferindo "sendEmail.verifyContent()" esperando receber esperando receber true', function () {
  const sendEmail = new Mail(
    'luizaozaik69@gmail.com',
    'TESTE de envio',
    'Isso e apenas um teste de desenvolvimento.',
    'Luiz Henrique',
    'no have'
  )

  expect(sendEmail.verifyContent()).toBeTruthy()
})
