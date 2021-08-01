type DonutCursorProviderProps = {
  children: any,
  configSettings: any
}

export function DonutCursorProvider({ children, configSettings }: DonutCursorProviderProps): JSX.Element;
export function ChangeCursor(newState: string): void;

export type ComponentProperty = {
  width: number,
  transition: number,
  color: string,
  img: any,
}

export type DonutProperty = {
  center: ComponentProperty,
  ring: ComponentProperty
}