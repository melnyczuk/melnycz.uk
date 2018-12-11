export default function makeClassesClassName(classes, standard = '') {
  return [ standard, ...classes ].join(' ');
}
