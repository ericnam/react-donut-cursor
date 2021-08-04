type DonutCursorProviderProps = {
  children: React.ReactNode,
  base: DonutConfig,
  hover: DonutConfig,
  classArr: DonutCustomClassArray
}

export function DonutCursorProvider({ children, base, hover, classArr }: DonutCursorProviderProps): JSX.Element;
export function DonutConsumer({ children }: { children: React.ReactNode }): JSX.Element;

export type Center = {
  width: string,
  height: string,
  transition: string,
  lag: string,
  backgroundColor: string,
  display: string,
  jsx: any,
}
export type Ring = {
  width: string,
  height: string,
  transition: string,
  lag: string,
  borderWidth: string,
  borderColor: string,
  borderStyle: string,
  display: string,
}
export type DonutConfig = {
  center: Center,
  ring: Ring,
  click: {
    center: Center, ring: Ring
  }
}

export type DonutCustomClassArray = {
  className: string,
  config: DonutProperty
}[];