import { Card, Col, Form, List, Row, Select, Typography } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'umi';
import moment from 'moment';
import AvatarList from './components/AvatarList';
// import StandardFormRow from './components/StandardFormRow';
// import TagSelect from './components/TagSelect';
import styles from './style.less';
// import CarouselFade from './CarouselFade';
// const { Option } = Select;
// const FormItem = Form.Item;
const { Paragraph } = Typography;

const getKey = (id, index) => `${id}-${index}`;

const Welcome = ({ dispatch, welcome: { list = [] }, loading }) => {
  useEffect(() => {
    console.log("useEffect")
    dispatch({
      type: 'welcome/fetch',
      payload: {
        // 目前只有4个模块 - 算法+数据结构 / 编程语言 / 机器学习 / 其他
        count: 4,
      },
    });
  }, []);
  const cardList = list && (
    <List
      rowKey="id"
      loading={loading}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      dataSource={list}
      renderItem={item => (
        <List.Item>
          <Card 
          className={styles.card} 
          hoverable 
          cover={
            <img alt={item.title} src={item.cover} className={styles.card__image}/>
          }>
            <Card.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={
                <Paragraph
                  className={styles.item}
                  ellipsis={{
                    rows: 2,
                  }}
                >
                  {item.subDescription}
                </Paragraph>
              }
            />
          </Card>
        </List.Item>
      )}
    />
  );
  const formItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  return (
    // to-do 页面顶部 走马灯 CarouselFade
    <div className={styles.coverCardList}>
      {/* <CarouselFade /> */}
      <div className={styles.cardList}>{cardList}</div>
    </div>
  );
};

export default connect(({ welcome, loading }) => ({
  welcome,
  loading: loading.models.welcome,
}))(Welcome);
