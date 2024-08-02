import React from "react";
import { z } from "zod";
import { bookCopySchema } from "../Validator/BookCopy";
import styled from 'styled-components';
import UV from "../Validator/UserValidator";
import BorrowRequestValidator from "../Validator/BorrowRequestObject";
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
const Book: React.FC<{data:props,user:z.infer<typeof UV>}> = ({data,user}) => {
  React.useEffect(()=>{
    const plusOneMonth = (new Date());
    plusOneMonth.setMonth(plusOneMonth.getMonth()+1);
    const YYYY_MM_DD =  Intl.DateTimeFormat('en-CA');
    const BorrowRequest :z.infer<typeof BorrowRequestValidator> = {
      BorrowDate:YYYY_MM_DD.format(new Date()),
      RenewalDate:YYYY_MM_DD.format(plusOneMonth),
      BookID:data._id,
      ISBN:data.ISBN,
      UserID:user._id,
      UserName:user.Name,
      UserEmail:user.Email,
      BookName:data.Name,
    };
    console.log(BorrowRequest);  
  },[]);
  return (
    <>
      
    <BookContainer onContextMenu={(e)=>{
      e.preventDefault();
     (document.getElementById(data._id)! as HTMLDialogElement).showModal();
     
    }}>
        <dialog id={data._id} className=" rounded-md  p-2 bg-blue-800 absolute">
          <button onClick={()=>{
            (document.getElementById(data._id)! as HTMLDialogElement).close();
          }} className="btn bg-blue-700 rounded-md">
          {"Borrow "+data.Name.slice(0,20)+'...'}
          </button> 
        </dialog>
        <Text style={{textAlign:'left',paddingLeft:"5px", fontSize:'16px'}}>
          {"Author: "+data.Author}
          {<br/>}
          {"Publisher: "+data.Publisher}
          <br/>
          {"Subject: "+data.Subject}
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