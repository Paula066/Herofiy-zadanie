import { FC } from "react";
import CloseButtonWrapper from './styled'

interface CloseButtonProps {
    onClick?: () => void
}

const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {

    return (
        <CloseButtonWrapper onClick={onClick}>
            <div className="box">
                <div />
            </div>
        </CloseButtonWrapper>
    )
}

export default CloseButton;
