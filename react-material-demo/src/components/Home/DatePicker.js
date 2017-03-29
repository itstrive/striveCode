import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const pickerStyle = {
	width: '90%',
	margin: '0 auto'
};
const styles = {
	width: '90%'
};

const DatePickerExampleSimple = () => (
	<div>
    	<DatePicker style={pickerStyle} textFieldStyle={styles} hintText="选择日期" />
  	</div>
);

export default DatePickerExampleSimple;