import React from 'react';
import {Box, Image, NumberInput, Space, Stack, Text} from "@mantine/core";
import {useForm} from "@mantine/form";


export const AtwoodMachineFile = () => {
    const AtwoodMachine = useForm()
    console.log(AtwoodMachine.values)

    return (
        <>
            <Space h="xl"/>

            <div style={{width: 240, marginLeft: 'auto', marginRight: 'auto'}}>
                <Image
                    radius="md"
                    src="https://cdn1.byjus.com/wp-content/uploads/2022/06/atwood-machine.png"
                    alt="Random unsplash image"
                />
            </div>

            <Text
                ta="center"
            >a = (m1 - m2) * g/(m1 + m2)</Text>

            <AtwoodMachineFunc
                m1={AtwoodMachine.values.m1}
                m2={AtwoodMachine.values.m2}
                g={9.81}
            />

            <Stack

                justify="flex-start"
                spacing="xs"

            >
                <NumberInput
                    label="Mass 1"
                    rightSection={'[kg]'}
                    rightSectionWidth={80}
                    {...AtwoodMachine.getInputProps('m1')}
                    value={AtwoodMachine.values.m1}
                />
                <NumberInput
                    label="Mass 2"
                    rightSection={'[kg]'}
                    rightSectionWidth={80}
                    {...AtwoodMachine.getInputProps('m2')}
                    value={AtwoodMachine.values.m2}
                />
            </Stack>
        </>
    )
}


interface AtwoodMachineProps {
    m1: number
    m2: number
    g: 9.81
}
function AtwoodMachineFunc(props: AtwoodMachineProps) {
    const {
        m1, m2, g
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
            >{"Acceleration = "}{(m2 - m1) * g / (m1 + m2)}{" [m/s^2]"}
            </Text>
        </Box>

    )

}