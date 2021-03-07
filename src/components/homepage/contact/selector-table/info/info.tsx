/* <---React---> */
import React, { FC } from "react";

/* <---Styled components---> */
import * as S from './info-elements';

const Info: FC = (): JSX.Element => {
    return (
			<S.List>
				<S.Item>
					<S.infoText>Hola</S.infoText>
				</S.Item>
			</S.List>
    );  
};

export default Info;