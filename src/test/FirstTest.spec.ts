import Contact from '@models/Contact'

test('Criando Objeto', () => {
  const contact = new Contact(
    'Teste de criação do assunto',
    'Não tem',
    'Isso e apenas um teste.'
  )

  expect(contact.getEnterprise()).toEqual('Não tem')
  expect(contact.getMessage()).toEqual('Isso e apenas um teste.')
  expect(contact.getSubject()).toEqual('Teste de criação do assunto')
})
