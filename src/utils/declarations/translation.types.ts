export type DeepPartial<T> = {
  [P in keyof T]: DeepPartial<T[P]>;
};

export interface ITranslation {
  pages: {
    home: Record<string, Record<string, string>>;
  };
  navigation: Record<string, string>;
  btn: Record<string, string>;
  alts: Record<string, string>;
  forms: Record<string, Record<string, string>>;
  notifications: Record<string, string>;
}
