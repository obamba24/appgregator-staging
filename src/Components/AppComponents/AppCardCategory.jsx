import { AspectRatio, Box, Image, Link, Skeleton, Text } from '@chakra-ui/react'
import * as React from 'react'

export const AppCardCategory = (props) => {
  const { category, rootProps } = props
  return (
    <Box position="relative" key={category.name} borderRadius="xl" overflow="hidden" {...rootProps}>
      <Link>
        <AspectRatio ratio={1 / 1}>
          <Image src={category.imageUrl} alt={category.name} fallback={<Skeleton />} />
        </AspectRatio>
        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(to-b, transparent 60%, gray.900)"
          boxSize="full"
        />
        <Box position="absolute" bottom="6" width="full" textAlign="center">
          <Text color="white" fontSize="lg" fontWeight="semibold">
            {category.name}
          </Text>
        </Box>
      </Link>
    </Box>
  )
}