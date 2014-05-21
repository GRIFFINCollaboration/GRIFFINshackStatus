##GRIFFIN Template Page

This repo contains the minimum assets needed to template a page for the GRIFFIN Toolkit and other GRIFFIN-related pages.  GRIFFIN supports the latest version of Firefox and Chrome.

###Usage

  - **Set Title**: Page title is controlled via the attrbutes in the `<branding-head>` xTag; for example, the following header will display the title 'GRIFFIN TEMPLATE':
```
<branding-head experiment='GRIFFIN' subline='TEMPLATE'></branding-head>
```

  - **Content**: All DOM content should be wrapped in `div#mainContent`; any JavaScript to be executed after page load must be placed in the `DOMComponentsLoaded` callback.