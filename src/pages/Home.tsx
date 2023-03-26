import { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import { InputDate, InputTime } from '@IraSoro/ionic-datetime-input';

const BasicExample = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle color="primary">Basic example</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <InputDate value={date} setValue={setDate} inputID="1" />
        <InputTime value={time} setValue={setTime} inputID="2" />
      </IonCardContent>
    </IonCard>
  );
}

const CustomExample = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle color="danger">Custom example</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <InputDate value={date} setValue={setDate} inputID="2" isConvert={true} color="danger" title="Russian date" locale="ru" />
        <InputTime value={time} setValue={setTime} inputID="1" isConvert={true} color="danger" title="Russian time" locale="ru" />
      </IonCardContent>
    </IonCard>
  );
}

const Home = () => {
  return (
    <>
      <BasicExample />
      <CustomExample />
    </>
  );
};

export default Home;
