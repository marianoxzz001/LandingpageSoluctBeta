# Solv

**Soluções digitais pensadas para a realidade de cada negócio.**

Site institucional da Solv, de Chapecó, SC. Apresenta nossas soluções, a equipe e os canais de contato.

🌐 **[Acesse solv.website](https://solv.website/)**

## Tecnologias

React · Vite · Tailwind CSS · Three.js · Firebase Hosting

## Rodar localmente

Pré-requisitos: **Git e Node.js 24**, com npm.

```bash
git clone https://github.com/marianoxzz001/LandingpageSoluctBeta.git
cd LandingpageSoluctBeta
npm ci
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente `http://localhost:5173`. Use esse endereço em vez de abrir `index.html` diretamente.

Faça suas alterações em uma branch e abra um pull request para `main`.

## Onde alterar

| Conteúdo | Arquivo ou pasta |
| --- | --- |
| Textos e seções | `src/pages/` |
| Estilos e cores | `src/index.css` e `tailwind.config.js` |
| Fotos da equipe | `public/team/` e `src/pages/About.jsx` |
| WhatsApp, e-mail e Instagram | `src/App.jsx` e `src/pages/FooterContact.jsx` |
| Título e compartilhamento do site | `index.html` e `public/og-image.*` |

## Build e prévia

```bash
npm run build
npm run preview
```

Confira a prévia no endereço exibido e encerre o servidor com `Ctrl+C` quando terminar. O build é gerado em `dist/`.

## Publicar no Firebase

O site usa **Firebase Hosting**, no projeto **`solv-cf55a`**. Cada integrante precisa entrar com uma conta Google que tenha permissão para publicar nesse projeto.

Na primeira vez, execute na pasta do repositório:

```bash
npx --yes firebase-tools login --interactive
npx --yes firebase-tools projects:list
```

Conclua o login no navegador e confira se `solv-cf55a` aparece na lista. Se não aparecer, confirme a conta usada e peça acesso ao responsável pelo projeto.

Depois que as alterações estiverem na `main`, publique:

```bash
git switch main
git pull --ff-only
npm ci
npm run build
npx --yes firebase-tools deploy --only hosting --project solv-cf55a
```

Esse comando atualiza o site **em produção**. Aguarde `Deploy complete!` e confira:

- [solv.website](https://solv.website/)
- [solv-cf55a.web.app](https://solv-cf55a.web.app/)

A configuração já está em `.firebaserc` e `firebase.json`; não é necessário executar `firebase init`. Fazer push no GitHub, sozinho, não publica o site.

Se o login expirar, use `npx --yes firebase-tools login --reauth --interactive`. Se o Chrome mostrar a versão antiga após o deploy, segure `Shift` e clique em recarregar.

Referências: [Firebase CLI](https://firebase.google.com/docs/cli) e [Firebase Hosting](https://firebase.google.com/docs/hosting/quickstart).

## Contato

- E-mail: [sol@solv.website](mailto:sol@solv.website)
- Instagram: [@solv_tec](https://www.instagram.com/solv_tec/)
