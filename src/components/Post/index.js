import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import {
  styles, Container, Header, Title, Date, Content, Course, Status,
} from './styles';
import { colors } from '../../styles';

function Post({
  title, date, status, course,
}) {
  return (
    <Container>
      <LinearGradient
        style={styles.status}
        colors={
            status
              ? [colors.success, colors.lightBlue]
              : [colors.danger, colors.sandy]
          }
      />

      <Header>
        <Title numberOfLines={1}>{ title }</Title>

        <Date>{ date }</Date>
      </Header>

      <Content>
        <Status>{ status ? 'em aberto' : 'respondido' }</Status>

        <Course>{ course }</Course>
      </Content>
    </Container>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  course: PropTypes.string.isRequired,
};

export default Post;
