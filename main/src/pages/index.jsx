import React, { useState } from 'react';
import { MicroAppWithMemoHistory, useModel } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  const [microAppState, setState] = useState('Hello');
  const { setQiankunGlobalState } = useModel('@@qiankunStateForSlave');
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>

      <button
        onClick={() => setQiankunGlobalState({ slogan: 'Hello Qiankun' })}
      >
        修改全 stat
      </button>
      <button onClick={() => setState((s) => s + 'o')}>修应用 props</button>
      <MicroAppWithMemoHistory testProp1={microAppState} name="app-demo" url="/" />
    </div>
  );
}
