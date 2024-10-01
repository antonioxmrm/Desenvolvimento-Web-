function doPost(e) {
    var formResponseUrl = 'https://docs.google.com/forms/d/e/YOUR-FORM-ID/formResponse';
    
    // Coletar os dados de 'e' e enviar para o Google Forms usando o URL
    // Processar a resposta conforme necessário.
    
    return ContentService.createTextOutput('Formulário enviado com sucesso!');
  }
  