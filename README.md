# Cedrela Tecnologia Ambiental - Site institucional estático

Site institucional de página única, desenvolvido com HTML5, CSS3 e JavaScript puro, preparado para publicação no GitHub Pages.

## Estrutura do projeto

- `index.html`
- `style.css`
- `script.js`
- `README.md`

## 1) Como subir os arquivos no GitHub

1. Crie um repositório no GitHub, por exemplo: `cedrela-site`.
2. Coloque os arquivos do projeto na mesma pasta local.
3. Envie o conteúdo para o repositório:

```bash
git init
git add .
git commit -m "Adicionar site institucional da Cedrela"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/cedrela-site.git
git push -u origin main
```

## 2) Como ativar o GitHub Pages

1. Acesse o repositório no GitHub.
2. Abra **Settings** > **Pages**.
3. Em **Build and deployment**:
   - selecione **Deploy from a branch**
   - escolha a branch `main`
   - escolha a pasta `/ (root)`
4. Clique em **Save**.
5. Aguarde a publicação e copie a URL exibida pelo GitHub Pages.

## 3) Como alterar textos, cores e informações de contato

### Textos e seções
- Edite o arquivo `index.html`.
- As seções principais do site estão identificadas por blocos semânticos com `id`, como:
  - `#inicio`
  - `#empresa`
  - `#solucoes`
  - `#metodologia`
  - `#diferenciais`
  - `#contato`

### Cores e estilo visual
- Edite as variáveis CSS no topo do arquivo `style.css`, dentro do bloco `:root`.
- Principais grupos de cores:
  - `--forest-*` para verdes principais
  - `--earth-*` para tons terrosos discretos
  - `--gray-*` para fundos e bordas

### Informações de contato
- No arquivo `index.html`, atualize:
  - e-mail institucional exibido na seção de contato
  - número de WhatsApp
  - cidade/UF
  - link ou nome do LinkedIn
  - `action` do formulário com o e-mail correto no `mailto:`

## 4) Como substituir o espaço do logotipo por uma imagem real

O cabeçalho usa um espaço reservado com a classe `.logo-placeholder`.

### Passos
1. Adicione o arquivo da marca ao projeto, por exemplo: `assets/logo.png`.
2. No `index.html`, substitua este trecho:

```html
<div class="logo-placeholder" aria-label="Espaço reservado para logotipo">LOGO</div>
```

por:

```html
<img class="logo-image" src="assets/logo.png" alt="Logotipo Cedrela Tecnologia Ambiental" />
```

3. No `style.css`, adicione ou ajuste:

```css
.logo-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
}
```

## Observações técnicas

- O site funciona diretamente ao abrir o arquivo `index.html`.
- Não há dependência de backend.
- O formulário está preparado para uso visual e envio via `mailto`, o que depende de cliente de e-mail local.
- Se desejar um envio real sem cliente de e-mail, será necessário integrar um serviço externo compatível com site estático.
