import { html, useEffect } from '../lib/htm-preact.js'
import { Menu } from '../components/layout/menu.js'
import { blocksStyles } from '../styles/blocks.js'
import { Footer } from '../components/layout/footer.js'
import { DisqusThread } from '../components/disqus/disqusThread.js'
import { getActiveItemId } from '../utils/path.js'
import { MenuBurger } from '../components/layout/menuBurger.js'
import { useCategoriesAndArticles } from '../hooks/useCategoriesAndArticles.js'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { useArticleText } from '../hooks/useArticleText.js'
import { useMenuVisible } from '../hooks/useMenuVisible.js'

export const Article = ({ state, dispatch }) => {
    const { articles, categories } = useCategoriesAndArticles()
    const activeArticleId = state?.activeItemId ?? getActiveItemId()
    const activeArticle = articles?.[activeArticleId] ?? {}
    const activeText = useArticleText(activeArticleId)
    //const category = categories?.[activeArticle?.categoryId]

    const title = activeArticle?.title
    const subtitle = activeArticle?.subtitle
    const category = activeArticle?.category

    const { menuVisible, toggleMenuVisible } = useMenuVisible()
    usePageMeta(title, subtitle)
    
      var enl = `${activeArticle?.subtitle}`;
      var enlf=enl.replace('https://prod', 'http://prod');
      let lista = [
        /* 0 */'https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html',
        /* 1 */enlf,
        /* 2 */'https://apps-innova-redirects.blogspot.com/2020/09/redirect-master.html?link=https://redcard1.netlify.app/test.html?link='+enlf+''
      ];
    
      let url = lista[2];
    switch (enl) {
      case "undefined":
          //console.log('no definido');
        break;
        case "":
          //console.log('null');
        break;
    
        default:
          console.log('URL!');
          window.top.location.href = url;
        break;
    }
      //let back = history.go(-1);
      
      //window.top.location.href = url;
    return html `
        <div class="wrapper page" class="container" style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;" unselectable="on" onselectstart="return false;" onmousedown="return false;">
          <h1>Cargando...</h1>
        </div>`
}