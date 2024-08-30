import React from "react";
import { z } from "zod";
import { bookCopySchema } from "../../Validator/BookCopy";
import styled from 'styled-components';
import UV from "../../Validator/UserValidator";
import BorrowRequestValidator from "../../Validator/BorrowRequestObject";
import { toast } from 'react-toastify';
import BottomToastOption from "../../Options/BottomToastOption";
type props = z.infer<typeof bookCopySchema>;
const BookContainer = styled.div`
  position: relative;
  border-radius: 10px;
  width: 280px;
  height: 250px;
  background-color: whitesmoke;
  box-shadow: 1px 1px 12px #000;
  transform-style: preserve-3d;
  perspective: 2000px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: lightgray;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;
  transform-origin: 0;
  box-shadow: 1px 1px 12px #000;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: rotateY(-90deg);
  }
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: bolder;
`;
const Book: React.FC<{data:props}> = ({data}) => {
  
  return (
    <>
    <BookContainer>
        
        <Text style={{textAlign:'left',paddingLeft:"5px", fontSize:'16px'}}>
          {"Author: "+data.Author}
          {<br/>}
          {"Publisher: "+data.Publisher}
          <br/>
          {"Subject: "+data.Subject}
          <br/>
          {"ISBN: "+data.ISBN}
        </Text>
      <Cover 
        style={{
          backgroundImage:`url('${data.ImageLink}')`,
          backgroundPosition:"center center",
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover'
        }}>
        <Text style={{backdropFilter:'blur(5px)',backgroundColor:"#ffffff40",width:'100%'}}>{data.Name}</Text>
      </Cover>
    </BookContainer>
    </>
  );
};
export default Book;