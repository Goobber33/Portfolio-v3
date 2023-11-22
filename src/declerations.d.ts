declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
  }

  declare module '*.jpeg' {
    const content: string;
    export = content;
}