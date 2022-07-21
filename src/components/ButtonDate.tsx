import { Button } from '@chakra-ui/react'
import { forwardRef } from 'react'

export const ButtonDate = forwardRef(({ value, onClick }: any, ref: any) => (
    <Button height="auto" className="btn btn-date clickable-button btn-shadow" onClick={onClick} ref={ref}>
        {value}
    </Button>
))
