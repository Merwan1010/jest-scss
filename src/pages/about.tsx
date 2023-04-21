import React from 'react';
import Button from '../components/button/button';

const About: React.FC = () => {
  const asynFunction = async () => {
    await new Promise<void>((innerResolve) => setTimeout(innerResolve, 2000));
    return;
  }

  return <div>
    <Button text={'次へ'} onClick={() => { console.log("hello") }} />
    <Button text={'プレービュ'} fill={false} outline={true} />
    <Button text={'中止'} fill={false} outline={false} underline={true} />

    Disabled :
    <Button text={'下書き保存'} disabled />
    <Button text={'プレービュ'} fill={false} outline disabled />
    <Button text={'中止'} fill={false} outline={false} underline disabled />

    With spinner:
    <Button text={'次へ'} onClick={async () => { await asynFunction() }} />
    <Button text={'プレービュ'} onClick={asynFunction} fill={false} outline />
    <Button text={'中止'} onClick={asynFunction} fill={false} outline={false} />

  </div>;
};

export default About;
