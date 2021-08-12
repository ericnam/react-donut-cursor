import { isMobile } from "react-device-detect";
export const WrapperForDesktop = (Wrapper: any, wrapperProps: any, children: () => JSX.Element): JSX.Element => {
  if (!isMobile) {
    return (<Wrapper {...wrapperProps} >{children()}</Wrapper>);
  }
  return children();
}