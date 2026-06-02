# Cedrela Tecnologia Ambiental - Site institucional estático

Projeto de site institucional de página única, desenvolvido com HTML5, CSS3 e JavaScript puro, pronto para publicação no GitHub Pages.

## Estrutura dos arquivos

- `index.html`
- `style.css`
- `script.js`
- `README.md`

## 1) Como subir os arquivos no GitHub

1. Crie um novo repositório no GitHub (exemplo: `cedrela-site`).
2. No seu computador, coloque os quatro arquivos na mesma pasta.
3. Inicialize o Git e envie o projeto:

```bash
git init
git add .
git commit -m "Adicionar site institucional estático da Cedrela"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/cedrela-site.git
git push -u origin main
```

## 2) Como ativar o GitHub Pages

1. Acesse o repositório no GitHub.
2. Vá em **Settings** > **Pages**.
3. Em **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` e pasta `/ (root)`
4. Clique em **Save**.
5. Aguarde alguns minutos. O GitHub exibirá a URL pública do site.

## 3) Como alterar textos, cores e informações de contato

### Textos
- Edite diretamente o arquivo `index.html`.
- Cada seção possui `id` e títulos claros para facilitar manutenção.

### Cores
- Edite as variáveis no topo de `style.css` (bloco `:root`).
- Principais variáveis:
  - `--green-900`, `--green-700`, `--green-500`
  - `--gray-100`, `--gray-300`, `--gray-600`
  - `--earth-300`

### Contato
- No `index.html`, altere:
  - E-mail em texto (seção de contato)
  - Número de WhatsApp
  - `action` do formulário (`mailto:...`)

## 4) Como substituir o espaço do logotipo por uma imagem real

Atualmente o cabeçalho usa um placeholder com a classe `.logo-placeholder`.

### Passos:
1. Adicione sua imagem ao projeto, por exemplo: `assets/logo.png`.
2. No `index.html`, substitua:

```html
<div class="logo-placeholder" aria-label="Espaço reservado para logotipo">LOGO</div>
```

por:

```html
<img class="logo-image" src="assets/logo.png" alt="Logotipo Cedrela Tecnologia Ambiental" />
```

3. No `style.css`, ajuste tamanho e encaixe:

```css
.logo-image {
  width: 56px;
  height: 56px;
  object-fit: contain;
}
```

## Observação sobre formulário

Como o GitHub Pages não possui backend nativo, o formulário está preparado para envio via `mailto` (cliente de e-mail local) e para futura integração com serviço externo (ex.: endpoint serverless, form provider etc.).
