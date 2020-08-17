import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import React from 'react';

export default function GroupRadio(props) {
  const [value, setValue] = React.useState('yes');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup style={{ display: 'flex', flexDirection: 'row' }} aria-label="land" name="land1" value={`${props.value}`} onChange={props.onChange}>
        <FormControlLabel
          value='true'
          control={<Radio style={{ color: '#2C5DE5', marginBottom: 0 }} />}
          label="Есть"
        />
        <FormControlLabel
          value='false'
          control={<Radio style={{ color: '#2C5DE5', marginBottom: 0 }} />}
          label="Нет"
        />
      </RadioGroup>
    </FormControl>
  );
}
