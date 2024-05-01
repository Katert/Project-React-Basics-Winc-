import { InputGroup, InputLeftElement, Input, Icon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const SearchField = ({ searchTerm, setSearchTerm }) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Icon as={SearchIcon} color="gray.300" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search by recipe name or health labels"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        backgroundColor={"white"}
      />
    </InputGroup>
  );
};
