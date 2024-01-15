import {
  BackgroundImage,
  Box,
  Card,
  Center,
  Container,
  Flex,
  Image,
  Text,
  Title,
  rem,
} from '@mantine/core';
import './app.feature.scss';

const Feature = () => {
  const FeatureList = [
    {
      id: 1,
      imgBg: '/assets/img/icon_bg.png',
      imgIcon: '/assets/img/drawing_icon.png',
      title: 'Drawing 4K',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
        'Pariatur sint eius, ad atque omnis sunt quidem laudantium,' +
        'nulla est dolore quos repellat veniam assumenda optio! Tenetur porro odit id architecto.',
    },
    {
      id: 2,
      imgBg: '/assets/img/icon_bg.png',
      imgIcon: '/assets/img/combo_icon.png',
      title: 'Combo+',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
        'Pariatur sint eius, ad atque omnis sunt quidem laudantium,' +
        'nulla est dolore quos repellat veniam assumenda optio! Tenetur porro odit id architecto.',
    },
    {
      id: 3,
      imgBg: '/assets/img/icon_bg.png',
      imgIcon: '/assets/img/orb_icon.png',
      title: 'OrbWalker+',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
        'Pariatur sint eius, ad atque omnis sunt quidem laudantium,' +
        'nulla est dolore quos repellat veniam assumenda optio! Tenetur porro odit id architecto.',
    },
    {
      id: 4,
      imgBg: '/assets/img/icon_bg.png',
      imgIcon: '/assets/img/human_icon_four.png',
      title: 'Name',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
        'Pariatur sint eius, ad atque omnis sunt quidem laudantium,' +
        'nulla est dolore quos repellat veniam assumenda optio! Tenetur porro odit id architecto.',
    },
    {
      id: 5,
      imgBg: '/assets/img/icon_bg.png',
      imgIcon: '/assets/img/icon_face_five.png',
      title: 'Name',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
        'Pariatur sint eius, ad atque omnis sunt quidem laudantium,' +
        'nulla est dolore quos repellat veniam assumenda optio! Tenetur porro odit id architecto.',
    },
    {
      id: 6,
      imgBg: '/assets/img/icon_bg.png',
      imgIcon: '/assets/img/icon_ad_six.png',
      title: 'Name',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
        'Pariatur sint eius, ad atque omnis sunt quidem laudantium,' +
        'nulla est dolore quos repellat veniam assumenda optio! Tenetur porro odit id architecto.',
    },
  ];
  return (
    <section className="feature_wrapper">
      <Container size={1140} style={{ margin: '0 auto', padding: 0 }}>
        <Flex className="feature" gap={rem('95px')}>
          <Box className="feature-left">
            <Image
              src={'/assets/img/hacked-webcam.png'}
              w={rem('481px')}
              h={rem('481px')}
              fit="cover"
            />
          </Box>

          <Box className="feature-right" mt={rem('116px')}>
            <Flex gap={rem('28px')} direction={'column'} wrap={'nowrap'}>
              <Text className="feature-right_bio" c={'#5DA7DA'}>
                Exclusive features
              </Text>

              <Title className="feature-right_title">
                Features You’ll Get If You Buy League of Legends Tool
              </Title>

              <Text className="feature-right_desc" w={rem('565px')}>
                Lorem ipsum dolor sit amet consectetur. Egestas habitant lorem in turpis aenean nunc
                elit orci sit. Purus tempus sit semper velit aliquet scelerisque sed massaLorem
                ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Egestas
              </Text>
            </Flex>
          </Box>
        </Flex>

        <Flex className="feature_list" mt={rem('125px')} wrap={'wrap'} gap={rem('68px')}>
          {FeatureList &&
            FeatureList.map((item, index) => (
              <Card key={index} w={rem('330px')} ta={'center'} p={0} m={0}>
                <Box mx={'auto'}>
                  <BackgroundImage src={item.imgBg} radius="sm">
                    <Center p="md">
                      <Image
                        fit="cover"
                        w={rem('43px')}
                        h={rem('41px')}
                        src={item.imgIcon}
                        alt="Norway"
                      />
                    </Center>
                  </BackgroundImage>
                </Box>
                <Text
                  ff={"'Outfit', sans-serif"}
                  size={rem('30px')}
                  fw={'700'}
                  mt={rem('30px')}
                  c={'#000000'}
                >
                  {item.title}
                </Text>
                <Text
                  c={'#000000'}
                  ff={"'Outfit', sans-serif"}
                  fw={'500'}
                  mt={rem('26px')}
                  style={{ lineHeight: rem('24px') }}
                >
                  {item.desc}
                </Text>
              </Card>
            ))}
        </Flex>
      </Container>
    </section>
  );
};

export default Feature;
