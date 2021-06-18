import React from 'react';
import ServiceContext from '../service-context';

const WithService = () => (Wrapped) => {
    return (props) => {
        return (
            <ServiceContext.Consumer>
                {
                    (Service) => {
                        return <Wrapped {...props} Service={Service}/>;
                    }
                }
            </ServiceContext.Consumer>
        );
    };
};

export default WithService;