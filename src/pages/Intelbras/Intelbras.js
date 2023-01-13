import React from "react";
const IntelBras = () => {
  return (
    <div className="container">
      Primeiro procedimento: RESET
       Atrás do roteador pressione o botão RST/WPS por 30 segundos
       Após isso aguarde um momento e pelo Notebook verifique se aparece a rede INTELBRAS ou INTELBRAS_5G
            Conecte em uma dessas duas redes, mesmo estando sem internet.

            Após isso estando conectado na rede WiFi INTELBRAS acesse o Google Chrome e pesquise por 10.0.0.1

            Aparecera a página do roteador e clique na opção "Iniciar"

            Na próxima página na opção tipo de conexão coloque como modo PPPoE

            No usuário e senha do provedor coloque as seguintes informações, com todas as letras minúsculas:

            Usuário do provedor:
            Senha do provedor:

            Após isso clique em "Próximo"

            Na ultima página será a de configuração da rede WiFi

            Onde tem INTELBRAS coloque o nome de sua preferência
            Na segunda opção coloque a senha da rede WiFi a partir de 8 dígitos

            Na ultima opção "Senha do roteador"  coloque a senha elosuporte1996 com todas as letras minúsculas

            Para concluir clique em "Próximo"
        </div>
    )
}
export default IntelBras;