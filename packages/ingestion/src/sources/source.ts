export interface Source {
    start(callback: (log: string) => void): void;
  }