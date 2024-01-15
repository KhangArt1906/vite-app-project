import { Box, Flex, Grid, GridCol, Image, em, rem, useMantineTheme } from '@mantine/core';
import { MainServiceItem } from '../Service/app.service';
import { useMediaQuery } from '@mantine/hooks';
import BoxTile from '../BoxTitle/app.boxtitle';
import styled from 'styled-components';
import TextClamp from '../TextClamp/app.textclamp';

export type QuestionItems = {
  id: number;
  title: string;
  iconDown: string;
  iconUp: string;
};

const Question = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);
  const isTableb = useMediaQuery(`(max-width: ${em(992)})`);

  const questionItems: QuestionItems[] = [
    {
      id: 1,
      title: 'How to script League of Legends?',
      iconDown: 'icon_question_down.png',
      iconUp: '',
    },
    {
      id: 2,
      title: 'Why is this league hack the best?',
      iconDown: 'icon_question_down.png',
      iconUp: '',
    },
    {
      id: 3,
      title: 'Are script league of legends detected?',
      iconDown: 'icon_question_down.png',
      iconUp: '',
    },
    {
      id: 4,
      title: 'Can I see LoL script gameplays?',
      iconDown: 'icon_question_down.png',
      iconUp: '',
    },
  ];

  const StyleBox = styled(Box)`
    width: calc(50% - 11px);
    border-radius: 7px;
    position: relative;
    @media (max-width: 36rem) {
      width: 100%;
    }
  `;

  return (
    <section className="questions">
      <Box
        mt={!isTableb ? theme.other.marginTop.marginTop_230 : theme.other.marginTop.marginTop_125}
      >
        <Grid className="question-title">
          <GridCol>
            <BoxTile
              top={'Don’t leave a question mark in your mind'}
              title={'Frequently Asked Questions'}
              desc={
                'Lorem ipsum dolor sit amet consectetur. Egestas habitant lorem in turpis aenean nunc elit orci sit. Purus tempus sit semper velit aliquet scelerisque sed massaLorem ipsum dolor sit amet consectetur.'
              }
            />
          </GridCol>
        </Grid>

        <Flex
          className="question-content"
          gap={rem('22px')}
          justify={'flex-start'}
          align={'flex-start'}
          direction={'row'}
          wrap={'wrap'}
          ff={theme.headings.fontFamily}
          fs={theme.fontSizes.normal}
          mt={rem('80px')}
        >
          {questionItems.length > 0 &&
            questionItems.map((item) => (
              <StyleBox
                key={`question-${item.id}`}
                px={!isTableb ? rem('130px') : rem('16px')}
                py={!isTableb ? rem('30px') : rem('30px')}
                ta={!isTableb ? 'center' : 'start'}
                bg={theme.colors.blue[1]}
              >
                <TextClamp
                  fw={theme.other.fontWeights.fw_300}
                  size={!isTableb ? theme.fontSizes.fs_20 : theme.fontSizes.fs_12}
                  c={theme.colors.black[2]}
                  lines={1}
                  text={item.title}
                />
                <Image
                  src={'/assets/img/icon_question_down.png'}
                  w={rem('20px')}
                  h={rem('20px')}
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translate(50%,-50%)',
                    cursor: 'pointer',
                  }}
                />
              </StyleBox>
            ))}
        </Flex>
      </Box>
    </section>
  );
};

export default Question;
