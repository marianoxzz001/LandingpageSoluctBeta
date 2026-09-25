# Solv — exploração visual local

Esta versão está em `Rascunho/LandingpageSoluctBeta`. A pasta `LandingpageSoluctBeta copy` continua como referência original. A pasta `lading-page` não foi alterada nesta rodada.

## Abrir

```sh
npm run dev -- --host 127.0.0.1
```

Acesse http://127.0.0.1:5173. O servidor fica restrito à máquina local. Nenhum deploy, commit ou push foi feito nesta rodada.

## Direção visual

- Hero com título editorial, chamada comercial e fluxo orgânico de 28.000 partículas que se transforma em uma interface.
- Movimento contínuo suave, transformação cíclica e vinculada à rolagem, com profundidade em resposta ao ponteiro na hero.
- Temas claro/escuro preservados; favicon existente preservado.
- Entradas suaves, parallax atmosférico limitado a 48px e deslocamento dos títulos limitado a 16,8px. Cartões da equipe sem hover.
- Demonstração “essência.” retirada da página e preservada em Projects.jsx para referência futura. Os links agora levam às soluções, não a um portfólio.

Referências consultadas: https://2025.unseen.co/ e https://www.matsimon.dev/blog/building-an-interactive-3d-hero-animation . Implementação própria, sem copiar assets.

## Peso e comportamento

Three.js carregado em um módulo separado com React.lazy. Sem vídeos, texturas, modelos remotos, pós-processamento ou novas dependências. A cena usa duas chamadas de desenho (superfícies de luz e partículas) e densidade de pixels limitada a 1,5. Pausa fora da tela ou com aba oculta. A preferência de movimento reduzido desativa o loop contínuo e os efeitos de rolagem. Há uma alternativa CSS para ausência de WebGL.

Build da segunda rodada: aproximadamente 76,4 kB gzip de JS principal, 132,8 kB gzip de cena e 6,9 kB gzip de CSS. Esses números não incluem a fonte Manrope do Google Fonts, herdada do projeto. Vite ainda avisa sobre o módulo 3D acima de 500 kB sem compressão; o módulo já é carregado separadamente. Não são medidas de FPS ou Lighthouse.

## Verificação

- `npm run build`: passou.
- `npm run lint`: passou.
- Inspeção visual no navegador em desktop 1440px, temas claro e escuro, e viewport de 390px.
- Canvas WebGL renderizado e nenhum erro/warning observado no console durante a inspeção.
- Links internos para soluções/equipe e ausência de overflow horizontal verificados.

## Conteúdo ainda provisório

Número do WhatsApp, e-mail, redes sociais, nomes, fotos e biografias da equipe já eram placeholders e continuam pendentes dos dados reais. Não foram inventados clientes, depoimentos ou resultados. A imagem OG referenciada em index.html também continua pendente. A versão específica para internet lenta fica para outra rodada.

## Ajustes da segunda rodada

- Ícones oficiais do WhatsApp (preto na hero e branco nos botões verdes), sem alterações de desenho ou cor. Origem em public/WHATSAPP-ASSET.md.
- CTA da hero nomeia explicitamente o WhatsApp.
- Google Meu Negócio removido.
- Preferência de movimento reduzido também pode ser alterada durante a sessão: animações de rolagem são desmontadas e a cena fica estática.
- Sem novas dependências. Ativos de marca armazenados localmente; nenhuma requisição à Meta ao abrir a página.

## Terceira rodada

- Hero com um único link: WhatsApp. Removidos o link secundário e a faixa “O próximo passo começa aqui”.
- Benefícios sem hover. Equipe substituída por perfis editoriais compactos, sem retratos fictícios ou molduras. Nomes e descrições continuam aguardando dados reais.
- Rodapé com redes sociais sem caixa esticada, alinhadas verticalmente ao contato.
- Nova passagem “Da sua ideia. Ao mundo real.” entre hero e benefícios: composição sticky curta, tipografia em direções opostas e órbita com escala/perspectiva vinculadas à rolagem nativa. Sem novas bibliotecas, vídeos ou canvases; atualizações limitadas por requestAnimationFrame e pela visibilidade da seção. Movimento reduzido elimina o efeito e a permanência sticky.
- Movimento verificado no navegador em dois pontos da rolagem (valores de deslocamento, perspectiva e escala diferentes); inspeção visual desktop escuro e celular claro de 390px, sem overflow horizontal.
- Build e lint passaram. JS principal ~76,6 kB gzip, cena 132,8 kB gzip, CSS ~7,1 kB gzip. Permanece o aviso de tamanho do chunk Three.js sem compressão, já carregado separadamente.
