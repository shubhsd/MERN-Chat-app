import React from 'react'
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';

const Homepage = () => {
    return (
        <Container maxW='x1' centerContent>
            {/* Box works similar to div */}
            <Box
                d="flex"
                justifyContent="center"
                p={2}
                bg={'white'}
                w="50%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
            >
                <Text fontSize={"4xl"} fontFamily="Work sans" color={'black'}>Converse</Text>
            </Box>
            <Box
                bg={"white"}
                w="50%"
                p={4}
                borderRadius="lg"
                borderWidth={"1px"}
                color={"black"}
            >
                <Tabs variant='soft-rounded'>
                    <TabList mb={"1em"}>
                        <Tab width={"50%"}>Login</Tab>
                        <Tab width={"50%"}>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            {/* <Login /> */}
                        </TabPanel>
                        <TabPanel>
                            {/* <SignUp /> */}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default Homepage