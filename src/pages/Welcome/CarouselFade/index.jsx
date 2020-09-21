import React from 'react';
import styles from './index.less';
import { Carousel } from 'antd';

const images = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];


export default () => (
  
  <div className={styles.container}>
    <div id="components-carousel-demo-fade">
      <Carousel effect="fade">
        <div>
          {/* <h3>1</h3> */}
          <img src={images[0]} className={styles.image}></img>
        </div>
        <div>
          {/* <h3>2</h3> */}
          <img src={images[1]} className={styles.image}></img>
        </div>
        <div>
          {/* <h3>3</h3> */}
          <img src={images[2]} className={styles.image}></img>
        </div>
        <div>
          {/* <h3>4</h3> */}
          <img src={images[3]} className={styles.image}></img>
        </div>
      </Carousel>
    </div>
  </div>
);
