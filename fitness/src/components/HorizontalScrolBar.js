import React, { useContext} from 'react';
import { Box ,Typography} from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '../assets/assets/icons/right-arrow.png';
import RightArrowIcon from '../assets/assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollPrev()} className='right-arrow'>
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    );
};
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollNext()} className='left-arrow'>
            <img src={RightArrowIcon} alt="left-arrow" />
        </Typography>
    );
};

const HorizontalScrolBar = ({ data, setBodyPart, bodyPart ,isBodyParts}) => {
  return (
      <div>
          <ScrollMenu LeftArrow={LeftArrow}RightArrow={RightArrow}>
              {data.map((item) => (
                  <Box key={item.id || item}
                      itemId={item.id || item}
                      title={item.id || item}
                      m='0 40px'
                  >
                      {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart}
                          setBodyPart={setBodyPart} />
                          : <ExerciseCard exercise={item} />
                          
                      }
                  </Box>
              )
              )}
              
          </ScrollMenu>
      
          
    </div>
  )
}

export default HorizontalScrolBar