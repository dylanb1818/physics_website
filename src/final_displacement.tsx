import React from 'react';
import {Box, NumberInput, Space, Stack, Text} from "@mantine/core";
import {useForm} from "@mantine/form";

export const FinalDisplacementFile = () => {
    const displacementFinal = useForm()
    console.log(displacementFinal.values)

    return (
        <>
            <Space h="xl" />
            <FinalDisplacement
                v_0={displacementFinal.values.initialVelocity}
                a={displacementFinal.values.acceleration}
                t={displacementFinal.values.time}
                x_0={displacementFinal.values.initialDisplacement}
            />

            <Stack

                justify="flex-start"
                spacing="xs"

            >
                <NumberInput
                    label="Initial Velocity"
                    rightSection={'[m/s]'}
                    rightSectionWidth={80}
                    {...displacementFinal.getInputProps('initialVelocity')}
                    value={displacementFinal.values.initialVelocity}
                />
                <NumberInput
                    label="Acceleration"
                    rightSection={'[m/s^2]'}
                    rightSectionWidth={80}
                    {...displacementFinal.getInputProps('acceleration')}
                />
                <NumberInput
                    label="Time"
                    rightSection={'[s]'}
                    rightSectionWidth={80}
                    {...displacementFinal.getInputProps('time')}
                />
                <NumberInput
                    label="Initial Displacement"
                    rightSection={'[m]'}
                    rightSectionWidth={80}
                    {...displacementFinal.getInputProps('initialDisplacement')}
                />

            </Stack>
        </>
    )
}


interface FinalDisplacementProps {
    v_0: number
    a: number
    t: number
    x_0: number
}

function FinalDisplacement(props: FinalDisplacementProps) {
    const {
        v_0, a, t, x_0
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
            >{"Final Displacement = "}{x_0 + v_0 * t + 0.5 * a * t * t}{" [m]"}
            </Text>
        </Box>

    )
}