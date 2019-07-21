import styled from 'styled-components';

const HeadInfo = styled.div`
  margin-bottom: 1rem;
  min-height: 50px;
`;

const InfoDate = styled.div`
  margin-right; 5px;
  padding-right: 5px;
  border-right: 1px solid #e5e5e5;
`;

const ContainerReadlist = styled.div`
  margin-top: 0.2rem;
`;

const Readlist = styled.div`
  justify-content: space-between;
  margin:0;
`;

const BookName = styled.div`
  width: 120px;
`;

const Subsection = styled.div`
  width: 40px;
  p::after {
    content: " :";
  }
`;

const Verse = styled.div`

`;

const SongContainer = styled.div`
  margin-top: 1rem;
`;

const Song = styled.div`
  margin: 5px 0 5px 0;
`;

const SongName = styled.div`
`;

const SongSpanContainer = styled.div`
  justify-content: space-between;
`;

const SongSpanNumber = styled.span`
  margin: 0 10px 0 10px;
  text-align: center;
`;

const FabButton = styled.button`
  height: 56px;
  width: 56px;
  // z-index: 9999;
  background-color: #666666;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
  cursor: pointer;
  outline: none;
  padding: 0;
  -webkit-user-drag: none;
  font-weight: bold;
  color: #f1f1f1;
  font-size: 18px;
  > * {
    transition: ease-in-out transform 0.2s;
  }
  right: 10px;
  bottom: 10px;
`;

const Styled = {
  BookName,
  ContainerReadlist,
  HeadInfo,
  FabButton,
  InfoDate,
  Readlist,
  Song,
  SongContainer,
  SongName,
  SongSpanContainer,
  SongSpanNumber,
  Subsection,
  Verse,
};

export default Styled;