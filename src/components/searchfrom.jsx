import { useState } from 'react';
import { usePersistedstate } from '../lib/usepersisttantstate';
import { styled } from 'styled-components';
import Customradio from '../customradio';
const Search = ({ onsearch }) => {
  const [serachStr, setsearchStr] = usePersistedstate();

  const [searchoption, setsearchoption] = useState('shows');

  const onsearchStrChange = eve => {
    setsearchStr(eve.target.value);
  };

  const onradioclick = eve => {
    setsearchoption(eve.target.value);
  };
  const onsubmit = eve => {
    eve.preventDefault();
    const obj = {
      q: serachStr,
      searchoption,
    };
    onsearch(obj);
  };

  return (
    <>
      <form onSubmit={onsubmit}>
        <SearchInput placeholder="search for something.."value={serachStr} onChange={onsearchStrChange} />
        <RadiosWrapper>
       <Customradio 
         label="Shows"
       type="radio"
       name="search-option"
       value="shows"
       checked={searchoption === 'shows'}
       onChange={onradioclick}
        />
         <Customradio 
           label="Actors"
       type="radio"
       name="search-option"
       value="actors"
       checked={searchoption === 'actors'}
       onChange={onradioclick}
        />
       </RadiosWrapper>
       <SearchButtonWrapper>
        <button type="submit">search</button>
        </SearchButtonWrapper>
      </form>
    </>
  );
};
export default Search;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;