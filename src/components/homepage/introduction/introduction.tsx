/* <---React---> */
import React, { FC } from 'react';

/* <---Global elements---> */
import { CustomSection } from '../../../shared/styled-elements/global-styled-elements';

import Lottie from 'react-lottie';

const Introduction: FC = () => {
    return (
        <CustomSection bgImg={'./assets/img-backgrounds/1b.jpg'}>
            {/* <Lottie
                options={{
                    loop: true,
                    animationData: require("../../../shared/json-animations/data.json")
                }}
                height={500}
                width={500}
            >
                
            </Lottie> */}
        </CustomSection>
    );
};

export default Introduction;