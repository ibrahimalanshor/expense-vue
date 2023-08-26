import * as layouts from 'src/components/layouts';

export function useLayout(app) {
  for (const layout in layouts) {
    app.component(layouts[layout].name, layouts[layout]);
  }
}
