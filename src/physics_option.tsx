import React from 'react';
import {Box, Image, NumberInput, Space, Stack, Text} from "@mantine/core";
import {useForm} from "@mantine/form";
import { SimpleGrid, Button } from '@mantine/core';



export const PhysicsOptionFile = () => {
    return (
        <>
            <Space h="xl"/>

        <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
            <Button
                component="a"
                href="https://apstudents.collegeboard.org/courses/ap-physics-c-mechanics"
                target="_blank"
            >
                Mechanics C
            </Button>

            <Button
                component="a"
                href="https://apstudents.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism"
                target="_blank"
            >
                E&M
            </Button>
        </SimpleGrid>

        </>
    )
}