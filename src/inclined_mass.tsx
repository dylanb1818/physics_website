import React from 'react';
import {Box, Image, NumberInput, Space, Stack, Text} from "@mantine/core";
import {useForm} from "@mantine/form";

export const InclinedMassFile = () => {
    const inclinedMass = useForm()
    console.log(inclinedMass.values)

    return (
        <>
            <Space h="xl"/>

            <div style={{width: 240, marginLeft: 'auto', marginRight: 'auto'}}>
                <Image
                    radius="md"
                    src="http://spiff.rit.edu/classes/phys311.w2005/workshops.old/old/w5a/box_on_ramp.gif"
                    alt="Random unsplash image"
                />
            </div>


            <Text
                ta="center"
            >ma = mgsin(theta) - mgcos(theta)</Text>

            <NetForceInclinedMass
                m={inclinedMass.values.mass}
                theta={inclinedMass.values.theta}
                mu_k={inclinedMass.values.mu_k}
                g={9.81}
            />

            <Stack

                justify="flex-start"
                spacing="xs"

            >
                <NumberInput
                    label="Mass"
                    rightSection={'[kg]'}
                    rightSectionWidth={80}
                    {...inclinedMass.getInputProps('mass')}
                    value={inclinedMass.values.mass}
                />
                <NumberInput
                    label="Theta"
                    rightSection={'[degrees]'}
                    rightSectionWidth={80}
                    {...inclinedMass.getInputProps('theta')}
                />
                <NumberInput
                    label="Kinetic Friction Coefficient"
                    rightSection={'[]'}
                    rightSectionWidth={80}
                    {...inclinedMass.getInputProps('mu_k')}
                />

            </Stack>

        </>
    )
}



interface NetForceInclinedMassProps {
    theta: number
    m: number
    g: 9.81
    mu_k: number
}

function NetForceInclinedMass(props: NetForceInclinedMassProps) {
    const {
        theta, m, g, mu_k
    } = props

    if (m*g*Math.sin(theta*Math.PI/180) - mu_k*m*g*Math.cos(theta*Math.PI/180) < 0) {
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
                >{"Net Force = "}{0}{" [kg*m/s^2]"}
                </Text>
            </Box>)}

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
            >{"Net Force = "}{m*g*Math.sin(theta*Math.PI/180) - mu_k*m*g*Math.cos(theta*Math.PI/180)}{" [kg*m/s^2]"}
            </Text>
        </Box>

    )

}