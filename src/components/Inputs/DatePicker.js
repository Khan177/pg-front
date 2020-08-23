import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Icon from '@material-ui/core/Icon';
import icon_calendar from '../../img/outdoor_furniture/filter_icons/icon_calendar.png';
import React from 'react';

export default function DatePicker(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        style={{ width: '100%', background: 'white' }}
        inputVariant="outlined"
        format="dd/MM/yyyy"
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        onChange={props.onChange}
        value={props.value}
        InputAdornmentProps={{ position: 'start' }}
        keyboardIcon={
          <Icon>
            <img src={icon_calendar} alt="" />
          </Icon>
        }
      />
    </MuiPickersUtilsProvider>
  );
}
