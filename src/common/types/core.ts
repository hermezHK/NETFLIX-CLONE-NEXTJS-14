export type Variant =
  | "primary"
  | "default"
  | "secundary"
  | "danger"
  | "warning"
  | "success"
  | "ligth"
  | "info"
  | "transparent"
  | "dark"
  | "link";

export type TextVariant =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export type Size = "small" | "medium" | "large";

export type ButtonVariant = "submit" | "reset" | "button";

export type Theme = "dark" | "light" | "transparent";

export type User = {
  name: string;
  email: string;
  password: string;
  avatar: string;
}
