'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Confetti from 'react-confetti';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import useWindowSize from 'react-use/lib/useWindowSize';
import CardPreview from '@/components/CardPreview';
import CustomizeOne from '@/components/CustomizeOne';
import CustomizeTwo from '@/components/CustomizeTwo';
import CustomizeThree from '@/components/CustomizeThree';
import NavBar from '@/components/NavBar';
import NewProgress from '@/components/NewProgress';
import styles from '@/styles/app/newPage.module.scss';

const DEFAULT_FORM_DATA = {
  mediaUrl: '',
  accentColor: '#41C4E0',
  typeface: 'Monserrat',
  fontSize: 'Medium',
  fontColor: '#303030',
  backgroundColor: '#FFFFFF',
  message: '',
  title: '',
  recipients: [],
  sendDate: moment().format('YYYY-MM-DD'),
};

export default function New() {
  const { width, height } = useWindowSize();

  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const email = searchParams.get('email');

  const [stage, setStage] = useState(0);
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [cardId] = useState(uuidv4());
  const [confetti, setConfetti] = useState(false);

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollTop = 0;
  }, [stage]);

  useEffect(() => {
    if (name && email)
      setFormData((prev) => ({
        ...prev,
        recipients: [{ name, email, id: uuidv4() }],
      }));
  }, [name, email]);

  return (
    <div className={styles.container} ref={scrollRef}>
      <NavBar newBtnVisible={false} />
      <main>
        <NewProgress stage={stage} setStage={setStage} />
        <div className={styles.twoCol}>
          {stage === 0 && (
            <CustomizeOne
              formData={formData}
              setFormData={setFormData}
              cardId={cardId}
            />
          )}
          {stage === 1 && (
            <CustomizeTwo formData={formData} setFormData={setFormData} />
          )}
          {stage === 2 && (
            <CustomizeThree formData={formData} setFormData={setFormData} />
          )}
          <CardPreview
            stage={stage}
            setStage={setStage}
            setConfetti={setConfetti}
            cardData={formData}
            cardId={cardId}
          />
        </div>
      </main>
      {confetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          style={{ zIndex: 20 }}
        />
      )}
    </div>
  );
}
