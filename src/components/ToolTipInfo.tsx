import { Tooltip } from '@chakra-ui/react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

interface ToolTipInfoProps {
    tooltipText: string
}

export function ToolTipInfo({ tooltipText }: ToolTipInfoProps) {
    return (
        <span>
            <Tooltip label={tooltipText} hasArrow arrowSize={6} shouldWrapChildren textAlign="center">
                <AiOutlineQuestionCircle size={14} color="#656c82" />
            </Tooltip>
        </span>
    )
}
