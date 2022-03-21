import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ $justify }) => ($justify ? $justify : "center")};
  align-items: ${({ $align }) => ($align ? $align : "center")};
  flex-direction: ${({ $direction }) => ($direction ? $direction : "row")};
  column-gap: ${({ $colGap }) => ($colGap ? $colGap : "normal")};
  row-gap: ${({ $rowGap }) => ($rowGap ? $rowGap : "normal")};
  margin-top: ${({ $mt }) => ($mt ? $mt : "0")};
  margin-bottom: ${({$mb }) => ($mb ? $mb : "0")};
`
