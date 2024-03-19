import React from 'react';
import {
  Box,
  Step,
  Stepper,
  StepIndicator,
  StepNumber,
  StepStatus,
  StepSeparator,
  StepTitle,
  StepDescription,
  VStack,
  Text,
  extendTheme,
  useSteps,
  useColorModeValue
} from '@chakra-ui/react';
import { customTheme } from '@/constants';

const steps = [
  { level: '1', rank: 'Bronze', bonus: '5% Points Bonus' },
  { level: '5', rank: 'Argent', bonus: '5% Points Bonus' },
  { level: '10', rank: 'Or', bonus: '10% Points Bonus' },
  { level: '15', rank: 'Platine', bonus: '10% Points Bonus' },
  { level: '20', rank: 'Diamant', bonus: '20% Points Bonus' },
];


function LevelStepper() {
    const bg = useColorModeValue('dark.100', 'dark.100');
    const sectionBg = useColorModeValue('dark.200', 'dark.200');
    const textColor = useColorModeValue('twitch.100', 'twitch.100');
  const { activeStep, nextStep, prevStep } = useSteps({
    initialStep: 0,
  });

  return (
    <VStack spacing={0} boxShadow='lg' p='6' rounded='md' bg='black' color='twitch.100'>
      <Stepper orientation="horizontal" index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<Box bg="twitch.100" borderRadius="full" p={2} color="purple">✓</Box>}
                incomplete={<StepNumber>{step.level}</StepNumber>}
                active={<Box bg="twitch.100" borderRadius="full" p={2} color="white">{step.level}</Box>}
              />
            </StepIndicator>
            <Box flexShrink={0}>
              <StepTitle>{step.rank}</StepTitle>
              <StepDescription>{step.bonus}</StepDescription>
            </Box>
            {index < steps.length - 1 && <StepSeparator />}
          </Step>
        ))}
      </Stepper>
      <Text color="white">Niveau Actuel: {steps[activeStep].level}</Text>
    </VStack>
  );
}

export default LevelStepper;
