import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchThird, selectFirst, selectSecond } from 'store/modules/selector';

import s from './index.css';

export const HelloWorld: FC<{}> = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.selector.value);

  return (
    <div>
      <h1 className={s.hello}>
        HelloWorld
      </h1>

      <div>
        <span>
          value:
          {' '}
          {value}
        </span>
        <button
          type="button"
          style={{ cursor: 'pointer', marginLeft: 20 }}
          onClick={() => dispatch(selectFirst())}
        >
          Sync First
        </button>
        <button
          type="button"
          style={{ cursor: 'pointer', marginLeft: 20 }}
          onClick={() => dispatch(selectSecond())}
        >
          Sync Second
        </button>
        <button
          type="button"
          style={{ cursor: 'pointer', marginLeft: 20 }}
          onClick={() => dispatch(fetchThird())}
        >
          Async Third
        </button>
      </div>
    </div>
  );
};
