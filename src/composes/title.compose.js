import { translate } from 'src/helpers/translate';
import { useRoute } from 'vue-router';

export function useTitle() {
  const route = useRoute();

  function setRouteTitle() {
    document.title = translate(route.meta.title);
  }
  function setTitle(title) {
    document.title = title;
  }

  return { setRouteTitle, setTitle };
}
