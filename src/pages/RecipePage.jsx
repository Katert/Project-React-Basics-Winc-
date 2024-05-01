// Components
import {
  Heading,
  Badge,
  Tag,
  Box,
  Flex,
  Button,
  Image,
  VStack,
  Center,
  UnorderedList,
  ListItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, setRecipe }) => {
  return (
    <Center>
      <Flex
        flexDirection="row"
        borderRadius={"xl"}
        backgroundColor={"white"}
        padding={"20px"}
        maxW={"800px"}
      >
        <Box marginRight={1}>
          <Button
            marginBottom={4}
            colorScheme="blackAlpha"
            onClick={() => setRecipe(null)}
          >
            {"< Go back"}
          </Button>
          <Box marginBottom={2}>
            <Heading marginBottom={2}>{recipe.label}</Heading>
            <Badge>{recipe.mealType}</Badge>
            <Badge colorScheme="blue" marginLeft={2}>
              {recipe.dishType}
            </Badge>
            {recipe.dietLabels.length > 0 &&
              recipe.dietLabels.map((label) => (
                <Badge colorScheme="purple" key={label} marginLeft={2}>
                  {label}
                </Badge>
              ))}
            {recipe.cautions.length > 0 &&
              recipe.cautions.map((label) => (
                <Badge colorScheme="red" key={label} marginLeft={2}>
                  {label}
                </Badge>
              ))}
            <Image
              src={recipe.image}
              alt={recipe.label}
              borderRadius={"xl"}
              maxH={"400px"}
              w={"100%"}
              objectFit={"cover"}
              marginLeft={1}
              marginY={4}
            />
          </Box>
          {recipe.healthLabels.map((label) => (
            <Badge
              colorScheme="green"
              fontSize="x-small"
              key={label}
              margin={1}
            >
              {label}
            </Badge>
          ))}
          <VStack fontSize="14px" padding={1} marginY={4} alignItems={"start"}>
            <Tag marginBottom={1}>
              Total cooking time: {`${recipe.totalTime} minutes`}
            </Tag>
            <Tag>Serving size: {recipe.yield}</Tag>

            <Flex flexDirection={{ base: "column", md: "row" }}>
              <Box>
                <Heading as="h2" size="md" paddingY={4}>
                  Ingredients:
                </Heading>
                <UnorderedList>
                  {recipe.ingredients.map((ingredient) => (
                    <ListItem paddingTop={2} key={ingredient.text}>
                      {ingredient.text}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
              <Box>
                <Heading as="h2" size="sm" paddingY={4}>
                  Nutrients:
                </Heading>
                <Box overflow={"scroll"} maxH={"400px"}>
                  <TableContainer>
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>Label</Th>
                          <Th isNumeric>Quantity</Th>
                          <Th>Unit</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {Object.entries(recipe.totalNutrients).map(
                          ([key, { label, quantity, unit }]) => (
                            <Tr key={key}>
                              <Td>{label}</Td>
                              <Td isNumeric>{quantity.toFixed(2)}</Td>
                              <Td>{unit}</Td>
                            </Tr>
                          )
                        )}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Center>
  );
};
