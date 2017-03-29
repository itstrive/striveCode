import React from 'react';
import {
  Tabs,
  Tab
} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="热点" value="a">
          <div>
            <h2 style={styles.headline}>实时新闻</h2>
            <p className="lead">
              全面深化改革经过3年多的努力，一批重大改革措施出台实施、一批关键改革领域取得突破、一批重点改革成果正在形成。在2016年最后一次深改组会议上，习近平曾说：“全面深化改革的主体框架基本确立。”在以习近平同志为核心的党中央布局的改革棋盘中
            </p>
          </div>
        </Tab>
        <Tab label="关注" value="b">
          <div>
            <h2 style={styles.headline}>楼盘新闻</h2>
            <p className="lead">
              中新网3月29日电28日晚，福州、杭州及厦门相继推出房地产市场调控新政，引发舆论关注。其中，福州指出，3月29日起，非福州本市五城区户籍居民家庭不得通过补缴个人所得税或社会保险取得本市五城区购房资格。杭州则明确了本市户籍成年单身(含离异)人士在限购区域内限购一套住房等措施。
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}