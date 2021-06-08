declare module '*.graphql' {
  import { DocumentNode } from 'graphql';

  const graphql: DocumentNode;
  export default graphql;
}

declare module '*.scss' {
  const scss: Record<string, string>;
  export default scss;
}

declare module '*.md' {
  const md: string;
  export default md;
}
