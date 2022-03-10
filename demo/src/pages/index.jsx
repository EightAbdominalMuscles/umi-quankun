import React, { useState } from 'react';
import { useModel } from 'umi';

import styles from './index.less';

export default function IndexPage() {
  const { testProp1, globalState } = useModel('@@qiankunStateFromMaster') || {};
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <div>
      hellow
      <h1 className={styles.title}>
        <p>全局注入参数: {JSON.stringify(globalState)}</p>
        <p>props传递参数:  {testProp1}</p>
      </h1>
    </div>
  );
}
