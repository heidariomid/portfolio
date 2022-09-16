import {useContext} from 'react';
import {StateContext} from './Context';

const useStateValue = () => useContext(StateContext);

export default useStateValue;
