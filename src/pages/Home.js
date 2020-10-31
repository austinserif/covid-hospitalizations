import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { Button } from 'baseui/button';
import {Heading, HeadingLevel} from 'baseui/heading';
import {Paragraph3} from 'baseui/typography'; 
import {
    Card,
    StyledBody,
    StyledAction,
    StyledThumbnail,
  } from 'baseui/card';


const Home = () => {
    return (
        <div className="Home">
              <Card
                overrides={{Root: {style: {width: '100%'}}}}
                title="Example card"
                >
                <StyledThumbnail
                    src={'https://source.unsplash.com/user/erondu/300x300'}
                />
                <StyledBody>
                    Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                    ornare faucibus ex, non facilisis nisl.
                </StyledBody>
                <StyledAction>
                    <Button overrides={{BaseButton: {style: {width: '100%'}}}}>
                        Button Label
                    </Button>
                </StyledAction>
            </Card>
            <HeadingLevel>
                <Heading styleLevel={3}>Quotes [L3 styled as L6]</Heading>
                <Paragraph3>
                Cras posuere placerat sem sit amet dignissim. Sed
                pellentesque sagittis sapien at maximus. Ut at gravida
                lectus. Suspendisse lectus libero, eleifend vestibulum
                imperdiet ut, rhoncus eu augue. Pellentesque in vulputate
                lacus, quis molestie lorem. Aenean sit amet blandit nisi.
                Nullam molestie mi vel quam vehicula, in cursus eros
                tempus. Sed placerat turpis vestibulum quam suscipit, eget
                volutpat massa aliquet.
                </Paragraph3>
            </HeadingLevel>
            <Link id="start-map-button" to="/map"><Button>Go To Map!</Button></Link>
        </div>
    );
}

export default Home;