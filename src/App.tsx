import React, { useState } from 'react'
import {Button, NumberInput, Stack, Text, Space, Image, Box} from '@mantine/core'
import {Abacus, Tex} from 'tabler-icons-react';
import { Input } from '@mantine/core';
import {useForm} from "@mantine/form";

function App() {
  const [value, setValue] = useState('0')
  const velocityFinal = useForm()
  const displacementFinal = useForm()
  const inclinedMass = useForm()
  const AtwoodMachine = useForm()

    console.log(velocityFinal.values)
    console.log(displacementFinal.values)
    console.log(inclinedMass.values)
    console.log(AtwoodMachine.values)

    React.useEffect(() => {
        displacementFinal.setFieldValue('initialVelocity', velocityFinal.values.initialVelocity)
    }, [velocityFinal.values.initialVelocity])


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
    <div><Button component="a" href="https://secure-media.collegeboard.org/digitalServices/pdf/ap/physics-c-tables-and-equations-list.pdf" target="_blank" variant="gradient"  gradient={{ from: 'teal', to: 'blue', deg: 100}}>All you should need ;)</Button></div>
        <>
            <Space h="xl" />
        </>
    <div><Button component="a" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 275 }}>Answer Key to every physics homework assignment ever</Button></div>
    </center>
        <>
            <Space h="xl" />
        </>

    {/*    <Square*/}
    {/*    value={parseInt(value)}*/}
    {/*/>*/}
    {/*    <NumberInput*/}
    {/*        onChange={(e) => setValue(e)}*/}
    {/*        placeholder="Number to square"*/}
    {/*    />*/}

    {/*    <>*/}
    {/*        <Space h="xl" />*/}
    {/*    </>*/}


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

        <>
            <Space h="xl" />
        </>

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
                value={velocityFinal.values.initialVelocity}
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


        <>
            <Space h="xl" />
        </>

        <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
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

        <>
            <Space h="xl" />
        </>

        <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
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


        {/*<ul>*/}
        {/*    {[1,2,3,4,5,6,7,8,9,10].map(c => <li key={c}>{c}</li>)}*/}
        {/*</ul>*/}
    </div>

  )
}

interface SquareProps {
    value: number
}
function Square(props: SquareProps) {
    const {
        value
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
        >{value * value}
        </Text>
        </Box>
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

export default App
