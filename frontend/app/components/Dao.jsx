import { Box, Image, Badge, useColorModeValue, Text, Stack, useTheme, NavBar } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { customTheme } from '@/constants';

const Dao = () => {
  const theme = useTheme();
  const bgColor = useColorModeValue('dark.200', 'dark.100');
  const textColor = useColorModeValue('white', 'gray.200');
  const twitchColor = "purple"

  const daos = [
    {
      imageUrl: 'https://bit.ly/3D8G8Xo',
      imageAlt: 'Gaming Guild',
      members: 120,
      games: ['League of Legends', 'Dota 2'],
      name: 'Epic Gamers Guild',
      monthlyDues: '0.5 ETH',
      rating: 5,
      reviewCount: 148,
    },
    {
      imageUrl: 'https://bit.ly/3D8G8Xo',
      imageAlt: 'Strategy Gaming Community',
      members: 80,
      games: ['Civilization VI', 'Age of Empires II'],
      name: 'Strategists United',
      monthlyDues: '0.3 ETH',
      rating: 4.8,
      reviewCount: 89,
    },
  ];

  return (
    <Box display="flex">
      <Box flex="1">

        <Stack spacing={8} p={5}>
          {daos.map((dao, index) => (
            <Box key={index} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bg={bgColor} color={textColor}>
              <Image src={dao.imageUrl} alt={dao.imageAlt} />

              <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                  <Badge borderRadius='full' px='2' colorScheme='purple'>
                    DAO
                  </Badge>
                  <Box
                    color={twitchColor}
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                  >
                    {dao.members} members &bull; {dao.games.join(', ')}
                  </Box>
                </Box>

                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={1}
                >
                  {dao.name}
                </Box>

                <Box>
                  {dao.monthlyDues}
                  <Box as='span' color='gray.600' fontSize='sm'>
                    / month
                  </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < dao.rating ? 'twitch.100' : 'gray.300'}
                      />
                    ))}
                  <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    {dao.reviewCount} reviews
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
      <NavBar />
    </Box>
  );
}

export default Dao;
