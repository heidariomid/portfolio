import {useContext} from 'react';
import {StateContext} from './context';

const useStateValue = () => useContext(StateContext);

export default useStateValue;
