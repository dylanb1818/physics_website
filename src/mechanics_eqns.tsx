import React from 'react';
import {Box, Button, NumberInput, Space, Stack, Text} from "@mantine/core";
import {useForm} from "@mantine/form";
import {Link} from "react-router-dom";

export const MechanicsFile = () => {
    const velocityFinal = useForm()
    console.log(velocityFinal.values)

    return (
        <>
            <Button
                component={Link}
                to={'../'}
            >
                Go Back
            </Button>



            <Space h="xl" />
            <FinalVelocity
                v_0={velocityFinal.values.initialVelocity}
                a={velocityFinal.values.acceleration}
                t={velocityFinal.values.time}
            />

            <Stack
                justify="flex-start"
                spacing="xs"

            >
                <NumberInput
                    label="Initial Velocity"
                    rightSection={'[m/s]'}
                    rightSectionWidth={80}
                    {...velocityFinal.getInputProps('initialVelocity')}
                />
                <NumberInput
                    label="Acceleration"
                    rightSection={'[m/s^2]'}
                    rightSectionWidth={80}
                    {...velocityFinal.getInputProps('acceleration')}
                />
                <NumberInput
                    label="Time"
                    rightSection={'[s]'}
                    rightSectionWidth={80}
                    {...velocityFinal.getInputProps('time')}
                />
            </Stack>

        </>
    )
}

interface FinalVelocityProps {
    v_0: number
    a: number
    t: number
}

function FinalVelocity(props: FinalVelocityProps) {
    const {
        v_0, a, t
    } = props

    return (
        <>

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
            >{"Final Velocity = "}{v_0 + a * t}{" [m/s]"}
            </Text>
        </Box>

        </>

    )
}