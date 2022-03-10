import { ConfigProvider } from 'antd';

import React, { useState, useEffect } from 'react';

function BasicLayout({ children }) {
  return (
    <ConfigProvider>
      {children}
    </ConfigProvider>
  );
}
export default BasicLayout;
