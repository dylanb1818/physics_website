import React from 'react';
import {Box, Button, Image, NumberInput, Space, Stack, Text} from "@mantine/core";
import {useForm} from "@mantine/form";

export const TopOfPageFile = () => {
    return (
        <div>
            <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
                <Image
                    radius="md"
                    src="/physics-concept.webp"
                    alt="Random unsplash image"
                />
            </div>

            <>
                <Space h="xl" />
            </>

            <center>
                <div>
                    <Button
                        component="a"
                        href="https://secure-media.collegeboard.org/digitalServices/pdf/ap/physics-c-tables-and-equations-list.pdf"
                        target="_blank"
                        variant="gradient"
                        gradient={{ from: 'teal', to: 'blue', deg: 100 }}
                    >
                        All you should need ;)
                    </Button>
                </div>
                <>
                    <Space h="xl" />
                </>
                <div>
                    <Button
                        component="a"
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        variant="gradient"
                        gradient={{ from: 'teal', to: 'lime', deg: 275 }}
                    >
                        Answer Key to every physics homework assignment ever
                    </Button>
                </div>
            </center>
        </div>
    );
};