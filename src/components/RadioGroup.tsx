import { Box } from '@chakra-ui/react'
import { useState } from 'react'

interface RadioGroupProps {
    radioButtonItems: { id: string; value: string }[]
    onChange: (id: string) => void
}

export function RadioGroup({ radioButtonItems, onChange }: RadioGroupProps) {
    const [CurrentValue, setCurrentValue] = useState(radioButtonItems[0].id)

    function onClickRadioButton(id: string) {
        onChange(id)
        setCurrentValue(id)
    }

    return (
        <Box
            display="inline-flex"
            width="100%"
            height="fit-content"
            overflow="hidden"
            borderRadius="4px"
            cursor="pointer"
            id="radio-button-container"
        >
            {radioButtonItems.map((radioButton, index) => {
                return (
                    <Box
                        width="100%"
                        key={index}
                        className={'btn' + ' ' + (CurrentValue === radioButton.id ? 'active' : '')}
                        onClick={() => onClickRadioButton(radioButton.id)}
                        whiteSpace="nowrap"
                        tabIndex={0}
                    >
                        {radioButton.value}
                    </Box>
                )
            })}
        </Box>
    )
}
