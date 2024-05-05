declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.woff";
declare module "*.woff2";

declare module "https://fonts.googleapis.com/css2?family=Open+Sans" {
  const fontGlobal: string;
  export default fontGlobal;
}
