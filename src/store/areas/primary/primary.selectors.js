import { selectAreas } from '../areas.selectors';

function selectPrimaryAreaState (state, props, opts) {
  const { namespace } = props;
  new Promise((resolve, reject) => {
    selectAreas(state, props, opts)
      .then(areas => resolve(areas[namespace]))
      .catch(() => reject(opts.fallback)
    )
  })
}

export { selectPrimaryAreaState };
