import React from 'react';
import {Grid, Row, Cell} from '@material/react-layout-grid';
import CardCarousel from './CardCarousel';
// import TitleCard from './TitleCard/TitleCard';
import WhatsNew from './WhatsNew/WhatsNew';


const HomePageContainer = () => {
  return (
    <div className="center ma4 pl4 pr4">
      {/* <TitleCard /> */}
      <Grid>
        <Row>
          <Cell desktopColumns={7} tabletColumns={8} phoneColumns={6}>
            <CardCarousel />
          </Cell>
          <Cell desktopColumns={5} tabletColumns={8}>
            <WhatsNew />
          </Cell>
        </Row>
      </Grid>
    </div>
  );
};
export default HomePageContainer;
