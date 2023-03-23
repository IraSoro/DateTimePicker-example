import { useState } from 'react';
import { InputDate, InputTime } from '@IraSoro/ionic-datetime-input';

const Home: React.FC = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  return (
    <>
      <InputDate value={date} setValue={setDate} color="success" />
      <InputTime value={time} setValue={setTime} color="success" />
    </>
  );
};

export default Home;
