function joinClasses(props) {
  const { classes } = props;
  return [...classes].join(' ') || null;
}

export {
  joinClasses
}