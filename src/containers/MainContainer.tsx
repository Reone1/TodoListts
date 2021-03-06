import * as React from 'react';
import List from '../components/ListComponent/List'
import Write from '../components/WriteComponent/Write'

import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  height:60%;
  display:inline-block;
`
const MainContainer: React.FC = () => {
  const onSubmit = (form:{title:string,description:string}) => {
    console.log(form)
  }
  return (
    <Container className="container">
        <Write onSubmit={onSubmit}/>
        <List/>
    </Container>
  );
}
export default MainContainer;