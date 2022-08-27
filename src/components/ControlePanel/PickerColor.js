import { GithubPicker } from 'react-color';
import { useDispatch } from 'react-redux';
import { changeCellColor } from '../../actions/controlPanelAction';

function PickerColor() {
  const dispatch = useDispatch();
  const handleChangeComplete = (color, event) => {
    dispatch(changeCellColor(color.hex));
  };
  return (
    <GithubPicker
      width="100%"
      triangle="top-right"
      colors={[
        '#f72334',
        '#B80000',
        '#DB3E00',
        '#FCCB00',
        '#f3fc3f',
        '#3ffc52',
        '#008B02',
        '#006B76',
        '#23f7f4',
        '#23bff7',
        '#004DCF',
        '#5300EB',
        '#6d23f7',
        '#f0f',
      ]}
      onChange={handleChangeComplete}
    />
  );
}

export default PickerColor;
