type DonutCursorProviderProps = {
  children: any,
  configSettings: any
}

export function DonutCursorProvider({ children, configSettings }: DonutCursorProviderProps): JSX.Element;
export function ChangeCursor(newState: string): void;

export type Center = {
  width: number,
  transition: number,
  color: string,
  img: any,
}
export type Ring = {
  width: number,
  transition: number,
  border: string,
  img: any,
}
export type DonutProperty = {
  center: Center,
  ring: Ring,
  click: {
    center: Center, ring: Ring
  }
}