export interface Uniform<T> {
  type: '1f' | '2fv';
  name: string;
  value: T;
}

export type Uniforms = [Uniform<number>, Uniform<[number, number]>];
