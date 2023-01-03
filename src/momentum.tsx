import React from 'react';
import {Box, NumberInput, Space, Stack, Text} from "@mantine/core";
import {useForm} from "@mantine/form";

export const MomentumFile = () => {
    const Momentum = useForm();
    console.log(Momentum.values);

    return (
        <>
            <Space h="xl" />
            <MomentumFunc
                m={Momentum.values.mass}
                v={Momentum.values.velocity}
            />
            <Stack justify="flex-start" spacing="xs">
                <NumberInput
                    label="Velocity"
                    rightSection={'[m/s]'}
                    rightSectionWidth={80}
                    {...Momentum.getInputProps('velocity')}
                />
                <NumberInput
                    label="Mass"
                    rightSection={'[kg]'}
                    rightSectionWidth={80}
                    {...Momentum.getInputProps('mass')}
                />
            </Stack>
        </>
    );
};

interface MomentumProps {
    m: number
    v: number
}

function MomentumFunc (props: MomentumProps) {
    const {
        m, v
    } = props

    return (
        <Box
            sx={() => ({
                display: "flex"
            })}
        >
            <Text
                px="xs"
                fw={700}
                c="blue"
                sx={(theme) => ({
                    border: `1px solid ${theme.colors.blue[5]}`
                })}
            >{"Momentum = "}{m * v}{" [m*kg/s]"}
            </Text>
        </Box>

    )
}

