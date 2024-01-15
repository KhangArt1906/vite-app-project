import {
  Badge,
  Card,
  CardSection,
  Flex,
  Group,
  Image,
  NumberFormatter,
  Text,
  rem,
} from '@mantine/core';
import ButtonCustom from '../Button/app.button';

type CardProps = {
  img: string;
  title: string;
  priceO: number;
  priceS: number;
  labelSale: string;
  backgroundSale: string;
  backgroundAfterSale: string;
  iconSale: string;
  monthly: boolean;
  saler: boolean;
};

const CardPlan = ({
  img,
  title,
  priceO,
  priceS,
  labelSale,
  backgroundSale,
  backgroundAfterSale,
  iconSale,
  monthly,
  saler,
}: CardProps) => {
  return (
    // Tao mot cai mang dung cac thong tin Card <

    <>
      <Card
        className="plan-card"
        w={rem('270px')}
        style={{
          alignItems: 'center',
          overflow: 'visible',
        }}
      >
        <Saler
          label={labelSale}
          backgroundSale={backgroundSale}
          iconSale={iconSale}
          backgroundAfterSale={backgroundAfterSale}
        />

        <CardSection>
          <Image
            fit={'cover'}
            src={`/assets/img/${img}`}
            w={rem('213px')}
            height={rem('183px')}
            alt={title}
          />
        </CardSection>

        <Text mt={rem('18px')} ta={'center'} className="plan-card_title">
          {title}
        </Text>

        <Group
          align={'center'}
          justify={'space-between'}
          mt={rem('15px')}
          mb={rem('21px')}
          gap={rem('18px')}
          wrap="nowrap"
        >
          <Flex gap={rem('2px')} justify={'flex-start'} align={'flex-start'} direction={'column'}>
            <NumberFormatter
              className="plan-price_top"
              prefix="$"
              value={priceO}
              suffix={'.00'}
              thousandSeparator="."
              decimalSeparator=","
            />
            <Flex gap={0} align={'baseline'} direction={'row'}>
              <NumberFormatter
                className="plan-price_bottom"
                prefix="$"
                value={priceS}
                suffix={'.00'}
                thousandSeparator="."
                decimalSeparator=","
              />
              {monthly ? <span className="plan-price_month">/month</span> : ''}
            </Flex>
          </Flex>

          <Badge
            w={rem('106px')}
            h={rem('31px')}
            style={{
              background: 'transparent',
              color: '#3B3089',
              border: '1px solid #3B3089',
              cursor: 'pointer',
            }}
          >
            See details
          </Badge>
        </Group>

        <ButtonCustom
          color="#FFFFFF"
          background="linear-gradient(180deg, #5DA7DA 19.79%, #5D8FDA 100%)"
          height={rem('50px')}
          width={rem('226px')}
        >
          <Image
            pr={rem('10px')}
            fit="cover"
            src={`/assets/img/Vector (Stroke).png`}
            alt="buy now"
          />
          Buy Now
        </ButtonCustom>
      </Card>
    </>
  );
};

type PropSaler = {
  label: string;
  backgroundSale: string;
  backgroundAfterSale: string;
  iconSale: string;
};

const Saler = ({ label, backgroundSale, iconSale, backgroundAfterSale }: PropSaler) => {
  return (
    <>
      <Flex
        bg={backgroundSale}
        gap={rem('9px')}
        justify={'stretch'}
        align={'center'}
        direction={'row'}
        wrap={'wrap'}
        className="plan-sale"
      >
        {iconSale ? <Image src={`/assets/img/${iconSale}`} /> : ''}
        <Text>{label}</Text>
        <TrianglePlan backgroundAfterSale={backgroundAfterSale} />
      </Flex>
    </>
  );
};

type PropsTrianglePlan = {
  backgroundAfterSale: string;
};

const TrianglePlan = ({ backgroundAfterSale }: PropsTrianglePlan) => {
  return (
    <div
      className="plan-sale_triangle"
      style={{
        position: 'absolute',
        right: '4px',
        bottom: '-8px',
        transform: 'rotate(-145.19deg)',
        borderLeft: `8px solid ${backgroundAfterSale}`,
        borderRight: '8px solid transparent',
        borderTop: '8px solid transparent',
        borderBottom: '8px solid transparent',
      }}
    ></div>
  );
};

export default CardPlan;
