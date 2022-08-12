import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack, Pagination } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behaviour: 'smooth' });

  };
  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];
      if (bodyPart === 'all') {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions);
      } else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions);
      }
      setExercises(exerciseData);
    };
    fetchExerciseData();

  }, [bodyPart]);
  return (
    <Box
      sx={{ mt: { lg: '110px' } }}
      mt="50px"
      p="20px"
      id='exercises'

    >
      <Typography variant="h4" mb="46px">
        Showing Results
      </Typography>
      <Stack
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        direction="row"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={(e) => paginate(e)}
            size='large'

          />
        )}

      </Stack>


    </Box>
  )
}

export default Exercises