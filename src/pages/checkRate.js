import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  HStack,
  ScrollView
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const PRICES = {
    Paper: [
        {
            name: 'Paper', price:2,
            description:
              'Paper is manufactured in thin sheets from the pulp of wood or other fibrous substances. Paper scrap includes newspaper, books cartons, magazines, Beverage carton etc.',
          },
      { name: 'Newspaper', price: 15 },
      { name: 'Books', price: 12 },
      { name: 'Carton', price: 11 },
      { name: 'Magazines', price: 7 },
      { name: 'White Paper', price: 7 },
      { name: 'Grey Board', price: 2 },
      { name: 'Record Paper', price: 7.5 },
      { name: 'Plain Paper', price: 10 },
    ],
    Plastic: [
        {
            name: 'Plastic',
            description:
              'Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. HDPE, LDPE, MLP, PVC, PP, PET etc. are types of plastics used for different purposes.',
          },
      { name: 'Soft Plastics', price: 5 },
      { name: 'Hard Plastics', price: 6 },
      { name: 'Mix Plastics', price: 7 },
      { name: 'Milk Covers', price: 4 },
      { name: 'Water Covers', price: 2 },
      { name: 'Polythene', price: 5 },
      { name: 'HPP', price: 2 },
      { name: 'Plastic Jar', price: 10 },
      { name: 'Fibre', price: 4.5 },
      { name: 'Plastic Jar', price: 3 },
      { name: 'Polythene', price: 8 },
      { name: 'Plastic Bori', price: 3 },
    ],
    Metal: [
     
        
      { name: 'Tin', price: 12 },
      { name: 'Steel', price: 22 },
      { name: 'Brass', price: 250 },
      { name: 'Copper', price: 240 },
      { name: 'Aluminium', price: 70 },
      { name: 'Oil Tin 15ltr', price: 10 },
      { name: 'Casting Aluminium', price: 35 },
      { name: 'Beverage Cans', price: 35 },
    ],
    Ewaste: [
      {
        name: 'E-waste',
        description:
          'E-waste is electronic products that are unwanted, not working, and nearing or at the end of their “useful life.” It includes TV, refrigerator, mobile phones, printers etc.',
        price: 50,
      },
      { name: 'Fridge', price: 500 },
      { name: 'Computer/Laptops', price: 100 },
      { name: 'Smartphones', price: 70 },
    ],
    Other: [
      {
        name: 'Other',
        description:
          'It includes, beer bottles, women’s hair, mix-waste, tyre, mattresses etc.',
        price: 3,
      },
      { name: 'Beer Bottles', price: 1 },
      { name: 'Mix Waste', price: 3 },
      { name: 'Battery', price: 70 },
      { name: 'Tyre', price: 5 },
    ],
  };


const CheckRateListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPrices = Object.entries(PRICES).map(([category, prices]) => {
    return {
      category,
      prices: prices.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    };
  });

  return (
    <><Navbar /><Box p={4}>
          <Heading as="h1" mb={4}>
              Check Rate List
          </Heading>
          <InputGroup mb={4} bg="#9ECCA3" borderRadius={15} width={1000} ml={200}>
              <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
              <Input
                  placeholder="Search for items..."
                  value={searchQuery}
                  onChange={handleSearchChange} />
          </InputGroup>
          <Stack spacing={4}>
              {filteredPrices.map(({ category, prices }) => (
                  <Box key={category}>
                      <Heading as="h2" size="lg" mb={2} mr={1200}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                      </Heading>
                      <Box overflowY="scroll" height="200px">
    <HStack spacing={6}>
        {prices.map((p) => (
            <Box key={p.name} bg={'lightgray'} p={2} borderRadius={15}>
                <Box>{p.name}</Box>
                <Box>{`Rs${p.price}/kg`}</Box>
            </Box>
        ))}
    </HStack>
</Box>
                  </Box>
              ))}
          </Stack>
      </Box>
      <Footer/>
      </>

);
};

export default CheckRateListPage;