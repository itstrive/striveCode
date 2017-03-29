import React from 'react';
import {
  Card,
  CardMedia,
  CardTitle
} from 'material-ui/Card';

const CardExampleWithAvatar = () => (
  <Card>
    <CardMedia
      overlay={<CardTitle title="美好的天气" subtitle="适合出去旅游" />}
    >
      <img src="http://www.material-ui.com/images/nature-600-337.jpg" alt="风景" />
    </CardMedia>
  </Card>
);

export default CardExampleWithAvatar;