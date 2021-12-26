import React, { useState } from "react"
import { emailRegexp, lastNameRegexp, nameRegexp, passwordRegexp } from "../../Regexp/Regexp";
import { Body, EmailInput, EmailSection, Form, FormsGrup, FormSide, Lists, GendrLable, Header, Input, Lable, Logo, Radion, RegistrList, Title, Select, Option, Range, NumSection, RanjeNum, File, Age, TextArea, ButtonSection, Button } from "./RegistrationStyle";

const RegistrPage = () => {
  const [option, setOption] = useState({
    name: {value: "", isValide: true},
    lastname: {value: "", isValide: true},
    email: {value: "", isValide: true},
    password: {value: "", isValide: true},
  })

  const handelValidation = (key, value) => {
    if(key === "name") return nameRegexp.test(value);
    if(key === "lastname") return lastNameRegexp.test(value);
    if(key === "email") return emailRegexp.test(value);
    if(key === "password") return passwordRegexp.test(value);
  }

  const handleChackInputs = (key, ev) => {
    setOption((prevOption) => ({
      ...prevOption,
      [key]: {
        value: ev.target.value,
        isValide: handelValidation(key, ev.target.value)
      }
    }));
  };

  const [num, setNum] = useState(0)

  function handleRange(ev){
     
    console.log(ev.target.value, 'lllaaaa')
  }

  // isValid={!option.name.isValid}
  return(
    <Body>
      <RegistrList>
       <Header>
         <Title>Create Account</Title>
       </Header>
       <Form>
        <FormsGrup>
          <FormSide>
            <Lable for="forst-name">First name*</Lable>
            <Input
             isValid={!option.name.isValide}
             onChange={(ev) => handleChackInputs('name', ev)}
             value={option.name.value}
             placeholder="first name"/>
          </FormSide>
          <FormSide>
            <Lable for="last-name">Last name</Lable>
            <Input
             onChange={(ev) => handleChackInputs('lastname', ev)}
             value={option.lastname.value}
             placeholder="last name"/>
          </FormSide>
        </FormsGrup>
        <EmailSection>
          <Lable for="email">Email*</Lable>
          <EmailInput
           isValid={!option.email.isValide}
           onChange={(ev) => handleChackInputs('email', ev)}
           value={option.email.value}
           placeholder="Enter your email"
           type="email"/>
        </EmailSection>
        <FormsGrup>
          <FormSide>
            <Lable for="password">Password*</Lable>
            <Input
             isValid={!option.password.isValide}
             onChange={(ev) => handleChackInputs('password', ev)}
             value={option.password.value}
             placeholder="Password"
             type="password"/>
          </FormSide>
          <FormSide>
            <Lable for="password">Confirm Password*</Lable>
            <Input
            //  onChange={(ev) => handleChackInputs('password', ev)}
            //  value={option.password.value}
             placeholder="Confirm Password"/>
          </FormSide>
        </FormsGrup>
        <FormsGrup>
          <FormSide>
            <Lable for="forst-name">Gander:</Lable>
            <Lists>
            <GendrLable><Radion type="radio"/>Mail</GendrLable>
            <GendrLable><Radion type="radio"/>Fimail</GendrLable>
            </Lists>
          </FormSide>
          <FormSide>
            <Lable for="last-name">Hobbies</Lable>
            <Lists>
             <GendrLable><Radion type="radio"/>Music</GendrLable>
             <GendrLable><Radion type="radio"/>Sport</GendrLable>
             <GendrLable><Radion type="radio"/>Travel</GendrLable>
             <GendrLable><Radion type="radio"/>Muvise</GendrLable>
            </Lists>
           
          </FormSide>
        </FormsGrup>

        <FormsGrup>
          <FormSide>
            <Lable for="forst-name">Sourse of income:</Lable>
            <Lists>
             <Select>
               <Option>Employed</Option>
               <Option>Self-Enployed</Option>
               <Option>Unemployed</Option>
             </Select>
            </Lists>
          </FormSide>
          <FormSide>
            <Lable for="last-name">Income</Lable>
            <Lists>
              <Range type="range"  
              //  value={num} 
               onChange={handleRange}/>
              <NumSection>
                <RanjeNum>{num}</RanjeNum>
              </NumSection>            
            </Lists>
          </FormSide>
        </FormsGrup>
        <FormsGrup>
          <FormSide>
            <Lable for="forst-name">Uploid Profile Pichture:</Lable>
            <Lists>
            <File type="file"/>
            </Lists>
          </FormSide>
          <FormSide>
            <Lable for="last-name">Age</Lable>
            <Lists>
             <Age type="number" min="18" max="80"/>
            </Lists>
          </FormSide>
        </FormsGrup>
        <EmailSection>
          <Lable for="era">Bio*</Lable>
          <TextArea></TextArea>
        </EmailSection>
        <ButtonSection>
          <Button>SIGIN UP</Button>
        </ButtonSection>
       </Form>
      </RegistrList>
          <Logo/>
      </Body>
  );
}

export default RegistrPage;

