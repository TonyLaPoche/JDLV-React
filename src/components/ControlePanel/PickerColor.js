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
      triangle="hide"
      colors={[
        '#B80000',
        '#DB3E00',
        '#FCCB00',
        '#008B02',
        '#006B76',
        '#004DCF',
        '#5300EB',
      ]}
      onChange={handleChangeComplete}
    />
  );
}

export default PickerColor;
