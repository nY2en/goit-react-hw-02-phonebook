import styled from '@emotion/styled';

export const Form = styled.form`
  width: 400px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 8px;

  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-bottom: 24px;
`;

export const Span = styled.span`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  border: 1px solid gray;
  border-radius: 5px;
  padding-left: 8px;
`;

export const Button = styled.button`
  display: block;
  background-color: #ffffff;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 4px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: gray;
    color: #ffffff;
  }
`;
