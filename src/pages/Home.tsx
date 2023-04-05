import { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import { calendarOutline, contrastOutline } from 'ionicons/icons';

import { DatePicker, TimePicker } from '@IraSoro/ionic-datetime-picker';


const BasicExample = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle color="primary">Default style</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <DatePicker date={date} onChange={setDate} />
        <TimePicker time={time} onChange={setTime} />
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
        <IonCardTitle color="danger">Custom style</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <DatePicker
          date={date}
          onChange={setDate}
          color="danger"
          title="Russian date"
          locale="ru"
          icon={calendarOutline}
          sizeIcon="large"
          format="dd/MM/yyyy"
        />
        <TimePicker
          time={time}
          onChange={setTime}
          color="danger"
          title="My time"
          icon={contrastOutline}
          sizeIcon="large"
          format="hh.mm"

        />
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
