import { forwardRef } from 'react'

export const ButtonDate = forwardRef(({ value, onClick }: any, ref: any) => (
    <button className="btn dateButton clickable-button" onClick={onClick} ref={ref}>
        {value}
    </button>
))
