import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  VStack,
  HStack,
  Heading,
  Badge,
  Tag,
  Text,
} from "@chakra-ui/react";

export const RecipeCard = ({
  title,
  imgUrl,
  healthLabels,
  dietLabels,
  cautions,
  mealType,
  dishType,
  ...props
}) => {
  return (
    <Card
      borderRadius="xl"
      cursor={"pointer"}
      backgroundColor={"white"}
      height={"100%"}
      {...props}
    >
      <CardHeader>
        <Tag paddingY="2" marginBottom="4">
          <Text fontSize="x-small">{mealType}</Text>
        </Tag>
        <Heading size="lg">{title}</Heading>
      </CardHeader>
      <Image
        src={imgUrl}
        alt={title}
        padding="20px"
        objectFit="cover"
        height="250px"
      />
      <CardBody>
        {healthLabels.map((label) => {
          if (label === "Vegan" || label === "Vegetarian") {
            return (
              <VStack key={label} marginBottom={4}>
                <HStack>
                  <Badge colorScheme="green" fontSize="x-small">
                    {label}
                  </Badge>
                </HStack>
              </VStack>
            );
          }
          return null;
        })}
        {dietLabels.length > 0 && (
          <VStack marginBottom={4}>
            <Heading fontSize={"sm"}>Diet:</Heading>
            <HStack>
              {dietLabels.map((label) => {
                return (
                  <Badge key={label} colorScheme="purple" fontSize="x-small">
                    {label}
                  </Badge>
                );
              })}
            </HStack>
          </VStack>
        )}
        {dishType.length > 0 && (
          <VStack>
            <Heading fontSize={"sm"}>Dish type:</Heading>
            <HStack>
              {dishType.map((type) => {
                return (
                  <Badge key={type} colorScheme="blue" fontSize="x-small">
                    {type}
                  </Badge>
                );
              })}
            </HStack>
          </VStack>
        )}
      </CardBody>
      <CardFooter justifyContent={"center"}>
        {cautions.length > 0 ? (
          <VStack>
            <Heading fontSize={"sm"}>Cautions:</Heading>
            <HStack>
              {cautions.map((caution) => {
                return (
                  <Badge key={caution} colorScheme="red" fontSize="x-small">
                    {caution}
                  </Badge>
                );
              })}
            </HStack>
          </VStack>
        ) : (
          <Tag fontSize={"sm"}>No cautions</Tag>
        )}
      </CardFooter>
    </Card>
  );
};
