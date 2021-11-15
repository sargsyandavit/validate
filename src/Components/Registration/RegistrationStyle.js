import styled, { css } from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #bb4886;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1230px){
      display: flex;
      flex-direction: column;
      height: auto;
  }
`;

export const RegistrList = styled.div`
  width: 700px;
  height: 90vh;
  background-color: #fefefe;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  @media (max-width: 1230px){
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 70px;
  background-color: #cbcccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0px 0px;
`;

export const Title = styled.h1`
  color: #717172;
  font-size: 25px;
  font-weight: 600;
  font-family:  monospace;
`;

export const Form = styled.form`
  width: 95%;
  margin: 0 auto;
`;

export const FormsGrup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const FormSide = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const Lable = styled.label`
  font-size: 16px;
  color: #5cb892;
  font-weight: 700;
`;

export const Input = styled.input`
  height: 30px;
  font-size: 16px;
  padding: 0 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid silver;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  ${props => props.isValid && css`
    border: 2px solid red;
  `}
`;

export const EmailSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const EmailInput = styled.input`
  height: 30px;
  font-size: 16px;
  padding: 0 5px;
  outline: none;
  border-radius: 5px;
  border: 1px solid silver;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  ${props => props.isValid && css`
    border: 2px solid red;
  `}
`;

export const Lists = styled.div`
  color: black;
  display: flex;
  align-items: center;
`;

export const GendrLable = styled.label`
  font-size: 16px;
`;

export const Radion = styled.input`
  font-weight: 16px;
`;

export const Select = styled.select`
  width: 300px;
  height: 30px;
  font-size: 16px;
  padding: 0 5px;
  border-radius: 5px;
  outline: none;
  background-color: white;
  border: 1px solid silver;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
`;

export const Option = styled.option`
  font-size: 16px;
`;

export const Range = styled.input`
  width: 280px;
  cursor: pointer;
`;

export const NumSection = styled.div`
  width: 40px;
  height: 30px;
  background-color: #5cb993;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`;

export const RanjeNum = styled.span`
  font-size: 15px;
`;

export const File = styled.input`
  width: 250px;
  font-size: 14px;
  margin-top: 5px;
`;

export const Age = styled.input`
  width: 300px;
  height: 25px;
  font-size: 16px;
  padding: 0 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid silver;
  margin-top: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  height: 80px;
`;

export const ButtonSection = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 250px;
  height: 60px;
  background-color: #5cb993;
  color: white;
  border-radius: 10px;
  padding: 5px;
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 20px;
  font-family: monospace;
  cursor: pointer;
`;




export const Logo = styled.div`
  width: 500px;
  height: 90vh;
  background-color: white;
`;