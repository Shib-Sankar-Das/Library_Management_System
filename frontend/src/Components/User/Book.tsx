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
const Book: React.FC<{data:props,user:z.infer<typeof UV>}> = ({data,user}) => {
  const RequestHandler=()=>{
    const BorrowRequest :z.infer<typeof BorrowRequestValidator> = {
      ISBN:data.ISBN,
      UserID:user._id,
      UserName:user.Name,
      UserEmail:user.Email,
      BookName:data.Name,
    };
    fetch('/api/borrow-book',
      { 
        method:"post",
        body:JSON.stringify(BorrowRequest),
        headers:{
          "Content-Type": "application/json"
        }
      })
      .then((res)=>{
        if(res.status==200)
          toast.success(res.statusText,BottomToastOption);
        else
          toast.error(res.statusText,BottomToastOption);
        return res.json();
      })
      .then(d=>d)
      .catch(console.error);
  }
  return (
    <>
    <BookContainer onContextMenu={(e)=>{
      e.preventDefault();
      (document.getElementById(data._id)! as HTMLDialogElement).showModal();
    }}>
        <dialog id={data._id} className=" rounded-md  p-2 bg-blue-800 absolute">
          <button onClick={()=>{
            RequestHandler();
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