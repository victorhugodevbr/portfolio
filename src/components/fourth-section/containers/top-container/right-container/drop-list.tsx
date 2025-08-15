"use client";

import { useState } from "react";
import { styled } from "styled-system/jsx";
import { AnswerText, QuestionText } from "../../../typography/text";
import { ArrowIcon } from "../../../assets/icons/arrow";

const DropListContainer = styled('button', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    borderRadius: '16px',
    padding: '24px 32px',
    width: '100%',
    fontFamily: 'SF Pro Display',
    position: 'relative',
    cursor: 'pointer',
    gap: '16px',
  },
});

const Question = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
});


export function FaqDropList({ title, answer }: { title: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <DropListContainer onClick={() => setOpen((v) => !v)}>
      <Question>
        <QuestionText>{title}</QuestionText>
        <ArrowIcon open={open} />
      </Question>
      {open && (
        <AnswerText>{answer}</AnswerText>
      )}
    </DropListContainer>
  );
}