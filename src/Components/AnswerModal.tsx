import { useRef } from "react";
import styled from "styled-components";
import { fadeIn } from "../styled-components/Animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import useBooleanData from "../Hooks/useBooleanData";

type ModalProps = {
  // handleCloseModal: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  btnName: string;
  handleAnswerBtn: () => void;
};

function AnswerModal({ setIsOpen, btnName, handleAnswerBtn }: ModalProps) {
  const overLay = useRef(null);
  const { onContentPageMode, onSetWriteMode } = useBooleanData();

  const handleOverLay = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen(false);
  };

  const handleAnswerYes = () => {
    handleAnswerBtn();
  };

  const handleAnswerNo = () => {
    setIsOpen(false);
  };

  const handleExitYes = () => {
    window.history.back();
    onSetWriteMode(false);
    onContentPageMode(true);
  };
  const handleExitNo = () => {
    setIsOpen(false);
  };

  return (
    <ModalContainer>
      <Overlay onClick={handleOverLay} ref={overLay} />

      <ModalBox>
        {btnName === "답변" ? (
          <>
            <AskInfo>답변을 등록하시겠습니까?</AskInfo>
            {/* <ErrorMessage>* 답변을 완성해주세요.</ErrorMessage> */}
            <ContentContainer>
              <BtnBox>
                <CancelBtn onClick={handleAnswerNo}>취소</CancelBtn>
                <SubmitBtn onClick={handleAnswerYes}>등록</SubmitBtn>
              </BtnBox>
            </ContentContainer>
          </>
        ) : (
          <>
            <AskInfo>나가시겠습니까?</AskInfo>
            <ContentContainer>
              <BtnBox>
                <CancelBtn onClick={handleExitYes}>네</CancelBtn>
                <SubmitBtn onClick={handleExitNo}>아니요</SubmitBtn>
              </BtnBox>
            </ContentContainer>
          </>
        )}
      </ModalBox>
    </ModalContainer>
  );
}

export default AnswerModal;

const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  @media (max-width: 375px) {
    height: 100%;
    width: 100%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const ModalBox = styled.div`
  position: relative;
  width: 25rem;
  height: 10rem;
  padding: 40px;
  background-color: white;
  border: 1px solid #9e9e9e;
  transition: 0.2s ease-in;
  border-radius: 10px;
  @media (max-width: 375px) {
    height: 9rem;
    width: 18rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
`;

const AskInfo = styled.div`
  width: 100%;

  left: 0;
  color: #616161;
  margin-bottom: 0.5rem;

`;

const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: -2rem;
  margin-top: 2rem;
  position: relative;
`;

const CancelBtn = styled.button`
  border: none;
  margin-right: 1rem;
  background: none;
  cursor: pointer;
  color: #616161;
  font-size: 1rem;
`;

const SubmitBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #0055fa;
  font-size: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
  position: absolute;
  top: 5rem;
  left: 2.5rem;
`