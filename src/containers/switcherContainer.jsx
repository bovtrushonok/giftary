import { connect } from 'react-redux';
import { changeMode } from '../redux/actions';
import { SwitchComponent } from '../components';

export const SwitcherContainer = connect(null, { changeMode })(SwitchComponent);
