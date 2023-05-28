import { Container } from './styles';

import MinusImg from '../../assets/minus.svg';
import PlusImg from '../../assets/plus.svg';

import { useRef } from 'react';

/**
 * seletor de valor numérico
 * @param {{setValue(), value?}} {param} - recebe um state e sua função setState
 * @returns JSX.Element
 * @usage \<QuantityPicker value={0} setValue={() => serNumber()} />
 */
export function QuantityPicker({ setValue = null, value = 0, ...rest }) {
  const qtyInput = useRef();

  function increment() {
    const value = Number(qtyInput.current.value);
    qtyInput.current.value = value + 1;
    if (setValue) setValue(prev => (prev + 1));
  }

  function decrement() {
    const value = Number(qtyInput.current.value);
    if (value > 0) {
      qtyInput.current.value = value - 1;
      if (setValue) setValue(prev => (prev - 1));
    }
  }

  return (
    <Container className="quantity">
      <button id="minus" onClick={decrement}>
        <img src={MinusImg} />
      </button>
      <input type="text" defaultValue={value}  {...rest} ref={qtyInput} />
      <button id="plus" onClick={increment}>
        <img src={PlusImg} />
      </button>
    </Container>
  );
}
