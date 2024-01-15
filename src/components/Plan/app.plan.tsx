import { Container, Flex, Grid, GridCol, rem } from '@mantine/core';
import React from 'react';
import CardPlan from '../CardPlan/app.cardplan';
import BoxTitle from '../BoxTitle/app.boxtitle';
import './app.plan.scss';

const Plan = () => {
  const CardItems = [
    {
      id: 1,
      img: 'Rectangle 16.png',
      title: '1 Day Lol Tool',
      priceO: 15,
      priceS: 10,
      labelSale: 'All Regions Supported',
      backgroundSale: '#5D8FDA',
      backgroundAfterSale: '#4470B2',
      iconSale: '',
      monthly: false,
      saler: true,
    },
    {
      id: 2,
      img: 'Rectangle 20.png',
      title: '30 Day LoL Tool',
      priceO: 65,
      priceS: 45,
      labelSale: 'Best Seller',
      backgroundSale: '#3B3089',
      backgroundAfterSale: '#000000',
      iconSale: 'vector_luc_giac.png',
      monthly: false,
      saler: true,
    },
    {
      id: 3,
      img: 'Rectangle 21.png',
      title: '3 Month LoL Tool',
      priceO: 125,
      priceS: 85,
      labelSale: 'All Regions Supported',
      backgroundSale: '#5D8FDA',
      backgroundAfterSale: '#4470B2',
      iconSale: '',
      monthly: false,
      saler: true,
    },
    {
      id: 4,
      img: 'Rectangle 22.png',
      title: 'Monthy LoL Tool',
      priceO: 50,
      priceS: 35,
      labelSale: 'Cancel Anytime',
      backgroundSale: '#4470B2',
      backgroundAfterSale: '#4470B2',
      iconSale: 'vector_luc_giac.png',
      monthly: false,
      saler: true,
    },
  ];

  return (
    <section style={{ paddingTop: rem('165px') }} className="plan-wrapper">
      <Container size={1140} style={{ margin: '0 auto', padding: 0 }}>
        <Grid gutter={1} className="plan">
          <GridCol span={12}>
            <BoxTitle
              top={'Lol Tools Plans'}
              title={'Select your league of Legends Scripts License'}
              desc={
                'Lorem ipsum dolor sit amet consectetur. Egestas habitant lorem in turpis aenean' +
                'nunc elit orci sit. Purus tempus sit semper velit aliquet scelerisque sed massaLorem' +
                'ipsum dolor sit amet consectetur. Egestas habitant lorem in turpis aenean nunc elit' +
                'orci sit. Purus tempus sit semper velit aliquet scelerisque sed massa..'
              }
            />
            <Flex className="plan-list" gap={20} direction={'row'} wrap={'nowrap'} mt={rem('84px')}>
              {CardItems.map((item, id) => (
                <CardPlan
                  key={id}
                  img={item.img}
                  title={item.title}
                  priceO={item.priceO}
                  priceS={item.priceS}
                  saler={item.saler}
                  labelSale={item.labelSale}
                  backgroundSale={item.backgroundSale}
                  backgroundAfterSale={item.backgroundAfterSale}
                  iconSale={item.iconSale}
                  monthly={item.monthly}
                ></CardPlan>
              ))}
            </Flex>
          </GridCol>
        </Grid>
      </Container>
    </section>
  );
};

export default Plan;
