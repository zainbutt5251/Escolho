import React, { useState } from 'react';
import RoundedCheckbox from 'react-native-rounded-checkbox';

const RoundCheck = (props) => {
  const [text, settext] = useState(props.text);
  const [checkedColor, setcheckedColor] = useState(
    props.checkedColor || '#C8E1E4',
  );
  const [unCheckedColor, setUnCheckedColor] = useState(
    props.unCheckedColor || '#3E9393',
  );
  const [innerSize, setinnerSize] = useState(props.innerSize || 25);
  const [Outersize, setOutersize] = useState(props.Outersize || 25);
  const [textColor, settextColor] = useState(props.textColor || "#6CB6B7");
  const [isChecked, setChecked] = useState(true);
  const test = () => {
    setChecked(!isChecked);
    console.log(isChecked);
  };
  return (
    <RoundedCheckbox
      isChecked
      onPress={(e) => test(e)}
      checkedColor={checkedColor}
      uncheckedColor={unCheckedColor}
      checkedTextColor={textColor}
      text={text}
      outerSize={Outersize}
      innerSize={innerSize}
    />
  );
};

export default RoundCheck;
