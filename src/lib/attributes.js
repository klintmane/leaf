const mapAttr = {
  class: (acc, val) => ({
    ...acc,
    props: { ...acc.props, className: val }
  })
};

export const computeAttrs = attrs =>
  Object.keys(attrs).reduce(
    (result, name) =>
      mapAttr[name]
        ? mapAttr[name](result, attrs[name])
        : { ...result, props: { ...result.props, [name]: attrs[name] } },
    { props: {} }
  );
