import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrolBar from './HorizontalScrolBar';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState('');

  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    };
    fetchExercisesData();

  }, []);
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      //console.log(exerciseData);

      const searchedExercises = exerciseData.filter((exercise) => exercise.name.toLowecase().includes(search)
        
        || exercise.target.toLowecase().includes(search)

        || exercise.equipment.toLowecase().includes(search)
        
        || exercise.bodyPart.toLowecase().includes(search)
      );
      setSearch('');
      setExercises(searchedExercises);
    }
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent='center' p='20px'>
      <Typography
        fontWeight={700}
        textAlign="center"
        mb='50px'
        sx={{
          fontSize: { lg: '44px', sx: '30px' }
        }}
      >
        Awesome Exercise You Should Know

      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '48px'
          }}
          height="76px"
          value={search}
          type='text'
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="search exercises"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrolBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>

    </Stack>
  )
}

export default SearchExercises;