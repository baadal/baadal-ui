export interface StringIndexable<T = any> {
  [key: string]: T;
}

export interface MouseEventHandler<T> {
  (e: React.MouseEvent<T, MouseEvent>): void;
}
