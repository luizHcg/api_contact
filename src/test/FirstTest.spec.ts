import Contact from "../model/Contact";

test('Esperando inicialização, criação de objeto.', () => {
    const contact = new Contact(
        'Teste de criação do assunto',
        'Não tem',
        'Isso e apenas um teste.'
    )

    expect(contact.getEnterprise()).toEqual('Não tem')
    expect(contact.getMessage()).toEqual('Isso e apenas um teste.')
    expect(contact.getSubject()).toEqual('Teste de criação do assunto')
});
