import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

export function ToolTipInfo() {
    const renderTooltip = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            Algum texto aqui
        </Tooltip>
    )

    return (
        <OverlayTrigger placement="right" overlay={renderTooltip}>
            <span className="tooltip-icon">
                <AiOutlineQuestionCircle size={16} />
            </span>
        </OverlayTrigger>
    )
}
