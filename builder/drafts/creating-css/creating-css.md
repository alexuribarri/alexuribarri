# Creating simple CSS

Styles in this CMS are managed through the style.css in the root folder. But unlike other CMS platforms, the information is not loaded with a separate site, but it is embedded in each and every HTML document created. This allows content to be rendered at page load, avoiding content displacement.

As everythinh with this CMS, CSS will be extremely minimalist. The idea is to maje it responsive with time, but I will start building it for desktop first. Only vanilla CSS will be used.

## Color palette

As we just entered 2024, let's pay tribute to this new year, and use the New York Fashion Week Spring 2024 Color Palette as inspiration. I will use the <a href="https://www.pantone.com/articles/fashion-color-trend-report/new-york-fashion-week-spring-2024" target="__blank">official Pantone website</a> to pick the colors:

| Color         | Pantone     | HEX     |
| ------------- | ----------- | ------- |
| Rooibos Tea   | 18-1355 TCX | #a23c26 |
| Orangeade     | 17-1461 TCX | #e2552d |
| Watercress    | 17-0220 TCX | #748c69 |
| Desert Flower | 15-1435 TCX | #ff9687 |
| Chambray Blue | 15-4030 TCX | #9eb4d3 |
| Pastel Lilac  | 14-3812 TCX | #bcafcf |
| Marlin        | 18-3932 TCX | #515b87 |
| Lemon Drop    | 12-0736 TCX | #fdd878 |
| Mint          | 16-5938 TCX | #00a170 |
| Capri         | 15-4722 TCX | #44bbca |

I was using <a href="https://encycolorpedia.com/" target="__blank">this website</a> to translate Pantone colors to HEX.

- Main color: Marlin
- Main contrast color: Pastel Lilac
- Headers color: Orangeade
- Link colors: Mint

## Dimensions

I will be using <a href="https://www.figma.com/community/file/1165348645914656641" target="__blank">this</a> Figma template for layouts and dimensions, essentially braking the responsivness in two widths: 1280px and 375px.

### Desktop dimensions

- Inner content width: 1000px (header, hero images, main titles)
- Article width: 660px
- Image inside article width: 660px (height 370px)

## Fonts

- Logo: Arial
- Headings: Arial
- Navigation links: arial
- Text: Times New Roman
