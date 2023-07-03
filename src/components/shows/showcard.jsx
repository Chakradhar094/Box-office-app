import { Link } from "react-router-dom";

import {SearchCard,SearchImgWrapper} from "../common/SearchCard"
import { styled } from "styled-components";
import { StarIcon } from "../common/StarIcon";
const Showcard=({key,name,img,summary,id,onStarclick,starred})=>{
   const summaryStripped=summary?summary.split(' ').slice(0,20).join(' ').replace(/<.+?>/g,'')
   +'...':'No description';
    return (
        
        <SearchCard>
        <SearchImgWrapper>
            <img src={img} alt="no-img" />
            </SearchImgWrapper>
          
            <h1 > {name}</h1>
           
          <div>{summaryStripped}</div>
         <ActionSection>  <a href={`/show/${id}`} target="_blank" rel="noreferrer">read more..</a></ActionSection>
        
        <StarBtn onClick={()=>onStarclick(id)} className={starred?'animate':''}><StarIcon active={starred}/> </StarBtn>
        </SearchCard>
      
       
    );  
}

export default Showcard;



const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;