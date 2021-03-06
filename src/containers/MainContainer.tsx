import * as React from 'react';
import List from '../components/ListComponent/List'
import Item from '../components/ItemComponent/Item'
import Write from '../components/WriteComponent/Write'
const MainContainer: React.FC = () => {
  const onSubmit = (form:{title:string,description:string}) => {
    console.log(form)
  }
  return (
    <div className="hello">
        it's container
        <List title="title" description="discription" order="bikg"/>
        <Item title="title" description="discription" flag={false}/>
        <Write onSubmit={onSubmit}/>
    </div>
  );
}
export default MainContainer;