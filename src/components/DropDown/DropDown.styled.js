import styled from "@emotion/styled";

export const StyleSelect = styled.select`
  width: 100%;
  height: 40px;
  border-radius: var(--border-radius);
  background: var(--background-card);
  padding: 6px;
  color: #c08cf5;
  width: 100%;
  min-width: 140px;
  border: var(--border);
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #005fa3;
  }

  &:focus {
    border-color: #004080;
  }
`;
