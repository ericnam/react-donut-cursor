type DonutCursorProviderProps = {
  children: React.ReactNode,
  base: DonutConfig,
  hover: DonutConfig,
  classArr: DonutCustomClass
}

export function DonutCursorProvider({ children, base, hover, classArr }: DonutCursorProviderProps): JSX.Element;
export function DonutConsumer({ children }: { children: React.ReactNode }): JSX.Element;

export interface Center {
  width?: string;
  height?: string;
  transition?: string;
  lag?: string;
  backgroundColor?: string;
  display?: string;
  jsx?: any;
}

export interface Ring {
  width?: string;
  height?: string;
  transition?: string;
  lag?: string;
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: string;
  display?: string;
}

export interface DonutConfig {
  center?: Center;
  ring?: Ring;
  click?: {
    center?: Center; ring?: Ring
  }
}

export interface DonutCustomClass {
  [key: string]: DonutConfig
}[];