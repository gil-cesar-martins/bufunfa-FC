from django import forms
from django.core.mail.message import EmailMessage

class ContatoForm(forms.Form):
    email = forms.EmailField(label='E-mail', max_length=100)
    assunto = forms.CharField(label='Assunto', max_length=100)
    mensagem = forms.CharField(label='Mensagem', widget=forms.Textarea())
    
    def send_mail(self):
        email = self.cleaned_data['email']
        assunto = self.cleaned_data['assunto']
        mensagem = self.cleaned_data['mensagem']
        
        conteudo = f'Email: {email}\nAssunto: {assunto}\nMensagem: {mensagem}'
        
        mail = EmailMessage(
            subject=assunto,
            body=conteudo,
            from_email='bilu@gmail.com.br',
            to=['bilu@gmail.com.br',],
            headers={'Reply-To':email}
        )
        mail.send()   